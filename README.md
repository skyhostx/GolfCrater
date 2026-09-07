# GolfCrater — Verified Digital Marketplace & Professional Services

GolfCrater is a modern, responsive digital marketplace built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## ⚡ How to Fix the "Blank White Page" on GitHub Pages

If your site was showing a blank white page on GitHub, it was caused by one of two common GitHub Pages configuration issues:

### Solution: Choose Option 1 (Easiest) or Option 2

### ✅ Option 1: Deploy from the `/docs` Folder (Recommended & Fastest)
GitHub Pages **cannot run raw TypeScript files from the repository root**. We have pre-compiled the entire application into the `/docs` folder so it works right out of the box with zero build configuration!

1. Open your repository on GitHub.
2. Go to **Settings** → **Pages** (in the left navigation).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` (or `master`)
   - **Folder**: Select `/docs` **(do NOT select `/ (root)`)**
4. Click **Save**.
5. Wait 30–60 seconds, then refresh your site URL (`https://<username>.github.io/<repo>/`). The full site will load with all styles and products!

---

### ✅ Option 2: Deploy using Automated GitHub Actions

If you prefer GitHub to build the website automatically on every `git push`:

1. Open your repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `GitHub Actions`
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site using the included `package-lock.json` and publish it.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build both /dist and /docs for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌟 Key Features

- **Multi-Page Hash Routing**: Smooth navigation across pages (`#/`, `#/shop`, `#/category/bank-account`, `#/product/buy-google-reviews`, `#/contact`, `#/track-order`) with browser back/forward support.
- **Full Product Pages**: Dedicated pages for each service with custom requirement inputs, real-time package tier calculation, instant checkout, and technical charters.
- **Trailing Slash Normalizer**: Automatically ensures relative assets (`./assets/...`) resolve without 404 errors on GitHub Pages subfolder paths.
- **Error Boundary & Pre-loader**: Integrated fallback error handling and a branded pre-render loader to prevent blank white screens.
