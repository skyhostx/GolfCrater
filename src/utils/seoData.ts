import { Product } from '../types';
import { categoryToSlug } from './navigation';

export interface PageSeoMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'product';
  ogImage?: string;
  breadcrumbs: { name: string; url: string }[];
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const BASE_URL = 'https://golfcrater.com';
const DEFAULT_IMAGE = `${BASE_URL}/icon-512.png`;

export const getCategorySeo = (categoryName: string): { title: string; description: string; canonical: string } => {
  const slug = categoryToSlug(categoryName);
  const canonical = `${BASE_URL}/category/${slug}`;

  switch (categoryName) {
    case 'Reviews':
    case 'Reviews Service':
      return {
        title: 'Buy Verified Google, Trustpilot & Yelp Reviews | GolfCrater',
        description: 'Elevate your brand reputation with authentic 5-star reviews for Google Maps, Trustpilot, Yelp, BBB, and G2. Geo-targeted, non-drop, and 60-day warranty.',
        canonical,
      };
    case 'Bank Account':
      return {
        title: 'Buy Verified Bank Accounts (Cash App, PayPal, Stripe, Wise) | GolfCrater',
        description: 'Explore verified business banking accounts, merchant gateways, and payment solutions including Cash App, PayPal, Stripe, Wise, Payoneer, and Revolut.',
        canonical,
      };
    case 'Crypto Account':
      return {
        title: 'Buy Verified Crypto Accounts (Binance, Coinbase, Kraken) | GolfCrater',
        description: 'Fully KYC-verified cryptocurrency exchange accounts with high deposit and withdrawal limits. Verified Binance, Coinbase, Kraken, and MoonPay solutions.',
        canonical,
      };
    case 'SMM Account':
      return {
        title: 'Buy Verified SMM Accounts & Creator Profiles | GolfCrater',
        description: 'Accelerate your social reach with aged, verified social media marketing accounts, creator channels, and established follower bases.',
        canonical,
      };
    case 'Email Service':
      return {
        title: 'Buy Aged Gmail Accounts & Dedicated SMTP Relay Services | GolfCrater',
        description: 'High-inbox delivery email infrastructure, aged phone-verified Gmail accounts, Mailgun SMTP, and Brevo relay servers for reliable transactional outreach.',
        canonical,
      };
    default:
      return {
        title: `Buy Verified ${categoryName} Services & Digital Accounts | GolfCrater`,
        description: `Explore premium verified ${categoryName.toLowerCase()} solutions on GolfCrater. Fast automated processing, 100% security guarantee, and 24/7 live assistance.`,
        canonical,
      };
  }
};

export const getProductSeo = (product: Product): PageSeoMeta => {
  const canonicalUrl = `${BASE_URL}/product/${product.id}`;
  const catSlug = categoryToSlug(product.category);

  // Compute pricing range for aggregate offer
  const prices = product.variants.map((v) => v.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const productJsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription || product.shortDescription,
    image: [DEFAULT_IMAGE],
    sku: `GC-${product.id.toUpperCase()}`,
    mpn: `MPN-${product.id.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: 'GolfCrater',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: minPrice.toFixed(2),
      highPrice: maxPrice.toFixed(2),
      offerCount: product.variants.length.toString(),
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
      seller: {
        '@type': 'Organization',
        name: 'GolfCrater',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  };

  return {
    title: `${product.name} - 100% Verified & Guaranteed | GolfCrater`,
    description: product.metaDescription || product.shortDescription,
    canonicalUrl,
    ogType: 'product',
    ogImage: DEFAULT_IMAGE,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: product.category, url: `/category/${catSlug}` },
      { name: product.name, url: `/product/${product.id}` },
    ],
    jsonLd: productJsonLd,
  };
};

export const getSiteStructuredData = () => {
  return [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'GolfCrater',
      description: 'Verified Digital Marketplace & Professional Business Services',
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/shop?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'GolfCrater',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/icon-512.png`,
      description: 'Premier digital marketplace for verified accounts, business services, reputation management, and online professional solutions.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
    },
  ];
};
