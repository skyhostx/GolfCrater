import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, Star, ArrowRight, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = products.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.shortDescription.toLowerCase().includes(term) ||
      p.tags.some(t => t.toLowerCase().includes(term))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200">
      <div 
        id="search-modal-container"
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search reviews, bank accounts, crypto, or tags (e.g. Google, Wise, Binance)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold text-slate-500 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 rounded-md cursor-pointer transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <p className="text-sm font-semibold text-slate-700">No products found matching "{searchTerm}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for "Reviews", "Stripe", "Cash App", or "Binance"</p>
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 px-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                        {product.category}
                      </span>
                      <div className="flex items-center text-amber-400 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-slate-700 font-bold ml-1 text-[11px]">{product.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <span className="text-xs sm:text-sm font-black text-slate-900 block">
                    From ${product.startingPrice}
                  </span>
                  <span className="text-[10px] text-slate-400 group-hover:text-emerald-600 font-semibold flex items-center justify-end">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Tag Pills Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center">
            <Tag className="w-3 h-3 mr-1" /> Quick:
          </span>
          {['Google Reviews', 'Trustpilot', 'Cash App BTC', 'PayPal Business', 'Binance Plus', 'Stripe LLC'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-600 hover:border-emerald-400 hover:text-emerald-700 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
