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

  // 24. Buy Amazon Account (Buyer & Seller)
  'buy-amazon-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#131921"/>
      <text x="100" y="96" text-anchor="middle" fill="#FFFFFF" font-size="62" font-weight="900" font-family="Arial, sans-serif" letter-spacing="-1">amazon</text>
      <path d="M42 122 C78 148 126 148 158 122" stroke="#FF9900" stroke-width="9" stroke-linecap="round" fill="none"/>
      <path d="M152 114 L164 122 L150 131 Z" fill="#FF9900"/>
      <rect x="46" y="152" width="108" height="24" rx="12" fill="#232F3E" stroke="#FF9900" stroke-width="1"/>
      <text x="100" y="168" text-anchor="middle" fill="#FF9900" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="1.5">BUYER &amp; SELLER</text>
    </svg>
  `),

  // 25. Buy Apple Developer Account
  'buy-apple-developer-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#1D1D1F"/>
      <!-- Apple Leaf & Body -->
      <path fill="#F5F5F7" d="M113.8 45.4c4.6-5.8 7.8-13.8 6.9-21.8-6.9.3-15.1 4.7-20 10.5-4.4 5.1-8.2 13.3-7.2 21.1 7.7.6 15.5-4 20.3-9.8zm17 38c-8.2-.1-15.2 5.1-19.2 5.1-4 0-9.8-4.8-16.1-4.7-8.3.1-16 4.9-20.3 12.4-8.7 15.1-2.2 37.4 6.1 49.6 4.1 6 9 12.6 15.4 12.4 6.2-.3 8.6-4 16.1-4 7.5 0 9.6 4 16.2 3.9 6.7-.1 10.9-6.1 15-12.1 4.7-6.9 6.7-13.6 6.8-13.9-.1-.2-13.1-5.1-13.3-20.1-.1-12.6 10.2-18.6 10.7-18.9-5.9-8.6-15-9.6-17.4-9.7z"/>
      <text x="100" y="174" text-anchor="middle" fill="#A1A1A6" font-size="14" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">DEVELOPER</text>
    </svg>
  `),

  // 26. Buy Google Play Console Account
  'buy-google-play-console-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0B1A24"/>
      <g transform="translate(68, 38) scale(2.8)">
        <path fill="#00C3FF" d="M3.6 2.3 C3.2 2.7 3 3.4 3 4.2 L3 20.8 C3 21.6 3.2 22.3 3.6 22.7 L3.7 22.8 L13 13.5 L13 13.3 L3.7 2.2 Z"/>
        <path fill="#FFD400" d="M16.1 16.4 L13 13.3 L13 13.1 L16.1 10.1 L16.2 10.1 L19.8 12.2 C20.9 12.8 20.9 13.7 19.8 14.3 L16.2 16.4 Z"/>
        <path fill="#FF3A44" d="M16.2 16.4 L13 13.2 L3.6 22.6 C4 23 4.7 23.1 5.5 22.6 L16.2 16.4 Z"/>
        <path fill="#00E676" d="M16.2 10.1 L5.5 3.9 C4.7 3.4 4 3.5 3.6 3.9 L13 13.3 L16.2 10.1 Z"/>
      </g>
      <text x="100" y="146" text-anchor="middle" fill="#FFFFFF" font-size="15" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">GOOGLE PLAY</text>
      <text x="100" y="168" text-anchor="middle" fill="#00E676" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">CONSOLE</text>
    </svg>
  `),

  // 27. Buy Facebook Ads Accounts
  'buy-facebook-ads-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0866FF"/>
      <g transform="translate(62, 38)">
        <circle cx="38" cy="38" r="38" fill="#FFFFFF" opacity="0.15"/>
        <path fill="#FFFFFF" d="M48 24h-7.6c-4.9 0-8.1 3.2-8.1 8.3v5.7h-6.3v8h6.3v20h8.3v-20h6.9l1.1-8h-8v-4.8c0-2.3 1.1-3.5 3.6-3.5h4.4V24z"/>
      </g>
      <g transform="translate(35, 126)">
        <rect width="130" height="42" rx="10" fill="#0047AB" stroke="#60A5FA" stroke-width="1.5"/>
        <text x="65" y="26" text-anchor="middle" fill="#FFFFFF" font-size="13" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">ADS MANAGER</text>
      </g>
    </svg>
  `),

  // 28. Buy GitHub Accounts
  'buy-github-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#181717"/>
      <path fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd" d="M100 32C62.4 32 32 62.4 32 100c0 30.1 19.5 55.6 46.6 64.6 3.4.6 4.6-1.5 4.6-3.3 0-1.6-.1-7.1-.1-13-18.9 4.1-22.9-8-22.9-8-3.1-7.9-7.6-10-7.6-10-6.2-4.2.5-4.1.5-4.1 6.8.5 10.4 7 10.4 7 6.1 10.4 15.9 7.4 19.8 5.7 0.6-4.4 2.4-7.4 4.3-9.1-15.1-1.7-31-7.5-31-33.6 0-7.4 2.6-13.5 7-18.2-.7-1.7-3-8.6.7-18 0 0 5.7-1.8 18.7 7 5.4-1.5 11.3-2.3 17.1-2.3 5.8 0 11.6.8 17.1 2.3 12.9-8.8 18.6-7 18.6-7 3.8 9.3 1.4 16.3.7 18 4.4 4.8 7 10.8 7 18.2 0 26.2-15.9 31.8-31.1 33.5 2.5 2.1 4.7 6.3 4.7 12.8 0 9.2-.1 16.6-.1 18.9 0 1.8 1.2 3.9 4.7 3.3 27-9 46.5-34.5 46.5-64.6 0-37.6-30.4-68-68-68z"/>
      <text x="100" y="180" text-anchor="middle" fill="#58A6FF" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">GITHUB ACCOUNT</text>
    </svg>
  `),

  // 29. Buy Google Ads Account
  'buy-google-ads-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <g transform="translate(48, 36) scale(2.6)">
        <path fill="#FBBC04" d="M7.4 33.6L19.8 4.1C20.6 2.2 22.9 1.2 24.8 2.0C26.7 2.8 27.7 5.1 26.9 7.0L14.5 36.5C13.7 38.4 11.4 39.4 9.5 38.6C7.6 37.8 6.6 35.5 7.4 33.6Z"/>
        <path fill="#4285F4" d="M26.9 7.0L14.5 36.5C13.7 38.4 11.4 39.4 9.5 38.6L2.3 35.6C0.4 34.8 -0.6 32.5 0.2 30.6L12.6 1.1C13.4 -0.8 15.7 -1.8 17.6 -1.0L24.8 2.0C26.7 2.8 27.7 5.1 26.9 7.0Z"/>
        <circle cx="9.5" cy="35.6" r="6" fill="#34A853"/>
      </g>
      <text x="100" y="162" text-anchor="middle" fill="#1E293B" font-size="16" font-weight="900" font-family="Arial, sans-serif">Google Ads</text>
      <text x="100" y="180" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="1">SPENDABLE ACCOUNTS</text>
    </svg>
  `),

  // 30. Buy Google Voice Accounts
  'buy-google-voice-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#34A853"/>
      <g transform="translate(52, 42) scale(4)">
        <path fill="#FFFFFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 11.5c-1.2 0-2.4-.2-3.6-.6-.4-.1-.8 0-1.1.3l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 7.2 5.8 13 13 13 .6 0 1-.4 1-1v-2.5c0-.6-.4-1-1-1z"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">GOOGLE VOICE</text>
    </svg>
  `),

  // 31. Buy Instagram Account
  'buy-instagram-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <radialGradient id="ig-grad" cx="20%" cy="110%" r="130%">
          <stop offset="0%" stop-color="#FFDD55"/>
          <stop offset="25%" stop-color="#FF5D3B"/>
          <stop offset="60%" stop-color="#D62976"/>
          <stop offset="85%" stop-color="#962FBF"/>
          <stop offset="100%" stop-color="#4F5BD5"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" rx="44" fill="url(#ig-grad)"/>
      <g transform="translate(50, 42)" fill="none" stroke="#FFFFFF" stroke-width="9">
        <rect x="5" y="5" width="90" height="90" rx="26"/>
        <circle cx="50" cy="50" r="22"/>
        <circle cx="76" cy="24" r="3.5" fill="#FFFFFF"/>
      </g>
      <text x="100" y="174" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">INSTAGRAM PVA</text>
    </svg>
  `),

  // 32. Buy LinkedIn Accounts
  'buy-linkedin-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0A66C2"/>
      <g transform="translate(48, 42)">
        <circle cx="20" cy="18" r="14" fill="#FFFFFF"/>
        <rect x="6" y="44" width="28" height="66" rx="4" fill="#FFFFFF"/>
        <path fill="#FFFFFF" d="M52 44h26v10.5c3.8-6.2 12.8-12.5 25.5-12.5 24 0 31.5 15.5 31.5 39.5V110H107V74c0-8.5-3.5-15-13.5-15-8.5 0-14.5 6-14.5 15.5V110H52V44z"/>
      </g>
      <text x="100" y="176" text-anchor="middle" fill="#E0F2FE" font-size="13" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">LINKEDIN NETWORK</text>
    </svg>
  `),

  // 33. Buy Facebook Accounts
  'buy-facebook-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#1877F2"/>
      <path fill="#FFFFFF" d="M125 106h-21v68H76v-68H60V82h16V62c0-14 8.5-22 21.5-22 6.2 0 12.5 1.1 12.5 1.1v14.2h-7.1c-7 0-9.2 4.4-9.2 8.9V82h16l-2.7 24z"/>
      <rect x="45" y="148" width="110" height="28" rx="14" fill="#0D5BC6" stroke="#93C5FD" stroke-width="1"/>
      <text x="100" y="167" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">AGED PROFILES</text>
    </svg>
  `),

  // 34. Buy SSN Number
  'buy-ssn-number': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0F172A"/>
      <g transform="translate(56, 32)">
        <!-- Security Badge Shield -->
        <path d="M44 4 L80 18 C80 56 44 76 44 76 C44 76 8 56 8 18 Z" fill="#1E293B" stroke="#F59E0B" stroke-width="4"/>
        <path d="M44 14 L70 24 C70 50 44 66 44 66 C44 66 18 50 18 24 Z" fill="#0F172A"/>
        <!-- Verified Checkmark in shield -->
        <path d="M32 38 L40 46 L58 28" stroke="#10B981" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <text x="100" y="142" text-anchor="middle" fill="#F59E0B" font-size="20" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">SSN &amp; DL</text>
      <text x="100" y="168" text-anchor="middle" fill="#94A3B8" font-size="12" font-weight="700" font-family="Arial, sans-serif" letter-spacing="1.5">KYC VERIFICATION</text>
    </svg>
  `),

  // 35. Buy TextNow Accounts
  'buy-textnow-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#6930C3"/>
      <g transform="translate(50, 40) scale(4)">
        <path fill="#FFFFFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </g>
      <text x="100" y="166" text-anchor="middle" fill="#A5F3FC" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">TEXTNOW</text>
    </svg>
  `),

  // 36. Buy Ticketmaster Accounts
  'buy-ticketmaster-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#026CDF"/>
      <g transform="translate(68, 38)">
        <path fill="#FFFFFF" d="M0 24h64v16H38v64H22V40H0V24z"/>
        <circle cx="54" cy="94" r="8" fill="#67E8F9"/>
      </g>
      <text x="100" y="168" text-anchor="middle" fill="#FFFFFF" font-size="15" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">TICKETMASTER</text>
    </svg>
  `),

  // 37. Buy Tinder Account
  'buy-tinder-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <defs>
        <linearGradient id="tinder-flame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF655B"/>
          <stop offset="100%" stop-color="#FF5864"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="44" fill="#18181B"/>
      <g transform="translate(60, 36) scale(3.5)">
        <path fill="url(#tinder-flame)" d="M12.7 1.5c.3 1.8-.3 3.6-1.5 5-1.5 1.7-2.3 3.9-2.3 6.1 0 5 4 9 9 9s9-4 9-9c0-3.8-2.4-7.2-6-8.5-.2 2.1-1.3 4-3.1 5-1.7 1-2.9 2.7-3.3 4.6.9-.5 1.9-.8 3-.8 2.6 0 4.8 2.1 4.8 4.7 0 3-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3c0-3.9 2.4-7.4 6-8.9.3-2.5-1.2-5-3.6-6.2-1.1-.5-1.7-1.7-1.4-2.9z"/>
      </g>
      <text x="100" y="170" text-anchor="middle" fill="#FF655B" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">TINDER PVA</text>
    </svg>
  `),

  // 38. Buy Twitter Accounts
  'buy-twitter-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#000000"/>
      <g transform="translate(60, 46) scale(3.4)">
        <path fill="#FFFFFF" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </g>
      <text x="100" y="170" text-anchor="middle" fill="#38BDF8" font-size="14" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">TWITTER / X</text>
    </svg>
  `),

  // 39. Buy Verified Airbnb Accounts
  'buy-verified-airbnb-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FF5A5F"/>
      <g transform="translate(66, 32) scale(2.8)">
        <path fill="#FFFFFF" d="M12 2C6.5 2 2 6.5 2 12c0 3.3 1.6 6.2 4.1 8 0 0 .2.1.3.2 1.4 1 3.1 1.7 4.9 1.8h1.4c1.8-.1 3.5-.8 4.9-1.8.1-.1.3-.2.3-.2 2.5-1.8 4.1-4.7 4.1-8 0-5.5-4.5-10-10-10zm0 18.2c-1.5 0-3-.5-4.2-1.3l.1-.1c1.9-1.6 3.1-3.9 3.1-6.5 0-.6-.1-1.2-.2-1.8.8.4 1.7.6 2.6.6s1.8-.2 2.6-.6c-.1.6-.2 1.2-.2 1.8 0 2.6 1.2 4.9 3.1 6.5l.1.1c-1.2.8-2.7 1.3-4.2 1.3zm3.5-9.7c-.5.4-1.2.7-1.9.8.1-.4.2-.8.2-1.3 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 .5.1.9.2 1.3-.7-.1-1.4-.4-1.9-.8-.4-.3-.6-.7-.6-1.2 0-.8.6-1.5 1.5-1.5.3 0 .7.1 1 .3.4.3.9.5 1.4.5.5 0 1-.2 1.4-.5.3-.2.7-.3 1-.3.9 0 1.5.7 1.5 1.5 0 .5-.2.9-.6 1.2z"/>
      </g>
      <text x="100" y="164" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">AIRBNB</text>
      <text x="100" y="180" text-anchor="middle" fill="#FFE4E6" font-size="10" font-weight="800" font-family="Arial, sans-serif" letter-spacing="1">HOST &amp; PERSONAL</text>
    </svg>
  `),

  // 40. Buy Verified ByBiT Accounts
  'buy-verified-bybit-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#121214"/>
      <g transform="translate(62, 38)">
        <rect x="0" y="0" width="30" height="76" rx="6" fill="#F7A600"/>
        <path d="M40 0 H58 C70 0 78 8 78 18 C78 26 72 32 64 34 C74 36 80 44 80 54 C80 66 70 76 56 76 H40 V0 Z M56 30 C62 30 66 26 66 20 C66 14 62 11 56 11 H50 V30 H56 Z M56 65 C64 65 68 60 68 53 C68 46 64 41 56 41 H50 V65 H56 Z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="152" text-anchor="middle" fill="#F7A600" font-size="20" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">BYBIT</text>
      <text x="100" y="174" text-anchor="middle" fill="#94A3B8" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">VERIFIED LEVEL 2</text>
    </svg>
  `),

  // 41. Buy Taboola Ads Account
  'buy-taboola-ads-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0A192F"/>
      <g transform="translate(45, 38)">
        <circle cx="28" cy="28" r="24" fill="#00A3E0"/>
        <circle cx="82" cy="28" r="16" fill="#FFFFFF" opacity="0.9"/>
        <path d="M48 28 H62" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
      </g>
      <text x="100" y="142" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">taboola</text>
      <text x="100" y="168" text-anchor="middle" fill="#00A3E0" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">ADS MANAGER</text>
    </svg>
  `),

  // 42. Buy Bing Ads Accounts (Microsoft Advertising)
  'buy-bing-ads-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#00809D"/>
      <g transform="translate(68, 32)">
        <rect x="0" y="0" width="30" height="30" fill="#F25022"/>
        <rect x="34" y="0" width="30" height="30" fill="#7FBA00"/>
        <rect x="0" y="34" width="30" height="30" fill="#00A4EF"/>
        <rect x="34" y="34" width="30" height="30" fill="#FFB900"/>
      </g>
      <text x="100" y="142" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">MICROSOFT</text>
      <text x="100" y="168" text-anchor="middle" fill="#E0F2FE" font-size="13" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">BING ADS</text>
    </svg>
  `),

  // 43. Buy TikTok Ads Account
  'buy-tiktok-ads-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#000000"/>
      <g transform="translate(72, 28) scale(1.1)">
        {/* TikTok cyan shadow */}
        <path d="M38 0 H28 V52 C28 62 20 70 10 70 C0 70 -8 62 -8 52 C-8 42 0 34 10 34 V22 C-6 22 -20 36 -20 52 C-20 68 -6 82 10 82 C26 82 40 68 40 52 V24 C48 30 58 34 68 34 V22 C56 22 46 12 46 0 H38 Z" fill="#25F4EE" transform="translate(-3, 0)"/>
        {/* TikTok magenta shadow */}
        <path d="M38 0 H28 V52 C28 62 20 70 10 70 C0 70 -8 62 -8 52 C-8 42 0 34 10 34 V22 C-6 22 -20 36 -20 52 C-20 68 -6 82 10 82 C26 82 40 68 40 52 V24 C48 30 58 34 68 34 V22 C56 22 46 12 46 0 H38 Z" fill="#FE2C55" transform="translate(3, 0)"/>
        {/* TikTok white center */}
        <path d="M38 0 H28 V52 C28 62 20 70 10 70 C0 70 -8 62 -8 52 C-8 42 0 34 10 34 V22 C-6 22 -20 36 -20 52 C-20 68 -6 82 10 82 C26 82 40 68 40 52 V24 C48 30 58 34 68 34 V22 C56 22 46 12 46 0 H38 Z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="148" text-anchor="middle" fill="#FFFFFF" font-size="18" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1.5">TikTok</text>
      <text x="100" y="172" text-anchor="middle" fill="#25F4EE" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">ADS MANAGER</text>
    </svg>
  `),

  // 44. Buy Snapchat Ads Account
  'buy-snapchat-ads-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FFFC00"/>
      <g transform="translate(68, 28) scale(2.6)">
        <path d="M12 2C7.58 2 4 5.58 4 10c0 2.22.88 4.09 2.06 5.44-.06.25-.34.62-.84.88-.31.16-.41.53-.24.84.16.31.53.41.84.24 1.13-.59 1.78-1.28 1.94-1.53.72.31 1.48.5 2.24.5.76 0 1.52-.19 2.24-.5.16.25.81.94 1.94 1.53.31.17.68.07.84-.24.17-.31.07-.68-.24-.84-.5-.26-.78-.63-.84-.88C19.12 14.09 20 12.22 20 10c0-4.42-3.58-8-8-8z" fill="#000000"/>
        <path d="M12 3.5C8.41 3.5 5.5 6.41 5.5 10c0 1.83.74 3.39 1.75 4.5.09.1.15.23.12.36-.08.38-.41.88-1 1.25.84-.31 1.48-.84 1.77-1.15.11-.12.28-.16.42-.1.76.35 1.58.54 2.44.54s1.68-.19 2.44-.54c.14-.06.31-.02.42.1.29.31.93.84 1.77 1.15-.59-.37-.92-.87-1-1.25-.03-.13.03-.26.12-.36 1.01-1.11 1.75-2.67 1.75-4.5 0-3.59-2.91-6.5-6.5-6.5z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="148" text-anchor="middle" fill="#000000" font-size="17" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">SNAPCHAT</text>
      <text x="100" y="172" text-anchor="middle" fill="#1E293B" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">BUSINESS ADS</text>
    </svg>
  `),

  // 45. Buy Twitter Ads Accounts
  'buy-twitter-ads-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#000000"/>
      <g transform="translate(68, 30) scale(2.7)">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FFFFFF"/>
      </g>
      <text x="100" y="146" text-anchor="middle" fill="#FFFFFF" font-size="17" font-weight="900" font-family="Arial, sans-serif" letter-spacing="2">X (TWITTER)</text>
      <text x="100" y="170" text-anchor="middle" fill="#38BDF8" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">ADS MANAGER</text>
    </svg>
  `),

  // 46. Buy Outbrain Ads Account
  'buy-outbrain-ads-account': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#EA5B0C"/>
      <g transform="translate(68, 32)">
        <circle cx="32" cy="32" r="30" fill="#FFFFFF"/>
        <circle cx="32" cy="32" r="18" fill="#EA5B0C"/>
        <circle cx="32" cy="32" r="8" fill="#FFFFFF"/>
      </g>
      <text x="100" y="142" text-anchor="middle" fill="#FFFFFF" font-size="20" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">outbrain</text>
      <text x="100" y="168" text-anchor="middle" fill="#FED7AA" font-size="12" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">NATIVE ADS</text>
    </svg>
  `),

  // 47. Buy Driving License
  'buy-driving-license': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#1E293B"/>
      <g transform="translate(36, 32)">
        <rect x="0" y="0" width="128" height="76" rx="8" fill="#334155" stroke="#475569" stroke-width="2"/>
        <circle cx="32" cy="34" r="16" fill="#94A3B8"/>
        <rect x="58" y="18" width="56" height="6" rx="3" fill="#38BDF8"/>
        <rect x="58" y="30" width="44" height="4" rx="2" fill="#94A3B8"/>
        <rect x="58" y="38" width="50" height="4" rx="2" fill="#64748B"/>
        <rect x="12" y="58" width="104" height="8" rx="2" fill="#0F172A"/>
      </g>
      <text x="100" y="148" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">DRIVER LICENSE</text>
      <text x="100" y="172" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">USA • UK • EU</text>
    </svg>
  `),

  // 48. Buy Old Gmail Accounts
  'buy-old-gmail-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3"/>
      <g transform="translate(56, 26) scale(3.6)">
        <path fill="#4285F4" d="M1.5 6.25v11.5a1.25 1.25 0 001.25 1.25h3.5V9.67L1.5 6.25z"/>
        <path fill="#34A853" d="M18.75 6.25l-4.75 3.42V19h3.5a1.25 1.25 0 001.25-1.25V6.25z"/>
        <path fill="#EA4335" d="M14 9.67l4.75-3.42a1.25 1.25 0 00-1.95-1.03L12 8.7 7.2 5.22a1.25 1.25 0 00-1.95 1.03L10 9.67l2 1.45 2-1.45z"/>
        <path fill="#FBBC04" d="M6.25 19v-9.33L10 12.5l-3.75 6.5z"/>
      </g>
      <text x="100" y="148" text-anchor="middle" fill="#1E293B" font-size="17" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">AGED GMAIL</text>
      <text x="100" y="172" text-anchor="middle" fill="#EA4335" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">2014-2023 PVA</text>
    </svg>
  `),

  // Aliases for matching alternate IDs
  'buy-google-ads-accounts': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
      <g transform="translate(65, 30)">
        <polygon points="12,65 38,15 62,65" fill="#FBBC04"/>
        <polygon points="62,65 42,65 24,30" fill="#4285F4"/>
        <circle cx="14" cy="62" r="10" fill="#34A853"/>
      </g>
      <text x="100" y="144" text-anchor="middle" fill="#1E293B" font-size="18" font-weight="900" font-family="Arial, sans-serif">Google Ads</text>
      <text x="100" y="168" text-anchor="middle" fill="#4285F4" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">VERIFIED SPEND</text>
    </svg>
  `),
  'buy-verified-ssn-number': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
      <rect width="200" height="200" rx="44" fill="#0F172A"/>
      <g transform="translate(38, 30)">
        <rect x="0" y="0" width="124" height="74" rx="8" fill="#1E293B" stroke="#334155" stroke-width="2"/>
        <rect x="14" y="16" width="96" height="8" rx="2" fill="#38BDF8"/>
        <rect x="24" y="32" width="76" height="12" rx="3" fill="#0F172A"/>
        <text x="62" y="42" text-anchor="middle" fill="#F8FAFC" font-size="10" font-weight="900" font-family="monospace">***-**-6789</text>
      </g>
      <text x="100" y="148" text-anchor="middle" fill="#FFFFFF" font-size="16" font-weight="900" font-family="Arial, sans-serif" letter-spacing="1">VERIFIED SSN</text>
      <text x="100" y="172" text-anchor="middle" fill="#38BDF8" font-size="11" font-weight="800" font-family="Arial, sans-serif" letter-spacing="2">USA IDENTITY</text>
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
