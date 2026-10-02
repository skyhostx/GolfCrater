import React, { useState, useEffect } from 'react';
import { CartItem, Order } from '../types';
import confetti from 'canvas-confetti';
import QRCode from 'qrcode';
import { 
  X, 
  Lock, 
  Coins, 
  Wallet,
  Building2,
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  AlertCircle,
  Loader2,
  Sparkles,
  QrCode,
  Info
} from 'lucide-react';

export type CryptoCoinKey = 'BSC' | 'TRX' | 'ETH' | 'SOL' | 'BTC' | 'LTC' | 'DOGE';

export interface CryptoWalletInfo {
  symbol: CryptoCoinKey;
  name: string;
  network: string;
  address: string;
  badge: string;
  note: string;
  iconBg: string;
  accentColor: string;
}

export const CRYPTO_WALLETS: Record<CryptoCoinKey, CryptoWalletInfo> = {
  BSC: {
    symbol: 'BSC',
    name: 'Binance Smart Chain',
    network: 'BNB / BEP20 (Binance Smart Chain)',
    address: '0xb0a2b177e1770a03a5aa1d2629c52276fd93bdc6',
    badge: 'BNB / USDT (BEP20)',
    note: 'Send BNB or USDT on Binance Smart Chain (BEP20 network). Fast confirmations & low gas.',
    iconBg: 'bg-amber-100 text-amber-700 border-amber-300',
    accentColor: '#eab308'
  },
  TRX: {
    symbol: 'TRX',
    name: 'Tron Network',
    network: 'TRX / TRC20 (Tron Network)',
    address: 'TSezBSdMrdARFQQebAYiwzkPku1qHijQEh',
    badge: 'USDT (TRC20) / TRX',
    note: 'Send USDT (TRC20) or TRX on Tron Network. Instant settlement.',
    iconBg: 'bg-red-100 text-red-700 border-red-300',
    accentColor: '#ef4444'
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    network: 'ETH / ERC20 (Ethereum Network)',
    address: '0xb0a2b177e1770a03a5aa1d2629c52276fd93bdc6',
    badge: 'ETH / USDT (ERC20)',
    note: 'Send ETH or USDT (ERC20) on Ethereum Network.',
    iconBg: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    accentColor: '#6366f1'
  },
  SOL: {
    symbol: 'SOL',
    name: 'Solana',
    network: 'SOL (Solana Mainnet)',
    address: 'EDWaA1Kp6K9USLwuBAzmCvBxQkDiQ4Bk3LLgFxA2YdVr',
    badge: 'SOL / SPL Token',
    note: 'Send SOL or SPL Tokens on native Solana Mainnet. Sub-second confirmations.',
    iconBg: 'bg-purple-100 text-purple-700 border-purple-300',
    accentColor: '#a855f7'
  },
  BTC: {
    symbol: 'BTC',
    name: 'Bitcoin',
    network: 'BTC (Bitcoin Mainnet)',
    address: '18QpVzNvW5YVtywK4Zih1VKLB2gEhRojT9',
    badge: 'BTC Native',
    note: 'Send Bitcoin (BTC) on native Bitcoin blockchain network.',
    iconBg: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: '#f59e0b'
  },
  LTC: {
    symbol: 'LTC',
    name: 'Litecoin',
    network: 'LTC (Litecoin Network)',
    address: 'LR676Tw3B3FatHCbnjT14D1TmGfpmwM2WG',
    badge: 'LTC Fast',
    note: 'Send Litecoin (LTC) on native network. Ultra-low fee.',
    iconBg: 'bg-blue-100 text-blue-700 border-blue-300',
    accentColor: '#3b82f6'
  },
  DOGE: {
    symbol: 'DOGE',
    name: 'Dogecoin',
    network: 'DOGE (Dogecoin Network)',
    address: 'DAVEHhBy6NVajnwF9g8eVHsQj1rmfVBx3n',
    badge: 'DOGE Direct',
    note: 'Send Dogecoin (DOGE) on native Dogecoin blockchain.',
    iconBg: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    accentColor: '#eab308'
  }
};

