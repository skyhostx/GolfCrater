// Official Brand Vector Logos as lightweight, standalone Data URIs for GolfCrater products

const svgToDataUri = (svg: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};

export const PRODUCT_LOGOS: Record<string, string> = {
  // 1. Google Reviews
  'buy-google-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <g transform="translate(40, 40) scale(5)">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </g>
    </svg>
  `),

  // 2. Trustpilot Reviews
  'buy-trustpilot-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#00b67a"/>
      <path d="M100 35 L124 85 L180 93 L139 133 L149 188 L100 162 L51 188 L61 133 L20 93 L76 85 Z" fill="#ffffff"/>
      <path d="M100 35 L100 162 L51 188 L61 133 L20 93 L76 85 Z" fill="#005128" opacity="0.2"/>
    </svg>
  `),

  // 3. Facebook Reviews
  'buy-facebook-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#0866FF"/>
      <path fill="#ffffff" d="M145 100h-25v85H88v-85H73V73h15V54c0-14.8 8.8-23 22.3-23 6.5 0 13.2 1.2 13.2 1.2v14.6h-7.4c-7.3 0-9.6 4.5-9.6 9.2V73h16.4l-2.6 27z"/>
    </svg>
  `),

  // 4. Amazon Reviews
  'buy-amazon-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#131921"/>
      <text x="100" y="105" text-anchor="middle" fill="#FFFFFF" font-size="70" font-weight="900" font-family="Arial, sans-serif">a</text>
      <path d="M50 135 c30 20 70 20 100 0" stroke="#FF9900" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M142 128 l12 7 l-14 6 z" fill="#FF9900"/>
    </svg>
  `),

  // 5. Yelp Reviews
  'buy-yelp-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#D32323"/>
      <g transform="translate(100,105) scale(2.2)">
        <path fill="#ffffff" d="M0 -32 c-4 0 -7 3 -7 7 l0 17 c0 4 3 7 7 7 c4 0 7 -3 7 -7 l0 -17 c0 -4 -3 -7 -7 -7 z"/>
        <path fill="#ffffff" d="M-28 -9 c-3 -3 -8 -2 -10 1 l-9 14 c-2 3 -1 8 2 10 c3 3 8 2 10 -1 l9 -14 c2 -3 1 -8 -2 -10 z"/>
        <path fill="#ffffff" d="M-17 25 c-1 4 1 8 5 9 l16 5 c4 1 8 -1 9 -5 c1 -4 -1 -8 -5 -9 l-16 -5 c-4 -1 -8 1 -9 5 z"/>
        <path fill="#ffffff" d="M17 25 c1 4 -1 8 -5 9 l-16 5 c-4 1 -8 -1 -9 -5 c-1 -4 1 -8 5 -9 l16 -5 c4 -1 8 1 9 5 z"/>
        <path fill="#ffffff" d="M28 -9 c3 -3 8 -2 10 1 l9 14 c2 3 1 8 -2 10 c-3 3 -8 2 -10 -1 l-9 -14 c-2 -3 -1 -8 2 -10 z"/>
      </g>
    </svg>
  `),

  // 6. BBB Reviews
  'buy-bbb-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#005A70"/>
      <text x="100" y="105" text-anchor="middle" fill="#FFFFFF" font-size="44" font-weight="900" font-family="Arial, sans-serif" letter-spacing="-2">BBB</text>
      <text x="100" y="135" text-anchor="middle" fill="#FBBF24" font-size="14" font-weight="800" font-family="Arial, sans-serif" letter-spacing="3">ACCREDITED</text>
    </svg>
  `),

  // 7. G2 Reviews
  'buy-verified-g2-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#FF492C"/>
      <text x="75" y="125" text-anchor="middle" fill="#FFFFFF" font-size="80" font-weight="900" font-family="Arial, sans-serif">G</text>
      <text x="135" y="125" text-anchor="middle" fill="#FFE500" font-size="80" font-weight="900" font-family="Arial, sans-serif">2</text>
    </svg>
  `),

  // 8. Glassdoor Reviews
  'buy-glassdoor-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#0CAA41"/>
      <rect x="50" y="45" width="100" height="110" rx="16" fill="#ffffff"/>
      <rect x="65" y="65" width="70" height="15" rx="4" fill="#0CAA41"/>
      <rect x="65" y="92" width="70" height="15" rx="4" fill="#0CAA41"/>
      <rect x="65" y="120" width="40" height="15" rx="4" fill="#0CAA41"/>
    </svg>
  `),

  // 9. Cash App Accounts
  'buy-verified-cash-app-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#00D632"/>
      <text x="100" y="135" text-anchor="middle" fill="#FFFFFF" font-size="105" font-weight="900" font-family="Arial, sans-serif">$</text>
    </svg>
  `),

  // 10. PayPal Account
  'buy-verified-paypal-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#003087"/>
      <g transform="translate(50, 45) scale(4)">
        <path d="M7.5 21L9.6 7.5H15c3.3 0 5.4 1.7 4.9 4.8-.4 2.8-2.6 4.7-5.5 4.7H11.5l-.9 5.5H7.5z" fill="#0079C1"/>
        <path d="M5.5 19L7.6 5.5H13c3.3 0 5.4 1.7 4.9 4.8-.4 2.8-2.6 4.7-5.5 4.7H9.5l-.9 5.5H5.5z" fill="#00457C"/>
        <path d="M9.5 15H12.4c2.9 0 5.1-1.9 5.5-4.7.5-3.1-1.6-4.8-4.9-4.8H7.6L5.5 19h3.1l.9-5.5z" fill="#0079C1"/>
      </g>
    </svg>
  `),

  // 11. Wise Account
  'buy-verified-wise-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#9FE870"/>
      <g transform="translate(45, 45) scale(4.5)" fill="#163300">
        <path d="M3.5 19.5L10 4.5h4L7.5 19.5h-4zm7-7.5l2.5-5.5h7l-6 13h-4l3-7.5h-2.5z"/>
      </g>
    </svg>
  `),

  // 12. Payoneer Account
  'buy-verified-payoneer-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#FF4800"/>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#FFFFFF" stroke-width="16"/>
    </svg>
  `),

  // 13. Stripe Account
  'buy-verified-stripe-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#635BFF"/>
      <text x="100" y="118" text-anchor="middle" fill="#FFFFFF" font-size="46" font-weight="900" font-family="Arial, sans-serif" letter-spacing="-1">stripe</text>
    </svg>
  `),

  // 14. Revolut Account
  'buy-verified-revolut-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#191C1F"/>
      <text x="100" y="135" text-anchor="middle" fill="#FFFFFF" font-size="110" font-weight="900" font-family="Arial, sans-serif">R</text>
    </svg>
  `),

  // 15. Binance Account
  'buy-verified-binance-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#181A20"/>
      <g transform="translate(42, 42) scale(4.8)" fill="#F3BA2F">
        <path d="M12 2l3.09 3.09L7.5 12.68l-3.09-3.09L12 2zm6.91 6.91L22 12l-3.09 3.09-3.09-3.09 3.09-3.09zm-6.91 6.91l7.59-7.59L22 12l-10 10-10-10 2.41-1.68 7.59 7.59zM2 12l3.09-3.09 3.09 3.09L5.09 15.09 2 12zm10-5.82L15.82 12 12 15.82 8.18 12 12 6.18z"/>
      </g>
    </svg>
  `),

  // 16. Coinbase Account
  'buy-verified-coinbase-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#0052FF"/>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#FFFFFF" stroke-width="18"/>
      <rect x="120" y="86" width="30" height="28" fill="#0052FF"/>
    </svg>
  `),

  // 17. Kraken Accounts
  'buy-verified-kraken-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#5741D9"/>
      <g transform="translate(50, 45) scale(4)" fill="#FFFFFF">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5h2v6h-2V7zm-4 4h2v2H7v-2zm8 0h2v2h-2v-2z"/>
      </g>
    </svg>
  `),

  // 18. MoonPay Account
  'buy-moonpay-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#7D00FF"/>
      <text x="100" y="115" text-anchor="middle" fill="#FFFFFF" font-size="34" font-weight="900" font-family="Arial, sans-serif" letter-spacing="-1">MoonPay</text>
    </svg>
  `),

  // 19. SMM Accounts
  'buy-verified-smm-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <linearGradient id="smm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0088cc"/>
          <stop offset="50%" stop-color="#E1306C"/>
          <stop offset="100%" stop-color="#1DA1F2"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="36" fill="url(#smm-grad)"/>
      <g transform="translate(50, 48) scale(4)" fill="#FFFFFF">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
      </g>
    </svg>
  `),

  // 20. Business Email & SMTP
  'buy-business-email-services': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#0078D4"/>
      <g transform="translate(50, 48) scale(4.2)" fill="none" stroke="#FFFFFF" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#005A9E"/>
        <polyline points="2,6 12,13 22,6"/>
      </g>
    </svg>
  `),
};

export const getProductLogoUrl = (productId: string, fallbackName?: string): string => {
  if (PRODUCT_LOGOS[productId]) {
    return PRODUCT_LOGOS[productId];
  }
  const letter = (fallbackName || 'P').charAt(0).toUpperCase();
  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="36" fill="#059669"/>
      <text x="100" y="125" text-anchor="middle" fill="#FFFFFF" font-size="80" font-weight="900" font-family="Arial, sans-serif">${letter}</text>
    </svg>
  `);
};
