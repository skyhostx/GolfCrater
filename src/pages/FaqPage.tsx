import React, { useState } from 'react';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, CreditCard, Clock, Lock } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const faqs = [
    {
      q: 'How fast are orders fulfilled and delivered?',
      a: 'Delivery speed depends on the service ordered. Digital tools, aged Gmail PVA accounts, and pre-warmed SMTP credentials are dispatched automatically or within 1 to 3 hours. For Google and Trustpilot review packages, we employ an organic gradual drip delivery model (1-3 reviews per day) to ensure natural algorithmic velocity and 100% safety.',
      category: 'Delivery',
    },
    {
      q: 'What payment methods does GolfCrater accept?',
      a: 'We accept 3 secure payment gateways: (1) Cryptocurrency (Binance Smart Chain BSC/BNB, TRON TRX, Ethereum ETH, Solana SOL, Bitcoin BTC, Litecoin LTC, and Dogecoin DOGE), (2) Skrill E-Wallet (onlinespay247@gmail.com), and (3) International Bank Transfer (Clear Bank SWIFT IBAN in the UK & JPMorgan Chase ACH in the USA).',
      category: 'Payments',
    },
    {
      q: 'What does the 60-day replacement warranty cover?',
      a: 'All our accounts and reputation packages come with an unconditional 60-day warranty. If any review is filtered by platform algorithms or an account encounters operational blocks despite following our proxy guidelines, our support team will replace it immediately at zero additional cost.',
      category: 'Warranty',
    },
    {
      q: 'How do I track my order status in real time?',
      a: 'You can visit our live Track Order page (/track-order) and enter your Order ID (e.g., GC-92841) or email address. You will see real-time payment confirmation status, progress percentages, and credential dispatch notes.',
      category: 'Orders',
    },
    {
      q: 'Are the banking and crypto accounts fully KYC-verified?',
      a: 'Yes. All banking accounts (Cash App, PayPal, Stripe, Wise, Payoneer, Revolut) and cryptocurrency exchange accounts (Binance, Coinbase, Kraken, MoonPay) are fully verified using compliant identity documentation. Full credential archives and ownership details are handed over upon fulfillment.',
      category: 'Verification',
    },
    {
      q: 'Can I request specific geo-targeted locations for Google Reviews?',
      a: 'Absolutely. During checkout or in your order notes, you can specify target countries (such as United States, United Kingdom, Canada, Australia, Germany, or United Arab Emirates) and even provide your preferred review text and keyword focus.',
      category: 'Reviews',
    },
    {
      q: 'How do I safely log into purchased accounts to avoid automated security locks?',
      a: 'Every account package comes with clear setup guidelines. We strongly recommend using anti-detect browsers (such as Dolphin Anty or AdsPower) combined with clean residential proxies matching the registration country/city of the account.',
      category: 'Security',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className="bg-white">
      <SEO
        title="Frequently Asked Questions (FAQ) & Support | GolfCrater"
        description="Find answers to frequently asked questions about GolfCrater orders, accepted payment methods (BSC, TRX, ETH, SOL, BTC, Skrill, Bank transfer), delivery times, and replacement warranties."
        canonicalUrl="/faq"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
        jsonLd={faqSchema}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, verification standards, warranties, and multi-currency payment methods.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen ? 'border-emerald-500/80 bg-slate-50/50 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1">
                    <p>{faq.a}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still need help CTA */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Our 24/7 technical desk is available via Telegram, WhatsApp, and priority email.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, { page: 'contact' })}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              Contact Support
            </a>
            <a
              href="/track-order"
              onClick={(e) => handleLinkClick(e, { page: 'track-order' })}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
            >
              Track Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
