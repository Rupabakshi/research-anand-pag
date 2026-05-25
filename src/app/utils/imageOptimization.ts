/**
 * Image Optimization Utilities
 * 
 * Helpers for optimizing external image URLs (Unsplash, etc.)
 * to improve loading performance and user experience.
 */

/**
 * Optimize Unsplash image URL with appropriate sizing parameters
 * 
 * @param url - Original Unsplash image URL
 * @param options - Optimization options
 * @returns Optimized URL with proper sizing parameters
 * 
 * Usage:
 * const optimizedUrl = optimizeUnsplashUrl(originalUrl, { width: 800, quality: 85 });
 */
export function optimizeUnsplashUrl(
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'jpg' | 'webp' | 'auto';
  } = {}
): string {
  // Default options
  const {
    width = 1200,
    height,
    quality = 80,
    format = 'auto'
  } = options;

  // Only process Unsplash URLs
  if (!url.includes('unsplash.com')) {
    return url;
  }

  // Parse the URL
  const urlObj = new URL(url);
  
  // Update or add parameters
  urlObj.searchParams.set('w', width.toString());
  if (height) {
    urlObj.searchParams.set('h', height.toString());
  }
  urlObj.searchParams.set('q', quality.toString());
  urlObj.searchParams.set('fm', format);
  urlObj.searchParams.set('fit', 'crop');
  
  // Use auto for modern format selection
  if (format === 'auto') {
    urlObj.searchParams.set('auto', 'format');
  }

  return urlObj.toString();
}

/**
 * Generate a low-quality image placeholder (LQIP) URL
 * 
 * @param url - Original image URL
 * @returns Low-quality placeholder URL
 * 
 * Usage:
 * const blurDataUrl = generateBlurPlaceholder(imageUrl);
 */
export function generateBlurPlaceholder(url: string): string {
  if (!url.includes('unsplash.com')) {
    return url;
  }

  return optimizeUnsplashUrl(url, {
    width: 40,
    quality: 10,
    format: 'jpg'
  });
}

/**
 * Get responsive image sizes for different breakpoints
 * 
 * @param url - Original image URL
 * @returns Object with URLs for different sizes
 * 
 * Usage:
 * const sizes = getResponsiveImageSizes(originalUrl);
 * <picture>
 *   <source media="(min-width: 1024px)" srcSet={sizes.large} />
 *   <source media="(min-width: 768px)" srcSet={sizes.medium} />
 *   <img src={sizes.small} />
 * </picture>
 */
export function getResponsiveImageSizes(url: string) {
  return {
    small: optimizeUnsplashUrl(url, { width: 640, quality: 75 }),
    medium: optimizeUnsplashUrl(url, { width: 1024, quality: 80 }),
    large: optimizeUnsplashUrl(url, { width: 1920, quality: 85 }),
    thumbnail: optimizeUnsplashUrl(url, { width: 400, quality: 75 }),
    blur: generateBlurPlaceholder(url)
  };
}

/**
 * Preload critical images for better performance
 * 
 * @param urls - Array of image URLs to preload
 * @param priority - Whether these are priority/above-fold images
 * 
 * Usage:
 * preloadImages([heroImage, featuredImage], true);
 */
export function preloadImages(urls: string[], priority: boolean = false) {
  if (typeof window === 'undefined') return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = priority ? 'preload' : 'prefetch';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Image size presets for common use cases
 */
export const IMAGE_SIZE_PRESETS = {
  hero: { width: 1920, quality: 90 },
  featured: { width: 1200, quality: 85 },
  card: { width: 800, quality: 80 },
  thumbnail: { width: 400, quality: 75 },
  avatar: { width: 200, quality: 80 },
  logo: { width: 300, quality: 90 }
} as const;
