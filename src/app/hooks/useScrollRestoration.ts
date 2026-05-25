import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { getLenis } from './useLenis';

/**
 * Custom scroll restoration that works with Lenis smooth scroll
 * - Scrolls to top on new page navigation (PUSH/REPLACE)
 * - Restores scroll position on back/forward (POP)
 * - No visual flashing or jarring transitions
 */
export function useScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const lenis = getLenis();

    // POP = back/forward button (browser navigation)
    // PUSH/REPLACE = new page navigation (link clicks)
    if (navigationType === 'POP') {
      // Browser will automatically restore scroll position
      // Just let it happen naturally
      return;
    }

    // For new navigation, scroll to top instantly (no delay, no animation)
    if (lenis) {
      // Stop any ongoing scroll animation first
      lenis.stop();
      // Immediately scroll to top
      lenis.scrollTo(0, { immediate: true, force: true });
      // Resume Lenis after reset
      lenis.start();
    } else {
      // Fallback if Lenis not loaded yet
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]);
}