export type AppRoute =
  | { page: 'home' }
  | { page: 'shop' }
  | { page: 'category'; category: string }
  | { page: 'product'; productId: string }
  | { page: 'contact' }
  | { page: 'track-order' }
  | { page: 'not-found' };

export const categoryToSlug = (cat: string): string => {
  const normalized = cat.trim();
  const map: Record<string, string> = {
    'Bank Account': 'bank-account',
    'Crypto Account': 'crypto-account',
    'Reviews': 'reviews',
    'Reviews Service': 'reviews',
    'SMM Account': 'smm-account',
    'Email Service': 'email-service',
    'Digital Tools': 'digital-tools',
  };
  if (map[normalized]) return map[normalized];
  return normalized.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

export const slugToCategory = (slug: string): string => {
  const map: Record<string, string> = {
    'bank-account': 'Bank Account',
    'bank': 'Bank Account',
    'crypto-account': 'Crypto Account',
    'crypto': 'Crypto Account',
    'reviews': 'Reviews',
    'reviews-service': 'Reviews',
    'review': 'Reviews',
    'smm-account': 'SMM Account',
    'smm': 'SMM Account',
    'email-service': 'Email Service',
    'email': 'Email Service',
    'digital-tools': 'Digital Tools',
  };
  return map[slug.toLowerCase()] || 'All';
};

/**
 * Detects base repository path if hosted under a GitHub Pages subfolder (e.g. username.github.io/repo)
 * On custom domain (e.g. golfcrater.com) or root hosting, returns empty string ''.
 */
export const getBasePath = (): string => {
  if (typeof window === 'undefined') return '';
  const hostname = window.location.hostname;
  
  // If hosted on GitHub Pages subfolder
  if (hostname.endsWith('github.io')) {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      const first = segments[0].toLowerCase();
      // If first segment is not one of our standard top-level routes, it's the repo name
      if (!['category', 'product', 'shop', 'contact', 'track-order', 'orders'].includes(first)) {
        return `/${segments[0]}`;
      }
    }
  }
  return '';
};

/**
 * Converts an AppRoute into a clean path URL (e.g., "/category/crypto-account")
 */
export const routeToPath = (route: AppRoute): string => {
  const base = getBasePath();
  switch (route.page) {
    case 'home':
      return base ? `${base}/` : '/';
    case 'shop':
      return `${base}/shop`;
    case 'category':
      return `${base}/category/${categoryToSlug(route.category)}`;
    case 'product':
      return `${base}/product/${route.productId}`;
    case 'contact':
      return `${base}/contact`;
    case 'track-order':
      return `${base}/track-order`;
    case 'not-found':
      return `${base}/404`;
    default:
      return base ? `${base}/` : '/';
  }
};

/**
 * Parses path segments into an AppRoute
 */
const parseRouteSegments = (segmentsString: string): AppRoute => {
  const clean = segmentsString.replace(/^\/+|\/+$/g, '').trim();
  if (!clean || clean === 'home') {
    return { page: 'home' };
  }
  if (clean === 'shop' || clean === 'products' || clean === 'store') {
    return { page: 'shop' };
  }
  if (clean === 'contact' || clean === 'help' || clean === 'support') {
    return { page: 'contact' };
  }
  if (clean === 'track-order' || clean === 'orders' || clean === 'track') {
    return { page: 'track-order' };
  }
  if (clean === '404' || clean === 'not-found') {
    return { page: 'not-found' };
  }

  const parts = clean.split('/');
  if (parts[0] === 'category') {
    if (!parts[1]) return { page: 'shop' };
    const decodedCategory = decodeURIComponent(parts[1]);
    return { page: 'category', category: slugToCategory(decodedCategory) };
  }
  if (parts[0] === 'product') {
    if (!parts[1]) return { page: 'shop' };
    const decodedProductId = decodeURIComponent(parts[1]);
    return { page: 'product', productId: decodedProductId };
  }

  return { page: 'not-found' };
};

/**
 * Converts current pathname (or search/hash fallback) into an AppRoute
 */
export const pathToRoute = (pathname?: string, hash?: string): AppRoute => {
  if (typeof window === 'undefined') return { page: 'home' };

  // If redirected via GitHub Pages SPA query parameter (e.g., /?/category/crypto-account)
  if (window.location.search && window.location.search.startsWith('?/')) {
    const rawSearch = window.location.search.slice(2).split('&')[0];
    const cleanSearch = decodeURIComponent(rawSearch.replace(/~and~/g, '&'));
    if (cleanSearch) {
      return parseRouteSegments(cleanSearch);
    }
  }

  const currentHash = hash !== undefined ? hash : window.location.hash;
  const currentPath = pathname !== undefined ? pathname : window.location.pathname;

  // If a hash exists (e.g., legacy #/category/crypto-account), honor and restore it
  if (currentHash && currentHash.length > 1) {
    const cleanHash = currentHash.replace(/^#\/?/, '').trim();
    if (cleanHash) {
      return parseRouteSegments(cleanHash);
    }
  }

  // Handle clean pathname
  const base = getBasePath();
  let pathOnly = currentPath;
  if (base && pathOnly.startsWith(base)) {
    pathOnly = pathOnly.slice(base.length);
  }

  return parseRouteSegments(pathOnly);
};

export const getCurrentRoute = (): AppRoute => {
  return pathToRoute(window.location.pathname, window.location.hash);
};

// Backward-compatible helpers
export const routeToHash = (route: AppRoute): string => {
  return `#${routeToPath(route)}`;
};

export const hashToRoute = (hash: string): AppRoute => {
  return pathToRoute('/', hash);
};
