import React, { useState } from 'react';
import { Order } from '../types';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  Package, 
  ShieldCheck, 
  MessageCircle,
  FileText,
  AlertCircle
} from 'lucide-react';

interface OrderLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  onOpenContact: () => void;
}

export const OrderLookupModal: React.FC<OrderLookupModalProps> = ({
  isOpen,
  onClose,
  orders,
  onOpenContact,
}) => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [foundOrder, setFoundOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const clean = query.trim().toLowerCase();
    
    // Search in user's active orders or match demo ID
    const match = orders.find(o => 
      o.id.toLowerCase() === clean || 
      o.buyerEmail.toLowerCase() === clean
    );

    if (match) {
      setFoundOrder(match);
    } else if (clean === 'gc-sample' || clean === 'demo' || clean === 'gc-10294') {
      setFoundOrder({
        id: 'GC-10294',
        createdAt: 'Sep 06, 2026, 04:15 PM',
        items: [
          {
            productId: 'buy-google-reviews',
            productName: 'Buy Google Reviews',
            productImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
            category: 'Reviews',
            variant: { id: 'g-10', name: '10 Google Reviews', price: 58 },
            quantity: 1,
            customRequirements: 'Google Business profile link submitted'
          }
        ],
        subtotal: 58,
        discount: 0,
        total: 58,
        buyerEmail: 'client@example.com',
        paymentMethod: 'crypto',
        cryptoCurrency: 'USDT (TRC20)',
        status: 'Delivered',
        deliveryEta: 'Completed & Active',
        accessCredentialsOrNotes: '10 Reviews successfully distributed with 100% retention guarantee. Proof log attached to buyer email.'
      });
    } else {
      setFoundOrder(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        id="order-lookup-modal"
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-2">
            <Package className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">Order Status & Account Lookup</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-xs text-slate-600">
            Enter your <strong>GolfCrater Order Reference</strong> (e.g. <code>GC-84920</code>) or the delivery email address used during checkout.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. GC-84920 or your@email.com"
              className="flex-1 text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors"
            >
              Lookup
            </button>
          </form>

          {/* Results */}
          {searched && (
            <div>
              {foundOrder ? (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Order ID</span>
                      <span className="font-mono font-bold text-slate-900">{foundOrder.id}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      {foundOrder.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] text-slate-600">
                    <div className="flex justify-between">
                      <span>Date Ordered:</span>
                      <span className="font-semibold text-slate-800">{foundOrder.createdAt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Method:</span>
                      <span className="font-semibold text-slate-800 uppercase">
                        {foundOrder.paymentMethod === 'crypto' ? `Crypto (${foundOrder.cryptoCurrency || 'BSC'})` :
                         foundOrder.paymentMethod === 'skrill' ? 'Skrill E-Wallet' :
                         foundOrder.paymentMethod === 'bank_transfer' ? `Bank Transfer (${foundOrder.bankAccountType || 'USD / EUR / GBP'})` :
                         foundOrder.paymentMethod}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amount Paid:</span>
                      <span className="font-bold text-slate-900">${foundOrder.total}.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Target:</span>
                      <span className="font-semibold text-slate-800">{foundOrder.buyerEmail}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Fulfillment Notes & Status:</span>
                    <p className="text-[11px] text-slate-700 leading-relaxed">
                      {foundOrder.accessCredentialsOrNotes}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-2">
                  <div className="flex items-center space-x-2 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>No order records found matching "{query}"</span>
                  </div>
                  <p className="text-[11px] text-amber-800">
                    Check for typing errors in your email or order reference. If you recently placed an order, it may take 2-3 minutes for the ledger to update.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* User recent orders list */}
          {orders.length > 0 && !searched && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Your Recent Session Orders:
              </span>
              <div className="space-y-2">
                {orders.map((ord) => (
                  <div 
                    key={ord.id}
                    onClick={() => {
                      setQuery(ord.id);
                      setFoundOrder(ord);
                      setSearched(true);
                    }}
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer text-xs"
                  >
                    <div>
                      <span className="font-mono font-bold text-slate-900">{ord.id}</span>
                      <span className="text-slate-500 block text-[10px]">{ord.createdAt} • ${ord.total}</span>
                    </div>
                    <span className="text-emerald-700 font-bold text-[11px]">{ord.status} →</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Need prompt human assistance?</span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="text-emerald-700 font-bold hover:underline cursor-pointer flex items-center space-x-1"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" />
              <span>Contact Live Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
