import { useEffect, useRef } from 'react';

// Global Lenis instance
let lenisInstance: any = null;
let LenisClass: any = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  const rafRef = useRef<number | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only initialize once - prevent reinitialization on route changes
    if (isInitialized.current || lenisInstance) {
      return;
    }

    // Lazy load Lenis to prevent blocking initial render
    const initLenis = async () => {
      if (!LenisClass) {
        const module = await import('lenis');
        LenisClass = module.default;
      }

      // Initialize Lenis with optimized settings for smooth navigation
      const lenis = new LenisClass({
        duration: 1.2, // Standard smooth scroll duration
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true, // Automatically handle resize events
        syncTouch: true, // Better touch device handling
        prevent: (node: any) => node.classList.contains('no-lenis'), // Allow disabling on specific elements
      });

      lenisInstance = lenis;
      isInitialized.current = true;

      // Request Animation Frame loop
      function raf(time: number) {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }

      rafRef.current = requestAnimationFrame(raf);
    };

    initLenis();

    // Cleanup only when app truly unmounts (not on route changes)
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      // Only destroy if this is the last instance
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
        isInitialized.current = false;
      }
    };
  }, []); // Empty dependency array - only run once
}