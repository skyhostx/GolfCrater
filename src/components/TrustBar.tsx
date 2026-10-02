import React from 'react';
import { Zap, Lock, MessageSquare, CheckCircle2, DollarSign } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      desc: 'Instant to 24-hr expedited delivery',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Lock,
      title: 'Secure Checkout',
      desc: 'SSL encrypted card & crypto gateway',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      desc: '24/7 dedicated live chat & Telegram',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: CheckCircle2,
      title: 'Quality-Checked Services',
      desc: '100% verified authentic accounts',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      desc: 'Direct supplier rates with zero markups',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section id="trust-bar" className="bg-slate-50/70 border-b border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Why GolfCrater?
          </span>
          <h2 className="text-lg font-bold text-slate-900 mt-1">
            Built for Businesses, Creators, and Digital Professionals
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all text-center flex flex-col items-center"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
