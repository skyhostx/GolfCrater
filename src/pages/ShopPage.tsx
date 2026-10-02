import React, { useState, useMemo, useEffect } from 'react';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { ProductCard } from '../components/ProductCard';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';

interface ShopPageProps {
  products: Product[];
  onNavigate: (route: AppRoute) => void;
  onAddToCart: (product: Product, variant: ProductVariant, customReq?: string) => void;
  onBuyNow: (product: Product, variant: ProductVariant, customReq?: string) => void;
}

const PRODUCTS_PER_PAGE = 16;

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['All', 'Account', 'Bank Account', 'Crypto Account', 'Reviews Service', 'SMM Account', 'Email Service', 'Other'];

  // Reset to first page when category, search, or sort criterion changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  const getProductPrice = (p: Product) => {
    if (typeof p.startingPrice === 'number' && !isNaN(p.startingPrice)) {
      return p.startingPrice;
    }
    const prices = p.variants.map((v) => v.price).filter((pr) => typeof pr === 'number' && !isNaN(pr));
    return prices.length > 0 ? Math.min(...prices) : 0;
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Reviews Service') {
          if (p.category !== 'Reviews' && (p.category as string) !== 'Reviews Service') return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesTag) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        const diff = getProductPrice(a) - getProductPrice(b);
        if (diff !== 0) return diff;
        return b.reviewCount - a.reviewCount;
      }
      if (sortBy === 'price-high') {
        const diff = getProductPrice(b) - getProductPrice(a);
        if (diff !== 0) return diff;
        return b.reviewCount - a.reviewCount;
      }
      if (sortBy === 'rating') {
        const diff = b.rating - a.rating;
        if (diff !== 0) return diff;
        return b.reviewCount - a.reviewCount;
      }
      return b.reviewCount - a.reviewCount;
    });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE) || 1;
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (validCurrentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const gridElem = document.getElementById('shop-grid-section');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 260, behavior: 'smooth' });
    }
  };

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
            <span className="text-slate-900 font-bold">Shop Digital Services</span>
          </nav>

          <span className="text-xs font-semibold text-slate-500">
            Showing {totalProducts > 0 ? `${startIndex + 1}–${Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts)}` : 0} of {totalProducts} Products
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                Verified Digital Services
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Marketplace Catalog
              </h1>
              <p className="text-slate-600 text-sm max-w-xl">
                Browse our complete selection of verified business accounts, reputation management tools, and digital infrastructure.
              </p>
            </div>

            {/* Quick search inside shop */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, platforms, accounts..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-slate-900 shadow-2xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid and Filters */}
      <div id="shop-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 scroll-mt-24">
        
        {/* Category tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Controls row: Count + Sort Dropdown */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
            <span>Showing <strong className="text-slate-900">{totalProducts}</strong> verified digital services</span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="featured">Most Popular / Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Customer Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <p className="text-base font-bold text-slate-800">No services match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Reset Search & Category
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={(p) => onNavigate({ page: 'product', productId: p.id })}
                  onAddToCart={onAddToCart}
                  onBuyNow={onBuyNow}
                />
              ))}
            </div>

            {/* Pagination Controls (Limit 16 per page) */}
            {totalPages > 1 && (
              <div className="pt-8 pb-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-semibold text-slate-500">
                  Showing <span className="text-slate-900 font-bold">{startIndex + 1}</span> to{' '}
                  <span className="text-slate-900 font-bold">
                    {Math.min(startIndex + PRODUCTS_PER_PAGE, totalProducts)}
                  </span>{' '}
                  of <span className="text-slate-900 font-bold">{totalProducts}</span> services (16 per page)
                </p>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handlePageChange(validCurrentPage - 1)}
                    disabled={validCurrentPage === 1}
                    className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1 shadow-2xs cursor-pointer"
                    aria-label="Previous Page"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isActive = pageNum === validCurrentPage;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-slate-900 text-white shadow-xs'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(validCurrentPage + 1)}
                    disabled={validCurrentPage === totalPages}
                    className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center space-x-1 shadow-2xs cursor-pointer"
                    aria-label="Next Page"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

