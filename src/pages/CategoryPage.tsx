import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Landmark, 
  Coins, 
  Star, 
  Smartphone, 
  Mail, 
  Package, 
  Filter, 
  Lock,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

interface CategoryPageProps {
  category: string;
  products: Product[];
  onNavigate: (route: AppRoute) => void;
  onAddToCart: (product: Product, variant: ProductVariant, customReq?: string) => void;
  onBuyNow: (product: Product, variant: ProductVariant, customReq?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  products,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [activeTag, setActiveTag] = useState<string>('All');

  // Filter products for this category
  const categoryProducts = products.filter((p) => {
    if (category === 'Reviews Service' || category === 'Reviews') {
      return (p.category as string) === 'Reviews' || (p.category as string) === 'Reviews Service';
    }
    if (category === 'Email' || category === 'Email Service') {
      return (p.category as string) === 'Email Service' || (p.category as string) === 'Email';
    }
    return p.category === category;
  });

  // Collect all unique tags for this category
  const categoryTags = ['All', ...Array.from(new Set(categoryProducts.flatMap((p) => p.tags)))];

  // Apply sorting and tag filters
  const displayedProducts = categoryProducts.filter((p) => {
    if (activeTag !== 'All' && !p.tags.includes(activeTag)) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
    if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  const categoryMeta = CATEGORIES.find(
    (c) =>
      c.name === category ||
      (category === 'Reviews' && c.name === 'Reviews Service') ||
      (category === 'Email' && c.name === 'Email Service')
  ) || {
    name: category,
    description: `Premium verified ${category.toLowerCase()} solutions, digital accounts, and operational infrastructure.`,
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Bank Account':
        return <Landmark className="w-8 h-8 text-emerald-600" />;
      case 'Crypto Account':
        return <Coins className="w-8 h-8 text-blue-600" />;
      case 'Reviews Service':
      case 'Reviews':
        return <Star className="w-8 h-8 text-amber-500 fill-amber-500" />;
      case 'SMM Account':
        return <Smartphone className="w-8 h-8 text-indigo-600" />;
      case 'Email Service':
        return <Mail className="w-8 h-8 text-teal-600" />;
      default:
        return <Package className="w-8 h-8 text-slate-500" />;
    }
  };

  // Other categories for exploration
  const otherCategories = CATEGORIES.filter(
    (c) => c.name !== category && (category !== 'Reviews' || c.name !== 'Reviews Service')
  );

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 animate-in fade-in duration-200">
      {/* Breadcrumbs bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-14 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <button
              onClick={() => onNavigate({ page: 'home' })}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => onNavigate({ page: 'shop' })}
              className="hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Marketplace
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{category}</span>
          </nav>

          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            {categoryProducts.length} Services Available
          </span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <div className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                <span className="p-1 rounded-lg bg-slate-50">
                  {getCategoryIcon(category)}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Verified Category
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {category}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {categoryMeta.description} Each package includes strict verification, security handover keys, and full 60-day replacement warranty protection.
              </p>
            </div>

            {/* Quick Guarantees Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm shrink-0 md:w-80 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Quality Standards
              </span>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center space-x-2 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">60-Day Replacement Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Automated & Drip Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">100% Lawful & Verified Accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Filters + Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Controls Bar: Sort + Tags */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Tag filter pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter:
            </span>
            {categoryTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTag === tag
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 shrink-0 self-end md:self-auto">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="featured">Most Popular / Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {displayedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No services found for selected filter</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the tag filter to see all services in this category.</p>
            <button
              onClick={() => setActiveTag('All')}
              className="mt-4 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Reset Tag Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(p) => onNavigate({ page: 'product', productId: p.id })}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
              />
            ))}
          </div>
        )}

        {/* Explore other categories */}
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Explore Other Categories</h3>
              <p className="text-xs text-slate-500">Discover additional verified business infrastructure</p>
            </div>
            <button
              onClick={() => onNavigate({ page: 'shop' })}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1 cursor-pointer"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => onNavigate({ page: 'category', category: c.name })}
                className="p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-left transition-all hover:border-emerald-300 hover:shadow-xs group cursor-pointer"
              >
                <div className="p-2 rounded-xl bg-slate-50 w-fit mb-2 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(c.name)}
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                  {c.name}
                </h4>
                <span className="text-[10px] text-slate-400 block mt-0.5">Explore services →</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
