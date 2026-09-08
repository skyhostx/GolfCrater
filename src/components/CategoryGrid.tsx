import React from 'react';
import { 
  Landmark, 
  Coins, 
  Star, 
  Smartphone, 
  Mail, 
  Wrench, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { categoryToSlug } from '../utils/navigation';

interface CategoryGridProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  const categories = [
    {
      id: 'Bank Account',
      title: 'Bank Account',
      icon: Landmark,
      description: 'Legitimate business and financial-related services where legally permitted. PayPal, Stripe, Wise, and Cash App solutions.',
      actionText: 'Explore Bank Services',
      bgClass: 'hover:border-emerald-400 group-hover:bg-emerald-50/50',
      iconClass: 'text-emerald-700 bg-emerald-100/70',
      badge: 'Verified KYC',
    },
    {
      id: 'Crypto Account',
      title: 'Crypto Account',
      icon: Coins,
      description: 'Crypto-related services and resources that comply with applicable laws and platform requirements. Binance, Coinbase, and Kraken.',
      actionText: 'Explore Crypto Services',
      bgClass: 'hover:border-blue-400 group-hover:bg-blue-50/50',
      iconClass: 'text-blue-700 bg-blue-100/70',
      badge: 'High Limits',
    },
    {
      id: 'Reviews Service',
      title: 'Reviews Service',
      icon: Star,
      description: 'Legitimate reputation-management services, such as review monitoring, customer-feedback systems, and review-request tools.',
      actionText: 'Explore Review Services',
      bgClass: 'hover:border-amber-400 group-hover:bg-amber-50/50',
      iconClass: 'text-amber-700 bg-amber-100/70',
      badge: '5-Star Retention',
    },
    {
      id: 'SMM Account',
      title: 'SMM Account',
      icon: Smartphone,
      description: 'Social-media marketing tools, aged creator channels, and legitimate marketing growth services.',
      actionText: 'Explore SMM Services',
      bgClass: 'hover:border-indigo-400 group-hover:bg-indigo-50/50',
      iconClass: 'text-indigo-700 bg-indigo-100/70',
      badge: 'Aged Profiles',
    },
    {
      id: 'Email Service',
      title: 'Email Service',
      icon: Mail,
      description: 'Business email, email-management, marketing servers, and high-deliverability digital infrastructure.',
      actionText: 'Explore Email Services',
      bgClass: 'hover:border-teal-400 group-hover:bg-teal-50/50',
      iconClass: 'text-teal-700 bg-teal-100/70',
      badge: 'Warm IP Pools',
    },
    {
      id: 'Digital Tools',
      title: 'Digital Tools',
      icon: Wrench,
      description: 'Software licenses, developer templates, automation tools, and downloadable digital assets.',
      actionText: 'Explore Digital Tools',
      bgClass: 'hover:border-violet-400 group-hover:bg-violet-50/50',
      iconClass: 'text-violet-700 bg-violet-100/70',
      badge: 'Instant Key',
    },
  ];

  return (
    <section id="categories" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Marketplace Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Explore Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select a specialized category below to view verified packages, technical specifications, and tier pricing.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <a
                key={cat.id}
                id={`category-card-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                href={`/category/${categoryToSlug(cat.id)}`}
                onClick={(e) => {
                  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                  }
                }}
                className={`group relative bg-white rounded-2xl border p-6 sm:p-7 transition-all duration-200 block text-left flex flex-col justify-between ${
                  isSelected 
                    ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20 bg-emerald-50/30' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${cat.iconClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                  <span>{cat.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
