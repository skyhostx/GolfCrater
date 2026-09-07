import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/products';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Feedback from verified clients who rely on GolfCrater for their digital business expansion.
          </p>
        </div>

        {/* 3-4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {review.name}
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      {review.country} • {review.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 mt-1 font-medium truncate">
                  Ordered: {review.productName}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
