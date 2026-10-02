import React from 'react';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Lock, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Headphones
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div className="bg-white">
      <SEO
        title="About GolfCrater | Trusted Digital Marketplace & Verification Standards"
        description="Learn about GolfCrater's mission, rigorous verification protocols, buyer protections, 60-day replacement warranty, and enterprise digital solutions."
        canonicalUrl="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built on Trust & Verification</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            About GolfCrater
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The premier digital marketplace for verified digital accounts, 5-star reputation management, aged business infrastructure, and secure high-deliverability email systems.
          </p>
        </div>
      </section>

      {/* Core Mission & Story */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Empowering Modern Businesses with Verified Digital Assets
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                GolfCrater was founded to eliminate friction and uncertainty in digital procurement. In an era where businesses require immediate access to global banking gateways, cryptocurrency liquidity, and stellar review presence, finding dependable, fully verified infrastructure is paramount.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                Every account, credential package, and reputation service listed on GolfCrater undergoes strict multi-tier verification before handover, ensuring compliance, safety, and operational continuity.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick(e, { page: 'services' })}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, { page: 'contact' })}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors"
                >
                  <span>Contact Our Team</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">Why Global Businesses Rely on Us</h3>
              
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% KYC & Pre-Vetted Verification</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    All accounts and payment processors are thoroughly verified with compliant documentation, identity proof, and clean activity histories.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">60-Day Replacement Warranty</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Enjoy peace of mind with our 60-day warranty. If any credential or review package encounters algorithmic issues, we replace it free of charge.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-purple-100 text-purple-700 rounded-lg shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Express Automated Handover</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Instant credential delivery for automated digital tools and rapid 24-72 hour gradual drip fulfillment for reputation reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg shrink-0 mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Secure Multi-Currency Payments</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Checkout securely with BSC, TRX, ETH, SOL, BTC, LTC, DOGE, Skrill, or International Bank Transfer (SWIFT / ACH).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Verification Standards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Security Protocols
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Our Quality & Privacy Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            We adhere to rigorous technical protocols to protect both clients and accounts during handover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean IP & Proxy Isolation</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Accounts are warmed using residential proxies matching the registration country. Handover packages include browser fingerprint guidelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Dedicated Document Archives</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                For verified banking and cryptocurrency exchange solutions, buyers receive full documentation sets to ensure complete ownership transfer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Encrypted Dispatch & VIP Support</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Credentials are sent via encrypted order tracking portals and verified email channels, backed by 24/7 dedicated Telegram & WhatsApp support desks.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-900">Have specific enterprise requirements?</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our business solutions team configures custom volumes, dedicated IP subnets, and bulk orders.
              </p>
            </div>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, { page: 'contact' })}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm whitespace-nowrap transition-colors"
            >
              Get in Touch with VIP Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
