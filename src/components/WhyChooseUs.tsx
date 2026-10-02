import React from 'react';
import { Lock, Zap, Award, MessageCircle, Package, Globe2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Lock,
      title: 'Secure',
      description: 'Your account and payment information are handled securely with end-to-end 256-bit SSL encryption and non-custodial privacy.',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: Zap,
      title: 'Fast',
      description: 'Efficient processing and delivery for eligible digital products with streamlined fulfillment queues.',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Carefully reviewed products and services adhering to strict identity verification and retention standards.',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Support',
      description: 'Get assistance when you need it with our round-the-clock technical desk and dedicated account managers.',
      iconBg: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: Package,
      title: 'Digital Delivery',
      description: 'No physical shipping required for digital products. Credentials, licenses, and reports arrive directly in your inbox.',
      iconBg: 'bg-teal-50 text-teal-600',
    },
    {
      icon: Globe2,
      title: 'Global',
      description: 'Built for customers worldwide who purchase digital services online, supporting international currencies and localized accounts.',
      iconBg: 'bg-violet-50 text-violet-600',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Commitment to Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Choose GolfCrater?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The trusted digital marketplace powering thousands of entrepreneurs, agencies, and businesses worldwide.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-start"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
