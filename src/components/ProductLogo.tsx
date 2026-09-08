import React from 'react';

interface ProductLogoProps {
  productId: string;
  productName: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const ProductLogo: React.FC<ProductLogoProps> = ({
  productId,
  productName,
  size = 'medium',
  className = '',
}) => {
  // Determine size classes
  const iconSizeClass = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16 sm:w-20 sm:h-20',
    large: 'w-24 h-24 sm:w-32 sm:h-32',
  }[size];

  const getLogoContent = () => {
    switch (productId) {
      // 1. Google Reviews (Authentic Google 4-Color Mark)
      case 'buy-google-reviews':
        return {
          bgGradient: 'from-blue-50/80 via-white to-amber-50/40 border-slate-200/80',
          logoBg: 'bg-white shadow-md border border-slate-100 ring-4 ring-blue-50',
          badgeText: 'Google Business Profile',
          badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} aria-label="Google Official Logo">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          ),
        };

      // 2. Trustpilot Reviews (Authentic Two-Tone Trustpilot 3D Star)
      case 'buy-trustpilot-reviews':
        return {
          bgGradient: 'from-emerald-50/90 via-white to-teal-50/50 border-emerald-100',
          logoBg: 'bg-[#00b67a] shadow-lg shadow-emerald-500/20 text-white',
          badgeText: 'Trustpilot Verified',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} aria-label="Trustpilot Star">
              <polygon points="12,1 15.5,8.2 23.5,9.3 17.5,15 19.2,23 12,18.8 4.8,23 6.5,15 0.5,9.3 8.5,8.2" fill="#ffffff" />
              <polygon points="12,1 12,18.8 4.8,23 6.5,15 0.5,9.3 8.5,8.2" fill="#005128" opacity="0.32" />
            </svg>
          ),
        };

      // 3. Facebook Reviews (Authentic Meta Facebook Circle & Offset f)
      case 'buy-facebook-reviews':
        return {
          bgGradient: 'from-blue-50/80 via-white to-indigo-50/50 border-blue-100',
          logoBg: 'bg-[#0866FF] shadow-lg shadow-blue-500/20 text-white',
          badgeText: 'Meta / Facebook Page',
          badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          ),
        };

      // 4. Amazon Reviews (Authentic Amazon Smile Arrow)
      case 'buy-amazon-reviews':
        return {
          bgGradient: 'from-amber-50/80 via-white to-slate-50 border-amber-200/70',
          logoBg: 'bg-[#131921] shadow-lg text-white border border-slate-700',
          badgeText: 'Amazon Marketplace',
          badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <text x="12" y="11.5" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">
                a
              </text>
              <path
                d="M5.5 15.8c3.5 2.4 8.5 2.4 12 0"
                stroke="#FF9900"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path d="M16.8 14.8l1.6 1-1.6 1.2z" fill="#FF9900" />
            </svg>
          ),
        };

      // 5. Yelp Reviews (Authentic Yelp 5-Burst Starburst)
      case 'buy-yelp-reviews':
        return {
          bgGradient: 'from-red-50/80 via-white to-rose-50/50 border-red-100',
          logoBg: 'bg-[#D32323] shadow-lg shadow-red-500/20 text-white',
          badgeText: 'Yelp Elite Network',
          badgeColor: 'bg-red-50 text-red-700 border-red-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M12.14 11.5l2.67-4.63c.27-.47.11-1.07-.36-1.34l-1.87-1.08c-.47-.27-1.07-.11-1.34.36L8.57 9.44c-.27.47-.11 1.07.36 1.34l1.87 1.08c.47.27 1.07.11 1.34-.36zM7.2 12.87L2.57 10.2c-.47-.27-1.07-.11-1.34.36L.15 12.43c-.27.47-.11 1.07.36 1.34l4.63 2.67c.47.27 1.07.11 1.34-.36l1.08-1.87c.27-.47.11-1.07-.36-1.34zM11.5 14.86l-2.67 4.63c-.27.47-.11 1.07.36 1.34l1.87 1.08c.47.27 1.07.11 1.34-.36l2.67-4.63c.27-.47.11-1.07-.36-1.34l-1.87-1.08c-.47-.27-1.07-.11-1.34.36zM15.43 14.56l4.63 2.67c.47.27 1.07.11 1.34-.36l1.08-1.87c.27-.47.11-1.07-.36-1.34l-4.63-2.67c-.47-.27-1.07-.11-1.34.36l-1.08 1.87c-.27.47-.11 1.07.36 1.34z" />
            </svg>
          ),
        };

      // 6. BBB Reviews (Official BBB Torch & Star Accreditation)
      case 'buy-bbb-reviews':
        return {
          bgGradient: 'from-sky-50/80 via-white to-blue-50/50 border-sky-100',
          logoBg: 'bg-[#005A70] shadow-lg shadow-sky-900/20 text-white',
          badgeText: 'BBB Accredited Rating',
          badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <path d="M12 2l1.2 2.5h2.8l-2.2 1.6.8 2.6-2.6-1.8-2.6 1.8.8-2.6-2.2-1.6h2.8z" fill="#FBBF24" />
              <text x="12" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="-0.5">
                BBB
              </text>
              <rect x="3" y="16.5" width="18" height="4.5" rx="1.5" fill="#FBBF24" />
              <text x="12" y="20" textAnchor="middle" fill="#005A70" fontSize="2.8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.4">
                ACCREDITED
              </text>
            </svg>
          ),
        };

      // 7. G2 Reviews (Official G2 Monogram)
      case 'buy-verified-g2-reviews':
        return {
          bgGradient: 'from-orange-50/80 via-white to-rose-50/50 border-orange-100',
          logoBg: 'bg-[#FF492C] shadow-lg shadow-orange-500/20 text-white',
          badgeText: 'G2 Verified Software',
          badgeColor: 'bg-orange-50 text-orange-800 border-orange-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <text x="9" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="sans-serif">
                G
              </text>
              <text x="17.5" y="17" textAnchor="middle" fill="#FFE500" fontSize="15" fontWeight="900" fontFamily="sans-serif">
                2
              </text>
            </svg>
          ),
        };

      // 8. Glassdoor Reviews (Official Glassdoor Open Bracket)
      case 'buy-glassdoor-reviews':
        return {
          bgGradient: 'from-emerald-50/80 via-white to-green-50/50 border-emerald-100',
          logoBg: 'bg-[#0CAA41] shadow-lg shadow-emerald-500/20 text-white',
          badgeText: 'Glassdoor Employer',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <path d="M6 5h12v3H9.5v8H18v3H6V5z" fill="#FFFFFF" />
            </svg>
          ),
        };

      // 9. Cash App Accounts (Authentic Cash App Rotated Angled Dollar Sign)
      case 'buy-verified-cash-app-accounts':
        return {
          bgGradient: 'from-emerald-50 via-white to-green-50/60 border-emerald-200/80',
          logoBg: 'bg-[#00D632] shadow-xl shadow-emerald-500/30 text-white',
          badgeText: 'Cash App Verified',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <g transform="translate(12, 12) rotate(-14) translate(-12, -12)">
                <line x1="12" y1="4.5" x2="12" y2="19.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"/>
                <path
                  d="M16 9.2 C16 7.4 14.2 6.5 12 6.5 C9.2 6.5 7.8 8 7.8 9.8 C7.8 11.8 9.5 12.6 12.2 13.2 C14.8 13.8 16.5 14.6 16.5 16.5 C16.5 18.5 14.5 19.8 12 19.8 C9 19.8 7.2 18.2 7.2 16.2"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ),
        };

      // 10. PayPal Account (Authentic Overlapping PayPal P's)
      case 'buy-verified-paypal-account':
        return {
          bgGradient: 'from-blue-50 via-white to-cyan-50/60 border-blue-200/80',
          logoBg: 'bg-[#003087] shadow-xl shadow-blue-800/20 text-white',
          badgeText: 'PayPal Business / Personal',
          badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              {/* Back Dark Blue P */}
              <path
                d="M5.5 19.5l1.6-11h4.8c2.8 0 4.6 1.4 4.2 4.1-.3 2.4-2.2 4-4.7 4H8.9l-.8 4.7H5.5z"
                fill="#00457C"
              />
              {/* Front Bright Blue P */}
              <path
                d="M7.8 17.2l1.5-10.2h4.8c2.7 0 4.4 1.3 4 3.9-.4 2.3-2.1 3.8-4.5 3.8h-2.3l-.7 4.3H7.8z"
                fill="#0079C1"
              />
            </svg>
          ),
        };

      // 11. Wise Account (Authentic Wise Fast Flag Mark)
      case 'buy-verified-wise-account':
        return {
          bgGradient: 'from-lime-50 via-white to-emerald-50/60 border-lime-200/80',
          logoBg: 'bg-[#9FE870] shadow-xl shadow-lime-600/20 text-[#163300]',
          badgeText: 'Wise Multi-Currency',
          badgeColor: 'bg-lime-50 text-emerald-900 border-lime-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#163300">
              <path d="M5.5 18.5 L11 5.5 L15.5 5.5 L12.5 13.2 L15.8 13.2 L19.8 5.5 L17.2 5.5 L14.2 11.5 L11.8 11.5 L14.9 5.5 L9.2 5.5 L5.5 18.5 Z" />
            </svg>
          ),
        };

      // 12. Payoneer Account (Authentic Payoneer Gradient Halo)
      case 'buy-verified-payoneer-account':
        return {
          bgGradient: 'from-orange-50 via-white to-amber-50/60 border-orange-200/80',
          logoBg: 'bg-[#181A1D] shadow-xl shadow-orange-600/25 text-white',
          badgeText: 'Payoneer Global',
          badgeColor: 'bg-orange-50 text-orange-900 border-orange-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <defs>
                <linearGradient id="payoneerReactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF3E00" />
                  <stop offset="50%" stopColor="#FF007A" />
                  <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="7.5" stroke="url(#payoneerReactGrad)" strokeWidth="3.2" />
            </svg>
          ),
        };

      // 13. Stripe Account (Authentic Official Stripe Vector Wordmark)
      case 'buy-verified-stripe-account':
        return {
          bgGradient: 'from-indigo-50 via-white to-violet-50/60 border-indigo-200/80',
          logoBg: 'bg-[#635BFF] shadow-xl shadow-indigo-600/25 text-white',
          badgeText: 'Stripe Merchant Gateway',
          badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
          icon: (
            <svg viewBox="0 0 60 25" className="w-16 h-7 sm:w-20 sm:h-9" fill="#ffffff">
              <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v2.85c-1.2.62-2.82.96-4.66.96-4.14 0-6.8-2.6-6.8-6.9 0-4.06 2.52-6.93 6.42-6.93 3.96 0 5.94 2.87 5.94 6.64 0 .6-.05 1.3-.09 1.78zm-4.03-2.67c-.08-1.5-.95-2.4-2.22-2.4-1.28 0-2.25.9-2.44 2.4h4.66zM37.3 5.86c1.1-.55 2.52-.87 3.86-.87 1.83 0 3.27.75 3.27 2.97v11.53h-3.95v-1.8c-.89 1.25-2.3 2.05-3.87 2.05-2.73 0-4.6-1.9-4.6-4.57 0-3.92 3.87-4.65 8.16-4.65v-.43c0-1.16-.6-1.83-2-1.83-1.15 0-2.23.36-3.14.94L37.3 5.86zm3.44 7.73c-2.14 0-4.09.28-4.09 2.03 0 1.13.78 1.83 1.88 1.83 1.4 0 2.21-.92 2.21-2.1v-1.76zm-12.72-7.5v2.89h1.94v2.79H28.02v5.7c0 .94.34 1.3 1.24 1.3.4 0 .74-.03 1.05-.1v2.74c-.58.17-1.34.27-2.23.27-2.6 0-4.02-1.3-4.02-3.83V11.77h-1.92V8.98h1.92V6.1l3.96-.01zm-7.65-3.82c1.33 0 2.37 1.04 2.37 2.38 0 1.33-1.04 2.37-2.37 2.37-1.34 0-2.38-1.04-2.38-2.37 0-1.34 1.04-2.38 2.38-2.38zm-1.98 6.94h3.96v10.51h-3.96V9.21zM7.74 5.99c2.32 0 4.19.82 5.25 1.8l-1.96 2.53c-.8-.74-2.02-1.3-3.29-1.3-1.46 0-2.36.7-2.36 1.7 0 .99.8 1.48 2.68 1.99 3.03.82 4.7 2.02 4.7 4.67 0 3.09-2.52 4.88-5.96 4.88-2.5 0-4.71-.85-5.8-1.93l1.8-2.64c.94.88 2.4 1.5 3.97 1.5 1.58 0 2.42-.72 2.42-1.74 0-1.08-.88-1.57-2.83-2.1C3.49 14.59 2 13.3 2 10.74c0-2.89 2.45-4.75 5.74-4.75z"/>
            </svg>
          ),
        };

      // 14. Revolut Account (Authentic Revolut Dual-Ribbon R)
      case 'buy-verified-revolut-account':
        return {
          bgGradient: 'from-slate-100 via-white to-zinc-100 border-slate-300',
          logoBg: 'bg-[#191C1F] shadow-xl text-white border border-slate-700',
          badgeText: 'Revolut Business / Personal',
          badgeColor: 'bg-slate-100 text-slate-900 border-slate-300',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#ffffff">
              <path d="M5.5 3.5h7.2c3.4 0 5.6 2 5.6 5.1 0 2.3-1.3 4.1-3.3 4.8l4.2 7.1h-3.6l-3.8-6.6H8.6v6.6H5.5V3.5zm3.1 7.6h3.6c1.6 0 2.7-.9 2.7-2.5 0-1.6-1.1-2.4-2.7-2.4H8.6v4.9z"/>
            </svg>
          ),
        };

      // 15. Binance Account (Official Binance Star/Diamond Mark)
      case 'buy-verified-binance-account':
        return {
          bgGradient: 'from-amber-50 via-stone-900 to-amber-950/90 border-amber-500/40',
          logoBg: 'bg-[#181A20] shadow-xl shadow-amber-500/20 text-slate-950 border border-amber-500/30',
          badgeText: 'Binance Plus KYC',
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#F3BA2F">
              <path d="M12 2.5l3.2 3.2-3.2 3.2-3.2-3.2L12 2.5zm6.8 6.8l3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2zM2 12.5l3.2-3.2 3.2 3.2-3.2 3.2L2 12.5zm10 6.8l3.2 3.2-3.2 3.2-3.2-3.2 3.2-3.2zm0-9.6l2.8 2.8-2.8 2.8-2.8-2.8 2.8-2.8zm-4.7 2.3l-2.4 2.4 2.4 2.4 2.4-2.4-2.4-2.4zm9.4 0l-2.4 2.4 2.4 2.4 2.4-2.4-2.4-2.4z"/>
            </svg>
          ),
        };

      // 16. Coinbase Account (Authentic Coinbase Royal Blue Emblem)
      case 'buy-verified-coinbase-account':
        return {
          bgGradient: 'from-blue-50 via-white to-sky-50 border-blue-200/80',
          logoBg: 'bg-[#0052FF] shadow-xl shadow-blue-600/25 text-white',
          badgeText: 'Coinbase Pro Verified',
          badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <circle cx="12" cy="12" r="8.5" fill="#FFFFFF" />
              <circle cx="12" cy="12" r="4.8" fill="#0052FF" />
              <rect x="12" y="9.6" width="9" height="4.8" fill="#0052FF" />
            </svg>
          ),
        };

      // 17. Kraken Accounts (Authentic Kraken Octopus Mantle & Tentacles)
      case 'buy-verified-kraken-accounts':
        return {
          bgGradient: 'from-purple-50 via-white to-violet-50 border-purple-200/80',
          logoBg: 'bg-[#5741D9] shadow-xl shadow-purple-600/25 text-white',
          badgeText: 'Kraken Tier 3 Verified',
          badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#ffffff">
              <path d="M12 3C7.5 3 4 6.5 4 11c0 2.5 1.2 4.7 3.1 6.1v-3.5c-.5-.4-.9-1.1-.9-1.9 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .8-.4 1.5-.9 1.9v6.9c.4.1.7.1 1 .1s.7 0 1-.1v-6.9c-.5-.4-.9-1.1-.9-1.9 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 .8-.4 1.5-.9 1.9v3.5C18.8 15.7 20 13.5 20 11c0-4.5-3.5-8-8-8z"/>
            </svg>
          ),
        };

      // 18. MoonPay Account (Authentic MoonPay Crescent Squircle)
      case 'buy-moonpay-account':
        return {
          bgGradient: 'from-fuchsia-50 via-white to-purple-50 border-fuchsia-200/80',
          logoBg: 'bg-[#7D00FF] shadow-xl shadow-purple-600/25 text-white',
          badgeText: 'MoonPay Gateway',
          badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <circle cx="11.5" cy="11.5" r="7.5" fill="#FFFFFF" />
              <circle cx="14.5" cy="9.5" r="6" fill="#7D00FF" />
            </svg>
          ),
        };

      // 19. SMM Accounts (Multi-Network Creator Badge: Instagram, Telegram, TikTok)
      case 'buy-verified-smm-accounts':
        return {
          bgGradient: 'from-sky-50 via-white to-rose-50 border-sky-200/80',
          logoBg: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] shadow-xl text-white',
          badgeText: 'SMM & Creator Networks',
          badgeColor: 'bg-sky-50 text-sky-900 border-sky-200',
          icon: (
            <div className="grid grid-cols-2 gap-1.5 p-1">
              {/* Instagram Camera */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#ffffff" strokeWidth="2.2">
                <rect x="2" y="2" width="20" height="20" rx="6"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="#ffffff"/>
              </svg>
              {/* Telegram Airplane */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#ffffff">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.6 7.6c-.12.56-.45.7-.92.44l-2.5-1.84-1.2 1.16c-.14.14-.25.26-.5.26l.18-2.54 4.62-4.18c.2-.18-.04-.28-.32-.1L8.6 13.2l-2.48-.78c-.54-.16-.56-.54.12-.8l9.66-3.72c.44-.16.84.1.74.9z"/>
              </svg>
            </div>
          ),
        };

      // 20. Buy Gmail Accounts (Authentic Google 4-Color Gmail M Envelope)
      case 'buy-gmail-accounts':
        return {
          bgGradient: 'from-red-50 via-white to-amber-50 border-red-200/80',
          logoBg: 'bg-white shadow-xl border border-slate-200 text-slate-900',
          badgeText: 'Aged Gmail Inboxes',
          badgeColor: 'bg-red-50 text-red-900 border-red-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass}>
              <path fill="#4285F4" d="M1.5 6.25v11.5a1.25 1.25 0 001.25 1.25h3.5V9.67L1.5 6.25z"/>
              <path fill="#34A853" d="M18.75 6.25l-4.75 3.42V19h3.5a1.25 1.25 0 001.25-1.25V6.25z"/>
              <path fill="#EA4335" d="M14 9.67l4.75-3.42a1.25 1.25 0 00-1.95-1.03L12 8.7 7.2 5.22a1.25 1.25 0 00-1.95 1.03L10 9.67l2 1.45 2-1.45z"/>
              <path fill="#FBBC04" d="M6.25 19v-9.33L10 12.5l-3.75 6.5z"/>
            </svg>
          ),
        };

      // 21. Buy SMTP Mailgun Accounts (Official Mailgun Origami Heron)
      case 'buy-smtp-mailgun-accounts':
        return {
          bgGradient: 'from-rose-50 via-white to-red-50 border-rose-200/80',
          logoBg: 'bg-[#F43F5E] shadow-xl shadow-rose-600/25 text-white',
          badgeText: 'Mailgun SMTP Verified',
          badgeColor: 'bg-rose-50 text-rose-900 border-rose-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#ffffff">
              <path d="M12 3 L19 15 L12 21 L5 15 Z" opacity="0.95"/>
              <path d="M12 3 L22 8 L12 11 Z" opacity="0.8"/>
              <path d="M12 3 L2 8 L12 11 Z" opacity="0.8"/>
            </svg>
          ),
        };

      // 22. Buy SMTP Brevo Accounts (Official Brevo Monogram)
      case 'buy-smtp-brevo-accounts':
        return {
          bgGradient: 'from-emerald-50 via-white to-teal-50 border-emerald-200/80',
          logoBg: 'bg-[#0B996F] shadow-xl shadow-emerald-700/25 text-white',
          badgeText: 'Brevo SMTP Dedicated',
          badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="#ffffff">
              <path d="M6 4h6.5c3.2 0 5.5 1.8 5.5 4.5 0 1.8-1 3.2-2.6 3.9 2 0.7 3.1 2.3 3.1 4.4 0 3-2.4 4.7-6 4.7H6V4zm3.8 6h2.7c1.4 0 2.2-.7 2.2-1.8 0-1.1-.8-1.7-2.2-1.7H9.8V10zm0 5.8h3c1.5 0 2.4-.8 2.4-2 0-1.2-.9-2-2.4-2h-3v4z"/>
            </svg>
          ),
        };

      // 23. Buy SMTP Relay Services Account (High-Throughput Enterprise Relay)
      case 'buy-smtp-relay-services-account':
        return {
          bgGradient: 'from-sky-50 via-white to-cyan-50 border-sky-200/80',
          logoBg: 'bg-[#0284C7] shadow-xl shadow-sky-600/25 text-white',
          badgeText: 'High-Throughput SMTP Relay',
          badgeColor: 'bg-sky-50 text-sky-900 border-sky-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="6" rx="1.5"/>
              <rect x="2" y="13" width="20" height="6" rx="1.5"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/>
              <line x1="6" y1="16" x2="6.01" y2="16"/>
              <path d="M16 9v4"/>
              <path d="M13 11l3 2 3-2"/>
            </svg>
          ),
        };

      default:
        return {
          bgGradient: 'from-slate-50 via-white to-emerald-50/30 border-slate-200',
          logoBg: 'bg-emerald-600 shadow-md text-white',
          badgeText: 'Verified Digital Asset',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <span className="text-xl sm:text-2xl font-black text-white">
              {productName.charAt(0)}
            </span>
          ),
        };
    }
  };

  const logo = getLogoContent();

  if (size === 'small') {
    return (
      <div
        role="img"
        aria-label={`${productName} Service Logo`}
        className={`flex items-center justify-center rounded-xl shrink-0 p-2.5 ${logo.logoBg} ${className}`}
      >
        {logo.icon}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${productName} Verified Official Logo & Credentials Badge`}
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b ${logo.bgGradient} transition-all duration-300 select-none overflow-hidden ${className}`}
    >
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Centered official brand logo badge */}
      <div
        className={`relative z-10 flex items-center justify-center rounded-2xl p-4 sm:p-5 transition-transform duration-300 group-hover:scale-110 ${logo.logoBg}`}
      >
        {logo.icon}
      </div>

      {/* Brand Identification Pill */}
      <div className="relative z-10 mt-3 text-center">
        <span
          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide border uppercase ${logo.badgeColor}`}
        >
          {logo.badgeText}
        </span>
      </div>
    </div>
  );
};
