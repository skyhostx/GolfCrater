import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, ShieldCheck } from 'lucide-react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackCategory?: string;
  priority?: boolean;
}

// Fallback high-reliability image if primary fails
const DEFAULT_FALLBACK_URL =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';

export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  className = '',
  fallbackCategory,
  priority = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasFallbackFailed, setHasFallbackFailed] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Sync state if src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setHasFallbackFailed(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && currentSrc !== DEFAULT_FALLBACK_URL) {
      setHasError(true);
      setCurrentSrc(DEFAULT_FALLBACK_URL);
    } else {
      setHasFallbackFailed(true);
    }
  };

  // If even the fallback image fails or network is blocked, render a styled SVG graphic card
  if (hasFallbackFailed) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white relative select-none overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ImageIcon className="w-6 h-6" />
          </div>
          {fallbackCategory && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-800/60">
              {fallbackCategory}
            </span>
          )}
          <p className="text-xs font-semibold text-slate-300 max-w-[85%] line-clamp-2">
            {alt}
          </p>
          <div className="flex items-center space-x-1 text-[10px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>GolfCrater Verified Architecture</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${className}`}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200/70 animate-pulse" />
      )}

      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
