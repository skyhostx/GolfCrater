import React, { useState } from 'react';
import { Order } from '../types';
import { AppRoute } from '../utils/navigation';
import { 
  Search, 
  Package, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  ExternalLink,
  Lock,
  Download,
  AlertCircle
} from 'lucide-react';

interface OrderTrackingPageProps {
  orders: Order[];
  onNavigate: (route: AppRoute) => void;
}

export const OrderTrackingPage: React.FC<OrderTrackingPageProps> = ({
  orders,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);

  // Find order matching query
  const matchingOrder = orders.find(
    (o) =>
      o.id.toLowerCase() === searchQuery.trim().toLowerCase() ||
      o.customerEmail.toLowerCase() === searchQuery.trim().toLowerCase()
  ) || (searchQuery.trim() === '' && orders.length > 0 ? orders[0] : null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
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
            <span className="text-slate-900 font-bold">Track Order Status</span>
          </nav>

          <span className="text-xs font-semibold text-slate-500">
            Secure Live Lookup
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white border-b border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Fulfillment Radar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Track Order & Access Credentials
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Enter your GolfCrater Order ID (e.g. <code>GC-8942-X</code>) or the checkout email address used during purchase.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex max-w-md mx-auto items-center gap-2 mt-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Order ID (e.g. GC-8942-X) or Email..."
                className="w-full pl-10 pr-4 py-3 text-xs rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-mono shadow-xs"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer transition-colors"
            >
              Lookup
            </button>
          </form>
        </div>
      </div>

      {/* Order Status Display */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {matchingOrder ? (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
            
            {/* Top Order Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase">Order Reference</span>
                <h2 className="text-2xl font-black text-slate-900 font-mono mt-0.5">
                  #{matchingOrder.id}
                </h2>
                <span className="text-xs text-slate-500">
                  Placed on {new Date(matchingOrder.createdAt).toLocaleDateString()} at {new Date(matchingOrder.createdAt).toLocaleTimeString()}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="capitalize">{matchingOrder.status}</span>
                </span>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                  Total: ${matchingOrder.total}
                </span>
              </div>
            </div>

            {/* Delivery Progress Bar */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Fulfillment Timeline:
              </h3>
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-semibold">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                  <span>1. Payment Confirmed</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                  <span>2. Credentials Prepared</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                  <span>3. Security Verified</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold shadow-xs">
                  <Package className="w-4 h-4 mx-auto mb-1 text-white" />
                  <span>4. Ready for Access</span>
                </div>
              </div>
            </div>

            {/* Ordered Items */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Purchased Digital Items:
              </h3>
              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {matchingOrder.items.map((item, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between bg-white hover:bg-slate-50">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.productName}</h4>
                        <span className="text-[11px] text-slate-500 block">{item.variant.name} × {item.quantity}</span>
                        {item.customRequirements && (
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-0.5">
                            Note: {item.customRequirements}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-xs font-extrabold text-slate-900">
                      ${item.variant.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secure Handover Credentials Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400">
                  <Lock className="w-4 h-4" />
                  <span>Secure Handover Vault</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  Encrypted for {matchingOrder.customerEmail}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Credentials, recovery email backup keys, and proxy login guides were dispatched to <strong>{matchingOrder.customerEmail}</strong>. If you cannot locate the transmission in your inbox, check spam or contact live Telegram support with your Order ID.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Contact Live Desk
                </button>
                <a
                  href="https://t.me/GolfCraterSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Telegram Direct Support →
                </a>
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-10 text-center space-y-4">
            <Package className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">
              {searched ? 'No Order Found' : 'Lookup Any Order'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {searched 
                ? 'Please check your Order ID reference code or email address and try again.'
                : 'Enter your order ID from your checkout receipt or confirmation email.'}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate({ page: 'shop' })}
                className="px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Browse Marketplace Catalog
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
