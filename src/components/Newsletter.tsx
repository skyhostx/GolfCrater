import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Stay Updated With GolfCrater
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Get notified about new digital products, special offers, and platform updates.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-6 py-3.5 rounded-xl text-sm font-semibold animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing! Check your inbox for your 20% discount welcome voucher.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 cursor-pointer flex items-center justify-center space-x-1 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] text-slate-400">
          Zero spam. Unsubscribe anytime. View our{' '}
          <span className="underline cursor-pointer hover:text-slate-200">Privacy Policy</span>.
        </div>

      </div>
    </section>
  );
};
