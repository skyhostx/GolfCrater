import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS } from '../src/data/products';
import { BLOG_POSTS } from '../src/data/blogPostsData';
import { categoryToSlug } from '../src/utils/navigation';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

// Read base HTML from dist or docs or root index.html
let sourceHtmlPath = path.join(distDir, 'index.html');
if (!fs.existsSync(sourceHtmlPath)) {
  sourceHtmlPath = path.join(docsDir, 'index.html');
}
if (!fs.existsSync(sourceHtmlPath)) {
  sourceHtmlPath = path.join(rootDir, 'index.html');
}

const baseHtml = fs.readFileSync(sourceHtmlPath, 'utf8');
const BASE_URL = 'https://golfcrater.com';

// Target directories to populate
const targetDirs = [docsDir];
if (fs.existsSync(distDir)) {
  targetDirs.push(distDir);
}

function ensureDirAndWriteFile(targetDir: string, fileName: string, content: string) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, fileName), content, 'utf8');
}

interface PageMetaOptions {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  breadcrumbs?: { name: string; url: string }[];
  schema?: Record<string, any> | Record<string, any>[] | null;
  bodyH1?: string;
  bodyContent?: string;
  robots?: string;
}

// Helpers for HTML metadata substitution
function injectMetadata(html: string, options: PageMetaOptions): string {
  const {
    title,
    description,
    canonicalUrl,
    ogType = 'website',
    ogImage = `${BASE_URL}/icon-512.png`,
    breadcrumbs = [],
    schema = null,
    bodyH1 = '',
    bodyContent = '',
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  } = options;

  let modified = html;

  // Replace Title
  if (title) {
    modified = modified.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
  }

  // Replace Description
  if (description) {
    const escapedDesc = description.replace(/"/g, '&quot;');
    modified = modified.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
      `<meta name="description" content="${escapedDesc}" />`
    );
  }

  // Replace Canonical
  if (canonicalUrl) {
    modified = modified.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  }

  // Replace Robots if custom
  if (robots) {
    modified = modified.replace(
      /<meta\s+name="robots"\s+content=".*?"\s*\/?>/is,
      `<meta name="robots" content="${robots}" />`
    );
  }

  // Replace Open Graph Tags
  if (title) {
    const escapedTitle = title.replace(/"/g, '&quot;');
    modified = modified.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:title" content="${escapedTitle}" />`
    );
  }
  if (description) {
    const escapedDesc = description.replace(/"/g, '&quot;');
    modified = modified.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:description" content="${escapedDesc}" />`
    );
  }
  if (canonicalUrl) {
    modified = modified.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
  }
  if (ogType) {
    modified = modified.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:type" content="${ogType}" />`
    );
  }
  if (ogImage) {
    if (modified.includes('property="og:image"')) {
      modified = modified.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/is,
        `<meta property="og:image" content="${ogImage}" />`
      );
    } else {
      modified = modified.replace(
        '</head>',
        `  <meta property="og:image" content="${ogImage}" />\n  </head>`
      );
    }
  }

  // Replace Twitter Tags
  if (title) {
    const escapedTitle = title.replace(/"/g, '&quot;');
    modified = modified.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:title" content="${escapedTitle}" />`
    );
  }
  if (description) {
    const escapedDesc = description.replace(/"/g, '&quot;');
    modified = modified.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:description" content="${escapedDesc}" />`
    );
  }

  // Construct JSON-LD
  const jsonLdItems: any[] = [];
  if (breadcrumbs.length > 0) {
    jsonLdItems.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((bc, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: bc.name,
        item: bc.url.startsWith('http') ? bc.url : `${BASE_URL}${bc.url.startsWith('/') ? '' : '/'}${bc.url}`,
      })),
    });
  }

  if (schema) {
    if (Array.isArray(schema)) {
      jsonLdItems.push(...schema);
    } else {
      jsonLdItems.push(schema);
    }
  }

  if (jsonLdItems.length > 0) {
    const extraSchemaTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(jsonLdItems, null, 2)}\n    </script>`;
    modified = modified.replace('</head>', `${extraSchemaTag}\n  </head>`);
  }

  // Replace #root with accessible fallback markup for crawlers and initial render
  if (bodyH1) {
    const breadcrumbHtml = breadcrumbs.length > 0
      ? `<nav aria-label="Breadcrumb" class="mb-4 text-xs text-slate-500">
          <ol class="flex items-center flex-wrap gap-1.5">
            ${breadcrumbs.map((bc, i) => `
              <li class="flex items-center">
                ${i > 0 ? '<span class="mx-1.5 text-slate-400">/</span>' : ''}
                ${i === breadcrumbs.length - 1
                  ? `<span class="text-slate-700 font-semibold truncate max-w-xs">${bc.name}</span>`
                  : `<a href="${bc.url}" class="hover:text-emerald-600 underline">${bc.name}</a>`
                }
              </li>
            `).join('')}
          </ol>
        </nav>`
      : '';

    const prerenderMarkup = `<div id="root">
      <header class="bg-slate-900 text-white border-b border-slate-800">
        <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" class="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-emerald-400">
            <span class="w-8 h-8 rounded-lg bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">✓</span>
            <span>Golf<span class="text-emerald-400">Crater</span></span>
          </a>
          <nav aria-label="Main Navigation" class="hidden sm:flex items-center gap-5 text-sm text-slate-300">
            <a href="/shop" class="hover:text-emerald-400">Shop</a>
            <a href="/services" class="hover:text-emerald-400">Services</a>
            <a href="/pricing" class="hover:text-emerald-400">Pricing</a>
            <a href="/blog" class="hover:text-emerald-400">Blog</a>
            <a href="/faq" class="hover:text-emerald-400">FAQ</a>
            <a href="/track-order" class="hover:text-emerald-400">Track Order</a>
            <a href="/contact" class="hover:text-emerald-400">Contact</a>
          </nav>
        </div>
      </header>
      <main class="max-w-5xl mx-auto px-4 py-8 text-slate-800">
        ${breadcrumbHtml}
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">${bodyH1}</h1>
        ${bodyContent}
      </main>
      <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 mt-16 py-10 text-xs">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div class="font-bold text-white mb-2 text-sm">GolfCrater</div>
            <p class="text-slate-400 text-xs mb-3">Verified digital marketplace & enterprise business solutions.</p>
            <div class="text-slate-500">© 2026 GolfCrater. All rights reserved.</div>
          </div>
          <div>
            <div class="font-bold text-white mb-2 text-sm">Marketplace</div>
            <ul class="space-y-1.5">
              <li><a href="/shop" class="hover:text-emerald-400">All Products</a></li>
              <li><a href="/category/reviews" class="hover:text-emerald-400">Reviews Service</a></li>
              <li><a href="/category/bank-account" class="hover:text-emerald-400">Bank Accounts</a></li>
              <li><a href="/category/crypto-account" class="hover:text-emerald-400">Crypto Accounts</a></li>
              <li><a href="/category/account" class="hover:text-emerald-400">Developer & Ad Accounts</a></li>
            </ul>
          </div>
          <div>
            <div class="font-bold text-white mb-2 text-sm">Resources</div>
            <ul class="space-y-1.5">
              <li><a href="/blog" class="hover:text-emerald-400">Industry Guides & Blog</a></li>
              <li><a href="/services" class="hover:text-emerald-400">Our Services</a></li>
              <li><a href="/pricing" class="hover:text-emerald-400">Transparent Pricing</a></li>
              <li><a href="/faq" class="hover:text-emerald-400">FAQ & Help</a></li>
            </ul>
          </div>
          <div>
            <div class="font-bold text-white mb-2 text-sm">Customer Care</div>
            <ul class="space-y-1.5">
              <li><a href="/track-order" class="hover:text-emerald-400">Track Order</a></li>
              <li><a href="/contact" class="hover:text-emerald-400">24/7 Live Support</a></li>
              <li><a href="/about" class="hover:text-emerald-400">About GolfCrater</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>`;
    modified = modified.replace(/<div id="root">[\s\S]*?<\/body>/i, `${prerenderMarkup}\n  </body>`);
  }

  return modified;
}

// ----------------------------------------------------
// Page Definitions
// ----------------------------------------------------

const topPages = [
  {
    path: 'about',
    title: 'About GolfCrater | Trusted Digital Marketplace & Verification Standards',
    description: "Learn about GolfCrater's mission, rigorous verification protocols, buyer protections, 60-day replacement warranty, and enterprise digital solutions.",
    canonicalUrl: `${BASE_URL}/about`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
    ],
    bodyH1: 'About GolfCrater — Security, Verification & Trusted Digital Marketplace',
    bodyContent: `
      <p class="text-slate-600 mb-4 text-base leading-relaxed">The premier digital marketplace for verified digital accounts, 5-star reputation management, aged business infrastructure, and secure high-deliverability email systems.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 mb-1">100% KYC & Pre-Vetted</h2>
          <p class="text-xs text-slate-600">Every asset undergoes multi-tier ID and security verification before listing.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 mb-1">60-Day Replacement Warranty</h2>
          <p class="text-xs text-slate-600">Complete buyer protection with immediate credential dispatch and replacement warranty.</p>
        </div>
      </div>
      <h2 class="text-lg font-bold text-slate-900 mb-3">Enterprise Buyer Guarantees</h2>
      <ul class="list-disc pl-5 text-sm text-slate-600 space-y-1.5 mb-6">
        <li>Dedicated primary email and 2FA recovery backup seed codes.</li>
        <li>Clean IP warmup history with zero automated detection flags.</li>
        <li>Support for BSC, TRX, ETH, SOL, BTC, Skrill, and Bank SWIFT/ACH.</li>
        <li>24/7 dedicated support desk with human compliance specialists.</li>
      </ul>
      <div class="flex gap-4">
        <a href="/services" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700">Explore Our Services →</a>
        <a href="/contact" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200">Contact Support</a>
      </div>
    `,
  },
  {
    path: 'services',
    title: 'Digital Services & Verified Business Accounts | GolfCrater',
    description: "Explore GolfCrater's comprehensive suite of verified digital services: Reviews management, verified bank accounts, crypto exchange solutions, SMM, and SMTP relays.",
    canonicalUrl: `${BASE_URL}/services`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
    bodyH1: 'Our Digital Services & Verified Solutions',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Every service is engineered for enterprise reliability, high retention, and immediate operational deployment.</p>
      <nav aria-label="Services List">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="font-bold text-slate-900 mb-1"><a href="/category/reviews" class="hover:text-emerald-600">Reviews Management</a></h2>
            <p class="text-xs text-slate-600 mb-3">Google, Trustpilot, Yelp, BBB, and G2 verified feedback.</p>
            <a href="/category/reviews" class="text-xs text-emerald-600 font-bold">View Packages →</a>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="font-bold text-slate-900 mb-1"><a href="/category/bank-account" class="hover:text-emerald-600">Bank Accounts</a></h2>
            <p class="text-xs text-slate-600 mb-3">Stripe, PayPal, Cash App, Wise, and Payoneer business setups.</p>
            <a href="/category/bank-account" class="text-xs text-emerald-600 font-bold">View Packages →</a>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="font-bold text-slate-900 mb-1"><a href="/category/crypto-account" class="hover:text-emerald-600">Crypto Exchanges</a></h2>
            <p class="text-xs text-slate-600 mb-3">Binance, Coinbase, Kraken, MoonPay, and Bitget KYC accounts.</p>
            <a href="/category/crypto-account" class="text-xs text-emerald-600 font-bold">View Packages →</a>
          </div>
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="font-bold text-slate-900 mb-1"><a href="/category/account" class="hover:text-emerald-600">Developer & Ad Accounts</a></h2>
            <p class="text-xs text-slate-600 mb-3">Apple Developer, Google Play, Amazon, and Facebook Ads.</p>
            <a href="/category/account" class="text-xs text-emerald-600 font-bold">View Packages →</a>
          </div>
        </div>
      </nav>
      <div class="flex gap-4">
        <a href="/pricing" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700">View Transparent Pricing Plans →</a>
        <a href="/shop" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200">Browse Full Catalog</a>
      </div>
    `,
  },
  {
    path: 'pricing',
    title: 'Transparent Pricing & Service Packages | GolfCrater',
    description: 'Compare transparent pricing plans across GolfCrater services. Tiered packages for Google Reviews, Trustpilot, verified bank accounts, crypto exchanges, and SMTP servers.',
    canonicalUrl: `${BASE_URL}/pricing`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Pricing', url: '/pricing' },
    ],
    bodyH1: 'Transparent Pricing & Tiered Packages',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">No hidden fees, no recurring surprises. Instant delivery, full verification documentation, and 60-day replacement guarantees included on every tier.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="p-6 border border-slate-200 rounded-2xl bg-white shadow-xs">
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Starter</span>
          <h2 class="text-xl font-black text-slate-900 mt-2 mb-1">Reputation Tiers</h2>
          <div class="text-2xl font-black text-slate-900 mb-3">From $15</div>
          <ul class="text-xs text-slate-600 space-y-2 mb-6">
            <li>✓ Google, Trustpilot & Yelp reviews</li>
            <li>✓ Drip-fed over natural intervals</li>
            <li>✓ 60-day replacement warranty</li>
          </ul>
          <a href="/category/reviews" class="block text-center py-2 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-700">Explore Reviews</a>
        </div>
        <div class="p-6 border-2 border-emerald-500 rounded-2xl bg-white shadow-md relative">
          <span class="text-xs font-bold text-white bg-emerald-600 px-2.5 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
          <h2 class="text-xl font-black text-slate-900 mt-2 mb-1">Financial & Crypto</h2>
          <div class="text-2xl font-black text-slate-900 mb-3">From $110</div>
          <ul class="text-xs text-slate-600 space-y-2 mb-6">
            <li>✓ Fully verified Stripe, Wise, Binance, Cash App</li>
            <li>✓ Complete KYC archives & residential proxy IP</li>
            <li>✓ 24/7 Priority Support Dispatch</li>
          </ul>
          <a href="/category/bank-account" class="block text-center py-2 bg-emerald-600 text-white font-bold rounded-lg text-xs hover:bg-emerald-700">Explore Accounts</a>
        </div>
        <div class="p-6 border border-slate-200 rounded-2xl bg-white shadow-xs">
          <span class="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Enterprise</span>
          <h2 class="text-xl font-black text-slate-900 mt-2 mb-1">Developer & Ad Assets</h2>
          <div class="text-2xl font-black text-slate-900 mb-3">From $220</div>
          <ul class="text-xs text-slate-600 space-y-2 mb-6">
            <li>✓ Apple Developer & Google Play Console</li>
            <li>✓ High-limit Facebook & Google Ads agency accounts</li>
            <li>✓ Direct D-U-N-S registration documentation</li>
          </ul>
          <a href="/category/account" class="block text-center py-2 bg-slate-800 text-white font-bold rounded-lg text-xs hover:bg-slate-900">Explore Developer</a>
        </div>
      </div>
      <a href="/shop" class="text-emerald-600 font-bold">← View All 48 Marketplace Products</a>
    `,
  },
  {
    path: 'blog',
    title: 'Knowledge Base, OpSec Guides & Digital Insights | GolfCrater',
    description: 'Master reputation management, anti-detect browser setup, cold email deliverability, and account verification protocols with GolfCrater guides.',
    canonicalUrl: `${BASE_URL}/blog`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
    ],
    bodyH1: 'GolfCrater Knowledge Base & Industry Insights',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Comprehensive, technical guides written by operational security veterans, media buyers, and deliverability engineers.</p>
      <h2 class="text-lg font-bold text-slate-900 mb-4">All Industry Guides & OpSec Blueprints (${BLOG_POSTS.length} Articles)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        ${BLOG_POSTS.map((post) => `
          <article class="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between hover:border-emerald-500 transition-colors">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">${post.category}</span>
              <h3 class="font-bold text-slate-900 text-sm mt-2 mb-1.5 leading-snug">
                <a href="/blog/${post.slug}" class="hover:text-emerald-600">${post.trendingTitle}</a>
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2 mb-3">${post.excerpt}</p>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              <span>${post.readTime}</span>
              <a href="/blog/${post.slug}" class="text-emerald-600 font-bold hover:underline">Read Guide →</a>
            </div>
          </article>
        `).join('')}
      </div>
      <a href="/shop" class="text-emerald-600 font-bold">← Visit Marketplace Store</a>
    `,
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions & Support Helpdesk | GolfCrater',
    description: 'Find answers regarding account credentials, warranty terms, delivery timelines, supported crypto and fiat payment methods on GolfCrater.',
    canonicalUrl: `${BASE_URL}/faq`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'FAQ', url: '/faq' },
    ],
    bodyH1: 'Frequently Asked Questions & Help Center',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Transparent answers to all inquiries regarding order dispatch, account warranty, OpSec practices, and payment solutions.</p>
      <div class="space-y-4 mb-8">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">How fast are account credentials delivered?</h2>
          <p class="text-xs text-slate-600 leading-relaxed">Most accounts are dispatched immediately via automated secure delivery. Verified financial and developer accounts undergo an automated final health check and are delivered within 15–45 minutes.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">What is covered under the 60-Day Replacement Warranty?</h2>
          <p class="text-xs text-slate-600 leading-relaxed">If any account encounters a checkpoint, hold, or verification issue within 60 days following our recommended setup guidelines, our support team provides an instant replacement at no additional cost.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">What payment methods do you accept?</h2>
          <p class="text-xs text-slate-600 leading-relaxed">We support all major cryptocurrencies including USDT (TRC20, BEP20, ERC20), Bitcoin, Ethereum, Solana, and Litecoin, as well as Skrill and Bank SWIFT/ACH wire transfers.</p>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">How do I track my order status?</h2>
          <p class="text-xs text-slate-600 leading-relaxed">You can look up your real-time fulfillment status on our <a href="/track-order" class="text-emerald-600 font-semibold underline">Order Tracking Page</a> using your order ID and email address.</p>
        </div>
      </div>
      <div class="flex gap-4">
        <a href="/contact" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700">Contact 24/7 Live Desk</a>
        <a href="/shop" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200">Browse Shop</a>
      </div>
    `,
  },
  {
    path: 'shop',
    title: 'Shop Digital Services, Verified Accounts & Reviews | GolfCrater',
    description: 'Browse our complete catalog of verified digital products, business accounts, crypto exchanges, reputation reviews, and marketing infrastructure.',
    canonicalUrl: `${BASE_URL}/shop`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Shop', url: '/shop' },
    ],
    bodyH1: 'GolfCrater Digital Marketplace Catalog',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Browse all verified digital products, aged accounts, reputation reviews, and digital marketing assets.</p>
      <h2 class="text-lg font-bold text-slate-900 mb-3">Browse by Category</h2>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <a href="/category/reviews" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Reviews Management →</a>
        <a href="/category/bank-account" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Bank Accounts →</a>
        <a href="/category/crypto-account" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Crypto Accounts →</a>
        <a href="/category/account" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Developer & Ad Accounts →</a>
        <a href="/category/email-service" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Email & SMTP →</a>
        <a href="/category/smm-account" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">SMM Accounts →</a>
        <a href="/category/other" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Identity & VoIP Assets →</a>
        <a href="/category/digital-tools" class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:text-emerald-600 hover:border-emerald-500">Digital Tools →</a>
      </div>
      <h2 class="text-lg font-bold text-slate-900 mb-4">All Marketplace Products (${PRODUCTS.length} Total)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        ${PRODUCTS.map((prod) => {
          const prices = prod.variants.map((v) => v.price);
          const minPrice = Math.min(...prices);
          return `
            <div class="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">${prod.category}</span>
                  <span class="text-xs font-bold text-amber-500">★ ${prod.rating}</span>
                </div>
                <h3 class="font-bold text-slate-900 text-sm mb-1 leading-snug">
                  <a href="/product/${prod.id}" class="hover:text-emerald-600">${prod.name}</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-2 mb-3">${prod.shortDescription}</p>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                <span class="text-xs font-extrabold text-slate-900">From $${minPrice}</span>
                <a href="/product/${prod.id}" class="text-xs font-bold text-emerald-600 hover:underline">View Options →</a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `,
  },
  {
    path: 'contact',
    title: 'Contact Customer Support & 24/7 Live Desk | GolfCrater',
    description: 'Get in touch with GolfCrater customer support for assistance with verified digital accounts, orders, payment verification, and service inquiries.',
    canonicalUrl: `${BASE_URL}/contact`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    bodyH1: 'Contact GolfCrater Customer Support',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Our support specialists and compliance engineers are available 24 hours a day, 7 days a week to assist with order fulfillment, replacement inquiries, and custom package requests.</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">Telegram Priority Desk</h2>
          <p class="text-xs text-slate-600 mb-2">Instant messaging and real-time credential verification assistance.</p>
          <span class="text-xs font-bold text-emerald-600">@golfcratersupport</span>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">Official Support Email</h2>
          <p class="text-xs text-slate-600 mb-2">Ticketed inquiries, enterprise orders, and invoicing requests.</p>
          <span class="text-xs font-bold text-emerald-600">support@golfcrater.com</span>
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h2 class="font-bold text-slate-900 text-sm mb-1">Order Status Lookup</h2>
          <p class="text-xs text-slate-600 mb-2">Check delivery status and retrieve credentials in real time.</p>
          <a href="/track-order" class="text-xs font-bold text-emerald-600 hover:underline">Track Your Order →</a>
        </div>
      </div>
      <a href="/shop" class="text-emerald-600 font-bold">← Back to Marketplace</a>
    `,
  },
  {
    path: 'track-order',
    title: 'Track Order Status & Delivery Credentials | GolfCrater',
    description: 'Secure live tracking for your GolfCrater order. Check delivery status, fulfillment progress, and retrieve verification documentation.',
    canonicalUrl: `${BASE_URL}/track-order`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Track Order', url: '/track-order' },
    ],
    bodyH1: 'Track Order Status & Delivery Credentials',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Enter your Order ID (format: GC-XXXXX) and billing email address to check fulfillment progress and retrieve your account credentials.</p>
      <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-xl mb-8">
        <h2 class="font-bold text-slate-900 mb-3">Live Order Tracking Lookup</h2>
        <p class="text-xs text-slate-600 mb-4">Credentials and replacement records are archived securely with encrypted 2FA keys.</p>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Order ID</label>
            <input type="text" placeholder="e.g. GC-89412" disabled class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-500" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Billing Email</label>
            <input type="email" placeholder="you@domain.com" disabled class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-500" />
          </div>
        </div>
        <p class="text-[11px] text-slate-500 mt-3">Interactive tracking activates automatically upon client-side application load.</p>
      </div>
      <a href="/contact" class="text-emerald-600 font-bold">Need Help with Your Order? Contact Support →</a>
    `,
  },
];

// All categories list
const categories = [
  {
    name: 'Reviews Service',
    slug: 'reviews',
    alias: 'reviews-service',
    title: 'Buy Verified Google, Trustpilot & Yelp Reviews | GolfCrater',
    description: 'Elevate your brand reputation with authentic 5-star reviews for Google Maps, Trustpilot, Yelp, BBB, and G2. Geo-targeted, non-drop, and 60-day warranty.',
    canonicalUrl: `${BASE_URL}/category/reviews`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Reviews', url: '/category/reviews' },
    ],
    bodyH1: 'Buy Verified Google, Trustpilot & Yelp Reviews',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Strengthen your local SEO presence and consumer trust with permanent, non-drop 5-star customer reviews across leading review platforms.</p>',
  },
  {
    name: 'Bank Account',
    slug: 'bank-account',
    title: 'Buy Verified Bank Accounts (Cash App, PayPal, Stripe, Wise) | GolfCrater',
    description: 'Explore verified business banking accounts, merchant gateways, and payment solutions including Cash App, PayPal, Stripe, Wise, Payoneer, and Revolut.',
    canonicalUrl: `${BASE_URL}/category/bank-account`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Bank Account', url: '/category/bank-account' },
    ],
    bodyH1: 'Buy Verified Bank Accounts & Merchant Gateways',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Deploy enterprise merchant processors, dedicated European IBANs, multi-currency wallets, and instant payout rails with zero holding delays.</p>',
  },
  {
    name: 'Crypto Account',
    slug: 'crypto-account',
    title: 'Buy Verified Crypto Accounts (Binance, Coinbase, Kraken, Bitget) | GolfCrater',
    description: 'Fully KYC-verified cryptocurrency exchange accounts with high deposit and withdrawal limits. Verified Binance, Coinbase, Kraken, MoonPay, and Bitget solutions.',
    canonicalUrl: `${BASE_URL}/category/crypto-account`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Crypto Account', url: '/category/crypto-account' },
    ],
    bodyH1: 'Buy Verified Crypto Accounts & Exchanges',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Tier-2 and Tier-3 KYC verified exchange accounts with unlimited withdrawal volume, high leverage permissions, and full verification documentation.</p>',
  },
  {
    name: 'Email Service',
    slug: 'email-service',
    title: 'Buy Aged Gmail Accounts & Dedicated SMTP Relay Services | GolfCrater',
    description: 'High-inbox delivery email infrastructure, aged phone-verified Gmail accounts, Mailgun SMTP, and Brevo relay servers for reliable transactional outreach.',
    canonicalUrl: `${BASE_URL}/category/email-service`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Email Service', url: '/category/email-service' },
    ],
    bodyH1: 'Buy Aged Gmail Accounts & Dedicated SMTP Relay Services',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Pre-warmed enterprise SMTP infrastructure, dedicated clean IP ranges, SPF/DKIM/DMARC compliance, and aged phone-verified Gmail accounts.</p>',
  },
  {
    name: 'Account',
    slug: 'account',
    title: 'Buy Verified Developer, Marketplace & Ad Accounts | GolfCrater',
    description: 'Verified Apple Developer, Google Play Console, Amazon Seller & Buyer, Facebook Ads, and GitHub accounts with full credentials and fast delivery.',
    canonicalUrl: `${BASE_URL}/category/account`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Account', url: '/category/account' },
    ],
    bodyH1: 'Buy Verified Developer, Marketplace & Ad Accounts',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Aged and verified business accounts for developers, media buyers, and e-commerce founders. D-U-N-S approved developer consoles, high-spend agency ad accounts, and aged marketplace profiles.</p>',
  },
  {
    name: 'SMM Account',
    slug: 'smm-account',
    title: 'Buy Verified SMM Accounts & Creator Profiles | GolfCrater',
    description: 'Accelerate your social reach with aged, verified social media marketing accounts, creator channels, and established follower bases.',
    canonicalUrl: `${BASE_URL}/category/smm-account`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'SMM Account', url: '/category/smm-account' },
    ],
    bodyH1: 'Buy Verified SMM Accounts & Creator Profiles',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Aged social media marketing accounts across Instagram, LinkedIn, Facebook, Twitter (X), Tinder, and Ticketmaster with organic activity history.</p>',
  },
  {
    name: 'Other',
    slug: 'other',
    title: 'Buy Verified Identity Assets, SSN & Google Voice Accounts | GolfCrater',
    description: 'Verified identity documentation, real US SSN number records, state driving licenses, Google Voice VoIP numbers, and TextNow accounts with 24/7 support.',
    canonicalUrl: `${BASE_URL}/category/other`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Other', url: '/category/other' },
    ],
    bodyH1: 'Buy Verified Identity Assets, SSN & VoIP Accounts',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Real identity compliance records, state driving license documentation, virtual SMS verification numbers, and permanent Google Voice virtual lines.</p>',
  },
  {
    name: 'Digital Tools',
    slug: 'digital-tools',
    title: 'Buy Digital Tools, Automation & Software Assets | GolfCrater',
    description: 'Software licenses, developer templates, automation scripts, and downloadable digital assets for modern online businesses.',
    canonicalUrl: `${BASE_URL}/category/digital-tools`,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Digital Tools', url: '/category/digital-tools' },
    ],
    bodyH1: 'Digital Tools, Automation & Software Assets',
    bodyContent: '<p class="text-slate-600 mb-6 leading-relaxed">Explore automation scripts, developer infrastructure kits, anti-detect proxy setups, and digital productivity assets.</p>',
  },
];

console.log('Generating pre-rendered SEO static HTML entry points and XML sitemap...');

targetDirs.forEach((outDir) => {
  // 1. Generate Home Page with refined SEO
  const homeHtml = injectMetadata(baseHtml, {
    title: 'GolfCrater | Verified Digital Marketplace & Professional Business Services',
    description: 'GolfCrater is the premier digital marketplace for verified digital products, business accounts, reputation management, and online professional solutions with fast delivery and secure checkout.',
    canonicalUrl: `${BASE_URL}/`,
    bodyH1: 'GolfCrater — Premier Digital Marketplace & Business Services',
    bodyContent: `
      <p class="text-slate-600 mb-6 text-base leading-relaxed">Welcome to GolfCrater, your trusted digital hub for authentic reputation management, verified payment infrastructure, cryptocurrency exchange solutions, and email marketing assets.</p>
      <h2 class="text-lg font-bold text-slate-900 mb-3">Explore Marketplace Categories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        ${categories.map((c) => `
          <div class="p-4 border border-slate-200 rounded-xl bg-slate-50 hover:border-emerald-500 transition-colors">
            <h3 class="font-bold text-slate-900 mb-1 text-sm"><a href="/category/${c.slug}" class="hover:text-emerald-600">${c.name}</a></h3>
            <p class="text-xs text-slate-600 line-clamp-2 mb-2">${c.description}</p>
            <a href="/category/${c.slug}" class="text-xs text-emerald-600 font-bold block">Explore ${c.name} →</a>
          </div>
        `).join('')}
      </div>
      <h2 class="text-lg font-bold text-slate-900 mb-3">Featured Marketplace Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        ${PRODUCTS.slice(0, 6).map((prod) => {
          const prices = prod.variants.map((v) => v.price);
          const minPrice = Math.min(...prices);
          return `
            <div class="p-4 bg-white border border-slate-200 rounded-xl flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">${prod.category}</span>
                <h3 class="font-bold text-slate-900 text-sm mt-1 mb-1"><a href="/product/${prod.id}" class="hover:text-emerald-600">${prod.name}</a></h3>
                <p class="text-xs text-slate-500 line-clamp-2 mb-3">${prod.shortDescription}</p>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                <span class="text-xs font-bold text-slate-900">From $${minPrice}</span>
                <a href="/product/${prod.id}" class="text-xs font-bold text-emerald-600 hover:underline">View Options →</a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <h2 class="text-lg font-bold text-slate-900 mb-3">Industry Knowledge Base & Compliance Guides</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        ${BLOG_POSTS.slice(0, 3).map((post) => `
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <span class="text-[10px] font-bold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded uppercase">${post.category}</span>
            <h3 class="font-bold text-slate-900 text-sm mt-1.5 mb-1 leading-snug"><a href="/blog/${post.slug}" class="hover:text-emerald-600">${post.trendingTitle}</a></h3>
            <p class="text-xs text-slate-500 line-clamp-2 mb-2">${post.excerpt}</p>
            <a href="/blog/${post.slug}" class="text-xs font-bold text-emerald-600 hover:underline">Read Article →</a>
          </div>
        `).join('')}
      </div>
      <div class="flex gap-4">
        <a href="/shop" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow-xs hover:bg-emerald-700">Browse All Marketplace Products</a>
        <a href="/blog" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200">Read All Guides</a>
      </div>
    `,
  });
  ensureDirAndWriteFile(outDir, 'index.html', homeHtml);

  // 2. Generate Top Level Pages (shop, contact, track-order, etc.)
  topPages.forEach((page) => {
    const pageHtml = injectMetadata(baseHtml, {
      title: page.title,
      description: page.description,
      canonicalUrl: page.canonicalUrl,
      breadcrumbs: page.breadcrumbs,
      bodyH1: page.bodyH1,
      bodyContent: page.bodyContent,
    });
    ensureDirAndWriteFile(path.join(outDir, page.path), 'index.html', pageHtml);
  });

  // 3. Generate Category Pages
  categories.forEach((cat) => {
    const categoryProducts = PRODUCTS.filter((p) => {
      const pCatSlug = categoryToSlug(p.category);
      return pCatSlug === cat.slug || pCatSlug === cat.alias;
    });

    const catHtml = injectMetadata(baseHtml, {
      title: cat.title,
      description: cat.description,
      canonicalUrl: cat.canonicalUrl,
      breadcrumbs: cat.breadcrumbs,
      bodyH1: cat.bodyH1,
      bodyContent: `
        ${cat.bodyContent}
        <h2 class="text-lg font-bold mt-6 mb-3 text-slate-900">Featured ${cat.name} Packages (${categoryProducts.length} Available)</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          ${categoryProducts.map((p) => {
            const prices = p.variants.map((v) => v.price);
            const minPrice = Math.min(...prices);
            return `
              <div class="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between hover:border-emerald-500 transition-colors">
                <div>
                  <a href="/product/${p.id}" class="font-semibold text-slate-800 hover:text-emerald-600 text-sm block">${p.name}</a>
                  <span class="text-xs text-slate-500">★ ${p.rating} (${p.reviewCount} reviews)</span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-bold text-emerald-600 block">From $${minPrice}</span>
                  <a href="/product/${p.id}" class="text-[11px] font-bold text-slate-600 hover:underline">View →</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-6">
          <h2 class="font-bold text-slate-900 text-sm mb-2">Why Choose GolfCrater for ${cat.name}</h2>
          <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
            <li>Strict multi-step identity & credential verification prior to listing.</li>
            <li>60-day replacement warranty and 24/7 priority live assistance.</li>
            <li>Instant automated delivery with full account credentials and 2FA recovery backup seed codes.</li>
          </ul>
        </div>
        <a href="/shop" class="text-emerald-600 font-semibold text-sm">← View All Marketplace Categories</a>
      `,
    });

    ensureDirAndWriteFile(path.join(outDir, 'category', cat.slug), 'index.html', catHtml);
    if (cat.alias) {
      ensureDirAndWriteFile(path.join(outDir, 'category', cat.alias), 'index.html', catHtml);
    }
  });

  // 4. Generate Product Pages with Rich Product Schema
  PRODUCTS.forEach((prod) => {
    const canonicalUrl = `${BASE_URL}/product/${prod.id}`;
    const catSlug = categoryToSlug(prod.category);
    const prices = prod.variants.map((v) => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const relatedBlog = BLOG_POSTS.find((b) => b.productId === prod.id || b.productId === prod.slug);

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: prod.name,
      description: prod.metaDescription || prod.shortDescription,
      image: [`${BASE_URL}/icon-512.png`],
      sku: `GC-${prod.id.toUpperCase()}`,
      mpn: `MPN-${prod.id.toUpperCase()}`,
      brand: {
        '@type': 'Brand',
        name: 'GolfCrater',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: minPrice.toString(),
        highPrice: maxPrice.toString(),
        offerCount: prod.variants.length.toString(),
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        seller: {
          '@type': 'Organization',
          name: 'GolfCrater',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: prod.rating.toString(),
        reviewCount: prod.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    };

    const prodHtml = injectMetadata(baseHtml, {
      title: `${prod.name} - 100% Verified & Guaranteed | GolfCrater`,
      description: prod.metaDescription || prod.shortDescription,
      canonicalUrl,
      ogType: 'product',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: prod.category, url: `/category/${catSlug}` },
        { name: prod.name, url: `/product/${prod.id}` },
      ],
      schema: productSchema,
      bodyH1: prod.name,
      bodyContent: `
        <div class="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span class="font-bold text-emerald-600 text-base">From $${minPrice}</span>
          <span>•</span>
          <span class="font-semibold text-amber-500">★ ${prod.rating} (${prod.reviewCount} verified reviews)</span>
          <span>•</span>
          <span>Category: <a href="/category/${catSlug}" class="text-emerald-600 font-semibold underline">${prod.category}</a></span>
        </div>
        <p class="text-slate-700 leading-relaxed mb-6 text-base">${prod.shortDescription}</p>
        
        <h2 class="text-lg font-bold text-slate-900 mb-3">Available Package Options & Pricing</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          ${prod.variants.map((v) => `
            <div class="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
              <div>
                <span class="font-bold text-slate-900 text-sm block">${v.name}</span>
                ${v.popular ? '<span class="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">Most Popular</span>' : ''}
              </div>
              <span class="font-black text-emerald-600 text-base">$${v.price}</span>
            </div>
          `).join('')}
        </div>

        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-6">
          <h2 class="font-bold text-slate-900 mb-2">Service Highlights & Buyer Protections</h2>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
            <li>Fully verified credentials and identity documentation records included.</li>
            <li>Guaranteed 60-day replacement warranty on every package option.</li>
            <li>Zero automated detection flags with clean IP warmup history.</li>
            <li>24/7 dedicated customer service and real-time order tracking.</li>
            <li>Multiple secure payment methods: BSC, TRX, ETH, SOL, BTC, LTC, DOGE, Skrill, Bank SWIFT/ACH.</li>
          </ul>
        </div>

        ${relatedBlog ? `
          <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
            <h2 class="font-bold text-emerald-950 mb-1 text-sm">Official In-Depth Guide Available</h2>
            <p class="text-xs text-emerald-800 mb-2">${relatedBlog.trendingTitle}</p>
            <a href="/blog/${relatedBlog.slug}" class="text-xs font-bold text-emerald-700 hover:underline">Read the Complete Technical Guide →</a>
          </div>
        ` : ''}

        <div class="flex items-center gap-4">
          <a href="/category/${catSlug}" class="text-emerald-600 font-semibold text-sm">← Browse More in ${prod.category}</a>
          <a href="/shop" class="text-slate-600 text-sm hover:underline">View All Products</a>
        </div>
      `,
    });

    ensureDirAndWriteFile(path.join(outDir, 'product', prod.id), 'index.html', prodHtml);
  });

  // 5. Generate Blog Post Pages with BlogPosting Schema
  BLOG_POSTS.forEach((post) => {
    const canonicalUrl = `${BASE_URL}/blog/${post.slug}`;
    const relatedProduct = PRODUCTS.find((p) => p.id === post.productId || p.slug === post.productId);

    const blogSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.trendingTitle,
      description: post.metaDescription,
      image: [post.coverImage || `${BASE_URL}/icon-512.png`],
      datePublished: '2026-09-08T08:00:00Z',
      dateModified: '2026-10-02T12:00:00Z',
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'GolfCrater',
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/icon-512.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
    };

    const postHtml = injectMetadata(baseHtml, {
      title: post.metaTitle,
      description: post.metaDescription,
      canonicalUrl,
      ogType: 'article',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.trendingTitle, url: `/blog/${post.slug}` },
      ],
      schema: blogSchema,
      bodyH1: post.trendingTitle,
      bodyContent: `
        <div class="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-200">
          <span class="font-bold text-slate-800">By ${post.author.name} (${post.author.role})</span>
          <span>•</span>
          <span>Category: <a href="/category/${post.categorySlug}" class="text-emerald-600 font-semibold underline">${post.category}</a></span>
          <span>•</span>
          <span>${post.readTime}</span>
          <span>•</span>
          <span>Word Count: ~${post.wordCount} words</span>
        </div>

        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-6 text-sm text-slate-700 italic">
          ${post.excerpt}
        </div>

        <h2 class="text-lg font-bold text-slate-900 mb-2">Table of Contents</h2>
        <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1 mb-8">
          ${post.tableOfContents.map((toc) => `<li><a href="#${toc.id}" class="text-emerald-600 hover:underline">${toc.title}</a></li>`).join('')}
        </ul>

        <div class="space-y-8 mb-8 text-slate-800 leading-relaxed text-sm">
          ${post.sections.map((sec) => `
            <section id="${sec.id}">
              <h2 class="text-xl font-bold text-slate-900 mb-1">${sec.heading}</h2>
              ${sec.subheading ? `<h3 class="text-sm font-semibold text-emerald-700 mb-3">${sec.subheading}</h3>` : ''}
              ${sec.bodyParagraphs.map((para) => `<p class="mb-3 text-slate-700">${para}</p>`).join('')}
              ${sec.keyPoints && sec.keyPoints.length > 0 ? `
                <div class="p-3 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg my-3">
                  <h4 class="font-bold text-xs text-slate-900 mb-1.5 uppercase tracking-wider">Key Takeaways</h4>
                  <ul class="list-disc pl-4 text-xs text-slate-600 space-y-1">
                    ${sec.keyPoints.map((kp) => `<li>${kp}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </section>
          `).join('')}
        </div>

        ${post.faq && post.faq.length > 0 ? `
          <h2 class="text-lg font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
          <div class="space-y-3 mb-8">
            ${post.faq.map((f) => `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 class="font-bold text-slate-900 text-sm mb-1">${f.question}</h3>
                <p class="text-xs text-slate-600 leading-relaxed">${f.answer}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${relatedProduct ? `
          <div class="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-2xl mb-8">
            <span class="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded">Featured Marketplace Solution</span>
            <h2 class="text-xl font-black text-slate-900 mt-2 mb-1">${relatedProduct.name}</h2>
            <p class="text-xs text-slate-700 mb-4 leading-relaxed">${relatedProduct.shortDescription}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-emerald-800">100% KYC Verified • 60-Day Replacement Guarantee</span>
              <a href="/product/${relatedProduct.id}" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-xs hover:bg-emerald-700">Order Verified Package →</a>
            </div>
          </div>
        ` : ''}

        <div class="flex items-center gap-4">
          <a href="/blog" class="text-emerald-600 font-semibold text-sm">← Back to All Guides</a>
          <a href="/shop" class="text-slate-600 text-sm hover:underline">Explore Marketplace</a>
        </div>
      `,
    });

    ensureDirAndWriteFile(path.join(outDir, 'blog', post.slug), 'index.html', postHtml);
  });

  // 6. Generate a dedicated 404.html page
  const notFoundHtml = injectMetadata(baseHtml, {
    title: '404 - Page Not Found | GolfCrater',
    description: 'The requested page could not be found on GolfCrater. Browse our catalog of verified digital services and business accounts or return to the home page.',
    canonicalUrl: `${BASE_URL}/404`,
    robots: 'noindex, follow',
    bodyH1: '404 - Page Not Found',
    bodyContent: `
      <div class="text-center py-12">
        <div class="text-6xl font-extrabold text-emerald-600 mb-4">404</div>
        <h2 class="text-2xl font-bold text-slate-900 mb-2">We couldn't find the page you're looking for.</h2>
        <p class="text-slate-600 max-w-md mx-auto mb-8">
          The link you followed may be broken or the page may have been moved. You can browse our marketplace or track an existing order.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl shadow-xs hover:bg-emerald-700 transition-colors">
            Return to Homepage
          </a>
          <a href="/shop" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors">
            Browse All Products
          </a>
          <a href="/contact" class="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    `,
  });

  ensureDirAndWriteFile(outDir, '404.html', notFoundHtml);

  // 7. Ensure CNAME is copied
  const cnamePath = path.join(rootDir, 'CNAME');
  if (fs.existsSync(cnamePath)) {
    ensureDirAndWriteFile(outDir, 'CNAME', fs.readFileSync(cnamePath, 'utf8'));
  }
});

// ----------------------------------------------------
// Generate Clean, Valid XML Sitemap
// ----------------------------------------------------
const today = new Date().toISOString().split('T')[0];

const sitemapEntries: { loc: string; priority: string; changefreq: string; lastmod: string }[] = [];

// 1. Core Pages (9)
sitemapEntries.push({ loc: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/shop`, priority: '0.9', changefreq: 'daily', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/services`, priority: '0.85', changefreq: 'weekly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/pricing`, priority: '0.85', changefreq: 'weekly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/about`, priority: '0.8', changefreq: 'monthly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/blog`, priority: '0.8', changefreq: 'weekly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/faq`, priority: '0.75', changefreq: 'monthly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/track-order`, priority: '0.7', changefreq: 'weekly', lastmod: today });
sitemapEntries.push({ loc: `${BASE_URL}/contact`, priority: '0.6', changefreq: 'monthly', lastmod: today });

// 2. Category Pages (8)
categories.forEach((cat) => {
  sitemapEntries.push({ loc: `${BASE_URL}/category/${cat.slug}`, priority: '0.85', changefreq: 'daily', lastmod: today });
});

// 3. Product Pages (48)
PRODUCTS.forEach((prod) => {
  sitemapEntries.push({ loc: `${BASE_URL}/product/${prod.id}`, priority: '0.8', changefreq: 'weekly', lastmod: today });
});

// 4. Blog Post Pages (48)
BLOG_POSTS.forEach((post) => {
  sitemapEntries.push({ loc: `${BASE_URL}/blog/${post.slug}`, priority: '0.75', changefreq: 'monthly', lastmod: today });
});

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const entry of sitemapEntries) {
  sitemapXml += `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>\n`;
}
sitemapXml += '</urlset>\n';

// Write sitemap to public/, docs/, and dist/
ensureDirAndWriteFile(publicDir, 'sitemap.xml', sitemapXml);
targetDirs.forEach((outDir) => {
  ensureDirAndWriteFile(outDir, 'sitemap.xml', sitemapXml);
});

// ----------------------------------------------------
// Generate Clean Robots.txt
// ----------------------------------------------------
const robotsTxtContent = `User-agent: *
Allow: /

# Disallow non-indexable transactional and backend endpoints
Disallow: /api/
Disallow: /checkout
Disallow: /cart

Sitemap: https://golfcrater.com/sitemap.xml
`;

ensureDirAndWriteFile(publicDir, 'robots.txt', robotsTxtContent);
targetDirs.forEach((outDir) => {
  ensureDirAndWriteFile(outDir, 'robots.txt', robotsTxtContent);
});

console.log(`Successfully generated static HTML pages and valid sitemap with ${sitemapEntries.length} canonical URLs!`);
process.exit(0);
