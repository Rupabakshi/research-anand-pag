import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { getLenis } from '../hooks/useLenis';
import { HeroH1 } from './ui';
import { useTheme } from '../contexts/ThemeContext';

const tabs = [
  {
    id: 0,
    label: 'Analytics',
    description: 'Real-time performance metrics and workflow insights across all business processes',
  },
  {
    id: 1,
    label: 'Approvals',
    description: 'Streamline approval workflows with one-click actions and intelligent routing',
  },
  {
    id: 2,
    label: 'Notifications',
    description: 'Stay informed with priority alerts and real-time updates on critical workflows',
  },
  {
    id: 3,
    label: 'Mobile',
    description: 'Approve workflows anywhere, anytime with native mobile access',
  }
];

export function ProcessFactoryHero() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [scrollStage, setScrollStage] = useState(0); // 0 = landing, 1-4 = tabs cycling
  const sectionRef = useRef<HTMLElement>(null);
  const isScrolling = useRef(false);
  
  // Refs for measuring tab widths
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktopTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [mobileTabMetrics, setMobileTabMetrics] = useState<{ left: number; width: number }[]>([]);
  const [desktopTabMetrics, setDesktopTabMetrics] = useState<{ left: number; width: number }[]>([]);

  // Measure tab widths on mount and resize
  useEffect(() => {
    const measureTabs = () => {
      // Measure mobile tabs
      const mobileMetrics = mobileTabRefs.current.map((ref, index) => {
        if (!ref) return { left: 0, width: 0 };
        const rect = ref.getBoundingClientRect();
        const parent = ref.parentElement;
        const parentRect = parent?.getBoundingClientRect();
        return {
          left: parentRect ? rect.left - parentRect.left : 0,
          width: rect.width
        };
      });
      setMobileTabMetrics(mobileMetrics);

      // Measure desktop tabs
      const desktopMetrics = desktopTabRefs.current.map((ref, index) => {
        if (!ref) return { left: 0, width: 0 };
        const rect = ref.getBoundingClientRect();
        const parent = ref.parentElement;
        const parentRect = parent?.getBoundingClientRect();
        return {
          left: parentRect ? rect.left - parentRect.left : 0,
          width: rect.width
        };
      });
      setDesktopTabMetrics(desktopMetrics);
    };

    // Initial measurement
    measureTabs();

    // Re-measure on window resize
    window.addEventListener('resize', measureTabs);
    return () => window.removeEventListener('resize', measureTabs);
  }, []);

  // Sync activeTab with scrollStage
  useEffect(() => {
    if (scrollStage >= 1 && scrollStage <= 4) {
      setActiveTab(scrollStage - 1);
    }
  }, [scrollStage]);

  // Control Lenis based on scroll stage
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    if (scrollStage >= 1 && scrollStage <= 4) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [scrollStage]);

  // Anchor section to top when entering stage 1
  useEffect(() => {
    if (scrollStage === 1 && sectionRef.current) {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      // Calculate how much to scroll to put section top at viewport top
      const scrollTarget = window.scrollY + rect.top;
      
      // Stop Lenis first
      const lenis = getLenis();
      if (lenis) lenis.stop();
      
      // Smooth scroll to position
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
  }, [scrollStage]);

  // Main scroll handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Skip scroll hijacking on mobile
      if (window.innerWidth < 640) return;
      
      const section = sectionRef.current;
      if (!section) return;

      // Check if section is in viewport
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!inView) return;

      // CRITICAL FIX: Only hijack scrolls when hero section is at/near the top of viewport
      // This prevents scroll hijacking when user has scrolled past the hero
      const isHeroAtTop = rect.top >= -100; // Allow small tolerance for smooth transitions
      
      // If we're in tab cycling mode (stages 1-4) but hero is no longer at top, exit the mode
      if (scrollStage >= 1 && scrollStage <= 4 && !isHeroAtTop) {
        const lenis = getLenis();
        if (lenis) lenis.start();
        setScrollStage(5); // Exit scroll hijacking
        return;
      }

      // Reset to stage 0 if we scrolled past (stage 5) but are now scrolling back up into the section
      if (scrollStage === 5 && e.deltaY < 0) {
        setScrollStage(0); // Return to beginning with header visible
        return;
      }

      // Debounce rapid scrolling
      if (isScrolling.current) {
        if (scrollStage >= 1 && scrollStage <= 4) {
          e.preventDefault();
        }
        return;
      }

      const scrollDown = e.deltaY > 0;

      // Stage 0 → Stage 1: First scroll down when section is visible AND at top
      if (scrollStage === 0 && scrollDown && rect.top <= 100 && isHeroAtTop) {
        e.preventDefault();
        isScrolling.current = true;
        setScrollStage(1);
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
        return;
      }

      // Stages 1-4: Hijack scrolls ONLY when hero is at top
      if (scrollStage >= 1 && scrollStage <= 4 && isHeroAtTop) {
        e.preventDefault();
        
        if (scrollDown) {
          // Scroll down through tabs
          if (scrollStage < 4) {
            isScrolling.current = true;
            setScrollStage(prev => prev + 1);
            setTimeout(() => {
              isScrolling.current = false;
            }, 800);
          } else {
            // Stage 4 + scroll down = release scroll jacking
            const lenis = getLenis();
            if (lenis) lenis.start();
            setScrollStage(5); // Exit state
          }
        } else {
          // Scroll up through tabs
          isScrolling.current = true;
          setScrollStage(prev => Math.max(prev - 1, 0));
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
        }
        return;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollStage]);

  // Render the correct screen based on activeTab
  const renderScreen = () => {
    switch (activeTab) {
      case 0:
        return <AnalyticsScreen />;
      case 1:
        return <ApprovalsScreen />;
      case 2:
        return <NotificationsScreen />;
      case 3:
        return <MobileScreen />;
      default:
        return <AnalyticsScreen />;
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden flex flex-col" style={{ height: '100vh', backgroundColor: theme.background.dark }}>
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Ambient lights */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [-50, 50, -50], y: [-50, 75, -50] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '10%', left: '5%' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{ x: [50, -50, 50], y: [75, -50, 75] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '40%', right: '5%' }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col items-center px-4 sm:px-6 lg:px-12" style={{ paddingTop: scrollStage === 0 ? '7rem' : '5.5rem', paddingBottom: '1rem' }}>
        
        {/* Eyebrow Pill - Only visible when scrollStage === 0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: scrollStage === 0 ? 1 : 0,
            y: scrollStage === 0 ? 0 : -30,
            height: scrollStage === 0 ? 'auto' : 0,
            marginBottom: scrollStage === 0 ? '1rem' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
              PROCESS FACTORY®
            </span>
          </div>
        </motion.div>

        {/* Headline - Scrolls away when scrollStage > 0 (desktop only, stays visible on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: scrollStage === 0 ? 1 : 0,
            y: scrollStage === 0 ? 0 : -50,
            height: scrollStage === 0 ? 'auto' : 0,
            marginBottom: scrollStage === 0 ? '2rem' : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center max-w-4xl overflow-hidden mb-8 sm:mb-0"
          style={{ hyphens: 'none', wordBreak: 'normal' }}
        >
          <HeroH1>
            <span className="inline-block">Business-Driven SAP Workflows</span> <span className="whitespace-nowrap">in 60 Days</span>
          </HeroH1>
        </motion.div>

        {/* Central mockup - Responsive height to fit screen */}
        <div className="relative w-full max-w-6xl flex items-center justify-center h-[50vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh] 2xl:h-[70vh] mt-4 sm:mt-6 lg:mt-8" style={{ maxHeight: '1000px' }}>
          <div className="relative h-full w-full">
            
            {/* Animated screen transitions */}
            <div className="h-full w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="h-full"
                >
                  {renderScreen()}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Tabs - Mobile only (directly under portal) */}
        <div className="sm:hidden relative z-10 w-full mt-6">
          <div className="max-w-6xl mx-auto mt-8">
            {/* Tab buttons */}
            <div className="grid grid-cols-4 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="text-left group"
                  ref={(el) => mobileTabRefs.current[tab.id] = el}
                >
                  <div className={`text-[12px] font-[700] mb-1 transition-colors ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Slider indicator */}
            <div className="relative mt-2 h-0.5 bg-slate-800">
              <motion.div
                className="absolute h-full bg-white rounded-full"
                initial={false}
                animate={
                  mobileTabMetrics[activeTab]
                    ? {
                        left: mobileTabMetrics[activeTab].left,
                        width: mobileTabMetrics[activeTab].width,
                      }
                    : {
                        left: `${(activeTab / tabs.length) * 100}%`,
                        width: `${100 / tabs.length}%`,
                      }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Tabs - Desktop only (slide IN from bottom when scrollStage > 0) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: scrollStage > 0 ? 0 : 100,
          opacity: scrollStage > 0 ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden sm:block relative z-10 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Tab buttons */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="text-left group"
                ref={(el) => desktopTabRefs.current[tab.id] = el}
              >
                <div className={`text-[12px] sm:text-[14px] lg:text-[16px] font-[700] mb-1 sm:mb-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-400 group-hover:text-slate-300'
                }`}>
                  {tab.label}
                </div>
                <div className={`text-[10px] sm:text-[12px] lg:text-[13px] leading-[1.4] sm:leading-[1.5] transition-colors hidden sm:block ${
                  activeTab === tab.id
                    ? 'text-slate-400'
                    : 'text-slate-500 group-hover:text-slate-400'
                }`}>
                  {tab.description}
                </div>
              </button>
            ))}
          </div>
          
          {/* Slider indicator */}
          <div className="relative mt-3 sm:mt-4 lg:mt-6 h-0.5 bg-slate-800">
            <motion.div
              className="absolute h-full bg-white rounded-full"
              initial={false}
              animate={
                desktopTabMetrics[activeTab]
                  ? {
                      left: desktopTabMetrics[activeTab].left,
                      width: desktopTabMetrics[activeTab].width,
                    }
                  : {
                      left: `${(activeTab / tabs.length) * 100}%`,
                      width: `${100 / tabs.length}%`,
                    }
              }
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Analytics Dashboard Screen
function AnalyticsScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-slate-800 px-2 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-4 flex items-center gap-1 sm:gap-2 border-b border-slate-700 shrink-0">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-2 sm:mx-4 xl:mx-6">
          <div className="bg-slate-900/60 rounded px-2 sm:px-3 xl:px-4 py-1 sm:py-1.5 xl:py-2 text-[10px] sm:text-[12px] xl:text-[13px] text-slate-400 font-mono truncate">
            yourcompany.com/process-factory
          </div>
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="flex-1 p-3 sm:p-6 md:p-8 xl:p-12 2xl:p-16 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10 xl:mb-12">
          <div>
            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] xl:text-[26px] 2xl:text-[28px] font-[700] text-white mb-1">Executive Dashboard</h3>
            <p className="text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] text-slate-400">Q1 2026 Performance Overview</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-2 sm:px-3 xl:px-4 py-1 sm:py-1.5 xl:py-2 bg-green-600/20 border border-green-600/50 rounded text-[10px] sm:text-[12px] xl:text-[13px] text-green-400 font-semibold whitespace-nowrap flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              Live Data
            </div>
          </div>
        </div>
        
        {/* Key Performance Indicators Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 xl:gap-6 mb-6 sm:mb-8 xl:mb-10">
          {/* KPI Card 1 - Total Workflows */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-3 sm:p-4 md:p-5 xl:p-6 2xl:p-7 hover:bg-slate-800/70 hover:border-slate-600 transition-all">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] text-slate-400 uppercase tracking-wider mb-1">Total Workflows</div>
                <div className="text-[20px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-[700] text-white tabular-nums leading-none">1,247</div>
              </div>
              <div className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-green-400 font-semibold">
                +12%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] text-slate-500">vs Q4 2025: 1,113</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-green-400 font-medium">↑ Target: 92%</div>
            </div>
            <div className="mt-2 sm:mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>

          {/* KPI Card 2 - Process Efficiency */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-3 sm:p-4 md:p-5 xl:p-6 2xl:p-7 hover:bg-slate-800/70 hover:border-slate-600 transition-all">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] text-slate-400 uppercase tracking-wider mb-1">Process Efficiency</div>
                <div className="text-[20px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-[700] text-white tabular-nums leading-none">94.3%</div>
              </div>
              <div className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-green-400 font-semibold">
                +5.1%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] text-slate-500">vs Q4 2025: 89.2%</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-green-400 font-medium">↑ Target: 105%</div>
            </div>
            <div className="mt-2 sm:mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '105%' }}></div>
            </div>
          </div>

          {/* KPI Card 3 - Avg Processing Time */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-3 sm:p-4 md:p-5 xl:p-6 2xl:p-7 hover:bg-slate-800/70 hover:border-slate-600 transition-all">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div>
                <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] 2xl:text-[13px] text-slate-400 uppercase tracking-wider mb-1">Avg Processing Time</div>
                <div className="text-[20px] sm:text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-[700] text-white tabular-nums leading-none">2.3h</div>
              </div>
              <div className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-green-400 font-semibold">
                -18%
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] text-slate-500">vs Q4 2025: 2.8h</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-green-400 font-medium">↓ Target: 118%</div>
            </div>
            <div className="mt-2 sm:mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '118%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Performance Trend Chart */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-4 sm:p-5 md:p-6 xl:p-8 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h4 className="text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-[700] text-white mb-0.5">Workflow Completion Rate</h4>
              <p className="text-[10px] sm:text-[11px] md:text-[12px] text-slate-400">Last 8 Weeks Performance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-blue-600"></div>
                <span className="text-[10px] sm:text-[11px] text-slate-400">Completion Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-red-500 opacity-50"></div>
                <span className="text-[10px] sm:text-[11px] text-slate-400">Target (85%)</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[9px] sm:text-[10px] text-slate-500 pr-2">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8 sm:ml-10">
              {/* Grid lines */}
              <div className="absolute left-8 sm:left-10 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-t border-slate-700/50"></div>
                ))}
              </div>
              
              {/* Target line at 85% */}
              <div className="absolute left-8 sm:left-10 right-0 border-t-2 border-dashed border-red-500/30 pointer-events-none" style={{ top: '15%' }}></div>
              
              {/* Line Chart */}
              <div className="relative h-36 sm:h-44 md:h-52 xl:h-60 2xl:h-64">
                <svg className="w-full h-full" viewBox="0 0 800 256" preserveAspectRatio="none">
                  {/* Area fill under the line */}
                  <path
                    d="M 50 56.32 L 164.29 46.08 L 278.57 38.4 L 392.86 30.72 L 507.14 23.04 L 621.43 28.16 L 735.71 17.92 L 850 12.8 L 850 256 L 50 256 Z"
                    className="fill-blue-600/20"
                  />
                  
                  {/* Line */}
                  <path
                    d="M 50 56.32 L 164.29 46.08 L 278.57 38.4 L 392.86 30.72 L 507.14 23.04 L 621.43 28.16 L 735.71 17.92 L 850 12.8"
                    className="stroke-blue-600 fill-none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Data points with hover effect */}
                <div className="absolute inset-0 flex items-end">
                  {[
                    { value: 78, label: 'W1' },
                    { value: 82, label: 'W2' },
                    { value: 85, label: 'W3' },
                    { value: 88, label: 'W4' },
                    { value: 91, label: 'W5' },
                    { value: 89, label: 'W6' },
                    { value: 93, label: 'W7' },
                    { value: 95, label: 'W8' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-end group relative" style={{ height: '100%' }}>
                      {/* Tooltip on hover */}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" style={{ bottom: `${item.value}%` }}>
                        <div className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-[10px] text-white whitespace-nowrap mb-3">
                          {item.value}%
                        </div>
                      </div>
                      
                      {/* Data point marker */}
                      <div 
                        className="absolute w-2 h-2 bg-blue-600 rounded-full border-2 border-slate-900 group-hover:w-3 group-hover:h-3 group-hover:border-slate-800 transition-all cursor-pointer z-[5]"
                        style={{ bottom: `${item.value}%` }}
                      >
                        {/* Pulse effect on last point */}
                        {idx === 7 && (
                          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                        )}
                      </div>
                      
                      {/* X-axis label */}
                      <div className="text-[9px] sm:text-[10px] md:text-[11px] text-slate-500 text-center mt-2 font-medium absolute -bottom-6">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 xl:gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-3 sm:p-4 md:p-5 xl:p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] font-[600] text-slate-300">Cost Savings (YTD)</h4>
              <div className="text-[9px] sm:text-[10px] text-green-400 font-semibold">+$2.4M</div>
            </div>
            <div className="text-[16px] sm:text-[20px] md:text-[24px] xl:text-[28px] font-[700] text-white tabular-nums mb-2">$8.7M</div>
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-500">
              <span>Target: $8.0M</span>
              <span className="text-green-400">• 108%</span>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl p-3 sm:p-4 md:p-5 xl:p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] font-[600] text-slate-300">Active Deployments</h4>
              <div className="text-[9px] sm:text-[10px] text-blue-400 font-semibold">12 Live</div>
            </div>
            <div className="text-[16px] sm:text-[20px] md:text-[24px] xl:text-[28px] font-[700] text-white tabular-nums mb-2">47</div>
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-500">
              <span>Capacity: 50</span>
              <span className="text-yellow-400">• 94%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Approvals Workflow Screen
function ApprovalsScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-slate-800 px-2 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-4 flex items-center gap-1 sm:gap-2 border-b border-slate-700 shrink-0">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-2 sm:mx-4 xl:mx-6">
          <div className="bg-slate-900/60 rounded px-2 sm:px-3 xl:px-4 py-1 sm:py-1.5 xl:py-2 text-[10px] sm:text-[12px] xl:text-[13px] text-slate-400 font-mono truncate">
            yourcompany.com/process-factory
          </div>
        </div>
      </div>
      
      {/* Workflow content */}
      <div className="flex-1 p-3 sm:p-6 md:p-8 xl:p-12 2xl:p-16 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Header with Summary Stats */}
        <div className="mb-6 sm:mb-8 xl:mb-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-[16px] sm:text-[20px] md:text-[22px] xl:text-[26px] 2xl:text-[28px] font-[700] text-white mb-1">Approval Queue</h3>
              <p className="text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] text-slate-400">Requires your immediate attention</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-600/20 border border-red-600/50 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-red-400 font-semibold whitespace-nowrap">
                3 Urgent
              </div>
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600/20 border border-blue-600/50 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-blue-400 font-semibold whitespace-nowrap">
                24 Total
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 xl:gap-4">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 sm:p-3 xl:p-4">
              <div className="text-[16px] sm:text-[20px] xl:text-[24px] font-[700] text-white tabular-nums">$2.8M</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-slate-400 mt-0.5">Total Value</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 sm:p-3 xl:p-4">
              <div className="text-[16px] sm:text-[20px] xl:text-[24px] font-[700] text-white tabular-nums">18</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-slate-400 mt-0.5">Financial</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 sm:p-3 xl:p-4">
              <div className="text-[16px] sm:text-[20px] xl:text-[24px] font-[700] text-white tabular-nums">4</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-slate-400 mt-0.5">HR/Legal</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 sm:p-3 xl:p-4">
              <div className="text-[16px] sm:text-[20px] xl:text-[24px] font-[700] text-white tabular-nums">2.1h</div>
              <div className="text-[9px] sm:text-[10px] xl:text-[11px] text-slate-400 mt-0.5">Avg Response</div>
            </div>
          </div>
        </div>
        
        {/* Approval Cards */}
        <div className="space-y-3 sm:space-y-4 xl:space-y-5">
          {/* Urgent - Capital Expenditure */}
          <div className="bg-slate-800/50 border border-red-600/30 rounded-lg xl:rounded-xl overflow-hidden hover:border-red-600/50 transition-all">
            <div className="flex items-center gap-2 px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 bg-red-600/10 border-b border-red-600/20">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold text-red-400 uppercase tracking-wider">Urgent • Expires in 4 hours</span>
            </div>
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[13px] sm:text-[15px] xl:text-[17px] font-[700] text-white">Capital Expenditure Request</div>
                    <div className="px-1.5 py-0.5 bg-blue-600/20 border border-blue-600/40 rounded text-[9px] sm:text-[10px] text-blue-400 font-semibold">
                      CAPEX
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 mb-2">
                    <span>ID: CE-2026-0184</span>
                    <span>•</span>
                    <span>Engineering Department</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-700 flex items-center justify-center text-[9px] sm:text-[10px] font-semibold text-white">SC</div>
                      <div>
                        <div className="text-[10px] sm:text-[11px] xl:text-[12px] text-white font-semibold">Sarah Chen</div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500">Senior Engineer</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 leading-relaxed mb-3">
                    High-performance computing cluster for AI/ML workload processing. Includes 24 GPU nodes, storage array, and networking infrastructure. ROI: 18 months.
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>3 Documents</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Submitted 3 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[18px] sm:text-[22px] xl:text-[26px] font-[700] text-white tabular-nums">$485,000</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">Budget: $500K</div>
                </div>
              </div>
              
              {/* Approval Chain */}
              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider mb-2">Approval Chain (2 of 3)</div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-600 flex items-center justify-center">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400">Dept Head</span>
                  </div>
                  <div className="w-3 sm:w-4 h-px bg-slate-600"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-600 flex items-center justify-center">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-slate-400">Finance</span>
                  </div>
                  <div className="w-3 sm:w-4 h-px bg-slate-600"></div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 border-2 border-blue-400 animate-pulse"></div>
                    <span className="text-[9px] sm:text-[10px] text-blue-400 font-semibold">You (CFO)</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-slate-300 hover:bg-slate-600 transition-all">
                  View Details
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-600/20 border border-red-600/50 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-red-400 hover:bg-red-600/30 transition-all">
                  Reject
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-white hover:bg-green-700 transition-all">
                  Approve
                </button>
              </div>
            </div>
          </div>

          {/* High Priority - Purchase Order */}
          <div className="bg-slate-800/50 border border-orange-600/30 rounded-lg xl:rounded-xl overflow-hidden hover:border-orange-600/50 transition-all">
            <div className="flex items-center gap-2 px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 bg-orange-600/10 border-b border-orange-600/20">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold text-orange-400 uppercase tracking-wider">High Priority</span>
            </div>
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[13px] sm:text-[15px] xl:text-[17px] font-[700] text-white">Purchase Order Approval</div>
                    <div className="px-1.5 py-0.5 bg-orange-600/20 border border-orange-600/40 rounded text-[9px] sm:text-[10px] text-orange-400 font-semibold">
                      OPEX
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 mb-2">
                    <span>PO-2026-5431</span>
                    <span>•</span>
                    <span>Vendor: Acme Corp</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 leading-relaxed mb-3">
                    Office equipment and supplies for Q1 2026. Includes workstations, ergonomic furniture, IT accessories for new Seattle office expansion.
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>2 Documents</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Submitted 1 day ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[18px] sm:text-[22px] xl:text-[26px] font-[700] text-white tabular-nums">$45,250</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500">Budget: $50K</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-slate-300 hover:bg-slate-600 transition-all">
                  View Details
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-600/20 border border-red-600/50 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-red-400 hover:bg-red-600/30 transition-all">
                  Reject
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-white hover:bg-green-700 transition-all">
                  Approve
                </button>
              </div>
            </div>
          </div>

          {/* Normal - Vendor Contract */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg xl:rounded-xl overflow-hidden hover:border-slate-600 transition-all">
            <div className="flex items-center gap-2 px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 bg-slate-800/50 border-b border-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Normal Priority</span>
            </div>
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[13px] sm:text-[15px] xl:text-[17px] font-[700] text-white">Cloud Services Contract Renewal</div>
                    <div className="px-1.5 py-0.5 bg-purple-600/20 border border-purple-600/40 rounded text-[9px] sm:text-[10px] text-purple-400 font-semibold">
                      CONTRACT
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 mb-2">
                    <span>CR-2026-0089</span>
                    <span>•</span>
                    <span>IT Infrastructure</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-[12px] text-slate-400 leading-relaxed mb-3">
                    Annual renewal for enterprise cloud hosting and infrastructure services. Includes 15% volume discount for multi-year commitment.
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>5 Documents</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Submitted 2 days ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[18px] sm:text-[22px] xl:text-[26px] font-[700] text-white tabular-nums">$127,500</div>
                  <div className="text-[9px] sm:text-[10px] text-green-400">Save $22.5K/yr</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 sm:gap-3">
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-slate-300 hover:bg-slate-600 transition-all">
                  View Details
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-600/20 border border-red-600/50 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-red-400 hover:bg-red-600/30 transition-all">
                  Reject
                </button>
                <button className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 rounded-lg text-[11px] sm:text-[12px] xl:text-[13px] font-semibold text-white hover:bg-green-700 transition-all">
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notifications Screen
function NotificationsScreen() {
  return (
    <div className="h-full flex flex-col bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      {/* Browser chrome */}
      <div className="bg-slate-800 px-2 sm:px-4 xl:px-6 py-2 sm:py-3 xl:py-4 flex items-center gap-1 sm:gap-2 border-b border-slate-700 shrink-0">
        <div className="flex gap-1 sm:gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 xl:w-3 xl:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-2 sm:mx-4 xl:mx-6">
          <div className="bg-slate-900/60 rounded px-2 sm:px-3 xl:px-4 py-1 sm:py-1.5 xl:py-2 text-[10px] sm:text-[12px] xl:text-[13px] text-slate-400 font-mono truncate">
            yourcompany.com/process-factory
          </div>
        </div>
      </div>
      
      {/* Notification content */}
      <div className="flex-1 p-3 sm:p-6 md:p-8 xl:p-12 2xl:p-16 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Header with Filter Tabs */}
        <div className="mb-6 sm:mb-8 xl:mb-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <h3 className="text-[16px] sm:text-[20px] md:text-[22px] xl:text-[26px] 2xl:text-[28px] font-[700] text-white mb-1">Activity Feed</h3>
              <p className="text-[11px] sm:text-[12px] md:text-[13px] xl:text-[14px] text-slate-400">Real-time updates across all workflows</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-red-600/20 border border-red-600/50 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-red-400 font-semibold whitespace-nowrap">
                3 Critical
              </div>
              <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-600/20 border border-blue-600/50 rounded text-[10px] sm:text-[11px] xl:text-[12px] text-blue-400 font-semibold whitespace-nowrap">
                12 Unread
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 rounded-lg text-[11px] sm:text-[12px] font-semibold text-white">
              All (47)
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              Approvals (24)
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              Workflows (18)
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              System (5)
            </button>
          </div>
        </div>
        
        {/* Notification cards */}
        <div className="space-y-3 sm:space-y-4 xl:space-y-5">
          {/* Critical - New Approval Assignment */}
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg xl:rounded-xl overflow-hidden hover:border-red-600/50 transition-all">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600/20 border-b border-red-600/30">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-[9px] sm:text-[10px] font-semibold text-red-400 uppercase tracking-wider">Critical • Action Required</span>
              <div className="ml-auto text-[9px] sm:text-[10px] text-red-400">2 minutes ago</div>
            </div>
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-600/20 border border-red-600/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white mb-1">New Approval Request Assigned</div>
                  <div className="text-[11px] sm:text-[12px] xl:text-[13px] text-slate-300 mb-2">
                    <span className="font-semibold text-white">Sarah Chen</span> submitted Capital Expenditure Request <span className="font-mono text-blue-400">CE-2026-0184</span> for <span className="font-semibold text-white">$485,000</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-400">
                    <span>Engineering Department</span>
                    <span>•</span>
                    <span className="text-red-400 font-semibold">Expires in 4 hours</span>
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 rounded-lg text-[11px] sm:text-[12px] font-semibold text-white hover:bg-red-700 transition-all shrink-0">
                  Review Now
                </button>
              </div>
            </div>
          </div>

          {/* High Priority - Deadline Approaching */}
          <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg xl:rounded-xl overflow-hidden hover:border-orange-600/50 transition-all">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-600/20 border-b border-orange-600/30">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
              <span className="text-[9px] sm:text-[10px] font-semibold text-orange-400 uppercase tracking-wider">High Priority</span>
              <div className="ml-auto text-[9px] sm:text-[10px] text-orange-400">1 hour ago</div>
            </div>
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-600/20 border border-orange-600/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white mb-1">Approval Deadline Approaching</div>
                  <div className="text-[11px] sm:text-[12px] xl:text-[13px] text-slate-300 mb-2">
                    Cloud Services Contract Renewal <span className="font-mono text-blue-400">CR-2026-0089</span> requires approval within <span className="font-semibold text-orange-400">24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-400">
                    <span>IT Infrastructure</span>
                    <span>•</span>
                    <span>Value: $127,500</span>
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-300 hover:bg-slate-600 transition-all shrink-0">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Success - Workflow Completed */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg xl:rounded-xl overflow-hidden hover:border-slate-600 transition-all">
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-600/20 border border-green-600/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white">Workflow Completed Successfully</div>
                    <div className="px-1.5 py-0.5 bg-green-600/20 border border-green-600/40 rounded text-[9px] sm:text-[10px] text-green-400 font-semibold">
                      APPROVED
                    </div>
                  </div>
                  <div className="text-[11px] sm:text-[12px] xl:text-[13px] text-slate-400 mb-2">
                    Purchase Order <span className="font-mono text-slate-300">PO-2026-5429</span> has been fully processed and approved by all stakeholders
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span>3 Approvers</span>
                    </div>
                    <span>•</span>
                    <span>15 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Update - In Progress */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg xl:rounded-xl overflow-hidden hover:border-slate-600 transition-all">
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 border border-blue-600/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white mb-1">Workflow Stage Advanced</div>
                  <div className="text-[11px] sm:text-[12px] xl:text-[13px] text-slate-400 mb-2">
                    Purchase Order <span className="font-mono text-slate-300">PO-2026-5431</span> moved to <span className="text-blue-400 font-semibold">Finance Review</span> stage
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500">2 of 3</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">
                    45 minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Update */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg xl:rounded-xl overflow-hidden hover:border-slate-600 transition-all">
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600/20 border border-purple-600/40 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white">System Update Deployed</div>
                    <div className="px-1.5 py-0.5 bg-purple-600/20 border border-purple-600/40 rounded text-[9px] sm:text-[10px] text-purple-400 font-semibold">
                      v2.4.1
                    </div>
                  </div>
                  <div className="text-[11px] sm:text-[12px] xl:text-[13px] text-slate-400 mb-2">
                    Process Factory has been updated with enhanced analytics, improved mobile experience, and performance optimizations
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">
                    3 hours ago
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-300 hover:bg-slate-600 transition-all shrink-0">
                  Release Notes
                </button>
              </div>
            </div>
          </div>

          {/* Mention/Comment */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg xl:rounded-xl overflow-hidden hover:border-slate-600 transition-all">
            <div className="p-3 sm:p-4 xl:p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-700 flex items-center justify-center text-[11px] sm:text-[13px] font-semibold text-white shrink-0">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] sm:text-[15px] xl:text-[16px] font-[700] text-white mb-1">
                    <span className="text-blue-400">@John Doe</span> mentioned you in a comment
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded p-2 sm:p-2.5 mb-2">
                    <p className="text-[11px] sm:text-[12px] text-slate-300 italic">
                      "Can you review the budget allocation for this project? We might need additional approval from finance."
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-500">
                    <span>On: Employee Onboarding - Marketing</span>
                    <span>•</span>
                    <span>5 hours ago</span>
                  </div>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700 border border-slate-600 rounded-lg text-[11px] sm:text-[12px] font-semibold text-slate-300 hover:bg-slate-600 transition-all shrink-0">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Screen
function MobileScreen() {
  return (
    <div className="flex items-start justify-center h-full w-full overflow-hidden">
      {/* iPhone frame wrapper - scaled to actual iPhone 16 Pro max size */}
      <div className="relative bg-slate-900 rounded-[32px] p-2 border-[2px] border-slate-800 shadow-2xl">
        {/* Screen */}
        <div className="bg-slate-900 rounded-[30px] overflow-hidden w-[280px]">
          {/* Dynamic Island */}
          <div className="relative pt-4 pb-2 bg-slate-900">
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
            
            {/* Status bar */}
            <div className="relative px-6 flex items-center justify-between text-[10px] text-white font-semibold">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <div className="w-5 h-2.5 border border-white rounded-sm relative">
                  <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* App header */}
          <div className="bg-slate-900 px-5 py-3 border-b border-slate-700">
            <div className="text-[10px] text-slate-400 mb-1">Process Factory®</div>
            <div className="text-[18px] font-[700] text-white">My Approvals</div>
            <div className="text-[12px] text-blue-400 mt-1">4 pending items</div>
          </div>
          
          {/* Mobile cards - realistic height, will overflow */}
          <div className="p-4 space-y-3 bg-slate-900">
            <MobileCard 
              color="orange"
              category="Purchase Order"
              title="PO-2024-5431"
              subtitle="Acme Corp"
              amount="$45,250.00"
              time="2h ago"
            />
            <MobileCard 
              color="blue"
              category="Capital Expense"
              title="Equipment Purchase"
              subtitle="Sarah Chen - Engineering"
              amount="$125,000.00"
              time="5h ago"
            />
            <MobileCard 
              color="purple"
              category="Onboarding"
              title="Marketing Team"
              subtitle="3 tasks remaining"
              amount="Due in 2 days"
              time="1d ago"
              singleAction
            />
          </div>
          
          {/* Home indicator - may not be visible if cropped */}
          <div className="pb-2.5 flex justify-center bg-slate-900">
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCard({ 
  color, 
  category, 
  title, 
  subtitle, 
  amount, 
  time,
  singleAction = false
}: { 
  color: string; 
  category: string; 
  title: string; 
  subtitle: string; 
  amount: string; 
  time: string;
  singleAction?: boolean;
}) {
  const colorClasses: Record<string, string> = {
    orange: 'bg-orange-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400'
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${colorClasses[color]}`}></div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wide">{category}</div>
        </div>
        <div className="text-[10px] text-slate-500">{time}</div>
      </div>
      <div className="text-[15px] text-white font-[700] mb-1">{title}</div>
      <div className="text-[13px] text-slate-400 mb-1">{subtitle}</div>
      <div className="text-[14px] text-white font-semibold mb-3">{amount}</div>
      {singleAction ? (
        <button className="w-full h-9 bg-blue-600 rounded-lg text-[13px] font-semibold text-white">
          View Details
        </button>
      ) : (
        <div className="flex gap-2">
          <button className="flex-1 h-9 bg-red-600/20 border border-red-600/50 rounded-lg text-[13px] font-semibold text-red-400">
            Reject
          </button>
          <button className="flex-1 h-9 bg-green-600 rounded-lg text-[13px] font-semibold text-white">
            Approve
          </button>
        </div>
      )}
    </div>
  );
}