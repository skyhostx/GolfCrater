import React, { useState, useMemo } from 'react';
import { BlogPost, BLOG_POSTS } from '../data/blogPostsData';
import { AppRoute } from '../utils/navigation';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  X,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(route);
  };

  const categories = useMemo(() => {
    const cats = new Set(BLOG_POSTS.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = post.trendingTitle.toLowerCase().includes(q);
        const matchesDesc = post.excerpt.toLowerCase().includes(q);
        const matchesTag = post.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // Lead featured post for the top hero spotlight
  const featuredPost = useMemo(() => {
    return BLOG_POSTS[0];
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      <SEO
        title="GolfCrater Insights: Digital Assets, Compliance & Growth Playbooks"
        description="Authoritative, in-depth 1,500+ word guides on verified business accounts, review generation algorithms, payment compliance, and enterprise digital infrastructure."
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Hero Header Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GolfCrater Knowledge Base & Research</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Digital Assets & Verification Insights
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore <strong>47 authoritative 1,500+ word playbooks</strong> covering local SEO review strategies, cross-border fintech compliance, exchange liquidity protocols, and enterprise infrastructure.
            </p>

            {/* Clean Keyword Search Input */}
            <div className="mt-8 relative max-w-xl mx-auto">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 47 verified guides and topics..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-12 pr-10 py-3.5 rounded-2xl border border-slate-700/80 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Category Navigation Pills */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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
            Showing <strong className="text-slate-900">{filteredPosts.length}</strong> of {BLOG_POSTS.length} comprehensive articles
          </div>
        </div>

        {/* Featured Editorial Post Spotlight (Shown when no search/filter active) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <div className="mb-14">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
              <TrendingUp className="w-4 h-4" />
              <span>Trending Editorial Spotlight</span>
            </div>

            <article
              onClick={() => onNavigate({ page: 'blog-post', postSlug: featuredPost.slug })}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group cursor-pointer"
            >
              <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto overflow-hidden relative">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-xl backdrop-blur-md">
                    Featured Masterclass
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs font-semibold text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{featuredPost.wordCount.toLocaleString()} words</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors mb-4">
                    {featuredPost.trendingTitle}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">{featuredPost.author.name}</h3>
                      <p className="text-[11px] text-slate-500">{featuredPost.date}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {selectedCategory === 'All' ? 'All Guides & Research Playbooks' : `${selectedCategory} Guides`}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Solid 1,500+ word technical breakdowns updated for 2026 platform standards.
            </p>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No articles match your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              We couldn't find any articles matching "{searchQuery}". Try clearing your keywords or selecting another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs cursor-pointer"
            >
              Reset Search & Category
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate({ page: 'blog-post', postSlug: post.slug })}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="aspect-16/10 overflow-hidden relative bg-slate-100">
                    <img
                      src={post.coverImage}
                      alt={post.coverImageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold rounded-lg shadow-2xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 sm:p-7">
                    {/* Date & Read Time */}
                    <div className="flex items-center space-x-3 text-[11px] font-semibold text-slate-400 mb-3">
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

                    {/* Trending Title */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2 mb-3">
                      {post.trendingTitle}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Author & Read Article Action */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs font-bold text-slate-700 truncate max-w-[130px]">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
