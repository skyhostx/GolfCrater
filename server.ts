import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

// List of all valid product IDs for exact route validation
const VALID_PRODUCT_IDS = new Set([
  'buy-google-reviews',
  'buy-trustpilot-reviews',
  'buy-facebook-reviews',
  'buy-amazon-reviews',
  'buy-yelp-reviews',
  'buy-bbb-reviews',
  'buy-verified-g2-reviews',
  'buy-glassdoor-reviews',
  'buy-verified-cash-app-accounts',
  'buy-verified-paypal-account',
  'buy-verified-wise-account',
  'buy-verified-payoneer-account',
  'buy-verified-stripe-account',
  'buy-verified-revolut-account',
  'buy-verified-binance-account',
  'buy-verified-coinbase-account',
  'buy-verified-kraken-accounts',
  'buy-moonpay-account',
  'buy-verified-smm-accounts',
  'buy-gmail-accounts',
  'buy-smtp-mailgun-accounts',
  'buy-smtp-brevo-accounts',
  'buy-smtp-relay-services-account',
]);

// List of all valid category slugs
const VALID_CATEGORY_SLUGS = new Set([
  'reviews',
  'reviews-service',
  'bank-account',
  'crypto-account',
  'smm-account',
  'email-service',
  'digital-tools',
]);

// Top level known pages
const VALID_TOP_LEVEL_PAGES = new Set([
  '',
  'about',
  'services',
  'pricing',
  'blog',
  'faq',
  'shop',
  'contact',
  'track-order',
  'orders',
  'cart',
  'checkout',
]);

/**
 * Validates if a requested path is a recognized application route.
 */
function isValidRoute(pathname: string): boolean {
  const clean = pathname.replace(/^\/+|\/+$/g, '').trim().toLowerCase();
  
  if (VALID_TOP_LEVEL_PAGES.has(clean)) {
    return true;
  }

  const parts = clean.split('/');
  if (parts[0] === 'category') {
    return parts.length === 2 && VALID_CATEGORY_SLUGS.has(parts[1]);
  }
  if (parts[0] === 'product') {
    return parts.length === 2 && VALID_PRODUCT_IDS.has(parts[1]);
  }

  return false;
}

