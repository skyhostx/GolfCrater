import React from 'react';
import { AppRoute, categoryToSlug } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { CATEGORIES } from '../data/products';
import { Search, Home, ShoppingBag, ArrowRight, AlertTriangle } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate({ page: 'shop' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <div className="min-h-[75vh] bg-slate-50 flex items-center justify-center px-4 py-16 sm:py-24">
      <SEO
        title="404 - Page Not Found | GolfCrater"
        description="The page you are looking for does not exist or has been moved. Explore our verified digital marketplace services and accounts on GolfCrater."
        canonicalUrl="/404"
        noIndex={true}
      />

      <div className="max-w-2xl w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mb-6 shadow-xs">
          <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
        </div>

        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          HTTP 404 Status
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-4">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
          The requested URL does not exist or may have been permanently relocated. Explore our verified marketplace catalog below or return to the homepage.
        </p>

        {/* Quick Search */}
        <form onSubmit={handleSearchSubmit} className="mt-8 max-w-md mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search accounts, services, reviews..."
            className="w-full pl-11 pr-24 py-3 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, { page: 'home' })}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>

          <a
            href="/shop"
            onClick={(e) => handleLinkClick(e, { page: 'shop' })}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span>Browse All Services</span>
          </a>
        </div>

        {/* Popular Categories */}
        <div className="mt-10 pt-8 border-t border-slate-100 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center mb-4">
            Or Explore Popular Categories:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <a
                key={cat.name}
                href={`/category/${categoryToSlug(cat.name)}`}
                onClick={(e) => handleLinkClick(e, { page: 'category', category: cat.name })}
                className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 text-xs font-bold text-slate-800 hover:text-emerald-800 transition-colors flex items-center justify-between group"
              >
                <span>{cat.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
