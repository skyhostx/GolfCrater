# GolfCrater — Verified Digital Marketplace

GolfCrater is a modern eCommerce web platform built with React 19, Vite, TypeScript, and Tailwind CSS. It is configured for instant hosting and deployment, including **GitHub Pages**, Vercel, Netlify, and Cloud Run.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub & GitHub Pages

This repository is pre-configured with **relative asset paths** (`base: './'` in `vite.config.ts`), hash-based client routing, and a GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Method 1: Automated GitHub Actions (Recommended)

1. Push your repository to GitHub (`main` or `master` branch).
2. Go to your repository on GitHub: **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site with `npm run build` and deploy the `dist/` directory directly to GitHub Pages whenever you push code!

### Method 2: Manual Branch Deployment (gh-pages)

1. Build the production files:
   ```bash
   npm run build
   ```
2. The compiled static website is generated in the `dist/` folder.
3. In your repository on GitHub: **Settings** → **Pages**, select your branch (e.g. `gh-pages` or `main`), set folder to `/` or `/docs`, and save.

---

## 🛠️ Features Included

- **Multi-Page Hash Routing**: Clean URLs (`#/`, `#/shop`, `#/category/bank-account`, `#/product/buy-google-reviews`, `#/contact`, `#/track-order`) compatible with GitHub Pages without server rewrite issues.
- **Product & Category Showcases**: Full catalog with filtering, sorting, real-time search, and product detail views.
- **Shopping Cart & Checkout**: Interactive cart drawer, discount promo codes (`GOLF20`), instant order generation, and invoice downloads.
- **Order Tracking & Live Status**: Instant lookup of orders, encrypted credentials docket, and delivery progress tracking.