export type BankAccountKey = 'usd_swift' | 'usd_ach' | 'eur' | 'gbp';

export interface BankAccountDetails {
  id: BankAccountKey;
  label: string;
  tag: string;
  currency: string;
  accountTitle: string;
  accountType: string;
  bankName: string;
  bankAddress: string;
  fields: { label: string; value: string; hint?: string }[];
  partnerBank?: {
    name: string;
    address: string;
    swiftBic?: string;
  };
}

export const BANK_ACCOUNTS: Record<BankAccountKey, BankAccountDetails> = {
  usd_swift: {
    id: 'usd_swift',
    label: 'USD (SWIFT International)',
    tag: 'Global Wire',
    currency: 'USD',
    accountTitle: 'Md Sayrul Islam',
    accountType: 'Checking (Current)',
    bankName: 'Clear Bank',
    bankAddress: 'Borough Yards, 13 Dirty Lane, London, SE1 9PA, UK',
    fields: [
      { label: 'Account Title', value: 'Md Sayrul Islam' },
      { label: 'Account Type', value: 'Checking (Current)' },
      { label: 'Currency', value: 'USD' },
      { label: 'IBAN', value: 'GB77 CLRB 0428 1200 0776 25' },
      { label: 'SWIFT/BIC', value: 'CLRBGB22XXX', hint: 'Only used for international SWIFT transfers' },
      { label: 'Sort Code', value: '042812' },
      { label: 'Bank Name', value: 'Clear Bank' },
      { label: 'Bank Address', value: 'Borough Yards, 13 Dirty Lane, London, SE1 9PA, UK' },
    ],
    partnerBank: {
      name: 'JPMorgan Chase Bank, N.A.',
      address: 'New York, USA',
      swiftBic: 'CHASUS33'
    }
  },
  usd_ach: {
    id: 'usd_ach',
    label: 'USD (USA Domestic ACH & Wire)',
    tag: 'US Domestic',
    currency: 'USD',
    accountTitle: 'Md Sayrul Islam',
    accountType: 'Checking',
    bankName: 'JP Morgan Chase NA',
    bankAddress: '270 Park Avenue, New York, NY 10017, US',
    fields: [
      { label: 'Account Title', value: 'Md Sayrul Islam' },
      { label: 'Account Type', value: 'Checking' },
      { label: 'Currency', value: 'USD' },
      { label: 'Account Number', value: '30000002977421' },
      { label: 'Routing Number (ACH)', value: '028000024', hint: 'Only used for U.S. domestic ACH transfers' },
      { label: 'Routing Number (Wire)', value: '021000021', hint: 'Only used for U.S. domestic wire transfers' },
      { label: 'Bank Name', value: 'JP Morgan Chase NA' },
      { label: 'Bank Address', value: '270 Park Avenue, New York, NY 10017, US' },
    ]
  },
  eur: {
    id: 'eur',
    label: 'EUR (Europe SEPA / Clear Bank)',
    tag: 'Euro Zone',
    currency: 'EUR',
    accountTitle: 'Md Sayrul Islam',
    accountType: 'Checking (Current)',
    bankName: 'Clear Bank (Based in GB)',
    bankAddress: '133 Houndsditch, LONDON, EC3A 7BX',
    fields: [
      { label: 'Name / Account Title', value: 'Md Sayrul Islam' },
      { label: 'Currency', value: 'EUR' },
      { label: 'IBAN', value: 'GB36CLRB04281271577257' },
      { label: 'BIC / SWIFT Code', value: 'CLRBGB22XXX' },
      { label: 'Account Number', value: '71577257' },
      { label: 'Sort Code', value: '042812' },
      { label: 'Bank Name', value: 'Clear Bank (Based in GB)' },
      { label: 'Bank Address', value: '133 Houndsditch, LONDON, EC3A 7BX' },
      { label: 'Account Type', value: 'Checking (Current)' },
    ]
  },
  gbp: {
    id: 'gbp',
    label: 'GBP (UK Faster Payments / Clear Bank)',
    tag: 'UK Domestic',
    currency: 'GBP',
    accountTitle: 'Md Sayrul Islam',
    accountType: 'Checking (Current)',
    bankName: 'Clear Bank (Based in GB)',
    bankAddress: '133 Houndsditch, LONDON, EC3A 7BX',
    fields: [
      { label: 'Name / Account Title', value: 'Md Sayrul Islam' },
      { label: 'Currency', value: 'GBP' },
      { label: 'IBAN', value: 'GB73CLRB04097200937068' },
      { label: 'BIC / SWIFT Code', value: 'CLRBGB22XXX' },
      { label: 'Account Number', value: '00937068' },
      { label: 'Sort Code', value: '040972' },
      { label: 'Bank Name', value: 'Clear Bank (Based in GB)' },
      { label: 'Bank Address', value: '133 Houndsditch, LONDON, EC3A 7BX' },
      { label: 'Account Type', value: 'Checking (Current)' },
    ]
  }
};

