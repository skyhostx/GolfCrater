export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  features?: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Reviews' | 'Reviews Service' | 'Bank Account' | 'Crypto Account' | 'SMM Account' | 'Email Service';
  shortDescription: string;
  priceRange: string;
  startingPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  tags: string[];
  metaDescription: string;
  variants: ProductVariant[];
  fullDescription: string; // 1500-word comprehensive guide & specifications
  specifications: {
    deliveryTime: string;
    guaranteePeriod: string;
    verificationLevel: string;
    supportAvailable: string;
    documentsIncluded: string;
    supportedRegions: string;
  };
}

export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  category: string;
  variant: ProductVariant;
  quantity: number;
  customRequirements?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  buyerEmail: string;
  customerEmail?: string;
  contactHandle?: string;
  paymentMethod: 'crypto' | 'skrill' | 'bank_transfer' | 'card' | 'paypal' | 'wise';
  cryptoCurrency?: string;
  paymentReference?: string;
  bankAccountType?: string;
  status: 'Processing' | 'Verified' | 'Delivered' | 'Completed';
  deliveryEta: string;
  accessCredentialsOrNotes?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  productName: string;
  comment: string;
  verified: boolean;
}
