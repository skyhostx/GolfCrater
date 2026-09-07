import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { 
  Star, 
  Check, 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Globe, 
  HelpCircle,
  Share2,
  Lock,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Package
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface ProductPageProps {
  product: Product;
  onNavigate: (route: AppRoute) => void;
  onAddToCart: (product: Product, variant: ProductVariant, customReq?: string) => void;
  onBuyNow: (product: Product, variant: ProductVariant, customReq?: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const initialVariant = product.variants.find(v => v.popular) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(initialVariant);
  const [customRequirements, setCustomRequirements] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedVariant, customRequirements);
    }
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedVariant, customRequirements);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find related products in same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const totalPrice = selectedVariant.price * quantity;

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 animate-in fade-in duration-200">
      {/* Breadcrumbs bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-14 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar">
            <button
              onClick={() => onNavigate({ page: 'home' })}
              className="hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => onNavigate({ page: 'category', category: product.category })}
              className="hover:text-emerald-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              {product.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-900 truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onNavigate({ page: 'category', category: product.category })}
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {product.category}</span>
            </button>
            <button
              onClick={handleShare}
              className="px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 space-y-12">
        {/* Main Product Hero Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Image, Trust Badges, Specifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Guaranteed</span>
                </div>
              </div>

              {/* Micro Trust Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">60-Day Warranty</span>
                    <span className="text-[11px] text-slate-500">Free replacement protection</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2.5">
                  <Zap className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">Fast Fulfillment</span>
                    <span className="text-[11px] text-slate-500">{product.specifications.deliveryTime}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2.5">
                  <Lock className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">Encrypted Checkout</span>
                    <span className="text-[11px] text-slate-500">SSL 256-bit bank security</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2.5">
                  <Globe className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-800 block">Global Coverage</span>
                    <span className="text-[11px] text-slate-500">{product.specifications.supportedRegions}</span>
                  </div>
                </div>
              </div>

              {/* Specifications Card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                  <FileText className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                  Technical Specifications
                </h3>
                <div className="divide-y divide-slate-200/60 text-xs">
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Delivery Speed:</span>
                    <span className="text-slate-900 font-bold">{product.specifications.deliveryTime}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Retention Guarantee:</span>
                    <span className="text-slate-900 font-bold">{product.specifications.guaranteePeriod}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Verification Standard:</span>
                    <span className="text-slate-900 font-bold">{product.specifications.verificationLevel}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Support Channel:</span>
                    <span className="text-slate-900 font-bold">{product.specifications.supportAvailable}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Documents Included:</span>
                    <span className="text-slate-900 font-bold">{product.specifications.documentsIncluded}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Ratings, Package Selection, Order Box */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {product.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">•</span>
                  <span className="text-xs font-semibold text-slate-500">Verified Service ID: {product.id}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 leading-tight">
                  {product.name}
                </h1>
                
                {/* Rating and Reviews */}
                <div className="flex items-center space-x-3 mt-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                  <span className="text-sm text-slate-500 font-medium">({product.reviewCount} customer reviews)</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    99.8% Retention Rate
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                  {product.shortDescription}
                </p>
              </div>

              {/* Variant / Package Selector */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Select Your Package / Volume:
                  </label>
                  <span className="text-xs text-emerald-600 font-bold">
                    {product.variants.length} Options Available
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                  {product.variants.map((variant) => {
                    const isSelected = selectedVariant.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-3.5 rounded-xl text-left border transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50/50 shadow-xs ring-2 ring-emerald-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-bold text-slate-900 leading-snug">
                            {variant.name}
                          </span>
                          {variant.popular && (
                            <span className="bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase shrink-0 ml-1">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-base font-extrabold text-slate-900">
                            ${variant.price}
                          </span>
                          {isSelected && (
                            <span className="text-[11px] font-bold text-emerald-600 flex items-center">
                              <Check className="w-3.5 h-3.5 mr-0.5" /> Selected
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Requirements / Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>Custom Requirements / Target URL / Delivery Details:</span>
                  <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                </label>
                <textarea
                  value={customRequirements}
                  onChange={(e) => setCustomRequirements(e.target.value)}
                  rows={2}
                  placeholder="e.g., Profile link, preferred geographic country, custom talking points..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* Quantity and Price Calculation Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
                      Total Investment:
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline space-x-2 mt-0.5">
                      <span>${totalPrice}</span>
                      <span className="text-xs text-emerald-400 font-semibold">
                        (${selectedVariant.price} × {quantity})
                      </span>
                    </div>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-xl p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs ${
                      addedAnimation
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-emerald-400" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
                    <span>Instant Checkout Now</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 1500-word Full Description & Comprehensive Roadmap */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Documentation & SLA</span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Comprehensive Service Overview & Delivery Roadmap
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 bg-slate-50/50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="whitespace-pre-line font-sans space-y-4">
              {product.fullDescription}
            </div>

            {/* Quality & Security Charter */}
            <div className="mt-10 pt-6 border-t border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-base">
                GolfCrater Quality & Security Charter
              </h3>
              <p className="text-xs text-slate-600">
                At GolfCrater, every service listing is subject to a rigorous 7-point validation pipeline before publication. Our digital assets are legitimate, verified with authentic documentation where applicable, and handed over with complete cryptographic and security ownership.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Ownership Transfer:</strong> Registered email, backup keys, and login access are transferred exclusively to the purchaser.</span>
                </div>
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fraud Prevention:</strong> We do not engage with hijacked, compromised, or stolen credentials. All accounts are legitimately initialized.</span>
                </div>
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Drip-Feed Protection:</strong> Review services are naturally staged to replicate authentic customer behavior and safeguard host platform standing.</span>
                </div>
                <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Dispute Resolution:</strong> Immediate replacement or account recalibration is handled via live support within 30 minutes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services in this category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  More Services in {product.category}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Explore complementary business solutions</p>
              </div>
              <button
                onClick={() => onNavigate({ page: 'category', category: product.category })}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1 cursor-pointer"
              >
                <span>View All ({product.category})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onNavigate({ page: 'product', productId: rel.id })}
                  className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="h-40 rounded-xl overflow-hidden bg-slate-100 relative">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      {rel.badge && (
                        <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                          {rel.badge}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rel.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      From ${rel.startingPrice}
                    </span>
                    <span className="text-xs font-bold text-slate-600 group-hover:text-emerald-600 flex items-center">
                      View Service →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
