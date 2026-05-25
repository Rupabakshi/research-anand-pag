import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
  priority?: boolean;
  blurDataURL?: string;
  skeletonClassName?: string;
}

/**
 * OptimizedImage Component
 * 
 * Progressive image loading with:
 * - Skeleton loader during initial load
 * - Optional blur placeholder (LQIP - Low Quality Image Placeholder)
 * - Smooth fade-in transition
 * - Aspect ratio preservation to prevent layout shift
 * - Priority loading for above-the-fold images
 * 
 * Usage:
 * <OptimizedImage 
 *   src="https://example.com/image.jpg" 
 *   alt="Description"
 *   aspectRatio="video"
 *   priority={true}  // For hero images
 *   className="w-full rounded-lg"
 * />
 */
export function OptimizedImage({
  src,
  alt,
  aspectRatio = 'auto',
  priority = false,
  blurDataURL,
  className = '',
  skeletonClassName = '',
  loading,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload priority images immediately
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [src, priority]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setImageError(true);
    setImageLoaded(true);
    onError?.(e);
  };

  // Get aspect ratio class
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    auto: ''
  };

  if (imageError) {
    return (
      <div className={`bg-slate-100 flex items-center justify-center ${className} ${aspectClasses[aspectRatio]}`}>
        <div className="text-center p-4">
          <svg 
            className="w-12 h-12 text-slate-400 mx-auto mb-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <p className="text-sm text-slate-500">Failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Skeleton loader - shows while loading */}
      {!imageLoaded && (
        <div 
          className={`
            relative overflow-hidden bg-slate-200
            ${aspectClasses[aspectRatio]}
            ${className}
            ${skeletonClassName}
          `}
          aria-hidden="true"
        >
          {/* Optional blur placeholder */}
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60"
            />
          )}
          
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200" />
          
          {/* Icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-slate-400 relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>
      )}

      {/* Main image - replaces skeleton when loaded */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading || 'lazy'}
        className={`
          ${className}
          ${aspectClasses[aspectRatio]}
          transition-opacity duration-500
          ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute invisible'}
        `}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </>
  );
}