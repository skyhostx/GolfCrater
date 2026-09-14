import React, { useState, useMemo } from 'react';
import { Product, ProductVariant } from '../types';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { ProductLogo } from '../components/ProductLogo';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle, 
  Search, 
  X, 
  ExternalLink, 
  ShoppingCart, 
  Zap, 
  Star, 
  FileText, 
  Sparkles,
  Globe,
  Tag,
  Check,
  Share2
} from 'lucide-react';

interface BlogPageProps {
  products?: Product[];
  onNavigate: (route: AppRoute) => void;
  onAddToCart?: (product: Product, variant: ProductVariant) => void;
  onBuyNow?: (product: Product, variant: ProductVariant) => void;
}

interface ProductBlogPost {
  product: Product;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  keyTakeaways: string[];
  operationalRules: string[];
}

export const BlogPage: React.FC<BlogPageProps> = ({
  products = [],
  onNavigate,
  onAddToCart,
  onBuyNow,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<ProductBlogPost | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Helper to handle link navigation
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  // Generate an editorial blog post for each product in the catalog
  const blogPosts: ProductBlogPost[] = useMemo(() => {
    return products.map((product, index) => {
      // Custom crafted headlines based on categories and specific high-profile items
      let title = `The Complete 2026 Guide to Buying & Scaling with ${product.name}`;
      let author = 'GolfCrater Research Desk';
      let authorRole = 'Digital Asset Compliance Specialist';
      const readTimes = ['5 min read', '6 min read', '7 min read', '8 min read', '9 min read'];
      const readTime = readTimes[index % readTimes.length];
      
      const dates = [
        'September 12, 2026',
        'September 10, 2026',
        'September 8, 2026',
        'September 5, 2026',
        'September 2, 2026',
        'August 29, 2026',
        'August 26, 2026',
        'August 22, 2026',
        'August 18, 2026',
        'August 14, 2026',
      ];
      const date = dates[index % dates.length];

      if (product.category === 'Reviews' || product.category === 'Reviews Service') {
        title = `Reputation & Algorithm Mastery: Complete Buyer's Guide to ${product.name}`;
        author = 'Reputation Strategy Desk';
        authorRole = 'SEO & Local Graph Analyst';
      } else if (product.category === 'Bank Account') {
        title = `High-Limit Merchant Operations: Complete Compliance Guide to ${product.name}`;
        author = 'Fintech Compliance Unit';
        authorRole = 'Global Payment Systems Lead';
      } else if (product.category === 'Crypto Account') {
        title = `Institutional Limits & Liquidity Ramping: Strategic Setup Guide for ${product.name}`;
        author = 'Crypto Assets Desk';
        authorRole = 'Exchange Liquidity & Security Architect';
      } else if (product.category === 'Email Service') {
        title = `Inbox Deliverability & Dedicated Infrastructure: Deep-Dive into ${product.name}`;
        author = 'Email Systems Lab';
        authorRole = 'SMTP & IP Deliverability Engineer';
      } else if (product.category === 'Account') {
        title = `Enterprise Campaign Velocity & Spend Thresholds: Guide to ${product.name}`;
        author = 'Media Buying & Ads Desk';
        authorRole = 'Growth Infrastructure Specialist';
      } else if (product.category === 'SMM Account') {
        title = `Organic Authority & Anti-Shadowban Protocols: Complete Playbook for ${product.name}`;
        author = 'Social Graph Operations';
        authorRole = 'Social Media Infrastructure Lead';
      }

      // Tailored key takeaways
      const keyTakeaways = [
        `Guaranteed ${product.specifications.verificationLevel} status with verified documentation included.`,
        `Delivered within ${product.specifications.deliveryTime} backed by our rigorous ${product.specifications.guaranteePeriod} replacement warranty.`,
        `Full residential IP & cookie profile isolation to ensure seamless device fingerprint compatibility.`,
        `Direct 24/7 technical support available for onboarding and zero-friction operational handoff.`
      ];

      // Operational best practice rules
      const operationalRules = [
        `Always initialize access using clean residential proxies matched to ${product.specifications.supportedRegions}.`,
        'Allow an initial 12 to 24-hour warm-up window before initiating peak volume operations.',
        'Preserve all provided authentication backups, cookie sessions, and primary security credentials.',
        'Follow our provided step-by-step handover checklist to ensure permanent account longevity.'
      ];

      return {
        product,
        title,
        excerpt: product.shortDescription,
        category: product.category,
        author,
        authorRole,
        date,
        readTime,
        keyTakeaways,
        operationalRules,
      };
    });
  }, [products]);

  // Categories list for filter tabs
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, [products]);

  // Filtered posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = post.product.name.toLowerCase().includes(q);
        const matchesTitle = post.title.toLowerCase().includes(q);
        const matchesDesc = post.excerpt.toLowerCase().includes(q);
        const matchesTag = post.product.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesTitle && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [blogPosts, selectedCategory, searchQuery]);

  // Open modal reader
  const handleOpenArticle = (post: ProductBlogPost) => {
    setActiveArticle(post);
    setSelectedVariantId(post.product.variants[0]?.id || '');
    setCopiedLink(false);
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
  };

  const handleShareArticle = () => {
    if (navigator.clipboard && activeArticle) {
      navigator.clipboard.writeText(window.location.origin + `/product/${activeArticle.product.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentSelectedVariant = useMemo(() => {
    if (!activeArticle) return null;
    return (
      activeArticle.product.variants.find((v) => v.id === selectedVariantId) ||
      activeArticle.product.variants[0]
    );
  }, [activeArticle, selectedVariantId]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Digital Services Blog & Complete Product Guides | GolfCrater"
        description="Comprehensive guides, compliance tutorials, and technical specifications for every verified digital service, bank account, and reputation solution at GolfCrater."
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Hero Header Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        {/* Subtle geometric pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Verified Knowledge Base & Product Directory</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              GolfCrater Insights & Product Guides
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore in-depth technical guides, verification standards, and operational best practices for all <strong>{products.length}</strong> verified digital services and business accounts in our catalog.
            </p>

            {/* Quick Search Input */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 47 product articles, guides, or tags..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-12 pr-10 py-3.5 rounded-2xl border border-slate-700/80 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Category Filter Pills & Counter */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-semibold text-slate-500 shrink-0">
            Showing <strong className="text-slate-900">{filteredPosts.length}</strong> of {products.length} product guides
          </div>
        </div>

        {/* Product Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No product articles match your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any articles matching "{searchQuery}". Try clearing your keywords or selecting another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Reset Search & Category
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => {
              const { product } = post;
              return (
                <article
                  key={product.id}
                  className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Card Top: Brand Header & Badge */}
                  <div>
                    <div className="p-5 sm:p-6 bg-slate-50/60 border-b border-slate-100 flex items-center justify-between gap-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-white p-2 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-center">
                        <ProductLogo
                          productId={product.id}
                          productName={product.name}
                          size="small"
                          className="w-full h-full"
                        />
                      </div>

                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 bg-emerald-100/80 text-emerald-800 text-[11px] font-bold rounded-lg border border-emerald-200/60">
                          {product.category}
                        </span>
                        <div className="flex items-center justify-end space-x-1 mt-1 text-[11px] font-semibold text-slate-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-400">({product.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7">
                      {/* Meta info: Date & Read Time */}
                      <div className="flex items-center space-x-3 text-[11px] font-semibold text-slate-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 
                        onClick={() => handleOpenArticle(post)}
                        className="text-base sm:text-lg font-black text-slate-900 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors cursor-pointer mb-3"
                      >
                        {post.title}
                      </h2>

                      {/* Post Excerpt */}
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-5">
                        {post.excerpt}
                      </p>

                      {/* Key Highlights Bullet points */}
                      <div className="space-y-1.5 mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium truncate">Delivery: {product.specifications.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium truncate">Warranty: {product.specifications.guaranteePeriod}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="font-medium truncate">Regions: {product.specifications.supportedRegions}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom / Footer Actions */}
                  <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                    <div className="flex items-center justify-between py-3 mb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Starting at</span>
                        <span className="text-lg font-black text-slate-900">${product.startingPrice}</span>
                      </div>
                      <button
                        onClick={() => handleOpenArticle(post)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-xl border border-emerald-200/70 transition-colors cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`/product/${product.slug}`}
                        onClick={(e) => handleLinkClick(e, { page: 'product', productId: product.slug })}
                        className="w-full text-center py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>Product Page</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                      </a>

                      <button
                        onClick={() => {
                          if (onAddToCart) {
                            onAddToCart(product, product.variants[0]);
                          }
                        }}
                        className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-2xs"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={handleCloseArticle}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col my-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-200 z-20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">
                  {activeArticle.product.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {activeArticle.readTime}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShareArticle}
                  title="Copy share link"
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer text-xs font-semibold flex items-center space-x-1"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleCloseArticle}
                  aria-label="Close article"
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Article Headline & Author */}
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                  {activeArticle.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
                      GC
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{activeArticle.author}</p>
                      <p className="text-[11px] text-slate-400">{activeArticle.authorRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>{activeArticle.date}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>{activeArticle.product.rating} ({activeArticle.product.reviewCount} reviews)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Spotlight Hero Card inside Modal */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className="flex items-center space-x-5">
                  <div className="w-20 h-20 bg-white p-3 rounded-2xl shrink-0 flex items-center justify-center shadow-inner">
                    <ProductLogo
                      productId={activeArticle.product.id}
                      productName={activeArticle.product.name}
                      size="small"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Official Asset Guide</span>
                    <h2 className="text-xl sm:text-2xl font-black text-white">{activeArticle.product.name}</h2>
                    <p className="text-xs text-slate-300 mt-1 max-w-lg">
                      {activeArticle.product.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                  <span className="text-xs text-slate-400 block">Catalog Price</span>
                  <span className="text-2xl font-black text-emerald-400">{activeArticle.product.priceRange}</span>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => {
                        if (onBuyNow && currentSelectedVariant) {
                          onBuyNow(activeArticle.product, currentSelectedVariant);
                        }
                      }}
                      className="w-full md:w-auto px-4 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Instant Order</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 1: Executive Overview */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <span>Executive Overview & Strategic Utility</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  In today's competitive digital economy, obtaining clean, verified credentials for {activeArticle.product.name} is essential for continuous business operations, brand trust, and scalable revenue generation. Traditional verification delays, rigorous regional document requirements, and algorithmic flags often stall growth. Our comprehensive verification architecture eliminates these hurdles by delivering fully compliant, pre-authenticated assets ready for enterprise use.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every {activeArticle.product.name} tier offered on GolfCrater undergoes strict manual quality control, residential IP validation, and authentication checks. Whether you are scaling an outreach campaign, expanding payment capabilities, or strengthening consumer trust, this solution provides a robust, plug-and-play foundation.
                </p>
              </div>

              {/* Section 2: Key Specifications & Guarantees */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Technical Specifications & Fulfillment Guarantees</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Delivery Window</span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeArticle.product.specifications.deliveryTime}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Warranty & Protection</span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeArticle.product.specifications.guaranteePeriod}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Verification Standard</span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeArticle.product.specifications.verificationLevel}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Supported Geographies</span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeArticle.product.specifications.supportedRegions}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200 sm:col-span-2">
                    <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Credentials & Documents Provided</span>
                    <span className="font-bold text-slate-800 text-sm mt-0.5 block">{activeArticle.product.specifications.documentsIncluded}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Key Takeaways */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <span>Key Benefits & Strategic Advantages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeArticle.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Operational Rules & Best Practices */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span>Operational Security & Onboarding Protocol</span>
                </h3>
                <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 space-y-2.5 text-xs">
                  {activeArticle.operationalRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Packages & Order Selector */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Select Package Tier</h3>
                    <p className="text-xs text-slate-500">Choose the volume or tier that matches your business needs.</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Instant Automated Handover
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {activeArticle.product.variants.map((v) => {
                    const isSelected = v.id === selectedVariantId;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariantId(v.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50/50 shadow-xs ring-2 ring-emerald-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-slate-800 line-clamp-1">{v.name}</span>
                            {v.popular && (
                              <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-base font-black text-slate-900 mt-2">${v.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`/product/${activeArticle.product.slug}`}
                  onClick={(e) => {
                    handleCloseArticle();
                    handleLinkClick(e, { page: 'product', productId: activeArticle.product.slug });
                  }}
                  className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <span>Open Dedicated Product Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      if (onAddToCart && currentSelectedVariant) {
                        onAddToCart(activeArticle.product, currentSelectedVariant);
                        handleCloseArticle();
                      }
                    }}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4 text-slate-700" />
                    <span>Add to Cart (${currentSelectedVariant?.price})</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onBuyNow && currentSelectedVariant) {
                        onBuyNow(activeArticle.product, currentSelectedVariant);
                        handleCloseArticle();
                      }
                    }}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                  >
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Buy Now (${currentSelectedVariant?.price})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
