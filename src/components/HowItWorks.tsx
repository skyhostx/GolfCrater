import React from 'react';
import { MousePointerClick, CreditCard, Inbox, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onExploreClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onExploreClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Choose',
      subtitle: 'Browse & Select',
      description: 'Browse our digital services and select what you need. Compare package tiers, pricing, and specific regional features.',
      icon: MousePointerClick,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      number: '02',
      title: 'Pay',
      subtitle: 'Secure Gateway Checkout',
      description: 'Complete your order through our secure checkout using Credit/Debit cards, Crypto (USDT, BTC, ETH), PayPal, or Wise.',
      icon: CreditCard,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      number: '03',
      title: 'Receive',
      subtitle: 'Instant & Drip Handover',
      description: 'Get your eligible digital product or service according to the stated delivery method with live tracking and 24/7 assistance.',
      icon: Inbox,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Fulfillment Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Buy in 3 Easy Steps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A frictionless, transparent procurement process engineered for immediate results.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black tracking-tight text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Automated Delivery Tracker Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <span>Start Shopping Now</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
