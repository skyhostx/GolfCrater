import React, { useState } from 'react';
import { CartItem } from '../types';
import { ProductLogo } from './ProductLogo';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Lock, 
  Tag, 
  Check, 
  ShieldCheck 
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onProceedToCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    const clean = couponCode.trim().toUpperCase();
    if (clean === 'GOLF20') {
      setDiscountPercent(20);
      setCouponSuccess('Promo code GOLF20 applied! 20% Discount active.');
    } else if (clean === 'VIP10') {
      setDiscountPercent(10);
      setCouponSuccess('Promo code VIP10 applied! 10% Discount active.');
    } else {
      setCouponError('Invalid coupon code. Try code: GOLF20');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        id="cart-drawer"
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
      >
        {/* Cart Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-base">Your Cart</h3>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800">Your cart is empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs">
                Explore our catalog of verified digital services, bank accounts, crypto exchange accounts, and review services.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Explore Marketplace
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div 
                key={`${item.productId}-${item.variant.id}-${index}`}
                className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <ProductLogo
                      productId={item.productId}
                      productName={item.productName}
                      size="small"
                      className="w-12 h-12 rounded-lg"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {item.productName}
                      </h4>
                      <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                        {item.variant.name}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-slate-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {item.customRequirements && (
                  <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100 truncate">
                    <strong>Note:</strong> {item.customRequirements}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  {/* Quantity modifier */}
                  <div className="flex items-center space-x-2 bg-slate-100 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center bg-white rounded-md text-slate-700 hover:bg-slate-200 text-xs cursor-pointer"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-slate-800 w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-white rounded-md text-slate-700 hover:bg-slate-200 text-xs cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900">
                      ${item.variant.price * item.quantity}.00
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer Checkout Bar */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
            
            {/* Coupon Box */}
            <form onSubmit={handleApplyCoupon} className="space-y-1.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter GOLF20 for 20% off"
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono uppercase focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponSuccess && <p className="text-[11px] text-emerald-700 font-bold">{couponSuccess}</p>}
              {couponError && <p className="text-[11px] text-red-600">{couponError}</p>}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200/60">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-slate-900">${subtotal}.00</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Discount ({discountPercent}%):</span>
                  <span>-${discountAmount}.00</span>
                </div>
              )}
              <div className="flex justify-between text-slate-500 text-[11px]">
                <span>Instant Digital Delivery:</span>
                <span className="font-bold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>Total:</span>
                <span>${total}.00</span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              onClick={() => {
                onProceedToCheckout(discountAmount, couponCode.trim().toUpperCase());
              }}
              className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-slate-950" />
              <span>Proceed to Secure Checkout</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <div className="flex items-center justify-center space-x-3 text-[11px] text-slate-500">
              <span className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                60-Day Guarantee
              </span>
              <span>•</span>
              <span>Cards, USDT & PayPal</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
