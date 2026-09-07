import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductCard } from '../components/ProductCard';
import { HowItWorks } from '../components/HowItWorks';
import { PromotionalBanner } from '../components/PromotionalBanner';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CustomerReviewsSection } from '../components/CustomerReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { Newsletter } from '../components/Newsletter';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onNavigate: (route: AppRoute) => void;
  onAddToCart: (product: Product, variant: ProductVariant, customReq?: string) => void;
  onBuyNow: (product: Product, variant: ProductVariant, customReq?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [activeTag, setActiveTag] = useState<string>('All');

  const allTags = ['All', 'Verified', 'Google Maps', 'TrustScore 4.8+', 'Cash App', 'Stripe Gateway', 'Binance Plus', 'B2B SaaS'];

  // Filtered & sorted products for popular showcase
  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Reviews Service' && p.category !== 'Reviews') return false;
      if (selectedCategory !== 'Reviews Service' && p.category !== selectedCategory) return false;
    }
    if (activeTag !== 'All' && !p.tags.includes(activeTag)) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
    if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onExploreServices={() => onNavigate({ page: 'shop' })}
        onViewCategories={() => {
          const el = document.getElementById('categories');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectProductById={(id) => onNavigate({ page: 'product', productId: id })}
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Service Categories Grid */}
      <CategoryGrid
        onSelectCategory={(cat) => onNavigate({ page: 'category', category: cat })}
        activeCategory={selectedCategory}
      />

      {/* 4. Popular Products Catalog */}
      <section id="products" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Instant Fulfillment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Popular Products & Services
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Showing {filteredProducts.length} verified listings in{' '}
                <strong className="text-slate-900">{selectedCategory === 'All' ? 'All Categories' : selectedCategory}</strong>
              </p>
            </div>

            {/* Sorting Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-500 font-medium">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer pr-8"
                >
                  <option value="featured">Most Popular / Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-slate-100">
            {['All', 'Reviews Service', 'Bank Account', 'Crypto Account', 'SMM Account', 'Email Service'].map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActiveTag('All');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Tag Sub-filters */}
          <div className="flex items-center gap-1.5 flex-wrap mb-8">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Filter tag:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  activeTag === tag
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-base font-bold text-slate-800">No products match your selected filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setActiveTag('All');
                }}
                className="mt-3 px-4 py-2 bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
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

          {/* View All Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate({ page: 'shop' })}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Explore All Verified Digital Services in Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. How It Works */}
      <HowItWorks onExploreClick={() => onNavigate({ page: 'shop' })} />

      {/* 6. Promotional Banner */}
      <PromotionalBanner onViewDeals={() => onNavigate({ page: 'shop' })} />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Customer Reviews */}
      <CustomerReviewsSection />

      {/* 9. FAQ Section */}
      <FAQSection onOpenContact={() => onNavigate({ page: 'contact' })} />

      {/* 10. Newsletter */}
      <Newsletter />
    </div>
  );
};
