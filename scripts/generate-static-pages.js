import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const distDir = path.join(rootDir, 'dist');

// Read base HTML from dist or docs
const sourceHtmlPath = fs.existsSync(path.join(distDir, 'index.html'))
  ? path.join(distDir, 'index.html')
  : path.join(docsDir, 'index.html');

if (!fs.existsSync(sourceHtmlPath)) {
  console.error('Source index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(sourceHtmlPath, 'utf8');
const BASE_URL = 'https://golfcrater.com';

// Target directories to populate
const targetDirs = [docsDir];
if (fs.existsSync(distDir)) {
  targetDirs.push(distDir);
}

function ensureDirAndWriteFile(targetDir, fileName, content) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, fileName), content, 'utf8');
}

// Helpers for HTML metadata substitution
function injectMetadata(html, {
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = `${BASE_URL}/favicon.svg`,
  breadcrumbs = [],
  schema = null,
  bodyH1 = '',
  bodyContent = '',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}) {
  let modified = html;

  // Replace Title
  if (title) {
    modified = modified.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
  }

  // Replace Description
  if (description) {
    modified = modified.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
      `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
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
    modified = modified.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`
    );
  }
  if (description) {
    modified = modified.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is,
      `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`
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

  // Replace Twitter Tags
  if (title) {
    modified = modified.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`
    );
  }
  if (description) {
    modified = modified.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is,
      `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`
    );
  }

  // Construct JSON-LD
  const jsonLdItems = [];
  if (breadcrumbs.length > 0) {
    jsonLdItems.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((bc, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: bc.name,
        item: bc.url,
      })),
    });
  }

  if (schema) {
    jsonLdItems.push(schema);
  }

  if (jsonLdItems.length > 0) {
    const extraSchemaTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(jsonLdItems, null, 2)}\n    </script>`;
    modified = modified.replace('</head>', `${extraSchemaTag}\n  </head>`);
  }

  // Replace #root with accessible fallback markup for crawlers and initial render
  if (bodyH1) {
    const prerenderMarkup = `<div id="root">
      <header class="sr-only">
        <h1>${bodyH1}</h1>
        <p>${description || ''}</p>
      </header>
      <main class="max-w-4xl mx-auto px-4 py-8 text-slate-800">
        <h1 class="text-2xl sm:text-3xl font-bold mb-4">${bodyH1}</h1>
        ${bodyContent}
      </main>
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
    description: 'Learn about GolfCrater\'s mission, rigorous verification protocols, buyer protections, 60-day replacement warranty, and enterprise digital solutions.',
    canonicalUrl: `${BASE_URL}/about`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'About Us', url: `${BASE_URL}/about` },
    ],
    bodyH1: 'About GolfCrater — Security, Verification & Trusted Digital Marketplace',
    bodyContent: '<p class="text-slate-600 mb-4">The premier digital marketplace for verified digital accounts, 5-star reputation management, aged business infrastructure, and secure high-deliverability email systems.</p><ul class="list-disc pl-5 text-sm text-slate-600 space-y-1 mb-6"><li>100% KYC & Pre-Vetted Verification</li><li>60-Day Replacement Warranty on All Packages</li><li>Instant Credential Dispatch & Real-Time Tracking</li><li>Support for BSC, TRX, ETH, SOL, BTC, Skrill, Bank Transfer</li></ul><a href="/services" class="text-emerald-600 font-semibold">Explore Our Services →</a>',
  },
  {
    path: 'services',
    title: 'Digital Services & Verified Business Accounts | GolfCrater',
    description: 'Explore GolfCrater\'s comprehensive suite of verified digital services: Reviews management, verified bank accounts, crypto exchange solutions, SMM, and SMTP relays.',
    canonicalUrl: `${BASE_URL}/services`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Services', url: `${BASE_URL}/services` },
    ],
    bodyH1: 'Our Digital Services & Verified Solutions',
    bodyContent: '<p class="text-slate-600 mb-4">Every service is engineered for enterprise reliability, high retention, and immediate operational deployment.</p><nav aria-label="Services List"><ul class="grid grid-cols-2 gap-3 mb-6"><li class="p-3 bg-slate-50 rounded"><a href="/category/reviews" class="text-emerald-600 font-semibold">Reviews Management</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/bank-account" class="text-emerald-600 font-semibold">Bank Accounts</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/crypto-account" class="text-emerald-600 font-semibold">Crypto Exchanges</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/email-service" class="text-emerald-600 font-semibold">SMTP & Email</a></li></ul></nav><a href="/pricing" class="text-emerald-600 font-semibold">View Transparent Pricing Plans →</a>',
  },
  {
    path: 'pricing',
    title: 'Transparent Pricing & Service Packages | GolfCrater',
    description: 'Compare transparent pricing plans across GolfCrater services. Tiered packages for Google Reviews, Trustpilot, verified bank accounts, crypto exchanges, and SMTP servers.',
    canonicalUrl: `${BASE_URL}/pricing`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Pricing', url: `${BASE_URL}/pricing` },
    ],
    bodyH1: 'Transparent Pricing & Package Tiers',
    bodyContent: '<p class="text-slate-600 mb-4">Clear upfront rates with guaranteed 60-day replacement coverage and priority technical support. Use promo code GOLF20 for 20% off your first order.</p><div class="grid grid-cols-2 gap-3 mb-6"><div class="p-3 bg-slate-50 rounded"><div class="font-bold">Reviews Services</div><div class="text-emerald-600 font-semibold text-sm">Starting at $19</div></div><div class="p-3 bg-slate-50 rounded"><div class="font-bold">Bank Accounts</div><div class="text-emerald-600 font-semibold text-sm">Starting at $120</div></div><div class="p-3 bg-slate-50 rounded"><div class="font-bold">Crypto Exchanges</div><div class="text-emerald-600 font-semibold text-sm">Starting at $110</div></div><div class="p-3 bg-slate-50 rounded"><div class="font-bold">Email & SMTP</div><div class="text-emerald-600 font-semibold text-sm">Starting at $15</div></div></div><a href="/shop" class="text-emerald-600 font-semibold">Browse All Packages →</a>',
  },
  {
    path: 'blog',
    title: 'Digital Marketplace Blog & Compliance Insights | GolfCrater',
    description: 'Expert guides on local SEO reputation management, Google review algorithms, KYC verification compliance for business bank accounts, and high-deliverability SMTP setups.',
    canonicalUrl: `${BASE_URL}/blog`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Blog', url: `${BASE_URL}/blog` },
    ],
    bodyH1: 'GolfCrater Insights & Knowledge Base',
    bodyContent: '<p class="text-slate-600 mb-4">In-depth guides on digital account compliance, reputation algorithms, email deliverability, and safe scaling strategies.</p><ul class="list-disc pl-5 text-sm text-slate-600 space-y-2 mb-6"><li>How 5-Star Google Reviews Drive Local SEO Rankings & Conversions</li><li>A Guide to KYC Compliance & Payment Gateways for Modern E-Commerce</li><li>Maximizing Transactional Email Deliverability with Dedicated SMTP Relays</li><li>High-Velocity Crypto Accounts: Best Practices for Security & Proxy Isolation</li></ul><a href="/faq" class="text-emerald-600 font-semibold">View Frequently Asked Questions →</a>',
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions (FAQ) & Support | GolfCrater',
    description: 'Find answers to frequently asked questions about GolfCrater orders, accepted payment methods (BSC, TRX, ETH, SOL, BTC, Skrill, Bank transfer), delivery times, and replacement warranties.',
    canonicalUrl: `${BASE_URL}/faq`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'FAQ', url: `${BASE_URL}/faq` },
    ],
    bodyH1: 'Frequently Asked Questions (FAQ)',
    bodyContent: '<p class="text-slate-600 mb-4">Everything you need to know about our services, verification standards, warranties, and multi-currency payment methods.</p><ul class="list-disc pl-5 text-sm text-slate-600 space-y-2 mb-6"><li><strong>Delivery Speed:</strong> Instant/1-3h for tools; 1-3/day drip for organic reviews.</li><li><strong>Payment Gateways:</strong> Crypto (BSC, TRX, ETH, SOL, BTC, LTC, DOGE), Skrill, Bank Transfer (SWIFT & ACH).</li><li><strong>Warranty:</strong> Full 60-day replacement warranty.</li><li><strong>KYC Compliance:</strong> 100% pre-vetted with documentation archives.</li></ul><a href="/contact" class="text-emerald-600 font-semibold">Contact Customer Support →</a>',
  },
  {
    path: 'shop',
    title: 'Shop All Verified Digital Services & Business Accounts | GolfCrater',
    description: 'Explore the complete GolfCrater catalog: verified reviews for Google & Trustpilot, aged bank accounts (Cash App, PayPal, Stripe), cryptocurrency exchanges, and SMTP email services.',
    canonicalUrl: `${BASE_URL}/shop`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Shop All', url: `${BASE_URL}/shop` },
    ],
    bodyH1: 'Shop All Digital Services & Verified Accounts',
    bodyContent: '<p class="text-slate-600 mb-6">Browse our complete inventory of verified accounts, business tools, and reputation management packages.</p><nav aria-label="Quick Categories"><ul class="grid grid-cols-2 gap-3"><li class="p-3 bg-slate-50 rounded"><a href="/category/reviews" class="text-emerald-600 font-semibold">Reviews Services</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/bank-account" class="text-emerald-600 font-semibold">Bank Accounts</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/crypto-account" class="text-emerald-600 font-semibold">Crypto Accounts</a></li><li class="p-3 bg-slate-50 rounded"><a href="/category/email-service" class="text-emerald-600 font-semibold">Email & SMTP</a></li></ul></nav>',
  },
  {
    path: 'contact',
    title: 'Contact GolfCrater | 24/7 Dedicated Customer & Business Support',
    description: 'Get in touch with the GolfCrater technical team. Live chat support, Telegram VIP desk (@GolfCrater), WhatsApp, and priority email for enterprise orders and inquiries.',
    canonicalUrl: `${BASE_URL}/contact`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Contact Us', url: `${BASE_URL}/contact` },
    ],
    bodyH1: 'Contact GolfCrater Customer Support',
    bodyContent: '<p class="text-slate-600 mb-4">Our dedicated team is available 24/7. Reach out via Telegram (@GolfCrater), WhatsApp (+1 234 567 8900), or email (support@golfcrater.com).</p><a href="/" class="text-emerald-600 font-semibold">← Return to Homepage</a>',
  },
  {
    path: 'track-order',
    title: 'Track Your Order Status & Live Fulfillment | GolfCrater',
    description: 'Track your GolfCrater orders in real-time. Enter your Order ID (e.g., GC-92841) or email address to verify payment confirmation, credential dispatch, and warranty status.',
    canonicalUrl: `${BASE_URL}/track-order`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Track Order', url: `${BASE_URL}/track-order` },
    ],
    bodyH1: 'Track Order Status',
    bodyContent: '<p class="text-slate-600 mb-4">Enter your order ID to view instant real-time progress and dispatch logs for your purchase.</p><a href="/shop" class="text-emerald-600 font-semibold">Browse Marketplace</a>',
  },
];

const categories = [
  {
    slug: 'reviews',
    alias: 'reviews-service',
    name: 'Reviews Service',
    title: 'Buy Verified Google, Trustpilot & Yelp Reviews | GolfCrater',
    description: 'Elevate your brand reputation with authentic 5-star reviews for Google Maps, Trustpilot, Yelp, BBB, and G2. Geo-targeted, non-drop, and 60-day warranty.',
    canonicalUrl: `${BASE_URL}/category/reviews`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'Reviews', url: `${BASE_URL}/category/reviews` },
    ],
    bodyH1: 'Verified Online Reputation & Business Review Services',
    bodyContent: '<p class="text-slate-600 mb-4">Discover genuine, non-drop 5-star review services for Google Business Profiles, Trustpilot, Yelp, Facebook, and BBB with gradual drip delivery and replacement warranties.</p>',
  },
  {
    slug: 'bank-account',
    name: 'Bank Account',
    title: 'Buy Verified Bank Accounts (Cash App, PayPal, Stripe, Wise) | GolfCrater',
    description: 'Explore verified business banking accounts, merchant gateways, and payment solutions including Cash App, PayPal, Stripe, Wise, Payoneer, and Revolut.',
    canonicalUrl: `${BASE_URL}/category/bank-account`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'Bank Account', url: `${BASE_URL}/category/bank-account` },
    ],
    bodyH1: 'Verified Merchant & Business Bank Accounts',
    bodyContent: '<p class="text-slate-600 mb-4">Fully KYC-verified business bank accounts and payment processors with complete routing details, virtual debit cards, and clean account histories.</p>',
  },
  {
    slug: 'crypto-account',
    name: 'Crypto Account',
    title: 'Buy Verified Crypto Accounts (Binance, Coinbase, Kraken) | GolfCrater',
    description: 'Fully KYC-verified cryptocurrency exchange accounts with high deposit and withdrawal limits. Verified Binance, Coinbase, Kraken, and MoonPay solutions.',
    canonicalUrl: `${BASE_URL}/category/crypto-account`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'Crypto Account', url: `${BASE_URL}/category/crypto-account` },
    ],
    bodyH1: 'Verified Cryptocurrency Exchange Accounts',
    bodyContent: '<p class="text-slate-600 mb-4">Tier-2 and Tier-3 verified exchange accounts on Binance, Coinbase, Kraken, and MoonPay with high limits and document archives.</p>',
  },
  {
    slug: 'smm-account',
    name: 'SMM Account',
    title: 'Buy Verified SMM Accounts & Creator Profiles | GolfCrater',
    description: 'Accelerate your social reach with aged, verified social media marketing accounts, creator channels, and established follower bases.',
    canonicalUrl: `${BASE_URL}/category/smm-account`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'SMM Account', url: `${BASE_URL}/category/smm-account` },
    ],
    bodyH1: 'Verified Social Media Marketing & Creator Accounts',
    bodyContent: '<p class="text-slate-600 mb-4">Aged, phone-verified social media profiles and marketing accounts with clean standing and active histories.</p>',
  },
  {
    slug: 'email-service',
    name: 'Email Service',
    title: 'Buy Aged Gmail Accounts & Dedicated SMTP Relay Services | GolfCrater',
    description: 'High-inbox delivery email infrastructure, aged phone-verified Gmail accounts, Mailgun SMTP, and Brevo relay servers for reliable transactional outreach.',
    canonicalUrl: `${BASE_URL}/category/email-service`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'Email Service', url: `${BASE_URL}/category/email-service` },
    ],
    bodyH1: 'Aged Email Accounts & High-Deliverability SMTP Infrastructure',
    bodyContent: '<p class="text-slate-600 mb-4">High-reputation warm SMTP relay accounts (Mailgun, Brevo) and aged PVA Gmail accounts with recovery access.</p>',
  },
  {
    slug: 'digital-tools',
    name: 'Digital Tools',
    title: 'Verified Digital Tools, Software & Marketing Infrastructure | GolfCrater',
    description: 'Explore verified automation software, developer licenses, marketing tools, and secure digital utility services at GolfCrater.',
    canonicalUrl: `${BASE_URL}/category/digital-tools`,
    breadcrumbs: [
      { name: 'Home', url: BASE_URL },
      { name: 'Categories', url: `${BASE_URL}/shop` },
      { name: 'Digital Tools', url: `${BASE_URL}/category/digital-tools` },
    ],
    bodyH1: 'Digital Tools & Software Infrastructure',
    bodyContent: '<p class="text-slate-600 mb-4">Curated software tools and automation services for modern online operators.</p>',
  },
];

const products = [
  {
    id: 'buy-google-reviews',
    name: 'Buy Google Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '19',
    rating: '4.9',
    reviewCount: '348',
    description: 'Buy verified 5-star Google Reviews at GolfCrater. Organic drip delivery, geo-targeted localized accounts, 100% safe retention warranty, and 24/7 dedicated support.',
  },
  {
    id: 'buy-trustpilot-reviews',
    name: 'Buy Trustpilot Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '19',
    rating: '4.9',
    reviewCount: '286',
    description: 'Buy Trustpilot reviews from verified consumer profiles. Boost TrustScore, improve buyer conversion rates, and enjoy 60-day non-drop replacement guarantees.',
  },
  {
    id: 'buy-facebook-reviews',
    name: 'Buy Facebook Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '19',
    rating: '4.8',
    reviewCount: '194',
    description: 'Buy positive Facebook page reviews and recommendations from real, aged social profiles with active profile histories.',
  },
  {
    id: 'buy-amazon-reviews',
    name: 'Buy Amazon Customer Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '25',
    rating: '4.9',
    reviewCount: '162',
    description: 'Verified Amazon customer purchase reviews from Prime accounts. Enhance Buy Box visibility, organic search rank, and sales velocity.',
  },
  {
    id: 'buy-yelp-reviews',
    name: 'Buy Yelp Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '25',
    rating: '4.7',
    reviewCount: '143',
    description: 'Buy Yelp reviews from active Elite-badge and aged local accounts. Overcome Yelp algorithmic filters with natural drip delivery.',
  },
  {
    id: 'buy-bbb-reviews',
    name: 'Buy BBB Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '25',
    rating: '4.9',
    reviewCount: '87',
    description: 'Buy Better Business Bureau (BBB) customer reviews. Solidify institutional credibility, improve corporate trust, and safeguard enterprise reputation.',
  },
  {
    id: 'buy-verified-g2-reviews',
    name: 'Buy Verified G2 Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '25',
    rating: '4.9',
    reviewCount: '112',
    description: 'Buy verified B2B software reviews on G2 Crowd. LinkedIn-verified profiles, detailed software testimonials, and organic pacing.',
  },
  {
    id: 'buy-glassdoor-reviews',
    name: 'Buy Glassdoor Reviews',
    category: 'Reviews',
    categorySlug: 'reviews',
    startingPrice: '25',
    rating: '4.8',
    reviewCount: '95',
    description: 'Enhance employer branding and talent recruitment with authentic Glassdoor company ratings, workplace reviews, and CEO approval sentiment.',
  },
  {
    id: 'buy-verified-cash-app-accounts',
    name: 'Buy Verified Cash App Accounts',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '120',
    rating: '4.9',
    reviewCount: '412',
    description: 'Buy fully KYC-verified Cash App accounts with BTC enabled, virtual Visa debit cards, higher limits, and full document archives.',
  },
  {
    id: 'buy-verified-paypal-account',
    name: 'Buy Verified PayPal Account',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '120',
    rating: '4.9',
    reviewCount: '520',
    description: 'Buy aged and KYC-verified PayPal business and personal accounts. Linked bank and debit card, SSN verified, and transaction history.',
  },
  {
    id: 'buy-verified-wise-account',
    name: 'Buy Verified Wise Account',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '140',
    rating: '4.9',
    reviewCount: '315',
    description: 'Buy verified Wise (TransferWise) multi-currency business accounts. Access local bank details in USD, EUR, GBP, AUD, and CAD.',
  },
  {
    id: 'buy-verified-payoneer-account',
    name: 'Buy Verified Payoneer Account',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '130',
    rating: '4.8',
    reviewCount: '240',
    description: 'Buy KYC-verified Payoneer accounts with Global Payment Service enabled for international marketplace payouts from Amazon, Upwork, and eBay.',
  },
  {
    id: 'buy-verified-stripe-account',
    name: 'Buy Verified Stripe Account',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '180',
    rating: '4.9',
    reviewCount: '378',
    description: 'Buy fully activated Stripe merchant accounts with live API keys, attached virtual banking, clean chargeback standing, and instant processing.',
  },
  {
    id: 'buy-verified-revolut-account',
    name: 'Buy Verified Revolut Account',
    category: 'Bank Account',
    categorySlug: 'bank-account',
    startingPrice: '150',
    rating: '4.8',
    reviewCount: '188',
    description: 'Buy verified Revolut personal and business accounts. Features multi-currency IBANs, disposable virtual cards, and instant SEPA/SWIFT transfers.',
  },
  {
    id: 'buy-verified-binance-account',
    name: 'Buy Verified Binance Account',
    category: 'Crypto Account',
    categorySlug: 'crypto-account',
    startingPrice: '160',
    rating: '4.9',
    reviewCount: '495',
    description: 'Buy Binance Plus-verified accounts with maximum daily deposit and withdrawal allowances. Full access, KYC verification, and 2FA credentials.',
  },
  {
    id: 'buy-verified-coinbase-account',
    name: 'Buy Verified Coinbase Account',
    category: 'Crypto Account',
    categorySlug: 'crypto-account',
    startingPrice: '170',
    rating: '4.9',
    reviewCount: '340',
    description: 'Buy level-3 verified Coinbase and Coinbase Pro accounts. Instant fiat on-ramp/off-ramp, linked banking details, and high limits.',
  },
  {
    id: 'buy-verified-kraken-accounts',
    name: 'Buy Verified Kraken Accounts',
    category: 'Crypto Account',
    categorySlug: 'crypto-account',
    startingPrice: '160',
    rating: '4.8',
    reviewCount: '210',
    description: 'Buy Intermediate and Pro verified Kraken accounts with unlimited crypto withdrawals, low maker fees, and complete verification history.',
  },
  {
    id: 'buy-moonpay-account',
    name: 'Buy Verified MoonPay Account',
    category: 'Crypto Account',
    categorySlug: 'crypto-account',
    startingPrice: '110',
    rating: '4.7',
    reviewCount: '165',
    description: 'Buy verified MoonPay accounts for instant debit/credit card to crypto conversion with high weekly velocity limits.',
  },
  {
    id: 'buy-verified-smm-accounts',
    name: 'Buy Verified SMM Accounts',
    category: 'SMM Account',
    categorySlug: 'smm-account',
    startingPrice: '60',
    rating: '4.8',
    reviewCount: '275',
    description: 'Buy aged social media marketing accounts across Instagram, Twitter/X, TikTok, and YouTube with genuine engagement history.',
  },
  {
    id: 'buy-gmail-accounts',
    name: 'Buy Aged Gmail Accounts (PVA)',
    category: 'Email Service',
    categorySlug: 'email-service',
    startingPrice: '15',
    rating: '4.9',
    reviewCount: '620',
    description: 'Buy aged phone-verified Gmail accounts (PVA) with 100% inbox deliverability, recovery email access, and clean IP histories.',
  },
  {
    id: 'buy-smtp-mailgun-accounts',
    name: 'Buy SMTP Mailgun Accounts',
    category: 'Email Service',
    categorySlug: 'email-service',
    startingPrice: '110',
    rating: '4.9',
    reviewCount: '185',
    description: 'Buy warmed Mailgun SMTP relay accounts with verified custom domains, dedicated IPs, and high-volume sending limits.',
  },
  {
    id: 'buy-smtp-brevo-accounts',
    name: 'Buy SMTP Brevo Accounts',
    category: 'Email Service',
    categorySlug: 'email-service',
    startingPrice: '95',
    rating: '4.8',
    reviewCount: '142',
    description: 'Buy Brevo (formerly Sendinblue) SMTP accounts with pre-warmed IPs, high transactional inbox placement, and API key access.',
  },
  {
    id: 'buy-smtp-relay-services-account',
    name: 'Buy SMTP Relay Services Account',
    category: 'Email Service',
    categorySlug: 'email-service',
    startingPrice: '85',
    rating: '4.8',
    reviewCount: '159',
    description: 'High-deliverability enterprise SMTP relay services for newsletters, automated transactional emails, and marketing campaigns.',
  },
];

console.log('Generating pre-rendered SEO static HTML entry points...');

targetDirs.forEach((outDir) => {
  // 1. Generate Home Page with refined SEO
  const homeHtml = injectMetadata(baseHtml, {
    title: 'GolfCrater | Verified Digital Marketplace & Professional Business Services',
    description: 'GolfCrater is the premier digital marketplace for verified digital products, business accounts, reputation management, and online professional solutions with fast delivery and secure checkout.',
    canonicalUrl: `${BASE_URL}/`,
    bodyH1: 'GolfCrater — Premier Digital Marketplace & Business Services',
    bodyContent: `
      <p class="text-slate-600 mb-6">Welcome to GolfCrater, your trusted digital hub for authentic reputation management, verified payment infrastructure, cryptocurrency exchange solutions, and email marketing assets.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="p-4 border border-slate-200 rounded-xl bg-slate-50"><h2 class="font-bold text-slate-900 mb-1">Reputation Management</h2><p class="text-xs text-slate-600">Google, Trustpilot, Yelp, and BBB 5-star verified reviews.</p><a href="/category/reviews" class="text-xs text-emerald-600 font-semibold block mt-2">Explore Reviews →</a></div>
        <div class="p-4 border border-slate-200 rounded-xl bg-slate-50"><h2 class="font-bold text-slate-900 mb-1">Bank & Payment Accounts</h2><p class="text-xs text-slate-600">Cash App, PayPal, Stripe, Wise, and Payoneer accounts.</p><a href="/category/bank-account" class="text-xs text-emerald-600 font-semibold block mt-2">Explore Accounts →</a></div>
        <div class="p-4 border border-slate-200 rounded-xl bg-slate-50"><h2 class="font-bold text-slate-900 mb-1">Crypto & SMTP</h2><p class="text-xs text-slate-600">Binance, Coinbase, aged Gmail, and dedicated SMTP relays.</p><a href="/category/crypto-account" class="text-xs text-emerald-600 font-semibold block mt-2">Explore Crypto →</a></div>
      </div>
      <p class="text-sm"><a href="/shop" class="inline-block px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg">View All Marketplace Products</a></p>
    `,
  });
  ensureDirAndWriteFile(outDir, 'index.html', homeHtml);

  // 2. Generate Top Level Pages (shop, contact, track-order)
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
    const catHtml = injectMetadata(baseHtml, {
      title: cat.title,
      description: cat.description,
      canonicalUrl: cat.canonicalUrl,
      breadcrumbs: cat.breadcrumbs,
      bodyH1: cat.bodyH1,
      bodyContent: `
        ${cat.bodyContent}
        <h2 class="text-lg font-bold mt-6 mb-3 text-slate-900">Featured ${cat.name} Packages</h2>
        <ul class="space-y-2 mb-6">
          ${products
            .filter((p) => p.categorySlug === cat.slug)
            .map(
              (p) =>
                `<li class="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between"><a href="/product/${p.id}" class="font-semibold text-slate-800 hover:text-emerald-600">${p.name}</a><span class="text-xs font-bold text-emerald-600">From $${p.startingPrice}</span></li>`
            )
            .join('')}
        </ul>
        <a href="/shop" class="text-emerald-600 font-semibold">← View All Marketplace Categories</a>
      `,
    });

    ensureDirAndWriteFile(path.join(outDir, 'category', cat.slug), 'index.html', catHtml);
    if (cat.alias) {
      ensureDirAndWriteFile(path.join(outDir, 'category', cat.alias), 'index.html', catHtml);
    }
  });

  // 4. Generate Product Pages with Product Schema
  products.forEach((prod) => {
    const canonicalUrl = `${BASE_URL}/product/${prod.id}`;
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: prod.name,
      description: prod.description,
      image: [`${BASE_URL}/icon-512.png`],
      sku: `GC-${prod.id.toUpperCase()}`,
      brand: {
        '@type': 'Brand',
        name: 'GolfCrater',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: prod.startingPrice,
        availability: 'https://schema.org/InStock',
        url: canonicalUrl,
        seller: {
          '@type': 'Organization',
          name: 'GolfCrater',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: prod.rating,
        reviewCount: prod.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    };

    const prodHtml = injectMetadata(baseHtml, {
      title: `${prod.name} | Verified Services & Instant Delivery | GolfCrater`,
      description: prod.description,
      canonicalUrl,
      ogType: 'product',
      breadcrumbs: [
        { name: 'Home', url: BASE_URL },
        { name: prod.category, url: `${BASE_URL}/category/${prod.categorySlug}` },
        { name: prod.name, url: canonicalUrl },
      ],
      schema: productSchema,
      bodyH1: prod.name,
      bodyContent: `
        <div class="mb-4 flex items-center gap-3 text-sm text-slate-600">
          <span class="font-bold text-emerald-600 text-base">Starting from $${prod.startingPrice}</span>
          <span>•</span>
          <span class="font-semibold text-amber-500">★ ${prod.rating} (${prod.reviewCount} verified reviews)</span>
          <span>•</span>
          <span>Category: <a href="/category/${prod.categorySlug}" class="text-emerald-600 underline">${prod.category}</a></span>
        </div>
        <p class="text-slate-700 leading-relaxed mb-6">${prod.description}</p>
        <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-6">
          <h2 class="font-bold text-slate-900 mb-2">Service Highlights</h2>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
            <li>Fully verified credentials and documentation included</li>
            <li>Guaranteed 60-day replacement warranty protection</li>
            <li>24/7 dedicated customer service and real-time order tracking</li>
            <li>Multiple secure payment methods: BSC, TRX, ETH, SOL, BTC, LTC, DOGE, Skrill, Bank SWIFT/ACH</li>
          </ul>
        </div>
        <a href="/category/${prod.categorySlug}" class="text-emerald-600 font-semibold">← Browse More in ${prod.category}</a>
      `,
    });

    ensureDirAndWriteFile(path.join(outDir, 'product', prod.id), 'index.html', prodHtml);
  });

  // 5. Generate a dedicated 404.html page
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

  // 6. Ensure exact robots.txt and valid sitemap.xml are in output directories
  const robotsPath = path.join(rootDir, 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    ensureDirAndWriteFile(outDir, 'robots.txt', fs.readFileSync(robotsPath, 'utf8'));
  }

  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    ensureDirAndWriteFile(outDir, 'sitemap.xml', fs.readFileSync(sitemapPath, 'utf8'));
  }
});

console.log('Successfully generated all pre-rendered static HTML route entry points in docs/ and dist/!');
