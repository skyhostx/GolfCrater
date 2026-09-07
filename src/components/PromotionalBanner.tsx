import React, { useState } from 'react';
import { Sparkles, ArrowRight, Copy, Check, ShieldCheck, Flame } from 'lucide-react';

interface PromotionalBannerProps {
  onViewDeals: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onViewDeals }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'GOLF20';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="promotions" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-slate-800">
          
          {/* Subtle decorative background light elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left promo copy */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Digital Promotion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Special Digital Deals
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Save more when you purchase selected digital services. Apply coupon during checkout to unlock an instant 20% discount on all verified accounts and review bundles.
              </p>

              {/* Coupon chip */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="flex items-center bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2 space-x-3">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Promo Code:</span>
                  <span className="font-mono text-base font-extrabold text-emerald-400 tracking-wider">
                    {promoCode}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 hover:bg-slate-700 rounded-md transition-colors text-slate-300 hover:text-white cursor-pointer"
                    title="Copy coupon code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && <span className="text-xs text-emerald-400 font-bold">Code Copied!</span>}
              </div>
            </div>

            {/* Right Action CTA */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
              <button
                onClick={onViewDeals}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-extrabold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer group"
              >
                <span>View Deals →</span>
              </button>

              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Applicable to all categories today</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
