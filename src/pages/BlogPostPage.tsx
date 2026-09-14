import React, { useState, useMemo } from 'react';
import { BlogPost } from '../data/blogPostsData';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { ProductLogo } from '../components/ProductLogo';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  ExternalLink,
  ShoppingCart,
  Zap,
  Star,
  ShieldCheck,
  Globe,
  FileText,
  ChevronRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  relatedProduct?: Product;
  allPosts: BlogPost[];
  onNavigate: (route: AppRoute) => void;
  onAddToCart?: (product: Product, variant: ProductVariant) => void;
  onBuyNow?: (product: Product, variant: ProductVariant) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  relatedProduct,
  allPosts,
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    relatedProduct?.variants[0]?.id || ''
  );
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentVariant = useMemo(() => {
    if (!relatedProduct) return null;
    return (
      relatedProduct.variants.find((v) => v.id === selectedVariantId) ||
      relatedProduct.variants[0]
    );
  }, [relatedProduct, selectedVariantId]);

  const relatedPosts = useMemo(() => {
    return allPosts
      .filter((p) => p.id !== post.id && (p.category === post.category || p.categorySlug === post.categorySlug))
      .slice(0, 3);
  }, [allPosts, post]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog/${post.slug}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: post.trendingTitle, url: `/blog/${post.slug}` },
        ]}
      />

      {/* Top Breadcrumbs & Back Navigation Bar */}
      <div className="bg-white border-b border-slate-200/80 sticky top-0 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-slate-500 overflow-hidden">
            <a
              href="/blog"
              onClick={(e) => handleLinkClick(e, { page: 'blog' })}
              className="inline-flex items-center space-x-1.5 text-slate-700 hover:text-emerald-600 font-bold transition-colors cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </a>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-600 truncate hidden sm:inline">
              {post.category}
            </span>
            <span className="text-slate-300 hidden sm:inline">/</span>
            <span className="font-medium text-slate-400 truncate max-w-xs md:max-w-md hidden md:inline">
              {post.trendingTitle}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Article Header Container */}
      <header className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">
              {post.category}
            </span>
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
              {post.wordCount.toLocaleString()} Words (Comprehensive In-Depth Guide)
            </span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-semibold rounded-lg flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>2026 Updated Blueprint</span>
            </span>
          </div>

          {/* Main Trending SEO Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6">
            {post.trendingTitle}
          </h1>

          {/* Lead Hook Excerpt */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl mb-8">
            {post.excerpt}
          </p>

          {/* Author Byline & Publishing Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center space-x-3.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/20 shadow-2xs"
              />
              <div>
                <h2 className="text-xs font-bold text-slate-900">{post.author.name}</h2>
                <p className="text-[11px] text-slate-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pt-6">
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-16/9 max-h-[460px] w-full">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white text-xs sm:text-sm font-medium opacity-90">
              Figure 1: Architectural diagram and operational flow for verified {relatedProduct?.name || post.category} integration.
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout: 2 Columns (Main Article + Sticky Service Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Full 1,500+ Word Editorial Content (8 cols) */}
          <main className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200/90 shadow-xs space-y-12">
            
            {/* Table of Contents Box */}
            <nav className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Table of Contents</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-700">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-left hover:text-emerald-600 transition-colors flex items-center space-x-1.5 cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Render Each Deep Article Section */}
            {post.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-20 space-y-5">
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                    Section {idx + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                      {section.subheading}
                    </p>
                  )}
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {section.bodyParagraphs.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Points Callout if provided */}
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2.5 my-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center space-x-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Key Takeaways for This Section</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {section.keyPoints.map((point, ptIdx) => (
                        <li key={ptIdx} className="flex items-start space-x-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Styled Callout Box (Tip, Warning, Insight) */}
                {section.calloutBox && (
                  <div
                    className={`p-5 rounded-2xl border my-4 ${
                      section.calloutBox.type === 'warning'
                        ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                        : section.calloutBox.type === 'tip'
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {section.calloutBox.type === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      {section.calloutBox.type === 'tip' && (
                        <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {section.calloutBox.type === 'insight' && (
                        <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold">{section.calloutBox.title}</h4>
                        <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-90">
                          {section.calloutBox.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Responsive Comparison Table */}
                {section.table && (
                  <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-2xs">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          {section.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="p-3.5 font-bold tracking-tight">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3.5 ${
                                  cIdx === 0
                                    ? 'font-bold text-slate-900'
                                    : cIdx === 2
                                    ? 'text-emerald-700 font-semibold'
                                    : 'text-slate-600'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* In-Depth FAQ Accordion */}
            <section id="frequently-asked-questions" className="scroll-mt-20 pt-6 border-t border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                  Answers on Demand
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions (FAQ)
                </h2>
              </div>

              <div className="space-y-3">
                {post.faq.map((faqItem, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center space-x-2">
                          <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{faqItem.question}</span>
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-90 text-emerald-600' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faqItem.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Conclusion & Strategic Roadmap */}
            <section id="strategic-roadmap" className="scroll-mt-20 pt-6 border-t border-slate-200 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Conclusion & 2026 Strategic Roadmap
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {post.conclusion}
              </p>
            </section>

            {/* Author Profile Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/30 shrink-0"
              />
              <div>
                <h3 className="text-sm font-bold text-slate-900">{post.author.name}</h3>
                <p className="text-xs font-semibold text-emerald-600 mb-2">{post.author.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{post.author.bio}</p>
              </div>
            </div>

            {/* Bottom Sharing Buttons */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Help fellow operators scale:
              </span>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-2xs"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Link Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share This Article</span>
                  </>
                )}
              </button>
            </div>
          </main>

          {/* Right Column: Sticky Service Procurement Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Official Verified Service Box */}
            {relatedProduct && (
              <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-6 shadow-md sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg uppercase tracking-wider">
                    Official Verified Asset
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{relatedProduct.rating}</span>
                    <span className="text-slate-400 font-normal">({relatedProduct.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 p-2.5 bg-slate-50 rounded-2xl border border-slate-200 shrink-0 flex items-center justify-center">
                    <ProductLogo
                      productId={relatedProduct.id}
                      productName={relatedProduct.name}
                      size="small"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Starting at <strong className="text-slate-900">${relatedProduct.startingPrice}</strong>
                    </p>
                  </div>
                </div>

                {/* Fulfillment Highlights */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Delivery Time</span>
                    </span>
                    <strong className="text-slate-900">{relatedProduct.specifications.deliveryTime}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Warranty</span>
                    </span>
                    <strong className="text-slate-900">{relatedProduct.specifications.guaranteePeriod}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <Globe className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Regions</span>
                    </span>
                    <strong className="text-slate-900 truncate max-w-[150px]">
                      {relatedProduct.specifications.supportedRegions}
                    </strong>
                  </div>
                </div>

                {/* Variant Tier Selector */}
                <div className="space-y-2 mb-5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Choose Package Option:
                  </label>
                  <select
                    value={selectedVariantId}
                    onChange={(e) => setSelectedVariantId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold rounded-xl p-2.5 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  >
                    {relatedProduct.variants.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.name} - ${v.price} {v.popular ? '(Most Popular)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => {
                      if (onBuyNow && currentVariant) {
                        onBuyNow(relatedProduct, currentVariant);
                      }
                    }}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Order Verified Asset (${currentVariant?.price})</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onAddToCart && currentVariant) {
                        onAddToCart(relatedProduct, currentVariant);
                      }
                    }}
                    className="w-full py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 text-slate-500" />
                    <span>Add to Cart</span>
                  </button>

                  <a
                    href={`/product/${relatedProduct.slug}`}
                    onClick={(e) =>
                      handleLinkClick(e, { page: 'product', productId: relatedProduct.slug })
                    }
                    className="block text-center text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors pt-1"
                  >
                    View full technical store specs & customer reviews →
                  </a>
                </div>
              </div>
            )}

            {/* Quick Author Credential Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>GolfCrater Compliance Lab</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All guides published by GolfCrater are vetted by institutional compliance specialists and network security engineers to reflect current 2026 platform verification heuristics.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom Section: Related High-Authority Guides */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                  Recommended Reading
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Compliance Guides & Playbooks
                </h2>
              </div>

              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, { page: 'blog' })}
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center space-x-1"
              >
                <span>View All 47 Articles</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <article
                  key={relPost.id}
                  onClick={() => onNavigate({ page: 'blog-post', postSlug: relPost.slug })}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-16/10 overflow-hidden">
                      <img
                        src={relPost.coverImage}
                        alt={relPost.coverImageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-2 font-semibold">
                        <span className="text-emerald-600 font-bold">{relPost.category}</span>
                        <span>•</span>
                        <span>{relPost.readTime}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {relPost.trendingTitle}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {relPost.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <span className="text-xs font-bold text-emerald-600 group-hover:underline flex items-center space-x-1">
                      <span>Read Full Guide</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
