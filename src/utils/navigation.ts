export type AppRoute =
  | { page: 'home' }
  | { page: 'shop' }
  | { page: 'category'; category: string }
  | { page: 'product'; productId: string }
  | { page: 'contact' }
  | { page: 'track-order' };

export const categoryToSlug = (cat: string): string => {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

export const slugToCategory = (slug: string): string => {
  const map: Record<string, string> = {
    'bank-account': 'Bank Account',
    'crypto-account': 'Crypto Account',
    'reviews-service': 'Reviews Service',
    'reviews': 'Reviews Service',
    'smm-account': 'SMM Account',
    'email-service': 'Email Service',
    'digital-tools': 'Digital Tools',
  };
  return map[slug] || 'All';
};

export const routeToHash = (route: AppRoute): string => {
  switch (route.page) {
    case 'home':
      return '#/';
    case 'shop':
      return '#/shop';
    case 'category':
      return `#/category/${categoryToSlug(route.category)}`;
    case 'product':
      return `#/product/${route.productId}`;
    case 'contact':
      return '#/contact';
    case 'track-order':
      return '#/track-order';
    default:
      return '#/';
  }
};

export const hashToRoute = (hash: string): AppRoute => {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean || clean === 'home') {
    return { page: 'home' };
  }
  if (clean === 'shop' || clean === 'products') {
    return { page: 'shop' };
  }
  if (clean === 'contact') {
    return { page: 'contact' };
  }
  if (clean === 'track-order' || clean === 'orders' || clean === 'account') {
    return { page: 'track-order' };
  }

  const parts = clean.split('/');
  if (parts[0] === 'category' && parts[1]) {
    return { page: 'category', category: slugToCategory(parts[1]) };
  }
  if (parts[0] === 'product' && parts[1]) {
    return { page: 'product', productId: parts[1] };
  }

  return { page: 'home' };
};
