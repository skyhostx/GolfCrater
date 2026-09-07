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
      // 1. Google Reviews
      case 'buy-google-reviews':
        return {
          bgGradient: 'from-blue-50/80 via-white to-amber-50/40 border-slate-200/80',
          logoBg: 'bg-white shadow-md border border-slate-100 ring-4 ring-blue-50',
          badgeText: 'Google Business Profile',
          badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} aria-label="Google Logo">
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

      // 2. Trustpilot Reviews
      case 'buy-trustpilot-reviews':
        return {
          bgGradient: 'from-emerald-50/90 via-white to-teal-50/50 border-emerald-100',
          logoBg: 'bg-[#00b67a] shadow-lg shadow-emerald-500/20 text-white',
          badgeText: 'Trustpilot Verified',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M12 0L15.7 7.5L24 8.7L18 14.5L19.4 22.7L12 18.8L4.6 22.7L6 14.5L0 8.7L8.3 7.5L12 0Z" fill="#ffffff" />
            </svg>
          ),
        };

      // 3. Facebook Reviews
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

      // 4. Amazon Reviews
      case 'buy-amazon-reviews':
        return {
          bgGradient: 'from-amber-50/80 via-white to-slate-50 border-amber-200/70',
          logoBg: 'bg-[#131921] shadow-lg text-white border border-slate-700',
          badgeText: 'Amazon Marketplace',
          badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <path
                d="M13.9 14.7c-2.3 1.7-5.7 2.6-8.6 2.6-4.1 0-7.7-1.5-10.5-4.1-.2-.2 0-.5.2-.4 3 1.7 6.7 2.8 10.5 2.8 2.5 0 5.4-.6 8-1.5.4-.1.7.3.4.6z"
                fill="#FF9900"
              />
              <path
                d="M14.9 13.9c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.2-.9 3.2-.6 3.4-.4.3.3.1 2.3-.9 3.3-.2.2-.3.1-.3 0 .2-.7.7-2.1.5-2.5z"
                fill="#FF9900"
              />
              <text x="12" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">
                a
              </text>
            </svg>
          ),
        };

      // 5. Yelp Reviews
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

      // 6. BBB Reviews
      case 'buy-bbb-reviews':
        return {
          bgGradient: 'from-sky-50/80 via-white to-blue-50/50 border-sky-100',
          logoBg: 'bg-[#005A70] shadow-lg shadow-sky-900/20 text-white',
          badgeText: 'BBB Accredited Rating',
          badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
          icon: (
            <div className="flex flex-col items-center justify-center font-black tracking-tighter">
              <span className="text-xl sm:text-2xl font-extrabold leading-none text-white">BBB</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-amber-300 font-bold mt-0.5">ACCREDITED</span>
            </div>
          ),
        };

      // 7. G2 Reviews
      case 'buy-verified-g2-reviews':
        return {
          bgGradient: 'from-orange-50/80 via-white to-rose-50/50 border-orange-100',
          logoBg: 'bg-[#FF492C] shadow-lg shadow-orange-500/20 text-white',
          badgeText: 'G2 Verified Software',
          badgeColor: 'bg-orange-50 text-orange-800 border-orange-200',
          icon: (
            <div className="flex items-center justify-center font-black">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">G<span className="text-amber-200">2</span></span>
            </div>
          ),
        };

      // 8. Glassdoor Reviews
      case 'buy-glassdoor-reviews':
        return {
          bgGradient: 'from-emerald-50/80 via-white to-green-50/50 border-emerald-100',
          logoBg: 'bg-[#0CAA41] shadow-lg shadow-emerald-500/20 text-white',
          badgeText: 'Glassdoor Employer',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 16H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V8h12v2z" />
            </svg>
          ),
        };

      // 9. Cash App Accounts
      case 'buy-verified-cash-app-accounts':
        return {
          bgGradient: 'from-emerald-50 via-white to-green-50/60 border-emerald-200/80',
          logoBg: 'bg-[#00D632] shadow-xl shadow-emerald-500/30 text-white',
          badgeText: 'Cash App Verified',
          badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#00D632" stroke="none" />
              <text x="12" y="16.5" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">
                $
              </text>
            </svg>
          ),
        };

      // 10. PayPal Account
      case 'buy-verified-paypal-account':
        return {
          bgGradient: 'from-blue-50 via-white to-cyan-50/60 border-blue-200/80',
          logoBg: 'bg-[#003087] shadow-xl shadow-blue-800/20 text-white',
          badgeText: 'PayPal Business / Personal',
          badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none">
              <path
                d="M7.5 21L9.6 7.5H15c3.3 0 5.4 1.7 4.9 4.8-.4 2.8-2.6 4.7-5.5 4.7H11.5l-.9 5.5H7.5z"
                fill="#0079C1"
              />
              <path
                d="M5.5 19L7.6 5.5H13c3.3 0 5.4 1.7 4.9 4.8-.4 2.8-2.6 4.7-5.5 4.7H9.5l-.9 5.5H5.5z"
                fill="#00457C"
              />
              <path
                d="M9.5 15H12.4c2.9 0 5.1-1.9 5.5-4.7.5-3.1-1.6-4.8-4.9-4.8H7.6L5.5 19h3.1l.9-5.5z"
                fill="#0079C1"
              />
            </svg>
          ),
        };

      // 11. Wise Account
      case 'buy-verified-wise-account':
        return {
          bgGradient: 'from-lime-50 via-white to-emerald-50/60 border-lime-200/80',
          logoBg: 'bg-[#9FE870] shadow-xl shadow-lime-600/20 text-[#163300]',
          badgeText: 'Wise Multi-Currency',
          badgeColor: 'bg-lime-50 text-emerald-900 border-lime-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M3.5 19.5L10 4.5h4L7.5 19.5h-4zm7-7.5l2.5-5.5h7l-6 13h-4l3-7.5h-2.5z" />
            </svg>
          ),
        };

      // 12. Payoneer Account
      case 'buy-verified-payoneer-account':
        return {
          bgGradient: 'from-orange-50 via-white to-amber-50/60 border-orange-200/80',
          logoBg: 'bg-gradient-to-tr from-[#FF4800] to-[#FF7700] shadow-xl shadow-orange-600/25 text-white',
          badgeText: 'Payoneer Global',
          badgeColor: 'bg-orange-50 text-orange-900 border-orange-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="12" cy="12" r="8" stroke="#ffffff" />
            </svg>
          ),
        };

      // 13. Stripe Account
      case 'buy-verified-stripe-account':
        return {
          bgGradient: 'from-indigo-50 via-white to-violet-50/60 border-indigo-200/80',
          logoBg: 'bg-[#635BFF] shadow-xl shadow-indigo-600/25 text-white',
          badgeText: 'Stripe Merchant Gateway',
          badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
          icon: (
            <div className="flex items-center justify-center font-black">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white">stripe</span>
            </div>
          ),
        };

      // 14. Revolut Account
      case 'buy-verified-revolut-account':
        return {
          bgGradient: 'from-slate-100 via-white to-zinc-100 border-slate-300',
          logoBg: 'bg-[#191C1F] shadow-xl text-white border border-slate-700',
          badgeText: 'Revolut Business / Personal',
          badgeColor: 'bg-slate-100 text-slate-900 border-slate-300',
          icon: (
            <div className="flex items-center justify-center font-black">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">R</span>
            </div>
          ),
        };

      // 15. Binance Account
      case 'buy-verified-binance-account':
        return {
          bgGradient: 'from-amber-50 via-stone-900 to-amber-950/90 border-amber-500/40',
          logoBg: 'bg-[#F3BA2F] shadow-xl shadow-amber-500/30 text-slate-950',
          badgeText: 'Binance Plus KYC',
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M12 2l3.09 3.09L7.5 12.68l-3.09-3.09L12 2zm6.91 6.91L22 12l-3.09 3.09-3.09-3.09 3.09-3.09zm-6.91 6.91l7.59-7.59L22 12l-10 10-10-10 2.41-1.68 7.59 7.59zM2 12l3.09-3.09 3.09 3.09L5.09 15.09 2 12zm10-5.82L15.82 12 12 15.82 8.18 12 12 6.18z" />
            </svg>
          ),
        };

      // 16. Coinbase Account
      case 'buy-verified-coinbase-account':
        return {
          bgGradient: 'from-blue-50 via-white to-sky-50 border-blue-200/80',
          logoBg: 'bg-[#0052FF] shadow-xl shadow-blue-600/25 text-white',
          badgeText: 'Coinbase Pro Verified',
          badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6c2.72 0 4.99 1.81 5.72 4.3h-3.32c-.52-.89-1.47-1.5-2.4-1.5-1.77 0-3.2 1.43-3.2 3.2s1.43 3.2 3.2 3.2c.93 0 1.88-.61 2.4-1.5h3.32C16.99 16.19 14.72 18 12 18z" />
            </svg>
          ),
        };

      // 17. Kraken Accounts
      case 'buy-verified-kraken-accounts':
        return {
          bgGradient: 'from-purple-50 via-white to-violet-50 border-purple-200/80',
          logoBg: 'bg-[#5741D9] shadow-xl shadow-purple-600/25 text-white',
          badgeText: 'Kraken Tier 3 Verified',
          badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5h2v6h-2V7zm-4 4h2v2H7v-2zm8 0h2v2h-2v-2z" fill="#ffffff" />
            </svg>
          ),
        };

      // 18. MoonPay Account
      case 'buy-moonpay-account':
        return {
          bgGradient: 'from-fuchsia-50 via-white to-purple-50 border-fuchsia-200/80',
          logoBg: 'bg-[#7D00FF] shadow-xl shadow-purple-600/25 text-white',
          badgeText: 'MoonPay Gateway',
          badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
          icon: (
            <div className="flex items-center justify-center font-black">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">MoonPay</span>
            </div>
          ),
        };

      // 19. SMM Accounts
      case 'buy-verified-smm-accounts':
        return {
          bgGradient: 'from-sky-50 via-white to-rose-50 border-sky-200/80',
          logoBg: 'bg-gradient-to-tr from-[#0088cc] via-[#E1306C] to-[#1DA1F2] shadow-xl text-white',
          badgeText: 'SMM & Creator Networks',
          badgeColor: 'bg-sky-50 text-sky-900 border-sky-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          ),
        };

      // 20. Business Email & SMTP
      case 'buy-business-email-services':
        return {
          bgGradient: 'from-blue-50 via-white to-slate-50 border-blue-200/80',
          logoBg: 'bg-[#0078D4] shadow-xl shadow-blue-700/25 text-white',
          badgeText: 'Enterprise Workspace & SMTP',
          badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
          icon: (
            <svg viewBox="0 0 24 24" className={iconSizeClass} fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#0078D4" />
              <polyline points="22,6 12,13 2,6" stroke="#ffffff" />
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
        className={`flex items-center justify-center rounded-xl shrink-0 p-2.5 ${logo.logoBg} ${className}`}
      >
        {logo.icon}
      </div>
    );
  }

  return (
    <div
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
