import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown, 
  Star, 
  Landmark, 
  Coins, 
  Smartphone, 
  Mail, 
  ArrowRight, 
  Package 
} from 'lucide-react';
import { Product } from '../types';
import { AppRoute, routeToPath, categoryToSlug } from '../utils/navigation';

interface NavbarProps {
  products: Product[];
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  products,
  currentRoute,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileCategories, setExpandedMobileCategories] = useState<Record<string, boolean>>({});
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute, closeMobile = true) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(route);
    setActiveDropdown(null);
    if (closeMobile) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Helper to retrieve products for a given category
  const getCategoryProducts = (cat: string): Product[] => {
    if (!products) return [];
    if (cat === 'Reviews Service' || cat === 'Reviews') {
      return products.filter((p) => (p.category as string) === 'Reviews' || (p.category as string) === 'Reviews Service');
    }
    return products.filter((p) => p.category === cat);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Bank Account':
        return <Landmark className="w-4 h-4 text-emerald-600" />;
      case 'Crypto Account':
        return <Coins className="w-4 h-4 text-blue-600" />;
      case 'Reviews Service':
        return <Star className="w-4 h-4 text-amber-500 fill-amber-500" />;
      case 'SMM Account':
        return <Smartphone className="w-4 h-4 text-indigo-600" />;
      case 'Email Service':
        return <Mail className="w-4 h-4 text-teal-600" />;
      default:
        return <Package className="w-4 h-4 text-slate-500" />;
    }
  };

  const navLinks: { label: string; route?: AppRoute; category?: string }[] = [
    { label: 'Home', route: { page: 'home' } },
    { label: 'Bank Account', category: 'Bank Account', route: { page: 'category', category: 'Bank Account' } },
    { label: 'Crypto Account', category: 'Crypto Account', route: { page: 'category', category: 'Crypto Account' } },
    { label: 'Reviews Service', category: 'Reviews Service', route: { page: 'category', category: 'Reviews Service' } },
    { label: 'SMM Account', category: 'SMM Account', route: { page: 'category', category: 'SMM Account' } },
    { label: 'Email Service', category: 'Email Service', route: { page: 'category', category: 'Email Service' } },
    { label: 'Pricing', route: { page: 'pricing' } },
    { label: 'FAQ', route: { page: 'faq' } },
    { label: 'Shop', route: { page: 'shop' } },
    { label: 'Contact', route: { page: 'contact' } },
  ];

  const handleMouseEnter = (category: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileCategory = (cat: string) => {
    setExpandedMobileCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const isLinkActive = (item: typeof navLinks[0]) => {
    if (item.route?.page === 'home' && currentRoute.page === 'home') return true;
    if (item.route?.page === 'shop' && currentRoute.page === 'shop') return true;
    if (item.route?.page === 'contact' && currentRoute.page === 'contact') return true;
    if (
      item.category && 
      currentRoute.page === 'category' && 
      currentRoute.category.toLowerCase() === item.category.toLowerCase()
    ) {
      return true;
    }
    return false;
  };

  return (
    <header 
      id="main-header" 
      ref={navRef}
      className={`sticky top-0 z-40 transition-all duration-200 bg-white ${
        isScrolled 
          ? 'shadow-md border-b border-slate-100/90 py-2.5 backdrop-blur-md bg-white/95' 
          : 'border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top micro trust notification bar */}
      <div className="bg-slate-900 text-white text-[11px] font-medium py-1 px-4 text-center hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>24/7 Instant Order Verification & Secure Digital Asset Delivery Active</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Save 20% with code: <strong className="text-emerald-400 font-semibold">GOLF20</strong></span>
            <span className="text-slate-600">|</span>
            <a 
              href="/track-order"
              onClick={(e) => handleLinkClick(e, { page: 'track-order' })}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Track Order Status
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-6 xl:space-x-8">
            <a 
              id="logo-brand-btn"
              href="/"
              onClick={(e) => handleLinkClick(e, { page: 'home' })}
              className="flex items-center space-x-2.5 text-left group focus:outline-hidden"
              aria-label="GolfCrater Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-600 transition-colors">
                <div className="relative">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900"></span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 font-sans flex items-center">
                  Golf<span className="text-emerald-600">Crater</span>
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                  Digital Marketplace
                </span>
              </div>
            </a>

            {/* Desktop Navigation with Category-wise Product Sub-menus */}
            <nav className="hidden lg:flex items-center space-x-1 relative" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isCategory = !!link.category;
                const catProducts = isCategory ? getCategoryProducts(link.category!) : [];
                const hasSubmenu = isCategory && catProducts.length > 0;
                const isActive = isLinkActive(link);
                const isDropdownOpen = activeDropdown === link.category;

                if (!hasSubmenu) {
                  return (
                    <a
                      key={link.label}
                      id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      href={link.route ? routeToPath(link.route) : '#'}
                      onClick={(e) => {
                        if (link.route) handleLinkClick(e, link.route);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-normal transition-colors ${
                        isActive
                          ? 'text-emerald-700 bg-emerald-50 font-bold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                }

                // Category Nav Item with Sub-menu
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.category!)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      id={`nav-cat-btn-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      href={`/category/${categoryToSlug(link.category!)}`}
                      onClick={(e) => {
                        if (link.route) handleLinkClick(e, link.route);
                        setActiveDropdown(null);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-normal transition-colors flex items-center space-x-1 ${
                        isActive || isDropdownOpen
                          ? 'text-emerald-700 bg-emerald-50 font-bold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          isDropdownOpen ? 'transform rotate-180 text-emerald-600' : ''
                        }`} 
                      />
                    </a>

                    {/* Sub-menu Dropdown */}
                    {isDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1.5 w-84 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                        onMouseEnter={() => handleMouseEnter(link.category!)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Submenu Category Header */}
                        <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                          <a
                            href={`/category/${categoryToSlug(link.category!)}`}
                            onClick={(e) => {
                              handleLinkClick(e, { page: 'category', category: link.category! });
                            }}
                            className="flex items-center space-x-2 text-left hover:opacity-80 transition-opacity"
                          >
                            <span className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                              {getCategoryIcon(link.category!)}
                            </span>
                            <div>
                              <span className="text-xs font-bold text-slate-900 block">{link.label}</span>
                              <span className="text-[10px] text-slate-500">{catProducts.length} Verified Services</span>
                            </div>
                          </a>
                          <a
                            href={`/category/${categoryToSlug(link.category!)}`}
                            onClick={(e) => {
                              handleLinkClick(e, { page: 'category', category: link.category! });
                            }}
                            className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center space-x-1"
                          >
                            <span>Open Category Page</span>
                            <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>

                        {/* Category Products List */}
                        <div className="max-h-80 overflow-y-auto px-2 py-1 space-y-0.5">
                          {catProducts.map((product) => (
                            <a
                              key={product.id}
                              id={`submenu-product-${product.id}`}
                              href={`/product/${product.id}`}
                              onClick={(e) => {
                                handleLinkClick(e, { page: 'product', productId: product.id });
                              }}
                              className="w-full text-left p-2 rounded-xl hover:bg-slate-50/90 group transition-all flex items-center space-x-3"
                            >
                              {/* Product Thumbnail */}
                              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200/60 relative">
                                <img 
                                  src={product.image} 
                                  alt={product.name} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                                  loading="lazy"
                                />
                                {product.badge && (
                                  <span className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white text-[8px] font-semibold text-center py-0.5 truncate px-0.5">
                                    {product.badge}
                                  </span>
                                )}
                              </div>

                              {/* Title & Micro specs */}
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 truncate leading-tight">
                                  {product.name}
                                </h4>
                                <div className="flex items-center space-x-2 mt-0.5 text-[11px] text-slate-500">
                                  <div className="flex items-center text-amber-500 font-semibold text-[10px]">
                                    <Star className="w-2.5 h-2.5 fill-amber-400 mr-0.5" />
                                    <span>{product.rating}</span>
                                    <span className="text-slate-400 font-normal ml-0.5">({product.reviewCount})</span>
                                  </div>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-[10px] text-slate-500 truncate">
                                    {product.specifications.deliveryTime}
                                  </span>
                                </div>
                              </div>

                              {/* Starting Price */}
                              <div className="text-right shrink-0">
                                <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                  From ${product.startingPrice}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>

                        {/* Submenu Footer Action */}
                        <div className="px-3 pt-2 pb-1 border-t border-slate-100">
                          <a
                            href={`/category/${categoryToSlug(link.category!)}`}
                            onClick={(e) => {
                              handleLinkClick(e, { page: 'category', category: link.category! });
                            }}
                            className="w-full py-1.5 px-3 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-[11px] font-bold flex items-center justify-between transition-colors"
                          >
                            <span>Browse full {link.label} page</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Trigger */}
            <button
              id="search-header-trigger"
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Search digital products"
              aria-label="Search digital products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <button
              id="cart-header-trigger"
              onClick={onOpenCart}
              className="relative p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer flex items-center space-x-1.5"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-slate-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs font-semibold text-slate-800">Cart</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with Sub-menus */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="pb-3 border-b border-slate-100">
            <button
              onClick={() => { onOpenSearch(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Search Store</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const isCategory = !!link.category;
              const catProducts = isCategory ? getCategoryProducts(link.category!) : [];
              const hasSubmenu = isCategory && catProducts.length > 0;
              const isExpanded = isCategory && !!expandedMobileCategories[link.category!];

              if (!hasSubmenu) {
                return (
                  <a
                    key={link.label}
                    href={link.route ? routeToPath(link.route) : '#'}
                    onClick={(e) => {
                      if (link.route) handleLinkClick(e, link.route);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between text-slate-700 hover:bg-slate-50"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              }

              return (
                <div key={link.label} className="border-b border-slate-50 last:border-none">
                  {/* Category Accordion Header */}
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50">
                    <a
                      href={`/category/${categoryToSlug(link.category!)}`}
                      onClick={(e) => {
                        handleLinkClick(e, { page: 'category', category: link.category! });
                      }}
                      className="flex items-center space-x-2.5 text-left flex-1"
                    >
                      {getCategoryIcon(link.category!)}
                      <span className="text-sm font-semibold text-slate-800">{link.label}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded-full">
                        {catProducts.length}
                      </span>
                    </a>
                    
                    <button
                      onClick={() => toggleMobileCategory(link.category!)}
                      className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 cursor-pointer"
                      aria-label={`Toggle ${link.label} sub menu`}
                    >
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'transform rotate-180 text-emerald-600' : ''
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Category Sub-menu items (Mobile) */}
                  {isExpanded && (
                    <div className="pl-4 pr-1 py-1 space-y-1 bg-slate-50/50 rounded-xl my-1">
                      {catProducts.map((prod) => (
                        <a
                          key={prod.id}
                          href={`/product/${prod.id}`}
                          onClick={(e) => {
                            handleLinkClick(e, { page: 'product', productId: prod.id });
                          }}
                          className="w-full text-left p-2 rounded-lg hover:bg-white flex items-center space-x-2.5 transition-colors"
                        >
                          <img 
                            src={prod.image} 
                            alt={prod.name} 
                            className="w-8 h-8 rounded-md object-cover border border-slate-200 shrink-0" 
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-slate-800 truncate">{prod.name}</div>
                            <div className="text-[10px] text-emerald-600 font-medium">From ${prod.startingPrice}</div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                        </a>
                      ))}

                      <a
                        href={`/category/${categoryToSlug(link.category!)}`}
                        onClick={(e) => {
                          handleLinkClick(e, { page: 'category', category: link.category! });
                        }}
                        className="w-full text-center py-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 block mt-1"
                      >
                        Open {link.label} page ({catProducts.length} services) →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
