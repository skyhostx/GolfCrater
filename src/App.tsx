import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductVariant, CartItem, Order } from './types';
import { AppRoute, getCurrentRoute, pathToRoute, routeToPath } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CategoryPage } from './pages/CategoryPage';
import { ShopPage } from './pages/ShopPage';
import { ContactPage } from './pages/ContactPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { SEO } from './components/SEO';
import { getCategorySeo, getProductSeo, getSiteStructuredData } from './utils/seoData';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Check } from 'lucide-react';

export default function App() {
  // Navigation Route State
  // Navigation Route State with Clean Path URL detection
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    return getCurrentRoute();
  });

  // Modal and Drawer states
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Cart & Checkout management with localStorage fallback
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('golfcrater_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('golfcrater_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [checkoutDiscount, setCheckoutDiscount] = useState<number>(0);
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>('');

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Synchronize Browser Back/Forward navigation and clean URL normalization
  useEffect(() => {
    // If user arrived with a hash fragment or GitHub Pages search redirect, normalize to clean path
    if (window.location.hash || (window.location.search && window.location.search.startsWith('?/'))) {
      const normalizedRoute = getCurrentRoute();
      const cleanPath = routeToPath(normalizedRoute);
      window.history.replaceState(null, '', cleanPath);
      setCurrentRoute(normalizedRoute);
    }

    const handleLocationChange = () => {
      const newRoute = getCurrentRoute();
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Clean Path Navigation handler (e.g. /category/crypto-account)
  const navigateTo = (route: AppRoute) => {
    const newPath = routeToPath(route);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    // Also remove hash if any was present
    if (window.location.hash) {
      window.history.replaceState(null, '', newPath);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    try {
      localStorage.setItem('golfcrater_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('golfcrater_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Cart actions
  const handleAddToCart = (product: Product, variant: ProductVariant, customReq?: string) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.productId === product.id && it.variant.id === variant.id
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        if (customReq) next[existingIdx].customRequirements = customReq;
        return next;
      }
      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          productImage: product.image,
          category: product.category,
          variant,
          quantity: 1,
          customRequirements: customReq,
        },
      ];
    });
    showToast(`Added ${product.name} (${variant.name}) to cart!`);
  };

  const handleBuyNow = (product: Product, variant: ProductVariant, customReq?: string) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.productId === product.id && it.variant.id === variant.id
      );
      if (existingIdx > -1) {
        return prev;
      }
      return [
        ...prev,
        {
          productId: product.id,
          productName: product.name,
          productImage: product.image,
          category: product.category,
          variant,
          quantity: 1,
          customRequirements: customReq,
        },
      ];
    });
    setCheckoutModalOpen(true);
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart.');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart cleared.');
  };

  const handleProceedToCheckout = (discountAmount: number, discountCode: string) => {
    setCheckoutDiscount(discountAmount);
    setAppliedPromoCode(discountCode);
    setCartDrawerOpen(false);
    setCheckoutModalOpen(true);
  };

  const handleOrderCompleted = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]); // Clear cart after successful payment
    showToast(`Order ${newOrder.id} placed successfully!`);
    navigateTo({ page: 'track-order' });
  };

  // Render the active page component with exact SEO metadata
  const renderCurrentPage = () => {
    switch (currentRoute.page) {
      case 'shop':
        return (
          <>
            <SEO
              title="Shop Digital Services, Verified Accounts & Reviews | GolfCrater"
              description="Browse our complete catalog of verified digital products, business accounts, crypto exchanges, reputation reviews, and marketing infrastructure."
              canonicalUrl="/shop"
              breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: 'Shop', url: '/shop' },
              ]}
            />
            <ShopPage
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </>
        );

      case 'category': {
        const catSeo = getCategorySeo(currentRoute.category);
        return (
          <>
            <SEO
              title={catSeo.title}
              description={catSeo.description}
              canonicalUrl={catSeo.canonical}
              breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: currentRoute.category, url: catSeo.canonical },
              ]}
            />
            <CategoryPage
              category={currentRoute.category}
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </>
        );
      }

      case 'product': {
        const foundProduct = PRODUCTS.find(
          (p) => p.id === currentRoute.productId || p.slug === currentRoute.productId
        );
        if (!foundProduct) {
          return <NotFoundPage onNavigate={navigateTo} />;
        }
        const prodSeo = getProductSeo(foundProduct);
        return (
          <>
            <SEO
              title={prodSeo.title}
              description={prodSeo.description}
              canonicalUrl={prodSeo.canonicalUrl}
              ogType={prodSeo.ogType}
              breadcrumbs={prodSeo.breadcrumbs}
              jsonLd={prodSeo.jsonLd}
            />
            <ProductPage
              product={foundProduct}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </>
        );
      }

      case 'about':
        return <AboutPage onNavigate={navigateTo} />;

      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;

      case 'pricing':
        return <PricingPage onNavigate={navigateTo} />;

      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;

      case 'faq':
        return <FaqPage onNavigate={navigateTo} />;

      case 'contact':
        return (
          <>
            <SEO
              title="Contact Customer Support & 24/7 Live Desk | GolfCrater"
              description="Get in touch with GolfCrater customer support for assistance with verified digital accounts, orders, payment verification, and service inquiries."
              canonicalUrl="/contact"
              breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: 'Contact', url: '/contact' },
              ]}
            />
            <ContactPage onNavigate={navigateTo} />
          </>
        );

      case 'track-order':
        return (
          <>
            <SEO
              title="Track Order Status & Delivery Credentials | GolfCrater"
              description="Secure live tracking for your GolfCrater order. Check delivery status, fulfillment progress, and retrieve verification documentation."
              canonicalUrl="/track-order"
              breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: 'Track Order', url: '/track-order' },
              ]}
            />
            <OrderTrackingPage orders={orders} onNavigate={navigateTo} />
          </>
        );

      case 'not-found':
        return <NotFoundPage onNavigate={navigateTo} />;

      case 'home':
      default:
        return (
          <>
            <SEO
              title="GolfCrater | Verified Digital Marketplace & Professional Business Services"
              description="GolfCrater is the premier verified digital marketplace for business accounts, 5-star reputation reviews, aged Gmails, and SMTP relay services with instant processing."
              canonicalUrl="/"
              breadcrumbs={[{ name: 'Home', url: '/' }]}
              jsonLd={getSiteStructuredData()}
            />
            <HomePage
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2 border border-slate-800 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Primary Sticky Header */}
      <Navbar
        products={PRODUCTS}
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        cartCount={cart.reduce((sum, it) => sum + it.quantity, 0)}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Slide-out Cart Drawer */}
      {cartDrawerOpen && (
        <CartDrawer
          isOpen={cartDrawerOpen}
          onClose={() => setCartDrawerOpen(false)}
          items={cart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
          onProceedToCheckout={handleProceedToCheckout}
        />
      )}

      {/* Integrated Secure Payment Gateway Checkout Modal */}
      {checkoutModalOpen && (
        <CheckoutModal
          isOpen={checkoutModalOpen}
          onClose={() => setCheckoutModalOpen(false)}
          items={cart}
          discount={checkoutDiscount}
          discountCode={appliedPromoCode}
          onOrderComplete={handleOrderCompleted}
        />
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          products={PRODUCTS}
          onSelectProduct={(p) => {
            setSearchModalOpen(false);
            navigateTo({ page: 'product', productId: p.id });
          }}
        />
      )}

    </div>
  );
}
