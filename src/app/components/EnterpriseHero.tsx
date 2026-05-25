import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { PrefetchLink } from './PrefetchLink';
import { HeroH1 } from './ui';

export function EnterpriseHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          ref={videoRef}
        >
          <source src="https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/95 via-[#0F172A]/90 to-[#0F172A]" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-6 lg:px-16 relative z-10 pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-[1200px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
              <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-400">
                SAP Gold Partner Since 2006
              </span>
            </div>
          </motion.div>

          {/* Main Headline - Large & Scannable */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroH1 className="mb-8 max-w-[900px]">
              Automate SAP compliance. Reduce risk. Save time.
            </HeroH1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-[20px] lg:text-[24px] leading-[1.5] text-slate-300 mb-12 max-w-[720px]"
          >
            Enterprise SAP solutions for Fortune 500 companies. Streamline regulatory compliance with Process Factory®.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <PrefetchLink to="/company/contact">
              <button className="px-6 py-3.5 bg-white text-slate-900 text-[15px] font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                Schedule a Demo
              </button>
            </PrefetchLink>
            <PrefetchLink to="/resources/case-studies">
              <button className="px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white text-[15px] font-semibold rounded-lg border border-white/20 hover:bg-white/[0.15] transition-colors">
                View Case Studies
              </button>
            </PrefetchLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust Indicators - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex flex-wrap items-center gap-8 lg:gap-16">
            {/* Stat 1 */}
            <div>
              <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-2">
                Experience
              </div>
              <div className="text-[32px] font-semibold text-white leading-none">18+ Years</div>
            </div>
            
            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-slate-700" />

            {/* Stat 2 */}
            <div>
              <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-2">
                Client Savings
              </div>
              <div className="text-[32px] font-semibold text-white leading-none">$500M+</div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-12 bg-slate-700" />

            {/* Stat 3 */}
            <div>
              <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-2">
                Market Focus
              </div>
              <div className="text-[32px] font-semibold text-white leading-none">Fortune 500</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-[5]" />
    </section>
  );
}