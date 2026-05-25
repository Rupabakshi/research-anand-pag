import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef, useEffect } from 'react';
import { ScrollDots } from './ScrollDots';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

export function CoreCapabilities() {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);

  const capabilities = [
    {
      title: "SAP Enterprise Solutions",
      tagline: "From legacy to S/4HANA",
      description: "End-to-end SAP implementations and transformations for Fortune 500 enterprises across 17+ countries",
      image: "https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sapcard.webp",
      stat: "500+",
      statLabel: "Implementations",
      link: "SAP Solutions",
      href: "/solutions/btp-portal"
    },
    {
      title: "Process Optimization",
      tagline: "End-to-end excellence",
      description: "Transform operations through intelligent process automation and continuous improvement methodologies",
      image: "https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/processoptimization.webp",
      stat: "40%",
      statLabel: "Avg Efficiency Gain",
      link: "Process Solutions",
      href: "/solutions/process-factory"
    },
    {
      title: "SharePoint Managed Services",
      tagline: "Collaboration & Document Management",
      description: "Enterprise platform for collaboration, document management, and intelligent workflows with maximum availability and security",
      image: "https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/sharepointcard.webp",
      stat: "24/7",
      statLabel: "Availability",
      link: "SharePoint Solutions",
      href: "/company/contact"
    },
    {
      title: "Salesforce Cloud Solutions",
      tagline: "CRM & Customer Engagement",
      description: "Complete Salesforce implementations across Sales, Service, and Marketing Cloud with certified professionals driving results in manufacturing, utilities, life sciences, and insurance",
      image: "https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/crmcard.webp",
      stat: "360°",
      statLabel: "Customer View",
      link: "Salesforce Solutions",
      href: "/company/contact"
    }
  ];

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      const slideWidth = currentRef.scrollWidth / capabilities.length;
      currentRef.scrollLeft = activeSlide * slideWidth;
    }
  }, [activeSlide]);

  // Track scroll position to update active slide
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const slideWidth = container.scrollWidth / capabilities.length;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      
      if (newActiveSlide !== activeSlide && newActiveSlide >= 0 && newActiveSlide < capabilities.length) {
        setActiveSlide(newActiveSlide);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeSlide, capabilities.length]);

  return (
    <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-40" style={{ backgroundColor: theme.background.light }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[800px]"
            >
              {/* Eyebrow pill */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100 border border-slate-200 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-600 font-bold">
                    Core Capabilities
                  </span>
                </div>
              </div>
              
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] mb-6 sm:mb-8 transition-colors duration-500" style={{ color: theme.text.onLight }}>
                Capabilities that deliver results
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.75] transition-colors duration-500" style={{ color: theme.text.onLightSecondary }}>
                Deep technical expertise across platforms, industries, and transformation disciplines
              </p>
            </motion.div>
          </div>

          {/* Capabilities Grid */}
          {/* Mobile: Horizontal Scroll | Tablet+: Grid */}
          <div className="md:hidden">
            <div className="flex gap-4 px-6 sm:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={scrollContainerRef}>
              {capabilities.map((capability, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 snap-start"
                  style={{ width: 'calc(100vw - 64px)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className={`group relative border rounded-sm overflow-hidden transition-all duration-500 h-full ${
                      theme.isLight 
                        ? 'bg-white border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' 
                        : 'bg-slate-900 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
                    }`}
                    style={{
                      transform: activeSlide === idx ? 'scale(1)' : 'scale(0.94)',
                      opacity: activeSlide === idx ? 1 : 0.6,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden bg-slate-100">
                      <ImageWithFallback
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#030213]/35"></div>
                      
                      {/* Stat overlay with background */}
                      <div className="absolute bottom-4 left-4">
                        <div className="inline-block px-3 py-2 bg-[#030213]/60 backdrop-blur-sm rounded-sm">
                          <div className="text-[42px] font-[700] text-white leading-none mb-1 tabular-nums">
                            {capability.stat}
                          </div>
                          <div className="text-[10px] text-white/90 uppercase tracking-[1.2px] font-[600]">
                            {capability.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className={`text-[9px] font-[700] uppercase tracking-[2px] mb-3 transition-colors ${
                        theme.isLight ? 'text-blue-600' : 'text-slate-400'
                      }`}>
                        {capability.tagline}
                      </div>
                      <h3 className={`text-[21px] font-[700] mb-3 tracking-[-0.01em] leading-[1.25] transition-colors ${
                        theme.isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        {capability.title}
                      </h3>
                      <p className={`text-[13px] leading-[1.75] mb-4 transition-colors ${
                        theme.isLight ? 'text-gray-700' : 'text-slate-400'
                      }`}>
                        {capability.description}
                      </p>
                      
                      <PrefetchLink to={capability.href} className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-[600] border rounded-sm transition-all group ${
                        theme.isLight 
                          ? 'bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100' 
                          : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                      }`}>
                        Explore {capability.link}
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </PrefetchLink>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <ScrollDots
              totalDots={capabilities.length}
              activeIndex={activeSlide}
              onDotClick={(idx) => setActiveSlide(idx)}
              variant={theme.isLight ? 'light' : 'dark'}
              className="mt-8"
            />
          </div>

          {/* Tablet & Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative border rounded-sm overflow-hidden transition-all duration-700 will-change-transform ${
                  theme.isLight 
                    ? 'bg-white border-gray-200 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)] shadow-sm' 
                    : 'bg-slate-900 border-white/10 hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.35)] shadow-xl'
                }`}
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#030213]/20"></div>
                  
                  {/* Stat overlay */}
                  <div className="absolute bottom-6 left-6">
                    <div className="text-[56px] font-[700] text-white leading-none mb-1 tabular-nums">
                      {capability.stat}
                    </div>
                    <div className="text-[12px] text-white/80 uppercase tracking-[1px]">
                      {capability.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className={`text-[11px] font-[700] uppercase tracking-[2px] mb-3 transition-colors ${
                    theme.isLight ? 'text-blue-600' : 'text-slate-400'
                  }`}>
                    {capability.tagline}
                  </div>
                  <h3 className={`text-[28px] font-[700] mb-4 tracking-[-0.01em] transition-colors ${
                    theme.isLight ? 'text-gray-900' : 'text-white'
                  }`}>
                    {capability.title}
                  </h3>
                  <p className={`text-[15px] leading-[1.75] mb-6 transition-colors ${
                    theme.isLight ? 'text-gray-700' : 'text-slate-400'
                  }`}>
                    {capability.description}
                  </p>
                  
                  <PrefetchLink to={capability.href} className={`inline-flex items-center gap-2 px-6 py-3 text-[13px] font-[600] border rounded-sm transition-all group ${
                    theme.isLight 
                      ? 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50 shadow-sm' 
                      : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                  }`}>
                    Explore {capability.link}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </PrefetchLink>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}