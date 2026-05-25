import { useRef, useState, useEffect, useCallback } from 'react';
import { Building2, Zap, Users, Award, CheckCircle2, TrendingUp, Globe2, Shield, Cloud, Database, Server, GitBranch } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';
import { useMediaConfig } from '../../config/media';
import { PrimaryButton, SecondaryButton, EyebrowPill, HeroH1 } from './ui';
import { useTheme } from '../contexts/ThemeContext';

// Animation constants
const ICON_ANIMATION_DURATION = 22; // seconds
const SPAWN_THRESHOLD = 0.25; // spawn new icon every 25% of the duration (results in max 4 icons)
const MAX_ICONS = 4;

export function SophisticatedHero() {
  const { config } = useMediaConfig();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Icon definitions with their components and colors - STATIC
  const icons = [
    {
      name: 'SAP',
      color: '#0FAAFF',
      colorEnd: '#0088CC',
      component: () => <img src={config.heroFloatingIcons.sapLogo} alt="SAP" className="w-4 h-4 object-contain drop-shadow-sm" />
    },
    {
      name: 'Microsoft',
      color: '#F3F4F6',
      colorEnd: '#E5E7EB',
      component: () => (
        <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      )
    },
    {
      name: 'Salesforce',
      color: '#00A1E0',
      colorEnd: '#0070A8',
      component: () => <Cloud className="w-4 h-4 text-white drop-shadow-sm" />
    },
    {
      name: 'Data',
      color: '#4F46E5',
      colorEnd: '#3730A3',
      component: () => <Database className="w-4 h-4 text-white drop-shadow-sm" />
    },
    {
      name: 'Cloud',
      color: '#0EA5E9',
      colorEnd: '#0284C7',
      component: () => <Cloud className="w-4 h-4 text-white drop-shadow-sm" />
    },
    {
      name: 'AI',
      color: '#A855F7',
      colorEnd: '#7C3AED',
      component: () => (
        <div className="w-4 h-4 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white leading-none drop-shadow-sm">AI</span>
        </div>
      )
    },
    {
      name: 'IT',
      color: '#10B981',
      colorEnd: '#059669',
      component: () => <Server className="w-4 h-4 text-white drop-shadow-sm" />
    },
    {
      name: 'Process',
      color: '#F59E0B',
      colorEnd: '#D97706',
      component: () => <GitBranch className="w-4 h-4 text-white drop-shadow-sm" />
    },
    {
      name: 'Oracle',
      color: '#F80000',
      colorEnd: '#C00000',
      component: () => (
        <div className="w-4 h-4 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 drop-shadow-sm">
            <ellipse cx="12" cy="12" rx="10" ry="6" strokeWidth="2" stroke="white" fill="none"/>
          </svg>
        </div>
      )
    }
  ];

  // Generate random spawn position and direction - STATIC FUNCTION
  const getRandomSpawn = () => {
    const spawnFromLeft = Math.random() > 0.5;
    
    if (spawnFromLeft) {
      // Spawn from random position on left edge, travel horizontally
      return {
        startX: Math.random() * 20, // Random X 0-20% (near left edge)
        startY: Math.random() * 100, // Random Y within bounding box
        endX: 100, // Right edge of bounding box
        endY: null, // Y doesn't change (horizontal)
        direction: 'horizontal' as const
      };
    } else {
      // Spawn from random position on top edge, travel vertically
      return {
        startX: Math.random() * 100, // Random X within bounding box
        startY: Math.random() * 20, // Random Y 0-20% (near top edge)
        endX: null, // X doesn't change (vertical)
        endY: 100, // Bottom edge of bounding box
        direction: 'vertical' as const
      };
    }
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  // Icon animation state - Track multiple active icons
  const [activeIcons, setActiveIcons] = useState<Array<{
    id: number;
    iconData: typeof icons[0];
    spawn: {
      startX: number;
      startY: number;
      endX: number | null;
      endY: number | null;
      direction: 'horizontal' | 'vertical';
    };
  }>>([]);
  const iconQueueRef = useRef<typeof icons>([]);
  const nextIdRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupTimersRef = useRef<Map<number, NodeJS.Timeout>>(new Map());

  // Shuffle array helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize icon queue on mount
  useEffect(() => {
    iconQueueRef.current = shuffleArray(icons);
  }, []);

  // Add a new icon to the active icons list
  const addNewIcon = useCallback(() => {
    const currentIconId = nextIdRef.current;
    
    // Check current count to enforce max 4 icons
    let shouldScheduleCleanup = false;

    setActiveIcons((prevIcons) => {
      if (prevIcons.length >= MAX_ICONS) return prevIcons;
      
      shouldScheduleCleanup = true;

      // If queue is empty, refill with shuffled icons
      if (iconQueueRef.current.length === 0) {
        iconQueueRef.current = shuffleArray(icons);
      }
      
      // Get next icon from queue
      const newIconData = iconQueueRef.current.shift()!;
      const newSpawn = getRandomSpawn();

      return [
        ...prevIcons,
        {
          id: currentIconId,
          iconData: newIconData,
          spawn: newSpawn
        }
      ];
    });

    if (shouldScheduleCleanup) {
      // Schedule removal of this specific icon after animation completes
      const cleanupTimer = setTimeout(() => {
        setActiveIcons((prevIcons) => {
          return prevIcons.filter(icon => icon.id !== currentIconId);
        });
        cleanupTimersRef.current.delete(currentIconId);
      }, ICON_ANIMATION_DURATION * 1000);
      
      cleanupTimersRef.current.set(currentIconId, cleanupTimer);
      nextIdRef.current += 1;
    }
  }, []); // Empty deps because icons is constant and we use refs/setState callbacks

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      cleanupTimersRef.current.forEach(timer => clearTimeout(timer));
      cleanupTimersRef.current.clear();
    };
  }, []);

  // Spawn new icons based on threshold percentage
  useEffect(() => {
    // Add first icon immediately
    addNewIcon();
    
    const spawnInterval = ICON_ANIMATION_DURATION * 1000 * SPAWN_THRESHOLD;
    intervalRef.current = setInterval(addNewIcon, spawnInterval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty deps - runs once on mount

  // Handle page visibility to prevent icon buildup when switching tabs
  useEffect(() => {
    const spawnInterval = ICON_ANIMATION_DURATION * 1000 * SPAWN_THRESHOLD;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden - clear the interval and all cleanup timers
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        cleanupTimersRef.current.forEach(timer => clearTimeout(timer));
        cleanupTimersRef.current.clear();
      } else {
        // Page is visible again - reset animation state
        setActiveIcons([]);
        nextIdRef.current = 0;
        
        // Restart the animation cycle ONLY if interval is not running
        if (!intervalRef.current) {
          setTimeout(() => {
            addNewIcon();
            intervalRef.current = setInterval(addNewIcon, spawnInterval);
          }, 100);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [addNewIcon]);

  const badgeBg = theme.isLight ? 'rgb(248, 250, 252)' : 'rgba(255, 255, 255, 0.03)';
  const badgeBgHover = theme.isLight ? 'rgb(241, 245, 249)' : 'rgba(255, 255, 255, 0.06)';

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-start lg:items-center overflow-hidden" style={{ backgroundColor: theme.background.hero }}>
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className={`absolute inset-0 ${theme.isLight ? 'premium-light-grid' : ''}`}
          animate={theme.isLight ? {
            scale: [1, 1.02, 1],
          } : {}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            opacity: theme.isLight ? 0.6 : 0.2,
            maskImage: theme.isLight ? 'radial-gradient(circle at 75% 50%, black 20%, transparent 75%)' : undefined,
            WebkitMaskImage: theme.isLight ? 'radial-gradient(circle at 75% 50%, black 20%, transparent 75%)' : undefined,
            ...(!theme.isLight ? {
              backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            } : {})
          }}
        />
      </div>

      {/* Video Background — dark themes only */}
      {!theme.isLight && (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover opacity-70"
            ref={videoRef}
            style={{ y }}
          >
            <source src={config.videos.hero} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0" style={{
            backgroundColor: `${theme.background.hero}A6` // Solid with opacity instead of gradient
          }} />
        </div>
      )}

      {/* Ambient light effects — dark themes only */}
      {!theme.isLight && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] rounded-full blur-[120px]" style={{ backgroundColor: theme.accent.ambient1 }} />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: theme.accent.ambient2 }} />
        </div>
      )}

      {/* Light theme: subtle top accent bar */}
      {theme.isLight && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 z-10" />
      )}

      {/* Floating Tech Icons - Positioned relative to HERO SECTION */}
      <div className={`absolute inset-0 overflow-visible pointer-events-none z-[1] ${theme.isLight ? '' : 'opacity-85 sm:opacity-90 lg:opacity-100'}`}>
        {/* LOCKED BOUNDING BOX: Responsive positioning */}
        <div 
          className="absolute"
          style={{
            left: '55%',
            top: '10%',
            width: '40%', // 95% - 55% = 40%
            height: '45%', // 55% - 10% = 45%
          }}
        >
          {/* Animated Icons */}
          {activeIcons.map(icon => (
            <motion.div
              key={icon.id}
              className="absolute scale-[0.65] sm:scale-[0.8] lg:scale-100"
              initial={{
                left: `${icon.spawn.startX}%`,
                top: `${icon.spawn.startY}%`,
                opacity: 0
              }}
              animate={{
                left: icon.spawn.direction === 'horizontal' ? `${icon.spawn.endX}%` : `${icon.spawn.startX}%`,
                top: icon.spawn.direction === 'vertical' ? `${icon.spawn.endY}%` : `${icon.spawn.startY}%`,
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{
                duration: ICON_ANIMATION_DURATION,
                ease: 'linear',
                opacity: {
                  times: [0, 0.3, 0.5, 0.7, 1],
                  duration: ICON_ANIMATION_DURATION
                }
              }}
              style={{
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Trail Effect */}
              <motion.div
                className="absolute"
                style={{
                  ...(icon.spawn.direction === 'horizontal' ? {
                    right: '100%',
                    top: '50%',
                    height: theme.isLight ? '2px' : '1px',
                    transformOrigin: 'right center',
                    transform: 'translateY(-50%)',
                    backgroundColor: `${icon.iconData.color}${theme.isLight ? '88' : '44'}`,
                    boxShadow: `0 0 6px ${icon.iconData.color}${theme.isLight ? '66' : '44'}, 0 0 12px ${icon.iconData.color}33`
                  } : {
                    bottom: '100%',
                    left: '50%',
                    width: theme.isLight ? '2px' : '1px',
                    transformOrigin: 'bottom center',
                    transform: 'translateX(-50%)',
                    backgroundColor: `${icon.iconData.color}${theme.isLight ? '88' : '44'}`,
                    boxShadow: `0 0 6px ${icon.iconData.color}${theme.isLight ? '66' : '44'}, 0 0 12px ${icon.iconData.color}33`
                  })
                }}
                initial={{
                  ...(icon.spawn.direction === 'horizontal' ? { width: '550px' } : { height: '550px' }),
                  opacity: 1
                }}
                animate={{
                  ...(icon.spawn.direction === 'horizontal' ? { width: '550px' } : { height: '550px' }),
                  opacity: [1, 0.8, 0.6, 0.4, 0.2]
                }}
                transition={{
                  duration: 22,
                  ease: 'linear',
                  opacity: {
                    times: [0, 0.3, 0.5, 0.7, 1],
                    duration: 22
                  }
                }}
              />

              {/* Glass Icon */}
              <div className="relative group">
                {/* Outer glow */}
                <div
                  className="absolute inset-0 rounded-lg blur-md transition-opacity group-hover:opacity-80"
                  style={{
                    opacity: theme.isLight ? 0.7 : 0.5,
                    backgroundColor: icon.iconData.color
                  }}
                />

                {/* Glass container */}
                <div
                  className="relative backdrop-blur-xl rounded-lg p-2 shadow-2xl"
                  style={{
                    backgroundColor: theme.isLight
                      ? `${icon.iconData.color}35`
                      : `${icon.iconData.color}15`,
                    border: `1px solid ${theme.isLight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)'}`,
                    boxShadow: theme.isLight
                      ? `0 4px 24px 0 ${icon.iconData.color}50, 0 1px 0 0 rgba(255,255,255,0.9)`
                      : `0 8px 32px 0 ${icon.iconData.color}40, inset 0 1px 0 0 rgba(255,255,255,0.3), inset 0 -1px 0 0 rgba(255,255,255,0.1)`
                  }}
                >
                  {/* Glass highlight */}
                  <div
                    className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg opacity-40"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}
                  />
                  
                  {/* Icon content */}
                  <div className="relative z-10">
                    {icon.iconData.component()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full flex flex-col justify-between min-h-screen lg:min-h-0 pt-32 sm:pt-36 lg:pt-32 pb-32 sm:pb-40 lg:pb-24"
      >
        <div className="max-w-[1400px] mx-auto w-full flex-1 lg:flex-none flex flex-col justify-center lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left - Main Content */}
            <div className="lg:col-span-6">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 sm:mb-10 lg:mb-6"
              >
                <EyebrowPill>
                  Connecting People to Processes.
                </EyebrowPill>
              </motion.div>

              {/* Main Headline */}
              <HeroH1 variant={theme.isLight ? 'light' : 'dark'} className="mb-10 sm:mb-12 lg:mb-8">
                {theme.isLight ? (
                  <>
                    <span className="font-900">Maximize</span> ROI <span className="opacity-40 font-500 lowercase italic">on your</span> <span className="font-900">ERP</span> <span className="opacity-40 font-500">Investment.</span>
                  </>
                ) : (
                  <>Maximize <span className="whitespace-nowrap">ROI on</span> your <span className="whitespace-nowrap">ERP investment.</span></>
                )}
              </HeroH1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] mb-12 sm:mb-14 lg:mb-12 max-w-[650px]"
                style={{ color: theme.isLight ? theme.text.onLightSecondary : theme.text.secondary }}
              >
                Turning enterprise systems into strategic assets. Delivering measurable transformation for Fortune 500 companies.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-16 sm:mb-20 lg:mb-0"
              >
                <PrefetchLink to="/company/contact">
                  <PrimaryButton>
                    Schedule a Demo
                  </PrimaryButton>
                </PrefetchLink>
                <PrefetchLink to="/resources/case-studies">
                  <SecondaryButton>
                    View Case Studies
                  </SecondaryButton>
                </PrefetchLink>
              </motion.div>

              {/* Mobile Trust Indicators - REMOVED - Now using scrolling strip at bottom */}
            </div>

            {/* Right - Glass Cards - Desktop Only */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 2xl:col-span-6 lg:col-start-8 xl:col-start-8 2xl:col-start-7 flex-col items-end gap-2.5 xl:gap-3 lg:self-center relative">
              {/* SAP Badge */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <div className="relative w-[240px] xl:w-[260px] 2xl:w-[280px] backdrop-blur-xl rounded-full px-4 xl:px-5 2xl:px-6 py-2.5 xl:py-3 2xl:py-3.5 flex items-center gap-3 xl:gap-3.5 2xl:gap-4 transition-all duration-300 shadow-lg shadow-black/20"
                  style={{
                    backgroundColor: badgeBg,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.border.glass
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBgHover;
                    e.currentTarget.style.borderColor = theme.border.glassHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBg;
                    e.currentTarget.style.borderColor = theme.border.glass;
                  }}
                >
                  <div className="w-7 h-6 xl:w-9 xl:h-8 2xl:w-12 2xl:h-10 flex items-center justify-center flex-shrink-0">
                    <img src={config.logos.partners.sap.socialProof} alt="SAP" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3">
                    <span className="text-[13px] xl:text-[14px] 2xl:text-[15px] font-semibold" style={{ color: theme.isLight ? 'rgb(17,24,39)' : 'rgb(226,232,240)' }}>SAP</span>
                    <div className="w-px h-3 xl:h-3.5 2xl:h-4" style={{ backgroundColor: theme.isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }}></div>
                    <span className="text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium" style={{ color: theme.isLight ? 'rgb(107,114,128)' : 'rgb(148,163,184)' }}>Gold Partner</span>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ backgroundColor: theme.accent.ambient1 }}></div>
              </motion.div>

              {/* Microsoft Badge */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.35,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <div className="relative w-[240px] xl:w-[260px] 2xl:w-[280px] backdrop-blur-xl rounded-full px-4 xl:px-5 2xl:px-6 py-2.5 xl:py-3 2xl:py-3.5 flex items-center gap-3 xl:gap-3.5 2xl:gap-4 transition-all duration-300 shadow-lg shadow-black/20"
                  style={{
                    backgroundColor: badgeBg,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.border.glass
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBgHover;
                    e.currentTarget.style.borderColor = theme.border.glassHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBg;
                    e.currentTarget.style.borderColor = theme.border.glass;
                  }}
                >
                  <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 flex items-center justify-center flex-shrink-0">
                    <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 grid grid-cols-2 gap-0.5">
                      <div className="bg-[#F25022] rounded-[1px]"></div>
                      <div className="bg-[#7FBA00] rounded-[1px]"></div>
                      <div className="bg-[#00A4EF] rounded-[1px]"></div>
                      <div className="bg-[#FFB900] rounded-[1px]"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3">
                    <span className="text-[13px] xl:text-[14px] 2xl:text-[15px] font-semibold" style={{ color: theme.isLight ? 'rgb(17,24,39)' : 'rgb(226,232,240)' }}>Microsoft</span>
                    <div className="w-px h-3 xl:h-3.5 2xl:h-4" style={{ backgroundColor: theme.isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }}></div>
                    <span className="text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium" style={{ color: theme.isLight ? 'rgb(107,114,128)' : 'rgb(148,163,184)' }}>Partner</span>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ backgroundColor: theme.accent.ambient1 }}></div>
              </motion.div>

              {/* Salesforce Badge */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group relative"
              >
                <div className="relative w-[240px] xl:w-[260px] 2xl:w-[280px] backdrop-blur-xl rounded-full px-4 xl:px-5 2xl:px-6 py-2.5 xl:py-3 2xl:py-3.5 flex items-center gap-3 xl:gap-3.5 2xl:gap-4 transition-all duration-300 shadow-lg shadow-black/20"
                  style={{
                    backgroundColor: badgeBg,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: theme.border.glass
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBgHover;
                    e.currentTarget.style.borderColor = theme.border.glassHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = badgeBg;
                    e.currentTarget.style.borderColor = theme.border.glass;
                  }}
                >
                  <div className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-7 h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 text-[#00A1E0]" />
                  </div>
                  <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3">
                    <span className="text-[13px] xl:text-[14px] 2xl:text-[15px] font-semibold" style={{ color: theme.isLight ? 'rgb(17,24,39)' : 'rgb(226,232,240)' }}>Salesforce</span>
                    <div className="w-px h-3 xl:h-3.5 2xl:h-4" style={{ backgroundColor: theme.isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }}></div>
                    <span className="text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium" style={{ color: theme.isLight ? 'rgb(107,114,128)' : 'rgb(148,163,184)' }}>Partner</span>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" style={{ backgroundColor: theme.accent.ambient3 }}></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trusted By Section - Absolutely positioned at bottom */}
      <div className="absolute left-0 right-0 z-10" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))' }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-10 lg:pb-12 xl:pb-14">
          {/* Partner Scrolling Strip - Mobile/Tablet Only */}
          <div className="mb-8 sm:mb-10 lg:hidden relative overflow-hidden">
            {/* Gradient fade on edges */}
            
            
            
            {/* Scrolling container */}
            <motion.div
              className="flex gap-4 sm:gap-5 lg:gap-6 items-center justify-end"
              animate={{
                x: [0, 1 * 3 * 280]
              }}
              transition={{
                x: {
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {[
                // SAP
                {
                  name: 'SAP',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <img src={config.logos.partners.sap.socialProof} alt="SAP" className="w-full h-full object-contain" />
                    </div>
                  ),
                  text: 'Gold Partner'
                },
                // Microsoft
                {
                  name: 'Microsoft',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <div className="w-full h-full grid grid-cols-2 gap-0.5">
                        <div className="bg-[#F25022]"></div>
                        <div className="bg-[#7FBA00]"></div>
                        <div className="bg-[#00A4EF]"></div>
                        <div className="bg-[#FFB900]"></div>
                      </div>
                    </div>
                  ),
                  text: 'Partner'
                },
                // Salesforce
                {
                  name: 'Salesforce',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <Cloud className="w-full h-full text-[#00A1E0]" />
                    </div>
                  ),
                  text: 'Partner'
                },
                // Duplicate for seamless loop
                {
                  name: 'SAP',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <img src={config.logos.partners.sap.socialProof} alt="SAP" className="w-full h-full object-contain" />
                    </div>
                  ),
                  text: 'Gold Partner'
                },
                {
                  name: 'Microsoft',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <div className="w-full h-full grid grid-cols-2 gap-0.5">
                        <div className="bg-[#F25022]"></div>
                        <div className="bg-[#7FBA00]"></div>
                        <div className="bg-[#00A4EF]"></div>
                        <div className="bg-[#FFB900]"></div>
                      </div>
                    </div>
                  ),
                  text: 'Partner'
                },
                {
                  name: 'Salesforce',
                  icon: () => (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center">
                      <Cloud className="w-full h-full text-[#00A1E0]" />
                    </div>
                  ),
                  text: 'Partner'
                }
              ].map((partner, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-shrink-0">
                  {partner.icon()}
                  <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium whitespace-nowrap" style={{ color: theme.isLight ? 'rgb(75,85,99)' : 'rgb(203,213,225)' }}>
                    {partner.text}
                  </span>
                  {idx % 3 !== 2 && (
                    <div className="w-px h-3 sm:h-4 bg-slate-600 ml-2 sm:ml-3 lg:ml-4" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Label */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="text-[10px] sm:text-[11px] font-[500] uppercase tracking-[2px]" style={{ color: theme.isLight ? 'rgb(156,163,175)' : 'rgb(148,163,184)' }}>
              Trusted by
            </div>
          </div>

          {/* Scrolling Logo Strip */}
          <div className="relative">
            {/* Gradient fade on edges - matching dark hero background */}
            
            
            
            {/* Scrolling container */}
            <motion.div
              className="flex gap-8 sm:gap-12 lg:gap-16 items-center"
              animate={{
                x: [0, -1 * 6 * 200]
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {[
                {
                  name: 'Cintas',
                  logo: () => (
                    <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-0.5">
                        CINTAS
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Southern California Edison',
                  logo: () => (
                    <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fill="currentColor" letterSpacing="1">
                        SCE
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Consumers Energy',
                  logo: () => (
                    <svg width="180" height="32" viewBox="0 0 180 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600" fill="currentColor">
                        CONSUMERS ENERGY
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'PALL Corporation',
                  logo: () => (
                    <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="2">
                        PALL
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'WK Kellogg Foundation',
                  logo: () => (
                    <svg width="200" height="32" viewBox="0 0 200 32" fill="none">
                      <text x="0" y="24" fontFamily="Georgia, serif" fontSize="19" fontWeight="600" fill="currentColor" letterSpacing="-0.3">
                        WK Kellogg Foundation
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Farmers Insurance',
                  logo: () => (
                    <svg width="160" height="32" viewBox="0 0 160 32" fill="none">
                      <text x="0" y="24" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fill="currentColor" letterSpacing="-0.5">
                        Farmers Insurance
                      </text>
                    </svg>
                  )
                },
                // Duplicate for seamless loop
                {
                  name: 'Cintas',
                  logo: () => (
                    <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-0.5">
                        CINTAS
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Southern California Edison',
                  logo: () => (
                    <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fill="currentColor" letterSpacing="1">
                        SCE
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Consumers Energy',
                  logo: () => (
                    <svg width="180" height="32" viewBox="0 0 180 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600" fill="currentColor">
                        CONSUMERS ENERGY
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'PALL Corporation',
                  logo: () => (
                    <svg width="90" height="32" viewBox="0 0 90 32" fill="none">
                      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="currentColor" letterSpacing="2">
                        PALL
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'WK Kellogg Foundation',
                  logo: () => (
                    <svg width="200" height="32" viewBox="0 0 200 32" fill="none">
                      <text x="0" y="24" fontFamily="Georgia, serif" fontSize="19" fontWeight="600" fill="currentColor" letterSpacing="-0.3">
                        WK Kellogg Foundation
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Farmers Insurance',
                  logo: () => (
                    <svg width="160" height="32" viewBox="0 0 160 32" fill="none">
                      <text x="0" y="24" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fill="currentColor" letterSpacing="-0.5">
                        Farmers Insurance
                      </text>
                    </svg>
                  )
                }
              ].map((client, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 grayscale transition-all duration-300 ${theme.isLight ? 'opacity-50 hover:opacity-80 text-gray-500' : 'opacity-40 hover:opacity-70 text-slate-400'}`}
                  style={{ minWidth: '140px' }}
                >
                  <div className="flex items-center justify-center h-6 sm:h-7 lg:h-8">
                    {client.logo()}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}