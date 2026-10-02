import React from 'react';
import { getProductLogoUrl } from '../data/productLogos';

interface ProductLogoProps {
  productId: string;
  productName: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const ProductLogo: React.FC<ProductLogoProps> = ({
  productId,
  productName,
  size = 'medium',
  className = '',
}) => {
  const logoUrl = getProductLogoUrl(productId, productName);

  if (size === 'small') {
    return (
      <div
        role="img"
        aria-label={`${productName} Service Logo`}
        className={`flex items-center justify-center rounded-xl shrink-0 p-1 bg-white border border-slate-200/80 shadow-2xs ${className}`}
      >
        <img
          src={logoUrl}
          alt={`${productName} Logo`}
          className="w-full h-full object-contain rounded-lg"
          loading="lazy"
        />
      </div>
    );
  }

  if (size === 'medium') {
    return (
      <div
        role="img"
        aria-label={`${productName} Verified Official Logo`}
        className={`relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 bg-linear-to-b from-slate-50/90 via-white to-slate-100/50 transition-all duration-300 select-none overflow-hidden ${className}`}
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        {/* Centered official brand logo - larger display */}
        <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 max-w-[88%] max-h-[88%] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <img
            src={logoUrl}
            alt={`${productName} Official Logo`}
            className="w-full h-full object-contain drop-shadow-sm"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  // Large size (Hero product page showcase)
  return (
    <div
      role="img"
      aria-label={`${productName} Verified Official Logo & Credentials`}
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-linear-to-b from-slate-50/80 via-white to-slate-100/60 transition-all duration-300 select-none overflow-hidden ${className}`}
    >
      {/* Subtle decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-45 pointer-events-none" />

      {/* Big Official Brand Logo */}
      <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 max-w-[92%] max-h-[92%] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img
          src={logoUrl}
          alt={`${productName} Official Large Brand Logo`}
          className="w-full h-full object-contain drop-shadow-md"
          loading="eager"
        />
      </div>

      {/* Brand Verified Tag */}
      <div className="relative z-10 mt-4 text-center">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-wide border border-slate-200/90 bg-white/95 text-slate-700 shadow-2xs uppercase">
          Verified Official Asset
        </span>
      </div>
    </div>
  );
};

