import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export function RouteLoadingBar() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Show loading bar on route change
    setIsLoading(true);
    setProgress(30);
    
    const timer1 = setTimeout(() => setProgress(60), 200);
    const timer2 = setTimeout(() => setProgress(90), 400);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 300);
    }, 600);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location.pathname]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 z-[9999] origin-left"
          style={{ width: '100%' }}
        />
      )}
    </AnimatePresence>
  );
}