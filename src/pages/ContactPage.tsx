import React, { useState } from 'react';
import { AppRoute } from '../utils/navigation';
import { FAQS } from '../data/products';
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle,
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Question',
    orderId: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span className="text-slate-900 font-bold">Contact & Support</span>
          </nav>

          <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Support Desk: Online</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Priority Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            We are Here to Assist You 24/7
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Need help selecting the right service package, custom volume discounts, or technical support with your order? Our reputation & account specialists are active around the clock.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Contact Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Direct Support Channels</h2>

              <div className="space-y-4">
                {/* Telegram */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Telegram Support</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Instant live chat with technical engineers</span>
                    <a
                      href="https://t.me/GolfCraterSupport"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline"
                    >
                      @GolfCraterSupport →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Official Support Email</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Enterprise orders, bulk deals & invoicing</span>
                    <a
                      href="mailto:support@golfcrater.com"
                      className="inline-block mt-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline"
                    >
                      support@golfcrater.com →
                    </a>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Typical Response SLA</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Average turnaround under 15 minutes</span>
                    <span className="inline-block mt-1 text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      Active 24/7/365
                    </span>
                  </div>
                </div>
              </div>

              {/* Security Promise */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality & Privacy</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All communication is encrypted. We do not store your private API credentials or identity documents beyond order fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Message Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our support desk has received your ticket and will reply to <strong>{formData.email}</strong> within 15 minutes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Order Question', orderId: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900">Send an Inquiry to Our Helpdesk</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@example.com"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Topic / Service Category</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-semibold text-slate-800"
                      >
                        <option value="Order Question">Order Delivery & Status</option>
                        <option value="Custom Volume">Bulk & Enterprise Inquiry</option>
                        <option value="Bank Accounts">Bank Account Assistance</option>
                        <option value="Crypto Accounts">Crypto Accounts Inquiries</option>
                        <option value="Reviews Management">Reviews & Reputation Drip</option>
                        <option value="Email SMTP">Email & SMTP Setup</option>
                        <option value="Warranty Claim">60-Day Replacement Claim</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Order ID (If Applicable)</label>
                      <input
                        type="text"
                        value={formData.orderId}
                        onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                        placeholder="e.g., GC-8942-X"
                        className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">Detailed Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details regarding your order, requirements, or desired timeline..."
                      className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Submit Support Ticket
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Instant Self-Service FAQ Section */}
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">Instant answers to common customer inquiries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {FAQS.slice(0, 6).map((faq, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-start">
                  <HelpCircle className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