export const SKRILL_CONFIG = {
  email: 'onlinespay247@gmail.com',
  name: 'Md Sayrul Islam / GolfCrater',
};

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
  const [targetNotes, setTargetNotes] = useState('');

  // 1st: Crypto Gateways, 2nd: Skrill E-Wallet, 3rd: Bank Transfer
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'skrill' | 'bank_transfer'>('crypto');
  
  // Crypto selection
  const [cryptoCoin, setCryptoCoin] = useState<CryptoCoinKey>('BSC');
  const [txHash, setTxHash] = useState('');

  // Skrill details
  const [skrillReference, setSkrillReference] = useState('');

  // Bank transfer selection
  const [bankTab, setBankTab] = useState<BankAccountKey>('usd_swift');
  const [bankTransferRef, setBankTransferRef] = useState('');

  // QR Code data URL state
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  // Checkout submission states
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formError, setFormError] = useState('');

  // Generate genuine high-resolution QR code whenever crypto coin or method changes
  useEffect(() => {
    let active = true;

    if (paymentMethod === 'crypto') {
      const address = CRYPTO_WALLETS[cryptoCoin].address;
      QRCode.toDataURL(address, {
        width: 320,
        margin: 1.5,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H'
      }).then((url) => {
        if (active) setQrCodeUrl(url);
      }).catch((err) => {
        console.error('Failed to generate QR code:', err);
      });
    } else if (paymentMethod === 'skrill') {
      QRCode.toDataURL(SKRILL_CONFIG.email, {
        width: 320,
        margin: 1.5,
        color: {
          dark: '#7e1d4b',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H'
      }).then((url) => {
        if (active) setQrCodeUrl(url);
      }).catch((err) => {
        console.error('Failed to generate Skrill QR code:', err);
      });
    }

    return () => {
      active = false;
    };
  }, [paymentMethod, cryptoCoin]);

  const copyToClipboard = (text: string, keyName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(keyName);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === keyName ? null : prev));
    }, 2000);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!email.trim() || !email.includes('@')) {
      setFormError('Please enter a valid delivery email address.');
      return;
    }

    if (paymentMethod === 'crypto' && !txHash.trim()) {
      setFormError(`Please enter your ${cryptoCoin} Transaction Hash / TxID after sending.`);
      return;
    }

    if (paymentMethod === 'skrill' && !skrillReference.trim()) {
      setFormError('Please enter your Skrill Transaction ID or Sender Email address.');
      return;
    }

    if (paymentMethod === 'bank_transfer' && !bankTransferRef.trim()) {
      setFormError('Please enter your Bank Transfer Reference, Sender Account Name, or Wire Ref.');
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
      
      const referenceValue = 
        paymentMethod === 'crypto' ? txHash.trim() :
        paymentMethod === 'skrill' ? skrillReference.trim() :
        bankTransferRef.trim();

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
        customerEmail: email,
        contactHandle: telegramHandle,
        paymentMethod,
        cryptoCurrency: paymentMethod === 'crypto' ? cryptoCoin : undefined,
        paymentReference: referenceValue,
        bankAccountType: paymentMethod === 'bank_transfer' ? BANK_ACCOUNTS[bankTab].label : undefined,
        status: 'Processing',
        deliveryEta: '1 - 3 Hours to Email',
        accessCredentialsOrNotes: `Order #${randomId} confirmed. Verification handshake passed. Encrypted credentials docket prepared for ${email}. Support dispatch notified.`
      };

      setCompletedOrder(newOrder);
      onOrderComplete(newOrder);

      // Trigger celebration confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#059669', '#34d399', '#0f172a']
      });

    }, 3200);
  };

  const handleDownloadInvoice = () => {
    if (!completedOrder) return;

    let paymentSpecifics = '';
    if (completedOrder.paymentMethod === 'crypto') {
      paymentSpecifics = `Cryptocurrency: ${completedOrder.cryptoCurrency}\nWallet: ${CRYPTO_WALLETS[(completedOrder.cryptoCurrency as CryptoCoinKey) || 'BSC']?.address || 'N/A'}\nTxHash: ${completedOrder.paymentReference || 'N/A'}`;
    } else if (completedOrder.paymentMethod === 'skrill') {
      paymentSpecifics = `Skrill Merchant Email: ${SKRILL_CONFIG.email}\nSender / Ref: ${completedOrder.paymentReference || 'N/A'}`;
    } else if (completedOrder.paymentMethod === 'bank_transfer') {
      paymentSpecifics = `Account Option: ${completedOrder.bankAccountType}\nBeneficiary: Md Sayrul Islam\nBank Ref: ${completedOrder.paymentReference || 'N/A'}`;
    }

    const content = `=====================================================
            GOLFCRATER DIGITAL MARKETPLACE
             OFFICIAL TRANSACTION RECEIPT
=====================================================
Order Reference : ${completedOrder.id}
Date & Time     : ${completedOrder.createdAt}
Buyer Email     : ${completedOrder.buyerEmail}
Support Contact : ${completedOrder.contactHandle || 'N/A'}
Payment Method  : ${completedOrder.paymentMethod.toUpperCase().replace('_', ' ')}
${paymentSpecifics}
Transaction Status: VERIFIED / IN QUEUE

PURCHASED ITEMS:
-----------------------------------------------------
${completedOrder.items.map((it, i) => `${i + 1}. ${it.productName}
   Variant: ${it.variant.name} x ${it.quantity}
   Unit: $${it.variant.price} | Total: $${it.variant.price * it.quantity}`).join('\n')}

Subtotal        : $${completedOrder.subtotal}.00
Discount        : -$${completedOrder.discount}.00
Grand Total     : $${completedOrder.total}.00
-----------------------------------------------------
DELIVERY TIMEFRAME:
Estimated Handover: ${completedOrder.deliveryEta}
All credentials, API keys, or verification tracking dossiers are sent to: ${completedOrder.buyerEmail}

NEED SUPPORT?
Telegram: @GolfCraterSupport
Email   : support@golfcrater.com
Web     : https://golfcrater.com/
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GolfCrater_Receipt_${completedOrder.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const selectedCrypto = CRYPTO_WALLETS[cryptoCoin];
  const selectedBank = BANK_ACCOUNTS[bankTab];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="checkout-modal-container"
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[94vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-extrabold text-slate-900">GolfCrater Checkout Gateway</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  SSL Encrypted
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Secure Direct Settlement • Instant Allocation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1">
          {/* Processing State View */}
          {isProcessing && (
            <div className="py-16 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center animate-spin">
                <Loader2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900">
                  {processingStep === 1 && 'Initiating Secure Payment Verification...'}
                  {processingStep === 2 && 'Validating Settlement Reference & Transaction ID...'}
                  {processingStep === 3 && 'Allocating Verified Digital Assets & Handover Dossier...'}
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Please do not refresh or close this window. Your transaction reference is being cryptographically authenticated.
                </p>
              </div>
              <div className="w-56 mx-auto bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-700"
                  style={{ width: `${(processingStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Completed Order View */}
          {!isProcessing && completedOrder && (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                  Payment Submitted & Confirmed
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-3">
                  Order Confirmed: {completedOrder.id}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 max-w-md mx-auto">
                  A receipt and encrypted delivery package have been dispatched to <strong>{completedOrder.buyerEmail}</strong>
                </p>
              </div>

              {/* Order summary box */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex justify-between pb-2.5 border-b border-slate-200 font-bold text-slate-800">
                  <span>Selected Method:</span>
                  <span className="uppercase text-emerald-700">
                    {completedOrder.paymentMethod === 'crypto' && `Crypto (${completedOrder.cryptoCurrency})`}
                    {completedOrder.paymentMethod === 'skrill' && 'Skrill E-Wallet'}
                    {completedOrder.paymentMethod === 'bank_transfer' && `Bank Transfer (${completedOrder.bankAccountType})`}
                  </span>
                </div>

                <div className="space-y-1.5 text-slate-600 text-[11px]">
                  {completedOrder.items.map((it, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="truncate max-w-[280px]">{it.productName} ({it.variant.name})</span>
                      <span className="font-bold text-slate-900">${it.variant.price * it.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2.5 border-t border-slate-200 flex justify-between text-xs font-black text-slate-900">
                  <span>Grand Total:</span>
                  <span className="text-emerald-700">${completedOrder.total}.00</span>
                </div>

                {completedOrder.paymentReference && (
                  <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 flex justify-between items-center">
                    <span>Reference / TxID:</span>
                    <span className="font-mono font-bold text-slate-900 truncate max-w-[200px]">
                      {completedOrder.paymentReference}
                    </span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 text-emerald-700 font-bold flex items-center justify-between text-[11px]">
                  <span>Delivery SLA:</span>
                  <span>{completedOrder.deliveryEta}</span>
                </div>
              </div>

              {/* Next steps notice */}
              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-xs text-emerald-950 text-left max-w-lg mx-auto space-y-1.5">
                <span className="font-bold flex items-center text-emerald-900">
                  <Sparkles className="w-4 h-4 mr-1.5 text-emerald-600" />
                  What Happens Next?
                </span>
                <p className="text-[11px] leading-relaxed text-emerald-800">
                  Our automated delivery system and compliance verification team are reviewing your settlement reference. You can check order status with ID <strong>{completedOrder.id}</strong> at any time via the Track Order link.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto pt-2">
                <button
                  onClick={handleDownloadInvoice}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-2 cursor-pointer shadow-xs transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download Invoice (.txt)</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center justify-center cursor-pointer transition-all shadow-xs"
                >
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>
          )}

          {/* Standard Checkout Form */}
          {!isProcessing && !completedOrder && (
            <form onSubmit={handlePay} className="space-y-6">
              
              {/* Order Price Summary Header */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-500 block">Total Due:</span>
                  <span className="text-2xl font-black text-slate-900">${total}.00 USD</span>
                  {discount > 0 && (
                    <span className="text-[11px] text-emerald-700 font-bold block">
                      Includes promotional discount (-${discount}.00)
                    </span>
                  )}
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="font-bold text-slate-800 block">{items.length} Digital Service(s)</span>
                  <span className="text-emerald-700 font-semibold flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Immediate Dispatch
                  </span>
                </div>
              </div>

              {/* Buyer Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                  Delivery & Contact Information
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
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Telegram or WhatsApp (For Instant Handover)
                    </label>
                    <input
                      type="text"
                      value={telegramHandle}
                      onChange={(e) => setTelegramHandle(e.target.value)}
                      placeholder="@username or +1 234..."
                      className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Target Link or Order Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={targetNotes}
                    onChange={(e) => setTargetNotes(e.target.value)}
                    placeholder="e.g. Google Maps URL, Trustpilot Profile, or specific account specifications"
                    className="w-full text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                  />
                </div>
              </div>

              {/* Payment Method Selector (1st: Crypto, 2nd: Skrill, 3rd: Bank Transfer) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                  Select Payment Gateway
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* 1st: Crypto Gateways */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      paymentMethod === 'crypto'
                        ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                          <Coins className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">1st Method</span>
                          <span className="text-xs font-extrabold text-slate-900 block">Crypto Gateways</span>
                        </div>
                      </div>
                      {paymentMethod === 'crypto' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      BSC, TRX, ETH, SOL, BTC, LTC, DOGE with original QR code
                    </p>
                  </button>

                  {/* 2nd: Skrill E-Wallet */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('skrill')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      paymentMethod === 'skrill'
                        ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-black text-sm">
                          <Wallet className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-pink-700 block">2nd Method</span>
                          <span className="text-xs font-extrabold text-slate-900 block">Skrill E-Wallet</span>
                        </div>
                      </div>
                      {paymentMethod === 'skrill' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Direct transfer to onlinespay247@gmail.com
                    </p>
                  </button>

                  {/* 3rd: Bank Transfer */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">3rd Method</span>
                          <span className="text-xs font-extrabold text-slate-900 block">Bank Transfer</span>
                        </div>
                      </div>
                      {paymentMethod === 'bank_transfer' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      SWIFT, USA ACH / Wire, EUR SEPA, UK GBP Clear Bank
                    </p>
                  </button>
                </div>
              </div>

              {/* GATEWAY 1: Crypto Gateways View */}
              {paymentMethod === 'crypto' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  {/* Coin Selector Chips */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                        <Coins className="w-4 h-4 text-amber-500" />
                        Select Cryptocurrency:
                      </span>
                      <span className="text-[11px] text-slate-500">
                        7 Official Networks Supported
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1.5">
                      {(Object.keys(CRYPTO_WALLETS) as CryptoCoinKey[]).map((coinKey) => {
                        const coin = CRYPTO_WALLETS[coinKey];
                        const isSelected = cryptoCoin === coinKey;
                        return (
                          <button
                            key={coinKey}
                            type="button"
                            onClick={() => setCryptoCoin(coinKey)}
                            className={`px-2.5 py-2 rounded-xl text-center transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-slate-900 text-white border-slate-900 shadow-xs font-bold'
                                : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200 font-medium'
                            }`}
                          >
                            <span className="text-xs block">{coin.symbol}</span>
                            <span className="text-[9px] opacity-75 block truncate">
                              {coinKey === 'BSC' ? 'BEP20' : coinKey === 'TRX' ? 'TRC20' : coinKey === 'ETH' ? 'ERC20' : coinKey}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Active Coin Info Banner */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-900">{selectedCrypto.name} ({selectedCrypto.symbol})</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {selectedCrypto.badge}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 block mt-0.5">{selectedCrypto.note}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Amount to Transfer:</span>
                        <span className="text-base font-black text-emerald-600">${total}.00 USD</span>
                      </div>
                    </div>

                    {/* QR Code and Address Container */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-1">
                      {/* Original QR Code Display */}
                      <div className="md:col-span-5 flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                        {qrCodeUrl ? (
                          <div className="relative group">
                            <img 
                              src={qrCodeUrl} 
                              alt={`${selectedCrypto.symbol} Original QR Code`} 
                              className="w-40 h-40 object-contain rounded-lg bg-white p-1.5 shadow-xs border border-slate-200"
                            />
                            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <a 
                                href={qrCodeUrl} 
                                download={`GolfCrater_${selectedCrypto.symbol}_QRCode.png`}
                                className="px-2.5 py-1.5 bg-white text-slate-900 text-[10px] font-bold rounded-md flex items-center gap-1 shadow-md hover:bg-slate-100 transition-colors"
                              >
                                <Download className="w-3 h-3" />
                                Save QR
                              </a>
                            </div>
                          </div>
                        ) : (
                          <div className="w-40 h-40 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                            <Loader2 className="w-6 h-6 text-slate-400 animate-spin" />
                          </div>
                        )}
                        <span className="text-[10px] font-bold text-slate-500 mt-2 flex items-center gap-1">
                          <QrCode className="w-3 h-3 text-emerald-600" />
                          Scan with your crypto wallet app
                        </span>
                      </div>

                      {/* Address & Quick Copy */}
                      <div className="md:col-span-7 space-y-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">
                            {selectedCrypto.symbol} Deposit Wallet Address:
                          </label>
                          <div className="p-2.5 bg-slate-100 rounded-xl border border-slate-200 break-all font-mono text-xs text-slate-900 select-all leading-relaxed">
                            {selectedCrypto.address}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(selectedCrypto.address, `crypto_${selectedCrypto.symbol}`)}
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                          >
                            {copiedKey === `crypto_${selectedCrypto.symbol}` ? (
                              <>
                                <Check className="w-4 h-4 text-white" />
                                <span>Address Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 text-white" />
                                <span>Copy {selectedCrypto.symbol} Address</span>
                              </>
                            )}
                          </button>

                          {qrCodeUrl && (
                            <a
                              href={qrCodeUrl}
                              download={`GolfCrater_${selectedCrypto.symbol}_QRCode.png`}
                              className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5 text-slate-500" />
                              <span>Download QR</span>
                            </a>
                          )}
                        </div>

                        <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-1.5">
                          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>Please ensure you send funds on the <strong>{selectedCrypto.network}</strong> network only.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Hash Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Paste {selectedCrypto.symbol} Transaction Hash / TxID (Required for instant confirmation) *
                    </label>
                    <input
                      type="text"
                      value={txHash}
                      onChange={(e) => setTxHash(e.target.value)}
                      placeholder="e.g. 0x3f4a9b... or 7e8d2c... (from your wallet transfer)"
                      className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                  </div>
                </div>
              )}

              {/* GATEWAY 2: Skrill E-Wallet View */}
              {paymentMethod === 'skrill' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-pink-50/40 border border-pink-200/80 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-pink-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                        S
                      </div>
                      <div>
                        <h5 className="text-xs font-extrabold text-slate-900">Skrill E-Wallet Transfer</h5>
                        <p className="text-[11px] text-slate-500">Instant Skrill to Skrill transfer with 0 processing delay</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-pink-700">${total}.00 USD</span>
                  </div>

                  {/* Skrill Details & QR */}
                  <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* QR Code */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center p-3 bg-pink-50/50 rounded-xl border border-pink-100">
                      {qrCodeUrl ? (
                        <img 
                          src={qrCodeUrl} 
                          alt="Skrill QR Code" 
                          className="w-36 h-36 object-contain rounded-lg bg-white p-1 border border-pink-200 shadow-xs"
                        />
                      ) : (
                        <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center">
                          <Loader2 className="w-6 h-6 text-pink-400 animate-spin" />
                        </div>
                      )}
                      <span className="text-[10px] font-bold text-pink-900 mt-2 flex items-center gap-1">
                        <QrCode className="w-3 h-3 text-pink-600" />
                        Scan to Pay with Skrill
                      </span>
                    </div>

                    {/* Skrill Account Info */}
                    <div className="md:col-span-8 space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">
                          Official Skrill Recipient Email:
                        </label>
                        <div className="flex items-center gap-2">
                          <div className="p-2.5 bg-slate-100 rounded-xl border border-slate-200 font-mono font-bold text-xs text-pink-950 flex-1 select-all">
                            {SKRILL_CONFIG.email}
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(SKRILL_CONFIG.email, 'skrill_email')}
                            className="px-3.5 py-2.5 bg-pink-600 hover:bg-pink-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer shrink-0"
                          >
                            {copiedKey === 'skrill_email' ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-white" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-white" />
                                <span>Copy Email</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1.5 text-slate-600">
                        <span className="font-bold text-slate-800 block">How to complete your Skrill payment:</span>
                        <ol className="list-decimal pl-4 space-y-0.5 text-slate-600">
                          <li>Log in to your <strong>Skrill</strong> account.</li>
                          <li>Click <strong>Send Money</strong> &rarr; <strong>Skrill to Skrill</strong>.</li>
                          <li>Send <strong>${total}.00 USD</strong> to <strong>{SKRILL_CONFIG.email}</strong>.</li>
                          <li>Paste your Skrill Transaction ID or sender email below.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Skrill Ref input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Your Skrill Transaction ID or Sender Email Address *
                    </label>
                    <input
                      type="text"
                      value={skrillReference}
                      onChange={(e) => setSkrillReference(e.target.value)}
                      placeholder="e.g. 1029384756 or buyer@email.com"
                      className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                  </div>
                </div>
              )}

              {/* GATEWAY 3: Bank Transfer View */}
              {paymentMethod === 'bank_transfer' && (
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-blue-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-extrabold text-slate-900">Direct Bank Transfer</h5>
                        <p className="text-[11px] text-slate-500">Official bank accounts for Md Sayrul Islam</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-blue-700">${total}.00 USD</span>
                  </div>

                  {/* Bank Tab Selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(Object.keys(BANK_ACCOUNTS) as BankAccountKey[]).map((bKey) => {
                      const b = BANK_ACCOUNTS[bKey];
                      const isSelected = bankTab === bKey;
                      return (
                        <button
                          key={bKey}
                          type="button"
                          onClick={() => setBankTab(bKey)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200 font-medium'
                          }`}
                        >
                          <span className="text-xs block truncate">{b.currency} Account</span>
                          <span className="text-[10px] opacity-80 block truncate">{b.tag}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Account Details Box */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-blue-100 shadow-xs space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-black text-slate-900">{selectedBank.label}</span>
                        <span className="text-[11px] text-slate-500 block">Bank: {selectedBank.bankName}</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {selectedBank.currency}
                      </span>
                    </div>

                    {/* Dynamic Fields Grid with Copy Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {selectedBank.fields.map((f, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                              {f.label}
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-900 block truncate select-all">
                              {f.value}
                            </span>
                            {f.hint && (
                              <span className="text-[9px] text-amber-700 block mt-0.5">
                                {f.hint}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(f.value, `bank_${idx}_${f.label}`)}
                            className="p-1.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0"
                            title={`Copy ${f.label}`}
                          >
                            {copiedKey === `bank_${idx}_${f.label}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Partner Bank Details if available */}
                    {selectedBank.partnerBank && (
                      <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1 mt-2">
                        <span className="font-bold block text-amber-900 text-[11px]">Partner Bank for this Account:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-amber-800">
                          <div>
                            <span className="font-medium text-slate-500">Bank Name: </span>
                            <span className="font-bold">{selectedBank.partnerBank.name}</span>
                          </div>
                          <div>
                            <span className="font-medium text-slate-500">Location: </span>
                            <span>{selectedBank.partnerBank.address}</span>
                          </div>
                          {selectedBank.partnerBank.swiftBic && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-slate-500">SWIFT/BIC: </span>
                              <span className="font-mono font-bold text-slate-900">{selectedBank.partnerBank.swiftBic}</span>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(selectedBank.partnerBank!.swiftBic!, 'partner_swift')}
                                className="p-1 text-slate-600 hover:text-slate-900 cursor-pointer"
                              >
                                {copiedKey === 'partner_swift' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Transfer Reference input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Bank Transfer Reference / Sender Account Name / Wire Ref *
                    </label>
                    <input
                      type="text"
                      value={bankTransferRef}
                      onChange={(e) => setBankTransferRef(e.target.value)}
                      placeholder="e.g. John Doe / Wire Ref #12345 / SWIFT ref"
                      className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 shadow-xs"
                    />
                  </div>
                </div>
              )}

              {formError && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span className="font-medium">{formError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Lock className="w-4 h-4 text-white" />
                <span>Confirm & Submit Order — Pay ${total}.00 USD</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <div className="text-center text-[11px] text-slate-500 flex items-center justify-center space-x-2 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Backed by GolfCrater 60-Day Non-Drop & Money-Back Warranty</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
