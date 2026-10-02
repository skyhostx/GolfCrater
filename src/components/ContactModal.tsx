import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  PhoneCall 
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        id="contact-modal"
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 text-sm">Contact GolfCrater Support</h3>
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
          
          {/* Fast channels banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Telegram Priority Desk</span>
                <span className="text-emerald-700 font-semibold text-[11px]">@GolfCraterSupport</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Direct Email</span>
                <span className="text-slate-600 text-[11px]">support@golfcrater.com</span>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Message Dispatched</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{name || 'Valued Customer'}</strong>. A senior support specialist will respond to <strong>{email}</strong> within 15 minutes.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@business.com"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                >
                  <option value="General Inquiry">General Marketplace Inquiry</option>
                  <option value="Custom Review Campaign">Custom Volume Review Campaign (Google, Yelp, Trustpilot)</option>
                  <option value="Enterprise Bank/Crypto Accounts">Enterprise Bank & Crypto Accounts Procurement</option>
                  <option value="Payment Handshake Assistance">Payment Gateway / TxHash Verification</option>
                  <option value="Replacement & Warranty">60-Day Replacement & Warranty Claim</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Message / Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide your requirements or question..."
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-3 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 mr-1" /> Average response: 12 minutes
                </span>
                <span>Operating 24/7/365</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
