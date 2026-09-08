import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  CreditCard
} from 'lucide-react';
import { AppRoute, categoryToSlug } from '../utils/navigation';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Positioning */}
          <div className="col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, { page: 'home' })}
              className="flex items-center space-x-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Golf<span className="text-emerald-400">Crater</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted marketplace for verified digital assets, high-authority accounts, and online business infrastructure.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Legitimate & verified business solutions only</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encrypted checkout</span>
              </div>
            </div>

            {/* Payment Method Badges in footer */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase">
              <span className="bg-slate-900 border border-emerald-900/60 text-emerald-400 px-2 py-1 rounded-sm">Crypto Gateways (BSC • TRX • ETH • SOL • BTC • LTC • DOGE)</span>
              <span className="bg-slate-900 border border-slate-800 text-pink-400 px-2 py-1 rounded-sm">Skrill E-Wallet</span>
              <span className="bg-slate-900 border border-slate-800 text-blue-400 px-2 py-1 rounded-sm">Bank Transfer (SWIFT / ACH)</span>
            </div>
          </div>

          {/* Col 2: Shop Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={`/category/${categoryToSlug('Bank Account')}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: 'Bank Account' })}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Bank Account
                </a>
              </li>
              <li>
                <a 
                  href={`/category/${categoryToSlug('Crypto Account')}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: 'Crypto Account' })}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Crypto Account
                </a>
              </li>
              <li>
                <a 
                  href={`/category/${categoryToSlug('Reviews Service')}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: 'Reviews Service' })}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Reviews Service
                </a>
              </li>
              <li>
                <a 
                  href={`/category/${categoryToSlug('SMM Account')}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: 'SMM Account' })}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  SMM Account
                </a>
              </li>
              <li>
                <a 
                  href={`/category/${categoryToSlug('Email Service')}`}
                  onClick={(e) => handleLinkClick(e, { page: 'category', category: 'Email Service' })}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Email Service
                </a>
              </li>
              <li>
                <a 
                  href="/shop"
                  onClick={(e) => handleLinkClick(e, { page: 'shop' })}
                  className="hover:text-emerald-400 transition-colors block font-semibold text-emerald-400/90"
                >
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="/about"
                  onClick={(e) => handleLinkClick(e, { page: 'about' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/services"
                  onClick={(e) => handleLinkClick(e, { page: 'services' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="/pricing"
                  onClick={(e) => handleLinkClick(e, { page: 'pricing' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a 
                  href="/blog"
                  onClick={(e) => handleLinkClick(e, { page: 'blog' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Insights & Blog
                </a>
              </li>
              <li>
                <a 
                  href="/faq"
                  onClick={(e) => handleLinkClick(e, { page: 'faq' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, { page: 'contact' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a 
                  href="/track-order"
                  onClick={(e) => handleLinkClick(e, { page: 'track-order' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, { page: 'contact' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="/track-order"
                  onClick={(e) => handleLinkClick(e, { page: 'track-order' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Order Status Lookup
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, { page: 'contact' })} 
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Contact Support
                </a>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-3">
              Direct Contact
            </h4>
            <div className="space-y-1 text-[11px]">
              <a
                href="https://t.me/GolfCraterSupport"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors block"
              >
                Telegram: @GolfCraterSupport
              </a>
              <a
                href="mailto:support@golfcrater.com"
                className="hover:text-emerald-400 transition-colors block"
              >
                support@golfcrater.com
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory & Platform Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 leading-relaxed">
          <p className="max-w-4xl">
            <strong>Compliance Disclaimer:</strong> GolfCrater is an independent digital marketplace facilitating business productivity tools, digital assets, and lawful reputation consulting. Product names, trademarks, and registered logos (such as PayPal, Google, Trustpilot, Binance, Wise, Stripe, Yelp) belong to their respective copyright and trademark owners. Mention of these entities does not imply affiliation, sponsorship, or endorsement.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] pt-4 border-t border-slate-900">
          <div>
            © 2026 GolfCrater. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <span>Server Status: Operational</span>
            <span>•</span>
            <span>SSL 256-bit Encrypted</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
