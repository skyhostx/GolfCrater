import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductVariant, CartItem, Order } from './types';
import { AppRoute, getCurrentRoute, pathToRoute, routeToPath } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Check } from 'lucide-react';

// Lazy-loaded secondary pages (only loaded when navigated to, speeding up initial reload)
const ProductPage = lazy(() => import('./pages/ProductPage').then((m) => ({ default: m.ProductPage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then((m) => ({ default: m.CategoryPage })));
const ShopPage = lazy(() => import('./pages/ShopPage').then((m) => ({ default: m.ShopPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const OrderTrackingPage = lazy(() => import('./pages/OrderTrackingPage').then((m) => ({ default: m.OrderTrackingPage })));

// Lazy-loaded drawers and checkout modals (only loaded when user triggers them)
const CartDrawer = lazy(() => import('./components/CartDrawer').then((m) => ({ default: m.CartDrawer })));
const CheckoutModal = lazy(() => import('./components/CheckoutModal').then((m) => ({ default: m.CheckoutModal })));
const SearchModal = lazy(() => import('./components/SearchModal').then((m) => ({ default: m.SearchModal })));

// Lightweight non-blocking page transition skeleton
const PageLoadingFallback = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse">
    <div className="h-8 bg-slate-100 rounded-lg w-64 mb-4"></div>
    <div className="h-4 bg-slate-100 rounded w-96 mb-8"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="h-64 bg-slate-100 rounded-2xl"></div>
      <div className="h-64 bg-slate-100 rounded-2xl"></div>
      <div className="h-64 bg-slate-100 rounded-2xl"></div>
    </div>
  </div>
);

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
    // If user arrived with a hash fragment like #/category/crypto-account, normalize to clean path
    if (window.location.hash) {
      const normalizedRoute = pathToRoute(window.location.pathname, window.location.hash);
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

  // Update document title dynamically based on the current page
  useEffect(() => {
    switch (currentRoute.page) {
      case 'home':
        document.title = 'GolfCrater | Verified Digital Marketplace & Accounts';
        break;
      case 'shop':
        document.title = 'Shop Digital Services & Accounts | GolfCrater';
        break;
      case 'category':
        document.title = `${currentRoute.category} Services | GolfCrater`;
        break;
      case 'product': {
        const p = PRODUCTS.find((prod) => prod.id === currentRoute.productId);
        document.title = p ? `${p.name} | GolfCrater` : 'Product Details | GolfCrater';
        break;
      }
      case 'contact':
        document.title = 'Contact Support & Helpdesk | GolfCrater';
        break;
      case 'track-order':
        document.title = 'Track Order Status & Credentials | GolfCrater';
        break;
    }
  }, [currentRoute]);

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

  // Render the active page component
  const renderCurrentPage = () => {
    switch (currentRoute.page) {
      case 'shop':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ShopPage
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </Suspense>
        );

      case 'category':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <CategoryPage
              category={currentRoute.category}
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </Suspense>
        );

      case 'product': {
        const foundProduct = PRODUCTS.find(
          (p) => p.id === currentRoute.productId || p.slug === currentRoute.productId
        );
        if (!foundProduct) {
          return (
            <Suspense fallback={<PageLoadingFallback />}>
              <ShopPage
                products={PRODUCTS}
                onNavigate={navigateTo}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </Suspense>
          );
        }
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProductPage
              product={foundProduct}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </Suspense>
        );
      }

      case 'contact':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage onNavigate={navigateTo} />
          </Suspense>
        );

      case 'track-order':
        return (
          <Suspense fallback={<PageLoadingFallback />}>
            <OrderTrackingPage orders={orders} onNavigate={navigateTo} />
          </Suspense>
        );

      case 'home':
      default:
        return (
          <HomePage
            products={PRODUCTS}
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
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

      {/* Slide-out Cart Drawer - Lazy loaded only when opened */}
      {cartDrawerOpen && (
        <Suspense fallback={null}>
          <CartDrawer
            isOpen={cartDrawerOpen}
            onClose={() => setCartDrawerOpen(false)}
            items={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onProceedToCheckout={handleProceedToCheckout}
          />
        </Suspense>
      )}

      {/* Integrated Secure Payment Gateway Checkout Modal - Lazy loaded only when opened */}
      {checkoutModalOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            isOpen={checkoutModalOpen}
            onClose={() => setCheckoutModalOpen(false)}
            items={cart}
            discount={checkoutDiscount}
            discountCode={appliedPromoCode}
            onOrderComplete={handleOrderCompleted}
          />
        </Suspense>
      )}

      {/* Search Modal - Lazy loaded only when opened */}
      {searchModalOpen && (
        <Suspense fallback={null}>
          <SearchModal
            isOpen={searchModalOpen}
            onClose={() => setSearchModalOpen(false)}
            products={PRODUCTS}
            onSelectProduct={(p) => {
              setSearchModalOpen(false);
              navigateTo({ page: 'product', productId: p.id });
            }}
          />
        </Suspense>
      )}

    </div>
  );
}
