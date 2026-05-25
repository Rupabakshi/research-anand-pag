import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Award, Building2, TrendingUp } from 'lucide-react';

export function MinimalHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Delay video load to prioritize page render
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
        videoRef.current.load(); // Start loading after page renders
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Video Background - Streaming from Pexels */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          ref={videoRef}
        >
          <source src="https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay - darker on left for text, lighter on right to show video */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(2, 6, 23, 0.95) 0%, rgba(2, 6, 23, 0.85) 40%, rgba(2, 6, 23, 0.4) 100%)'
          }}
        />
        {/* Subtle vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 70% 50%, transparent 0%, rgba(2, 6, 23, 0.3) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 relative z-10 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-sm font-semibold text-teal-400 tracking-wider uppercase">
                Connecting People to Processes
              </span>
            </motion.div>

            {/* Hero Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] mb-6 leading-[0.95] tracking-[-0.03em] font-bold text-white"
            >
              Automate SAP Compliance.<br />Reduce Risk. Save Time.
            </motion.h1>

            {/* Subheader Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl"
            >
              Enterprise SAP solutions for Fortune 500 companies. Streamline regulatory compliance with Process Factory®.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              {/* Primary CTA - Solid Blue */}
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base font-semibold rounded-lg shadow-sm transition-all duration-300"
              >
                Schedule a Demo
              </Button>
              
              {/* Secondary CTA - Outline/Ghost */}
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 bg-transparent px-8 h-12 text-base font-semibold rounded-lg transition-all duration-300"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Floating Trust Indicators */}
          <div className="hidden lg:flex flex-col gap-6 items-end">
            {/* SAP Gold Partner Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">SAP Gold Partner</div>
                  <div className="text-slate-300 text-sm">Certified since 2006 • 18+ years</div>
                </div>
              </div>
            </motion.div>

            {/* Fortune 500 Clients */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-teal-500/30">
                  <Building2 className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">Fortune 500 Trusted</div>
                  <div className="text-slate-300 text-sm">Serving enterprise clients globally</div>
                </div>
              </div>
            </motion.div>

            {/* Success Metric */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">$500M+ Savings</div>
                  <div className="text-slate-300 text-sm">Generated for clients since 2006</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}