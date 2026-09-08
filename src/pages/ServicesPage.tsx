import React from 'react';
import { AppRoute, categoryToSlug } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { 
  Star, 
  Building2, 
  Coins, 
  Share2, 
  Mail, 
  Wrench, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Reviews':
        return <Star className="w-5 h-5 text-amber-500" />;
      case 'Bank Account':
        return <Building2 className="w-5 h-5 text-blue-500" />;
      case 'Crypto Account':
        return <Coins className="w-5 h-5 text-emerald-500" />;
      case 'SMM Account':
        return <Share2 className="w-5 h-5 text-purple-500" />;
      case 'Email Service':
        return <Mail className="w-5 h-5 text-indigo-500" />;
      case 'Digital Tools':
        return <Wrench className="w-5 h-5 text-teal-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <div className="bg-white">
      <SEO
        title="Digital Services & Verified Business Accounts | GolfCrater"
        description="Explore GolfCrater's comprehensive suite of verified digital services: Reviews management, verified bank accounts, crypto exchange solutions, SMM, and SMTP relays."
        canonicalUrl="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Digital Services & Accounts
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every service is engineered for enterprise reliability, high retention, and immediate operational deployment. Explore our core service verticals below.
          </p>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => {
            const catProducts = PRODUCTS.filter((p) => p.category === cat.name);
            const slug = categoryToSlug(cat.name);

            return (
              <div
                key={cat.name}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl">
                      {getCategoryIcon(cat.name)}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 rounded-full text-slate-600">
                      {catProducts.length} packages
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {cat.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cat.name === 'Reviews' && 'Organic 5-star verified customer feedback for Google Maps, Trustpilot, Yelp, Facebook, BBB, and G2 with gradual drip delivery and 60-day replacement warranty.'}
                    {cat.name === 'Bank Account' && 'Fully KYC-compliant merchant accounts including Cash App, PayPal, Stripe, Wise, and Payoneer with routing numbers, linked cards, and SSN records.'}
                    {cat.name === 'Crypto Account' && 'High-limit cryptocurrency exchange accounts on Binance, Coinbase, Kraken, and MoonPay with Tier-2/Tier-3 identity credentials.'}
                    {cat.name === 'SMM Account' && 'Aged creator and social media marketing accounts across Instagram, Twitter/X, TikTok, and YouTube with genuine organic histories.'}
                    {cat.name === 'Email Service' && 'Dedicated transactional SMTP relay servers (Mailgun, Brevo) and aged PVA Gmail accounts configured for 100% inbox deliverability.'}
                    {cat.name === 'Digital Tools' && 'Verified software licenses, developer environments, and digital automation tools configured for immediate enterprise use.'}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      Featured Offerings:
                    </span>
                    {catProducts.slice(0, 3).map((prod) => (
                      <a
                        key={prod.id}
                        href={`/product/${prod.id}`}
                        onClick={(e) => handleLinkClick(e, { page: 'product', productId: prod.id })}
                        className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition-colors"
                      >
                        <span className="font-semibold truncate mr-2">{prod.name}</span>
                        <span className="text-emerald-600 font-bold shrink-0">From ${prod.startingPrice}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={`/category/${slug}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: cat.name })}
                  className="inline-flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <span>View All {cat.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Highlights & Delivery Workflow */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Fulfillment Protocol
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
              How we guarantee safe, compliant, and prompt fulfillment on every order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-emerald-600 font-black text-xl mb-2 block">Step 01</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Select & Configure</h3>
              <p className="text-xs text-slate-600">Choose quantity, geo-targeting country, or account tiers tailored to your setup.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-emerald-600 font-black text-xl mb-2 block">Step 02</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Instant Payment</h3>
              <p className="text-xs text-slate-600">Pay via Crypto (BSC, TRX, ETH, SOL, BTC, LTC, DOGE), Skrill, or Bank Transfer.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-emerald-600 font-black text-xl mb-2 block">Step 03</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Warmup & Verification</h3>
              <p className="text-xs text-slate-600">Our technical team runs proxy matching, credential auditing, and drip scheduling.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-emerald-600 font-black text-xl mb-2 block">Step 04</span>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Dispatch & Warranty</h3>
              <p className="text-xs text-slate-600">Receive credentials via secure portal with active 60-day replacement warranty.</p>
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <a
                href="/pricing"
                onClick={(e) => handleLinkClick(e, { page: 'pricing' })}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                Compare Pricing Plans
              </a>
              <a
                href="/shop"
                onClick={(e) => handleLinkClick(e, { page: 'shop' })}
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
              >
                Browse Entire Catalog
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
