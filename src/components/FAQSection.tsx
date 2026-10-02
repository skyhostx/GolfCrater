import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about purchasing, delivery, verification, and service guarantees.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-500/80 bg-slate-50/40 shadow-xs' 
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a specific custom requirement?</h4>
              <p className="text-xs text-slate-600">Our senior account consultants are available 24/7 on Live Chat & Telegram.</p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Contact Support Desk
          </button>
        </div>

      </div>
    </section>
  );
};
