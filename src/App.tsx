import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductVariant, CartItem, Order } from './types';
import { AppRoute, hashToRoute, routeToHash } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CategoryPage } from './pages/CategoryPage';
import { ShopPage } from './pages/ShopPage';
import { ContactPage } from './pages/ContactPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Check } from 'lucide-react';

export default function App() {
  // Navigation Route State
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => {
    return hashToRoute(window.location.hash);
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

  // Sync hash changes (Browser Back/Forward buttons and direct URLs)
  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = hashToRoute(window.location.hash);
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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

  // Navigate handler
  const navigateTo = (route: AppRoute) => {
    const newHash = routeToHash(route);
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
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
          <ShopPage
            products={PRODUCTS}
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        );

      case 'category':
        return (
          <CategoryPage
            category={currentRoute.category}
            products={PRODUCTS}
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        );

      case 'product': {
        const foundProduct = PRODUCTS.find((p) => p.id === currentRoute.productId);
        if (!foundProduct) {
          return (
            <ShopPage
              products={PRODUCTS}
              onNavigate={navigateTo}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          );
        }
        return (
          <ProductPage
            product={foundProduct}
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        );
      }

      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;

      case 'track-order':
        return <OrderTrackingPage orders={orders} onNavigate={navigateTo} />;

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

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Integrated Secure Payment Gateway Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        items={cart}
        discount={checkoutDiscount}
        discountCode={appliedPromoCode}
        onOrderComplete={handleOrderCompleted}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => {
          setSearchModalOpen(false);
          navigateTo({ page: 'product', productId: p.id });
        }}
      />

    </div>
  );
}
