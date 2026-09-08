import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'product' | 'article';
  ogImage?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_DOMAIN = 'https://golfcrater.com';
const DEFAULT_IMAGE = 'https://golfcrater.com/icon-512.png';
const SITE_NAME = 'GolfCrater';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  breadcrumbs,
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Meta description
    setMetaTag('name', 'description', description);

    // 3. Robots meta directives
    const robotsDirective = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('name', 'robots', robotsDirective);
    setMetaTag('name', 'googlebot', robotsDirective);

    // 4. Canonical URL
    const cleanCanonical = canonicalUrl
      ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${DEFAULT_DOMAIN}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}`)
      : `${DEFAULT_DOMAIN}${window.location.pathname}`;
    setLinkTag('canonical', cleanCanonical);

    // 5. Open Graph tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', cleanCanonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // 6. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@golfcrater');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. Inject / update Structured Data (JSON-LD)
    const scriptId = 'dynamic-seo-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const structuredGraph: any[] = [];

    // Add breadcrumb schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredGraph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${DEFAULT_DOMAIN}${b.url.startsWith('/') ? '' : '/'}${b.url}`,
        })),
      });
    }

    // Add custom jsonLd if provided
    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        structuredGraph.push(...jsonLd);
      } else {
        structuredGraph.push(jsonLd);
      }
    }

    if (structuredGraph.length > 0) {
      const graphWrapper = {
        '@context': 'https://schema.org',
        '@graph': structuredGraph,
      };
      scriptElement.textContent = JSON.stringify(graphWrapper);
    } else {
      scriptElement.textContent = '';
    }

    return () => {
      // Clean up dynamic script when unmounting if needed
    };
  }, [title, description, canonicalUrl, ogType, ogImage, noIndex, breadcrumbs, jsonLd]);

  return null;
};
