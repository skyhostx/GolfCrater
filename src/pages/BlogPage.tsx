import React from 'react';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const blogPosts = [
    {
      id: 'google-reviews-local-seo-guide',
      title: 'How 5-Star Google Reviews Drive Local SEO Rankings & Conversions',
      excerpt: 'Discover the exact mechanisms behind Google Maps 3-Pack rankings, the impact of review velocity, and how authentic customer feedback signals credibility to search algorithms.',
      date: 'September 2026',
      readTime: '6 min read',
      category: 'Reputation SEO',
      categoryRoute: { page: 'category' as const, category: 'Reviews' },
      author: 'GolfCrater Research Desk',
      tags: ['Google Reviews', 'Local SEO', 'Trust Factors'],
    },
    {
      id: 'kyc-verified-business-banking-compliance',
      title: 'A Guide to KYC Compliance & Payment Gateways for Modern E-Commerce',
      excerpt: 'Learn how verified merchant gateways like Stripe, Wise, and PayPal safeguard transaction volume, avoid unneeded holds, and facilitate frictionless global currency payouts.',
      date: 'September 2026',
      readTime: '8 min read',
      category: 'Fintech & Banking',
      categoryRoute: { page: 'category' as const, category: 'Bank Account' },
      author: 'Compliance & Verification Team',
      tags: ['KYC Verification', 'Stripe', 'Business Banking'],
    },
    {
      id: 'smtp-relay-inbox-placement-optimization',
      title: 'Maximizing Transactional Email Deliverability with Dedicated SMTP Relays',
      excerpt: 'A comprehensive technical breakdown of SPF, DKIM, DMARC, IP warming schedules, and why dedicated SMTP relays prevent critical user emails from landing in spam folders.',
      date: 'August 2026',
      readTime: '7 min read',
      category: 'Email Infrastructure',
      categoryRoute: { page: 'category' as const, category: 'Email Service' },
      author: 'Infrastructure Systems Team',
      tags: ['Mailgun', 'Brevo', 'SMTP Deliverability'],
    },
    {
      id: 'cryptocurrency-exchanges-security-best-practices',
      title: 'High-Velocity Crypto Accounts: Best Practices for Security & Proxy Isolation',
      excerpt: 'Explore essential security guidelines for managing multi-tier verified crypto accounts, including browser fingerprinting isolation, static residential proxies, and 2FA recovery.',
      date: 'August 2026',
      readTime: '5 min read',
      category: 'Crypto Compliance',
      categoryRoute: { page: 'category' as const, category: 'Crypto Account' },
      author: 'Security & Operations',
      tags: ['Binance', 'Crypto Security', 'KYC Tier-2'],
    },
  ];

  return (
    <div className="bg-white">
      <SEO
        title="Digital Marketplace Blog & Compliance Insights | GolfCrater"
        description="Expert guides on local SEO reputation management, Google review algorithms, KYC verification compliance for business bank accounts, and high-deliverability SMTP setups."
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Base & Technical Guides</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            GolfCrater Insights & Blog
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            In-depth guides on digital account compliance, reputation algorithms, email deliverability, and safe scaling strategies.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-full border border-emerald-200/60">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">By {post.author}</span>
                <a
                  href={`/category/${post.categoryRoute.category === 'Reviews' ? 'reviews' : post.categoryRoute.category.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleLinkClick(e, post.categoryRoute)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <span>Related Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
