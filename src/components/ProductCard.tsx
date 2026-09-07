import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { 
  Star, 
  Check, 
  ShoppingBag, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Eye,
  Sparkles
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product, variant: ProductVariant) => void;
  onBuyNow: (product: Product, variant: ProductVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToCart,
  onBuyNow,
}) => {
  // Default to popular variant or first variant
  const initialVariant = product.variants.find(v => v.popular) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(initialVariant);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedVariant);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleBuyNowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuyNow(product, selectedVariant);
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col overflow-hidden text-left"
    >
      {/* Product Image & Badges */}
      <div 
        className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
            {product.category}
          </span>
          {product.badge && (
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Bottom tags on image */}
        <div className="absolute bottom-2.5 left-3 flex items-center space-x-1.5 text-white text-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-[11px] drop-shadow-xs">Verified & Guaranteed</span>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center space-x-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-slate-800">{product.rating}</span>
              <span className="text-slate-500">({product.reviewCount})</span>
            </div>
            <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse"></span> In Stock
            </span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Package Selector */}
          <div className="mt-3.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Select Package Option:
            </label>
            <select
              value={selectedVariant.id}
              onChange={(e) => {
                const found = product.variants.find(v => v.id === e.target.value);
                if (found) setSelectedVariant(found);
              }}
              className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white cursor-pointer"
            >
              {product.variants.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} — ${v.price}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Package Price</span>
              <span className="text-2xl font-black text-slate-900">
                ${selectedVariant.price}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500">
              {product.specifications.deliveryTime}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCartClick}
              className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                addedAnimation 
                  ? 'bg-emerald-600 text-white border-emerald-600' 
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-slate-600" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            <button
              onClick={handleBuyNowClick}
              className="py-2 px-3 rounded-lg text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all flex items-center justify-center space-x-1 shadow-xs cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 text-slate-950" />
              <span>Buy Now</span>
            </button>
          </div>

          {/* View Details Link */}
          <button
            onClick={() => onViewDetails(product)}
            className="w-full mt-2.5 py-1.5 text-center text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center justify-center space-x-1 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Full Details & Specs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