async function startServer() {
  const app = express();
  const distPath = path.join(process.cwd(), 'dist');

  // API Healthcheck route
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Exact robots.txt endpoint
  const ROBOTS_TXT_CONTENT = `User-agent: *
Allow: /

Disallow: /api/
Disallow: /checkout
Disallow: /cart
Disallow: /orders
Disallow: /dashboard
Disallow: /login
Disallow: /admin

Sitemap: https://golfcrater.com/sitemap.xml
`;

  app.get('/robots.txt', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(ROBOTS_TXT_CONTENT);
  });

  // Dynamic sitemap.xml endpoint containing all public pages with canonical URLs
  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    const today = new Date().toISOString().split('T')[0];
    const baseUrl = 'https://golfcrater.com';

    const corePages = [
      { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
      { loc: `${baseUrl}/about`, priority: '0.8', changefreq: 'monthly' },
      { loc: `${baseUrl}/services`, priority: '0.85', changefreq: 'weekly' },
      { loc: `${baseUrl}/pricing`, priority: '0.85', changefreq: 'weekly' },
      { loc: `${baseUrl}/blog`, priority: '0.75', changefreq: 'weekly' },
      { loc: `${baseUrl}/faq`, priority: '0.75', changefreq: 'monthly' },
      { loc: `${baseUrl}/shop`, priority: '0.9', changefreq: 'daily' },
      { loc: `${baseUrl}/contact`, priority: '0.6', changefreq: 'monthly' },
      { loc: `${baseUrl}/track-order`, priority: '0.6', changefreq: 'weekly' },
    ];

    const categorySlugs = [
      'reviews',
      'bank-account',
      'crypto-account',
      'smm-account',
      'email-service',
      'digital-tools',
    ];

    const productSlugs = Array.from(VALID_PRODUCT_IDS);

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Core Pages
    for (const page of corePages) {
      sitemap += `  <url>\n    <loc>${page.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
    }

    // Category Pages
    for (const cat of categorySlugs) {
      sitemap += `  <url>\n    <loc>${baseUrl}/category/${cat}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
    }

    // Product Pages
    for (const prod of productSlugs) {
      sitemap += `  <url>\n    <loc>${baseUrl}/product/${prod}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    }

    sitemap += '</urlset>\n';

    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(sitemap);
  });

  if (!isProd) {
    // Development mode with Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'custom',
    });

    // Let Vite handle internal assets and HMR/requests
    app.use(vite.middlewares);

    // Development fallback handler with true HTTP 404 status for unknown routes
    app.use('*', async (req: Request, res: Response, next: NextFunction) => {
      const url = req.originalUrl.split('?')[0];

      // Skip assets or files with extensions that vite might have passed
      if (path.extname(url)) {
        return next();
      }

      try {
        const isKnown = isValidRoute(url);
        const indexPath = path.resolve(process.cwd(), 'index.html');
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        if (!isKnown || url === '/404') {
          // Serve true HTTP 404 status code
          res.status(404);
          
          // Replace title with 404 page title
          template = template.replace(/<title>[\s\S]*?<\/title>/i, '<title>404 — Page Not Found | GolfCrater</title>');
          
          // Replace canonical link
          template = template.replace(/<link\s+rel="canonical"[\s\S]*?>/i, '<link rel="canonical" href="https://golfcrater.com/404" />');

          // Replace robots tags
          template = template.replace(/<meta\s+name="robots"[\s\S]*?>/gi, '<meta name="robots" content="noindex, follow" />');
          template = template.replace(/<meta\s+name="googlebot"[\s\S]*?>/gi, '<meta name="googlebot" content="noindex, follow" />');

          // Replace root container shell with complete 404 fallback HTML
          template = template.replace(
            /<div id="root">[\s\S]*?<\/div>\s*<script/i,
            `<div id="root"><main class="min-h-screen bg-white text-slate-900 flex items-center justify-center p-6 text-center"><div class="max-w-md"><div class="text-6xl font-black text-emerald-600 mb-3">404</div><h1 class="text-3xl font-black text-slate-900 mb-2">Page Not Found</h1><p class="text-slate-600 mb-6 text-sm">The URL you requested does not exist on GolfCrater. You can browse our marketplace or contact support.</p><div class="flex flex-wrap justify-center gap-3"><a href="/" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm shadow-xs hover:bg-emerald-700">Return to Homepage</a><a href="/shop" class="px-5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200">Browse Shop</a></div></div></main></div>\n    <script`
          );
        } else {
          res.status(200);
        }

        res.setHeader('Content-Type', 'text/html');
        return res.end(template);
      } catch (err) {
        vite.ssrFixStacktrace(err as Error);
        next(err);
      }
    });
  } else {
    // Production Mode: Static asset serving & pre-rendered route files
    app.use(express.static(distPath, { index: false }));

    app.use('*', (req: Request, res: Response) => {
      const url = req.originalUrl.split('?')[0];
      const clean = url.replace(/^\/+|\/+$/g, '').trim();

      // Explicit /404 request
      if (clean === '404') {
        const notFoundPath = path.join(distPath, '404.html');
        if (fs.existsSync(notFoundPath)) {
          return res.status(404).sendFile(notFoundPath);
        }
        return res.status(404).sendFile(path.join(distPath, 'index.html'));
      }

      // Check if valid route
      const isKnown = isValidRoute(url);

      if (!isKnown) {
        // Return HTTP 404 Not Found status with custom 404.html
        const notFoundPath = path.join(distPath, '404.html');
        if (fs.existsSync(notFoundPath)) {
          return res.status(404).sendFile(notFoundPath);
        }
        return res.status(404).sendFile(path.join(distPath, 'index.html'));
      }

      // If pre-rendered HTML file exists for this specific route, send it with HTTP 200
      const specificFilePath = path.join(distPath, clean, 'index.html');
      if (clean && fs.existsSync(specificFilePath)) {
        return res.status(200).sendFile(specificFilePath);
      }

      // Default home/fallback index.html with HTTP 200
      return res.status(200).sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} in ${isProd ? 'production' : 'development'} mode`);
  });
}

startServer();
