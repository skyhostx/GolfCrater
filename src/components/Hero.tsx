import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Lock, 
  Star, 
  CheckCircle2, 
  BadgePercent,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onViewCategories: () => void;
  onSelectProductById: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onViewCategories,
  onSelectProductById,
}) => {
  return (
    <section id="hero" className="relative bg-white pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Subtle geometric digital background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0b1220_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Soft emerald ambient glow for depth */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value & Headlines */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Verified Digital Marketplace & Instant Processing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Digital Services.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Simple. Fast. Reliable.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover digital products and services designed for businesses, creators, and online professionals—all in one place.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md hover:shadow-lg shadow-emerald-500/20 cursor-pointer group"
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-categories-btn"
                onClick={onViewCategories}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200/80 cursor-pointer"
              >
                View Categories
              </button>
            </div>

            {/* Micro proof points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Non-Drop Warranty</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span>256-Bit SSL Checkout</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>Instant Order Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Product Cards Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Featured Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xl relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center font-bold">
                      GC
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-slate-900">Verified Marketplace Asset</h2>
                      <p className="text-[11px] text-slate-500">Live Inventory Ready</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    <Sparkles className="w-3 h-3 mr-1 text-emerald-600" /> Verified 2026
                  </span>
                </div>

                {/* Interactive Sample Product */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-sm">
                        Popular Service
                      </span>
                      <h3 className="font-bold text-slate-900 text-base mt-1">Buy Google Reviews</h3>
                      <div className="flex items-center space-x-1 mt-0.5">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-700">4.9</span>
                        <span className="text-xs text-slate-500">(348 verified)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Starting at</span>
                      <span className="text-lg font-black text-slate-900">$19.00</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
                    <span className="text-slate-600 flex items-center">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 mr-1" /> Gradual Drip Delivery
                    </span>
                    <button 
                      onClick={() => onSelectProductById('buy-google-reviews')}
                      className="font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                    >
                      View Options →
                    </button>
                  </div>
                </div>

                {/* Secondary Fast Action Tile */}
                <div className="mt-3 p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                      ₿
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Binance & Crypto Verified</h4>
                      <p className="text-[11px] text-slate-500">KYC Plus with Level 2 limits</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onSelectProductById('buy-verified-binance-account')}
                    className="px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md cursor-pointer"
                  >
                    From $219
                  </button>
                </div>

                {/* Trust bar at bottom of card */}
                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                    Buyer Protection Guarantee
                  </span>
                  <span className="font-semibold text-slate-700">60-Day Replacement</span>
                </div>
              </div>

              {/* Decorative Floating Promo Badge */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900 text-white p-3.5 rounded-xl shadow-lg flex items-center space-x-3 border border-slate-800 z-20 hidden sm:flex">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Limited Offer</div>
                  <div className="text-xs font-bold text-white">20% OFF with code <span className="text-emerald-400">GOLF20</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
