import React, { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { 
  X, 
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
  Tag
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, customReq?: string) => void;
  onBuyNow: (product: Product, variant: ProductVariant, customReq?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  const initialVariant = product.variants.find(v => v.popular) || product.variants[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(initialVariant);
  const [customRequirements, setCustomRequirements] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, customRequirements);
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col my-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <span>Marketplace</span>
            <span>/</span>
            <span className="text-emerald-700">{product.category}</span>
            <span>/</span>
            <span className="text-slate-800 truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-xs flex items-center space-x-1"
              title="Share service link"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-slate-100">
          
          {/* Top Section: Media & Primary Purchase Box */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image & Badges */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="bg-emerald-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Tags */}
              <div>
                <div className="flex items-center space-x-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Service Tags</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SEO Meta Box */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                <div className="font-bold text-slate-800 mb-1 flex items-center">
                  <Globe className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                  <span>SEO Index Summary</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  {product.metaDescription}
                </p>
              </div>
            </div>

            {/* Right: Purchase Control & Variant Selection */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-xs mb-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewCount} customer reviews)</span>
                  <span className="text-emerald-700 font-semibold text-xs ml-2 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    Verified Seller
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Package Selection Options */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                  Choose Your Package Variant:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-emerald-600 bg-white ring-2 ring-emerald-500/20 shadow-xs' 
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 leading-tight">
                            {v.name}
                          </div>
                          {v.popular && (
                            <span className="text-[10px] text-emerald-700 font-bold uppercase">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-extrabold text-slate-900 ml-2">
                          ${v.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Requirements Input */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Target Information / Account Specification (Optional):
                </label>
                <input
                  type="text"
                  value={customRequirements}
                  onChange={(e) => setCustomRequirements(e.target.value)}
                  placeholder={
                    product.category === 'Reviews' 
                      ? "Enter your Google Maps / Trustpilot / Yelp link here"
                      : "Enter target country preference or delivery notes"
                  }
                  className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  You can also provide this in checkout or via 24/7 Live Support post-purchase.
                </span>
              </div>

              {/* Total & Action Buttons */}
              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-xs text-slate-500 block uppercase font-bold">Selected Price:</span>
                    <span className="text-3xl font-black text-slate-900">
                      ${selectedVariant.price}.00
                    </span>
                  </div>
                  <div className="text-right text-xs text-slate-600">
                    <span className="font-semibold text-emerald-700 flex items-center justify-end">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {product.specifications.deliveryTime}
                    </span>
                    <span className="text-slate-500 text-[11px]">Instant automated queue</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-3 px-4 rounded-xl text-xs font-bold border flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      addedAnimation 
                        ? 'bg-emerald-600 text-white border-emerald-600' 
                        : 'bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-slate-700" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="py-3 px-4 rounded-xl text-xs font-extrabold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-slate-950" />
                    <span>Instant Checkout</span>
                  </button>
                </div>

                {/* Trust footer under CTA */}
                <div className="mt-4 flex items-center justify-center space-x-4 text-[11px] text-slate-500">
                  <span className="flex items-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                    60-Day Guarantee
                  </span>
                  <span className="flex items-center">
                    <Lock className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                    Encrypted Gateway
                  </span>
                  <span className="flex items-center">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                    Fast Handover
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Specifications Table */}
          <div className="pt-8">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
              <FileText className="w-4 h-4 text-emerald-600 mr-2" />
              Service Specifications & Verification Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Delivery Turnaround</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.deliveryTime}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Retention & Guarantee</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.guaranteePeriod}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Verification Standard</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.verificationLevel}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Support SLA</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.supportAvailable}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Documents Provided</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.documentsIncluded}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Supported Geographic Regions</span>
                <span className="text-xs font-bold text-slate-900">{product.specifications.supportedRegions}</span>
              </div>
            </div>
          </div>

          {/* Full In-Depth Description Content (1500+ Words Guide) */}
          <div className="pt-8 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <HelpCircle className="w-5 h-5 text-emerald-600 mr-2" />
              Comprehensive Service Guide & Operational Roadmap
            </h3>
            
            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 bg-slate-50/50 p-6 rounded-2xl border border-slate-200">
              <div className="whitespace-pre-line font-sans space-y-4">
                {product.fullDescription}
              </div>

              {/* Additional comprehensive standard guidelines present for all services */}
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4 text-xs">
                <h4 className="font-bold text-slate-900 text-sm">GolfCrater Quality & Security Charter</h4>
                <p>
                  At GolfCrater, every service listing is subject to a 7-point validation pipeline before publication. Our accounts are aged, verified with authentic legal documentation where applicable, and handed over with complete cryptographic and security ownership.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Full Ownership Transfer:</strong> Registered email, backup keys, and login access are transferred exclusively to the purchaser.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Fraud Prevention:</strong> We do not engage with hijacked, compromised, or stolen credentials. All accounts are legitimately initialized.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Drip-Feed Protection:</strong> Review services are naturally staged to replicate authentic customer behavior and safeguard host platform standing.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Dedicated Dispute Resolution:</strong> Immediate replacement or account recalibration is handled via live support within 30 minutes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span>Need a customized volume discount? Contact our Enterprise Desk.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            Back to Catalog
          </button>
        </div>

      </div>
    </div>
  );
};
