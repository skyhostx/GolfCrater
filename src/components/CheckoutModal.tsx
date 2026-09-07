import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import confetti from 'canvas-confetti';
import { 
  X, 
  Lock, 
  CreditCard, 
  Coins, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  AlertCircle,
  Loader2,
  Sparkles,
  QrCode
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discount: number;
  discountCode?: string;
  onOrderComplete: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discount,
  discountCode,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  // Form states
  const [email, setEmail] = useState('');
  const [telegramHandle, setTelegramHandle] = useState('');
  const [country, setCountry] = useState('United States');
  const [targetNotes, setTargetNotes] = useState('');

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'paypal' | 'wise'>('card');
  const [cryptoCoin, setCryptoCoin] = useState<'USDT (TRC20)' | 'BTC' | 'ETH'>('USDT (TRC20)');
  const [txHash, setTxHash] = useState('');

  // Card form
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('884');
  const [cardName, setCardName] = useState('Verified Buyer');

  // Checkout submission states
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formError, setFormError] = useState('');

  // Wallets
  const cryptoWallets = {
    'USDT (TRC20)': 'TX5j6e8vKqY9eZ4uB2mNx8pT7rA3cW1dFq',
    'BTC': 'bc1q9v3x8e7u4m6p2l8k1j5w0z9a3c7d6e4f8g2h1j',
    'ETH': '0x71C...B289eD726027B11541'
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!email.trim() || !email.includes('@')) {
      setFormError('Please provide a valid delivery email address.');
      return;
    }

    if (paymentMethod === 'crypto' && !txHash.trim()) {
      setFormError('Please provide your Transaction ID (TxHash) after sending crypto.');
      return;
    }

    setIsProcessing(true);
    setProcessingStep(1);

    // Simulated 3-step secure verification handshake
    setTimeout(() => {
      setProcessingStep(2);
    }, 1000);

    setTimeout(() => {
      setProcessingStep(3);
    }, 2000);

    setTimeout(() => {
      setIsProcessing(false);
      const randomId = 'GC-' + Math.floor(10000 + Math.random() * 90000);
      
      const newOrder: Order = {
        id: randomId,
        createdAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        items: [...items],
        subtotal,
        discount,
        total,
        buyerEmail: email,
        contactHandle: telegramHandle,
        paymentMethod,
        cryptoCurrency: paymentMethod === 'crypto' ? cryptoCoin : undefined,
        status: 'Processing',
        deliveryEta: '1 - 3 Hours to Email',
        accessCredentialsOrNotes: `Order #${randomId} confirmed. Verification handshake passed. Encrypted credentials dossier prepared for ${email}. Telegram support dispatch notified.`
      };

      setCompletedOrder(newOrder);
      onOrderComplete(newOrder);

      // Trigger celebration confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#38bdf8', '#0b1220', '#10b981']
      });

    }, 3200);
  };

  const handleCopyWallet = () => {
    const address = cryptoWallets[cryptoCoin];
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleDownloadInvoice = () => {
    if (!completedOrder) return;
    const content = `
=========================================
          GOLFCRATER DIGITAL MARKETPLACE
       OFFICIAL TRANSACTION RECEIPT
=========================================
Order Reference : ${completedOrder.id}
Date & Time     : ${completedOrder.createdAt}
Buyer Email     : ${completedOrder.buyerEmail}
Support Contact : ${completedOrder.contactHandle || 'N/A'}
Payment Method  : ${completedOrder.paymentMethod.toUpperCase()} ${completedOrder.cryptoCurrency ? `(${completedOrder.cryptoCurrency})` : ''}
Transaction Status: VERIFIED / IN QUEUE

PURCHASED ITEMS:
-----------------------------------------
${completedOrder.items.map((it, i) => `${i + 1}. ${it.productName}
   Variant: ${it.variant.name} x ${it.quantity}
   Unit: $${it.variant.price} | Total: $${it.variant.price * it.quantity}`).join('\n')}

Subtotal        : $${completedOrder.subtotal}.00
Discount        : -$${completedOrder.discount}.00
Grand Total     : $${completedOrder.total}.00
-----------------------------------------
DELIVERY TIMEFRAME:
Estimated Handover: ${completedOrder.deliveryEta}
All credentials, API keys, or verification tracking links are sent to: ${completedOrder.buyerEmail}

NEED SUPPORT?
Telegram: @GolfCraterSupport
Email   : support@golfcrater.com
Web     : https://golfcrater.com/
=========================================
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GolfCrater_Receipt_${completedOrder.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="checkout-modal-container"
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">GolfCrater Secure Gateway</h3>
              <p className="text-[11px] text-slate-500">256-Bit SSL Encrypted Handshake</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Processing State View */}
        {isProcessing && (
          <div className="p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center animate-spin">
              <Loader2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900">
                {processingStep === 1 && 'Contacting Secure Payment Gateway...'}
                {processingStep === 2 && 'Performing Compliance & Anti-Fraud Handshake...'}
                {processingStep === 3 && 'Allocating Verified Digital Assets & Credentials...'}
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Please do not refresh or close this window. Your transaction is being cryptographically authenticated.
              </p>
            </div>
            <div className="w-48 mx-auto bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full transition-all duration-700"
                style={{ width: `${(processingStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Completed Order View */}
        {!isProcessing && completedOrder && (
          <div className="p-8 sm:p-10 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Payment Handshake Successful
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Order Confirmed: {completedOrder.id}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                A receipt and encrypted delivery package have been dispatched to <strong>{completedOrder.buyerEmail}</strong>
              </p>
            </div>

            {/* Order summary box */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between pb-2 border-b border-slate-200 font-semibold text-slate-800">
                <span>Items ({completedOrder.items.length})</span>
                <span>Amount Paid: ${completedOrder.total}.00</span>
              </div>
              <div className="space-y-1 text-slate-600 text-[11px]">
                {completedOrder.items.map((it, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="truncate max-w-[240px]">{it.productName} ({it.variant.name})</span>
                    <span className="font-bold">${it.variant.price * it.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-200 text-emerald-700 font-bold flex items-center justify-between">
                <span>Delivery SLA:</span>
                <span>{completedOrder.deliveryEta}</span>
              </div>
            </div>

            {/* Next steps notice */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-900 text-left max-w-md mx-auto space-y-1">
              <span className="font-bold block flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                What Happens Next?
              </span>
              <p className="text-[11px] leading-relaxed text-emerald-800">
                Our automated delivery bots and manual compliance reviewers are finalizing your credentials docket. Check your email or use the Order Lookup button on the navbar anytime with ID <strong>{completedOrder.id}</strong>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
              <button
                onClick={handleDownloadInvoice}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Invoice (.txt)</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center cursor-pointer"
              >
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        )}

        {/* Standard Checkout Form */}
        {!isProcessing && !completedOrder && (
          <form onSubmit={handlePay} className="p-6 sm:p-8 space-y-6">
            
            {/* Order Price Summary Header */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-500 block">Total Due:</span>
                <span className="text-2xl font-black text-slate-900">${total}.00</span>
                {discount > 0 && (
                  <span className="text-[11px] text-emerald-700 font-bold block">
                    Includes discount (-${discount})
                  </span>
                )}
              </div>
              <div className="text-right text-xs text-slate-500">
                <span className="font-bold text-slate-800 block">{items.length} Digital Service(s)</span>
                <span>Immediate Delivery Queue</span>
              </div>
            </div>

            {/* Buyer Contact Information */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                1. Delivery & Contact Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Delivery Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@business.com"
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Telegram or WhatsApp ID (For Fast Handover)
                  </label>
                  <input
                    type="text"
                    value={telegramHandle}
                    onChange={(e) => setTelegramHandle(e.target.value)}
                    placeholder="@username or +1 234..."
                    className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Target Link or Custom Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={targetNotes}
                  onChange={(e) => setTargetNotes(e.target.value)}
                  placeholder="e.g. Google Maps link, Trustpilot URL, or preferred account country"
                  className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                2. Select Payment Method
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    paymentMethod === 'card'
                      ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 text-slate-950 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-slate-800" />
                  <span className="text-xs">Credit/Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('crypto')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    paymentMethod === 'crypto'
                      ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 text-slate-950 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Coins className="w-5 h-5 text-amber-500" />
                  <span className="text-xs">Crypto (USDT)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    paymentMethod === 'paypal'
                      ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 text-slate-950 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="font-black text-blue-600 text-sm">P</span>
                  <span className="text-xs">PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('wise')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    paymentMethod === 'wise'
                      ? 'border-emerald-500 bg-emerald-50/40 ring-2 ring-emerald-500/20 text-slate-950 font-bold'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="font-black text-teal-600 text-sm">W</span>
                  <span className="text-xs">Wise / Wire</span>
                </button>
              </div>
            </div>

            {/* Dynamic Gateway View Based on Method */}
            {paymentMethod === 'card' && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Card Details (Stripe Protected)</span>
                  <div className="flex space-x-1 text-[10px] text-slate-500 uppercase">
                    <span>Visa</span> • <span>Mastercard</span> • <span>Amex</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full text-xs font-mono bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">MM/YY</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full text-xs font-mono bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">CVC/CVV</label>
                    <input
                      type="text"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      className="w-full text-xs font-mono bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1">Cardholder</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'crypto' && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Select Cryptocurrency:</span>
                  <div className="flex space-x-2">
                    {(['USDT (TRC20)', 'BTC', 'ETH'] as const).map((coin) => (
                      <button
                        key={coin}
                        type="button"
                        onClick={() => setCryptoCoin(coin)}
                        className={`px-2 py-1 rounded-md text-xs font-bold cursor-pointer transition-colors ${
                          cryptoCoin === coin
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                      >
                        {coin}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <span className="text-[11px] text-slate-500 block">
                    Send exact amount: <strong className="text-slate-900">${total}.00 USD</strong> in {cryptoCoin}
                  </span>
                  
                  <div className="flex items-center justify-between bg-slate-100 p-2.5 rounded-lg">
                    <span className="font-mono text-xs text-slate-800 truncate mr-2">
                      {cryptoWallets[cryptoCoin]}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyWallet}
                      className="px-2.5 py-1 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md text-xs font-bold flex items-center space-x-1 cursor-pointer shrink-0"
                    >
                      {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Paste Transaction Hash / TxID (Required for instant confirmation):
                  </label>
                  <input
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    placeholder="e.g. 0x4f8a... or 7e3b..."
                    className="w-full text-xs font-mono bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs text-blue-950 space-y-2">
                <span className="font-bold block">Instant PayPal Checkout</span>
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  Upon clicking complete, you will authorize the digital transaction via PayPal with Buyer Protection.
                </p>
              </div>
            )}

            {paymentMethod === 'wise' && (
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 text-xs text-teal-950 space-y-2">
                <span className="font-bold block">Wise Multi-Currency & Bank Wire</span>
                <p className="text-[11px] text-teal-800 leading-relaxed">
                  Direct domestic routing details (US ACH, EU SEPA, UK Sort Code) will be provided for instant wire allocation.
                </p>
              </div>
            )}

            {formError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-slate-950" />
              <span>Complete Order — Pay ${total}.00</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Backed by GolfCrater 60-Day Non-Drop & Money-Back Warranty</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
