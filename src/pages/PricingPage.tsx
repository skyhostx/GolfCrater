import React from 'react';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles, HelpCircle } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const pricingTiers = [
    {
      category: 'Reviews Services',
      title: 'Google & Trustpilot Reviews',
      startingPrice: '19',
      features: [
        '5-Star Verified Localized Profiles',
        'Natural Drip Pacing (1-3 reviews / day)',
        'Custom Review Text / Keyword Targeting',
        '60-Day Non-Drop Replacement Guarantee',
        'Real IP Geo-Targeting (US, UK, CA, AU, EU)',
      ],
      linkText: 'Order Review Packages',
      route: { page: 'category' as const, category: 'Reviews' },
      badge: 'Most Popular',
    },
    {
      category: 'Bank Accounts',
      title: 'Verified Merchant & Banking',
      startingPrice: '120',
      features: [
        'Fully KYC-Verified Credentials',
        'Cash App, PayPal, Stripe, Wise, Payoneer',
        'Complete Routing & Account Numbers',
        'Virtual Debit Card Attached',
        'Full Verification Document Archive',
        'Login & Security Proxy Guidelines',
      ],
      linkText: 'Browse Bank Accounts',
      route: { page: 'category' as const, category: 'Bank Account' },
      badge: 'High Demand',
    },
    {
      category: 'Crypto Exchanges',
      title: 'Tier-2 & Tier-3 Crypto Accounts',
      startingPrice: '110',
      features: [
        'Binance, Coinbase, Kraken, MoonPay',
        'Maximum Daily Deposit & Withdrawal Allowances',
        'Primary Email & 2FA Recovery Transfer',
        'Identity Document Archive Included',
        'Fresh or Aged Account Options',
      ],
      linkText: 'Explore Crypto Accounts',
      route: { page: 'category' as const, category: 'Crypto Account' },
      badge: null,
    },
    {
      category: 'Email & SMTP',
      title: 'High-Inbox Email Infrastructure',
      startingPrice: '15',
      features: [
        'Aged Phone-Verified Gmail Accounts (PVA)',
        'Dedicated Mailgun & Brevo SMTP Relays',
        'Custom Domain DNS Configuration Guides',
        'High Daily Sending Velocity Limit',
        'Pre-Warmed Clean IP Reputation',
      ],
      linkText: 'View SMTP & Email Packages',
      route: { page: 'category' as const, category: 'Email Service' },
      badge: null,
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Transparent Pricing & Service Packages | GolfCrater"
        description="Compare transparent pricing plans across GolfCrater services. Tiered packages for Google Reviews, Trustpilot, verified bank accounts, crypto exchanges, and SMTP servers."
        canonicalUrl="/pricing"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' },
        ]}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear & Upfront</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Transparent Pricing & Package Tiers
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No hidden setup fees. Transparent rates with guaranteed 60-day replacement coverage and priority technical support.
          </p>

          {/* Coupon Banner */}
          <div className="mt-8 inline-block bg-emerald-950/60 border border-emerald-500/40 rounded-2xl px-6 py-3 text-emerald-300 text-xs sm:text-sm font-semibold">
            Use code <span className="bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded-md font-mono font-bold tracking-wider">GOLF20</span> for 20% off your first checkout!
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all ${
                tier.badge
                  ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20 bg-white relative'
                  : 'border-slate-200 bg-white shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {tier.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
                    {tier.badge}
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {tier.category}
                </span>
                <h2 className="text-lg font-bold text-slate-900 mt-1 mb-3">
                  {tier.title}
                </h2>

                <div className="flex items-baseline space-x-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-400">Starting at</span>
                  <span className="text-3xl font-black text-slate-900">${tier.startingPrice}</span>
                  <span className="text-xs text-slate-500">/ package</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-600 space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`/category/${tier.route.category === 'Reviews' ? 'reviews' : tier.route.category.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleLinkClick(e, tier.route)}
                className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-center transition-colors inline-flex items-center justify-center space-x-2 ${
                  tier.badge
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{tier.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Payment Methods Accepted */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Accepted Payment Methods & Gateways
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6">
            We support instant multi-crypto settlements, global e-wallets, and direct international bank transfers with zero hidden exchange markups.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-slate-700">
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">BSC (BNB)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">TRX (Tron)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Ethereum (ETH)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Solana (SOL)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Bitcoin (BTC)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Litecoin (LTC)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Dogecoin (DOGE)</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Skrill E-Wallet</span>
            <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200">Bank Transfer (SWIFT / ACH)</span>
          </div>
        </div>
      </section>
    </div>
  );
};
