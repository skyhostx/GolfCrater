// Official Brand Vector Logos as lightweight, standalone Data URIs for GolfCrater products

const svgToDataUri = (svg: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};

export const PRODUCT_LOGOS: Record<string, string> = {
  // 1. Google Reviews
  'buy-google-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <g transform="translate(56, 36) scale(3.7)">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </g>
      <g transform="translate(35, 140) scale(1.3)" fill="#FBBC05">
        <polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/>
        <g transform="translate(18, 0)"><polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/></g>
        <g transform="translate(36, 0)"><polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/></g>
        <g transform="translate(54, 0)"><polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/></g>
        <g transform="translate(72, 0)"><polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/></g>
      </g>
    </svg>
  `),

  // 2. Trustpilot Reviews
  'buy-trustpilot-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#00b67a"/>
      <g transform="translate(100, 92)">
        <polygon points="0,-58 18,-14 64,-9 29,22 39,68 0,42 -39,68 -29,22 -64,-9 -18,-14" fill="#ffffff"/>
        <polygon points="0,-58 0,42 -39,68 -29,22 -64,-9 -18,-14" fill="#005128" opacity="0.32"/>
      </g>
      <text x="100" y="176" text-anchor="middle" fill="#FFFFFF" font-size="19" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">TRUSTPILOT</text>
    </svg>
  `),

  // 3. Facebook Reviews
  'buy-facebook-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0866FF"/>
      <path fill="#ffffff" d="M142 104h-24v78H86v-78H70V76h16V56c0-15.5 9.5-24 23.4-24 6.7 0 13.8 1.2 13.8 1.2v15.2h-7.8c-7.7 0-10.1 4.8-10.1 9.7V76h17.2l-2.7 28z"/>
    </svg>
  `),

  // 4. Amazon Reviews
  'buy-amazon-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#131921"/>
      <text x="100" y="105" text-anchor="middle" fill="#FFFFFF" font-size="75" font-weight="900" font-family="Arial, sans-serif">a</text>
      <path d="M48 132 C78 152 122 152 152 132" stroke="#FF9900" stroke-width="10" stroke-linecap="round" fill="none"/>
      <path d="M145 125 L158 132 L144 140 Z" fill="#FF9900"/>
    </svg>
  `),

  // 5. Yelp Reviews
  'buy-yelp-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#D32323"/>
      <g transform="translate(100, 92) scale(1.45)">
        <path fill="#ffffff" d="M0 -34 c-4.5 0 -8 3.5 -8 8 l0 20 c0 4.5 3.5 8 8 8 c4.5 0 8 -3.5 8 -8 l0 -20 c0 -4.5 -3.5 -8 -8 -8 z"/>
        <path fill="#ffffff" d="M-30 -10 c-3.5 -3.5 -9 -2 -11 2 l-10 16 c-2 4 0 9 4 11 c3.5 3.5 9 2 11 -2 l10 -16 c2 -4 0 -9 -4 -11 z"/>
        <path fill="#ffffff" d="M-18 28 c-2 4.5 1 9.5 5.5 11 l18 6 c4.5 1.5 9.5 -1 11 -5.5 c1.5 -4.5 -1 -9.5 -5.5 -11 l-18 -6 c-4.5 -1.5 -9.5 1 -11 5.5 z"/>
        <path fill="#ffffff" d="M18 28 c2 4.5 -1 9.5 -5.5 11 l-18 6 c-4.5 1.5 -9.5 -1 -11 -5.5 c-1.5 -4.5 1 -9.5 5.5 -11 l18 -6 c4.5 -1.5 9.5 1 11 5.5 z"/>
        <path fill="#ffffff" d="M30 -10 c3.5 -3.5 9 -2 11 2 l10 16 c2 4 0 9 -4 11 c-3.5 3.5 -9 2 -11 -2 l-10 -16 c-2 -4 0 -9 4 -11 z"/>
      </g>
      <text x="100" y="174" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">yelp</text>
    </svg>
  `),

  // 6. BBB Reviews
  'buy-bbb-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#005A70"/>
      <g transform="translate(100, 52)">
        <path d="M0 -15 L5 -5 L15 -5 L7 2 L10 12 L0 6 L-10 12 L-7 2 L-15 -5 L-5 -5 Z" fill="#FBBF24"/>
      </g>
      <text x="100" y="116" text-anchor="middle" fill="#FFFFFF" font-size="52" font-weight="900" font-family="Arial, sans-serif" letter-spacing="-2">BBB</text>
      <rect x="30" y="136" width="140" height="24" rx="6" fill="#FBBF24"/>
      <text x="100" y="153" text-anchor="middle" fill="#005A70" font-size="13" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">ACCREDITED</text>
    </svg>
  `),

  // 7. G2 Reviews
  'buy-verified-g2-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FF492C"/>
      <text x="74" y="132" text-anchor="middle" fill="#FFFFFF" font-size="95" font-weight="900" font-family="Arial, sans-serif">G</text>
      <text x="136" y="132" text-anchor="middle" fill="#FFE500" font-size="95" font-weight="900" font-family="Arial, sans-serif">2</text>
    </svg>
  `),

  // 8. Glassdoor Reviews
  'buy-glassdoor-reviews': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0CAA41"/>
      <g transform="translate(60, 42)">
        <path d="M0 0 H80 V24 H26 V92 H80 V116 H0 V0 Z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="178" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="800" font-family="Arial, sans-serif" letter-spacing="1">GLASSDOOR</text>
    </svg>
  `),

  // 9. Cash App Accounts (Official Angled Dollar Glyph & Electric Green)
  'buy-verified-cash-app-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#00D632"/>
      <g transform="translate(100, 100) rotate(-14) translate(-100, -100)">
        <line x1="100" y1="36" x2="100" y2="164" stroke="#ffffff" stroke-width="14" stroke-linecap="round"/>
        <path d="M136 78 C136 62 120 54 99 54 C74 54 60 67 60 84 C60 102 76 110 101 115 C124 120 139 127 139 144 C139 162 122 173 99 173 C73 173 57 160 57 141" fill="none" stroke="#ffffff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  `),

  // 10. PayPal Account (Official Overlapping P's)
  'buy-verified-paypal-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#003087"/>
      <g transform="translate(42, 36) scale(1.15)">
        <path d="M22 110 L33 40 L65 40 C83 40 96 49 92 68 C88 86 73 95 56 95 L40 95 L34 134 L18 134 L22 110 Z" fill="#003087"/>
        <path d="M18 124 L29 46 L58 46 C77 46 90 55 86 74 C82 92 68 101 50 101 L36 101 L32 124 Z" fill="#00457C"/>
        <path d="M34 116 L45 36 L75 36 C93 36 106 45 102 64 C98 82 84 92 66 92 L50 92 L42 144 L29 144 L34 116 Z" fill="#0079C1"/>
        <path d="M50 92 L54 68 C58 56 68 49 80 48 C76 56 70 62 64 68 L50 92 Z" fill="#002447" opacity="0.35"/>
      </g>
    </svg>
  `),

  // 11. Wise Account (Official Fast Flag Symbol in Forest Green on Lime)
  'buy-verified-wise-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#9FE870"/>
      <path d="M46 154 L92 46 L130 46 L104 110 L132 110 L166 46 L144 46 L118 96 L98 96 L124 46 L76 46 L46 154 Z" fill="#163300"/>
    </svg>
  `),

  // 12. Payoneer Account (Official Payoneer Multi-Color Halo)
  'buy-verified-payoneer-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#181A1D"/>
      <defs>
        <linearGradient id="payoneerHalo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF3E00"/>
          <stop offset="45%" stop-color="#FF007A"/>
          <stop offset="100%" stop-color="#7B2CBF"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="95" r="50" fill="none" stroke="url(#payoneerHalo)" stroke-width="24"/>
      <text x="100" y="172" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">PAYONEER</text>
    </svg>
  `),

  // 13. Stripe Account (Official Stripe Precision Wordmark)
  'buy-verified-stripe-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#635BFF"/>
      <g transform="translate(30, 80) scale(2.3)">
        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v2.85c-1.2.62-2.82.96-4.66.96-4.14 0-6.8-2.6-6.8-6.9 0-4.06 2.52-6.93 6.42-6.93 3.96 0 5.94 2.87 5.94 6.64 0 .6-.05 1.3-.09 1.78zm-4.03-2.67c-.08-1.5-.95-2.4-2.22-2.4-1.28 0-2.25.9-2.44 2.4h4.66zM37.3 5.86c1.1-.55 2.52-.87 3.86-.87 1.83 0 3.27.75 3.27 2.97v11.53h-3.95v-1.8c-.89 1.25-2.3 2.05-3.87 2.05-2.73 0-4.6-1.9-4.6-4.57 0-3.92 3.87-4.65 8.16-4.65v-.43c0-1.16-.6-1.83-2-1.83-1.15 0-2.23.36-3.14.94L37.3 5.86zm3.44 7.73c-2.14 0-4.09.28-4.09 2.03 0 1.13.78 1.83 1.88 1.83 1.4 0 2.21-.92 2.21-2.1v-1.76zm-12.72-7.5v2.89h1.94v2.79H28.02v5.7c0 .94.34 1.3 1.24 1.3.4 0 .74-.03 1.05-.1v2.74c-.58.17-1.34.27-2.23.27-2.6 0-4.02-1.3-4.02-3.83V11.77h-1.92V8.98h1.92V6.1l3.96-.01zm-7.65-3.82c1.33 0 2.37 1.04 2.37 2.38 0 1.33-1.04 2.37-2.37 2.37-1.34 0-2.38-1.04-2.38-2.37 0-1.34 1.04-2.38 2.38-2.38zm-1.98 6.94h3.96v10.51h-3.96V9.21zM7.74 5.99c2.32 0 4.19.82 5.25 1.8l-1.96 2.53c-.8-.74-2.02-1.3-3.29-1.3-1.46 0-2.36.7-2.36 1.7 0 .99.8 1.48 2.68 1.99 3.03.82 4.7 2.02 4.7 4.67 0 3.09-2.52 4.88-5.96 4.88-2.5 0-4.71-.85-5.8-1.93l1.8-2.64c.94.88 2.4 1.5 3.97 1.5 1.58 0 2.42-.72 2.42-1.74 0-1.08-.88-1.57-2.83-2.1C3.49 14.59 2 13.3 2 10.74c0-2.89 2.45-4.75 5.74-4.75z" fill="#ffffff"/>
      </g>
    </svg>
  `),

  // 14. Revolut Account (Official Dual-Ribbon R)
  'buy-verified-revolut-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#191C1F"/>
      <g transform="translate(56, 44)">
        <path d="M0 0 H52 C74 0 88 14 88 34 C88 50 78 62 64 66 L88 112 H64 L42 70 H22 V112 H0 V0 Z M22 52 H50 C62 52 68 46 68 34 C68 22 62 18 50 18 H22 V52 Z" fill="#FFFFFF"/>
      </g>
    </svg>
  `),

  // 15. Binance Account (Official Binance Star Mark)
  'buy-verified-binance-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#181A20"/>
      <g transform="translate(100, 92) scale(4.4)" fill="#F3BA2F">
        <path d="M0 -14 L3.8 -10.2 L0 -6.4 L-3.8 -10.2 Z M9.5 -4.5 L13.3 -0.7 L9.5 3.1 L5.7 -0.7 Z M-9.5 -4.5 L-5.7 -0.7 L-9.5 3.1 L-13.3 -0.7 Z M0 6.4 L3.8 10.2 L0 14 L-3.8 10.2 Z M0 -3.4 L3.4 0 L0 3.4 L-3.4 0 Z M-5.9 -2.5 L-2.5 -5.9 L-0.9 -4.3 L-4.3 -0.9 Z M5.9 -2.5 L4.3 -0.9 L0.9 -4.3 L2.5 -5.9 Z M-5.9 2.5 L-4.3 0.9 L-0.9 4.3 L-2.5 5.9 Z M5.9 2.5 L2.5 5.9 L0.9 4.3 L4.3 0.9 Z"/>
      </g>
      <text x="100" y="174" text-anchor="middle" fill="#F3BA2F" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">BINANCE</text>
    </svg>
  `),

  // 16. Coinbase Account (Official Coinbase Blue Circle C)
  'buy-verified-coinbase-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0052FF"/>
      <circle cx="100" cy="100" r="56" fill="#FFFFFF"/>
      <circle cx="100" cy="100" r="32" fill="#0052FF"/>
      <rect x="100" y="84" width="60" height="32" fill="#0052FF"/>
    </svg>
  `),

  // 17. Kraken Accounts (Official Kraken Octopus Mantle)
  'buy-verified-kraken-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#5741D9"/>
      <path d="M100 40 C70 40 46 64 46 95 C46 112 54 127 67 137 L67 114 C63 111 60 105 60 100 C60 89 69 80 80 80 C91 80 100 89 100 100 C100 105 97 111 93 114 L93 158 C95 159 97 160 100 160 C103 160 105 159 107 158 L107 114 C103 111 100 105 100 100 C100 89 109 80 120 80 C131 80 140 89 140 100 C140 105 137 111 133 114 L133 137 C146 127 154 112 154 95 C154 64 130 40 100 40 Z" fill="#FFFFFF"/>
      <text x="100" y="180" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">KRAKEN</text>
    </svg>
  `),

  // 18. MoonPay Account (Official MoonPay Crescent Squircle)
  'buy-moonpay-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#7D00FF"/>
      <g transform="translate(100, 88)">
        <circle cx="0" cy="0" r="44" fill="#FFFFFF"/>
        <circle cx="16" cy="-10" r="36" fill="#7D00FF"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="21" font-weight="800" font-family="Arial, sans-serif" letter-spacing="0.5">MoonPay</text>
    </svg>
  `),

  // 19. SMM Accounts (Authentic Instagram, Telegram, TikTok, X cluster)
  'buy-verified-smm-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <linearGradient id="smmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#833AB4"/>
          <stop offset="50%" stop-color="#FD1D1D"/>
          <stop offset="100%" stop-color="#FCB045"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="44" fill="url(#smmGrad)"/>
      <g transform="translate(45, 42) scale(1.6)" fill="none" stroke="#ffffff" stroke-width="2.2">
        <rect x="2" y="2" width="20" height="20" rx="6"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="#ffffff"/>
      </g>
      <g transform="translate(108, 42) scale(1.6)" fill="#ffffff">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.6 7.6c-.12.56-.45.7-.92.44l-2.5-1.84-1.2 1.16c-.14.14-.25.26-.5.26l.18-2.54 4.62-4.18c.2-.18-.04-.28-.32-.1L8.6 13.2l-2.48-.78c-.54-.16-.56-.54.12-.8l9.66-3.72c.44-.16.84.1.74.9z"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">SMM NETWORK</text>
    </svg>
  `),

  // 20. Buy Gmail Accounts (Official Google Gmail 4-Color M)
  'buy-gmail-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <g transform="translate(38, 44) scale(6.2)">
        <path fill="#4285F4" d="M1.5 6.25v11.5a1.25 1.25 0 001.25 1.25h3.5V9.67L1.5 6.25z"/>
        <path fill="#34A853" d="M18.75 6.25l-4.75 3.42V19h3.5a1.25 1.25 0 001.25-1.25V6.25z"/>
        <path fill="#EA4335" d="M14 9.67l4.75-3.42a1.25 1.25 0 00-1.95-1.03L12 8.7 7.2 5.22a1.25 1.25 0 00-1.95 1.03L10 9.67l2 1.45 2-1.45z"/>
        <path fill="#FBBC04" d="M6.25 19v-9.33L10 12.5l-3.75 6.5z"/>
      </g>
      <text x="100" y="174" text-anchor="middle" fill="#3c4043" font-size="20" font-weight="700" font-family="Arial, sans-serif" letter-spacing="0.5">Gmail</text>
    </svg>
  `),

  // 21. Buy SMTP Mailgun Accounts (Official Mailgun Origami Heron)
  'buy-smtp-mailgun-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#F43F5E"/>
      <g transform="translate(100, 85) scale(3.5)" fill="#FFFFFF">
        <path d="M0 -12 L10 6 L0 12 L-10 6 Z" opacity="0.95"/>
        <path d="M0 -12 L14 -4 L0 0 Z" opacity="0.8"/>
        <path d="M0 -12 L-14 -4 L0 0 Z" opacity="0.8"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">MAILGUN</text>
    </svg>
  `),

  // 22. Buy SMTP Brevo Accounts (Official Brevo Monogram & Branding)
  'buy-smtp-brevo-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0B996F"/>
      <g transform="translate(68, 45)">
        <path d="M0 0 H36 C54 0 68 11 68 28 C68 39 60 48 48 52 C64 56 72 66 72 82 C72 100 56 112 36 112 H0 V0 Z M22 44 H34 C44 44 48 38 48 28 C48 18 44 14 34 14 H22 V44 Z M22 98 H36 C46 98 50 92 50 80 C50 68 46 62 36 62 H22 V98 Z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="174" text-anchor="middle" fill="#FFFFFF" font-size="20" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">BREVO</text>
    </svg>
  `),

  // 23. Buy SMTP Relay Services Account (High-Throughput Enterprise Relay)
  'buy-smtp-relay-services-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0284C7"/>
      <g transform="translate(45, 42) scale(4.5)" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="6" rx="1.5"/>
        <rect x="2" y="13" width="20" height="6" rx="1.5"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="16" x2="6.01" y2="16"/>
        <path d="M16 9v4"/>
        <path d="M13 11l3 2 3-2"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">SMTP RELAY</text>
    </svg>
  `),
};

export const getProductLogoUrl = (productId: string, fallbackName?: string): string => {
  if (PRODUCT_LOGOS[productId]) {
    return PRODUCT_LOGOS[productId];
  }
  const initial = fallbackName ? fallbackName.charAt(0).toUpperCase() : 'G';
  return svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#059669"/>
      <text x="100" y="125" text-anchor="middle" fill="#FFFFFF" font-size="72" font-weight="900" font-family="Arial, sans-serif">${initial}</text>
    </svg>
  `);
};
