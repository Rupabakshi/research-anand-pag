import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';
import { BTPPortalInterface } from './BTPPortalInterface';
import { useTheme } from '../contexts/ThemeContext';

const stages = [
  {
    id: 0,
    title: 'SAP Integration Bridge',
    description: 'Real-time bi-directional sync with S/4HANA core systems.',
    view: 'integration' as const
  },
  {
    id: 1,
    title: 'Digital Order Lifecycle',
    description: 'Structured workflows from release to delivery confirmation.',
    view: 'orders' as const
  },
  {
    id: 2,
    title: 'Automated Invoice Processing',
    description: 'OCR-powered document extraction with 100% accuracy.',
    view: 'invoices' as const
  },
  {
    id: 3,
    title: 'Command Center Analytics',
    description: 'Real-time visibility into vendor performance metrics.',
    view: 'analytics' as const
  }
];

export function BTPPortalHero() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const stage = Math.min(Math.floor(v * stages.length), stages.length - 1);
      if (stage >= 0) setActiveStage(stage);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const currentStage = stages[activeStage];

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] transition-colors duration-500"
      style={{ backgroundColor: theme.background.hero }}
    >

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background Effects - Only show on dark themes */}
        {!theme.isLight && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{
                   backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
                   backgroundSize: '64px 64px'
                 }}
            />

            <motion.div
              className="absolute top-0 left-0 w-[600px] h-[600px] blur-[140px] rounded-full"
              style={{ backgroundColor: theme.accent.ambient1 }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[120px] rounded-full"
              style={{ backgroundColor: theme.accent.ambient2 }}
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12 xl:px-20 max-w-[1900px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

              {/* LEFT: Minimal Text Content */}
              <div className="space-y-10">

                {/* Stage Number */}
                <motion.div
                  key={`btp-badge-${currentStage.view}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center gap-3 px-4 py-2 backdrop-blur-2xl rounded-full ${
                    theme.isLight
                      ? 'bg-slate-100 border border-slate-200'
                      : 'bg-white/[0.04] border border-white/10'
                  }`}
                >
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: theme.themeName === 'navy' ? 'rgb(34, 211, 238)' : 'rgb(96, 165, 250)' }}
                  />
                  <span className={`text-[11px] font-mono uppercase tracking-[3px] font-bold ${
                    theme.isLight ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    Stage {activeStage + 1} of 4
                  </span>
                </motion.div>

                {/* Main Headline */}
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`btp-headline-${currentStage.view}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[52px] sm:text-[64px] lg:text-[76px] xl:text-[88px] font-bold leading-[0.9] tracking-[-0.04em]"
                    style={{ color: theme.isLight ? theme.text.onLight : 'white' }}
                  >
                    {currentStage.title}
                  </motion.h1>
                </AnimatePresence>

                {/* Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`btp-desc-${currentStage.view}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[20px] sm:text-[22px] lg:text-[24px] leading-[1.5] max-w-xl"
                    style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}
                  >
                    {currentStage.description}
                  </motion.p>
                </AnimatePresence>

              </div>

              {/* RIGHT: Dynamic Portal Interface */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Browser Chrome */}
                  <div className={`rounded-t-2xl border-x border-t shadow-2xl ${
                    theme.isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-white/10'
                  }`}>
                    <div className={`backdrop-blur-md px-6 py-3.5 flex items-center gap-4 border-b ${
                      theme.isLight ? 'bg-slate-200/80 border-slate-300' : 'bg-slate-800/80 border-white/5'
                    }`}>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 max-w-md">
                        <div className={`rounded-lg px-4 py-1.5 text-[11px] font-mono border ${
                          theme.isLight
                            ? 'bg-white border-slate-200 text-slate-600'
                            : 'bg-slate-950/60 border-white/5 text-slate-500'
                        }`}>
                          portal.cintas.sap-btp.cloud
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portal Interface - Changes Per Stage */}
                  <div className={`border-x border-b rounded-b-2xl overflow-hidden ${
                    theme.isLight
                      ? 'bg-slate-100 border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]'
                      : 'bg-slate-900 border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]'
                  }`}>
                    <div className="h-[580px] overflow-hidden">
                      <BTPPortalInterface currentView={currentStage.view} />
                    </div>
                  </div>

                  {/* Glow Effect - Only on dark themes */}
                  {!theme.isLight && (
                    <div
                      className="absolute -inset-6 blur-[80px] rounded-full -z-10 opacity-40"
                      style={{ backgroundColor: theme.accent.ambient3 }}
                    />
                  )}
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">
          <div className={`flex gap-3 p-2.5 backdrop-blur-3xl rounded-2xl shadow-2xl ${
            theme.isLight ? 'bg-white border border-slate-200' : 'bg-white/[0.03] border border-white/10'
          }`}>
            {stages.map((stage, i) => (
              <button
                key={`btp-progress-${stage.view}`}
                onClick={() => {
                  const targetScroll = (i / (stages.length - 1)) * (sectionRef.current!.offsetHeight - window.innerHeight);
                  window.scrollTo({ top: sectionRef.current!.offsetTop + targetScroll, behavior: 'smooth' });
                }}
                className="group relative"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStage === i
                      ? 'w-12'
                      : theme.isLight
                        ? 'w-3 bg-slate-300 group-hover:bg-slate-400'
                        : 'w-3 bg-white/20 group-hover:bg-white/40'
                  }`}
                  style={activeStage === i ? {
                    backgroundColor: theme.cta.primary,
                    boxShadow: theme.themeName === 'navy'
                      ? '0 0 12px rgba(6, 182, 212, 0.8)'
                      : '0 0 12px rgba(59, 130, 246, 0.8)'
                  } : {}}
                />
              </button>
            ))}
          </div>
          <div className={`flex items-center gap-2.5 font-bold uppercase tracking-[2.5px] text-[10px] ${
            theme.isLight ? 'text-slate-600' : 'text-slate-500'
          }`}>
            <MousePointer2
              className="w-3.5 h-3.5 opacity-60"
              style={{ color: theme.cta.primary }}
            />
            <span>Scroll to Explore</span>
          </div>
        </div>

      </div>

    </section>
  );
}
