import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const indexHtmlPath = path.join(docsDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('docs/index.html not found! Run vite build first.');
  process.exit(1);
}

const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Categories
const categories = [
  'email-service',
  'bank-account',
  'crypto-account',
  'reviews',
  'reviews-service',
  'smm-account',
  'digital-tools',
];

// Top-level routes
const topRoutes = ['shop', 'contact', 'track-order', 'orders'];

// All product IDs
const products = [
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
];

function ensureDirAndWriteFile(targetDir, fileName, content) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, fileName), content, 'utf8');
}

console.log('Generating static HTML entry points for GitHub Pages deep linking...');

// Top-level routes
topRoutes.forEach((route) => {
  const dir = path.join(docsDir, route);
  ensureDirAndWriteFile(dir, 'index.html', htmlContent);
});

// Category routes
categories.forEach((cat) => {
  const dir = path.join(docsDir, 'category', cat);
  ensureDirAndWriteFile(dir, 'index.html', htmlContent);
});

// Product routes
products.forEach((prod) => {
  const dir = path.join(docsDir, 'product', prod);
  ensureDirAndWriteFile(dir, 'index.html', htmlContent);
});

// Also make docs/404.html a copy of index.html so dynamic or arbitrary URLs load the SPA cleanly
fs.writeFileSync(path.join(docsDir, '404.html'), htmlContent, 'utf8');

console.log('Successfully generated all static HTML route entry points in docs/!');
