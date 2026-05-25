import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Users, BarChart3, ArrowRight } from 'lucide-react';
import { ScrollDots } from './ScrollDots';
import { PrefetchLink } from './PrefetchLink';
import { PrimaryButton } from './ui/PrimaryButton';
import { useTheme } from '../contexts/ThemeContext';

export function ProcessFactoryShowcase() {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Clock,
      title: "Faster Time to Value",
      description: "Deploy compliance initiatives in 60 days instead of 12 months—start seeing ROI immediately"
    },
    {
      icon: Users,
      title: "Minimal Change Disruption",
      description: "90% adoption rate with single-day training—employees embrace the change naturally"
    },
    {
      icon: Shield,
      title: "Zero Upgrade Risk",
      description: "SAP and Oracle upgrades proceed without operational interruption or compliance gaps"
    },
    {
      icon: BarChart3,
      title: "Executive Visibility",
      description: "Real-time compliance dashboards accessible from any device—make informed decisions instantly"
    }
  ];

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    
    const handleScroll = () => {
      if (currentRef) {
        const scrollPosition = currentRef.scrollLeft;
        const slideWidth = currentRef.clientWidth;
        const slideIndex = Math.round(scrollPosition / slideWidth);
        setActiveSlide(slideIndex);
      }
    };

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className={`relative overflow-hidden transition-colors duration-500 ${
      theme.isLight ? 'text-gray-900' : 'text-white'
    }`} style={{ backgroundColor: theme.background.dark }}>
      
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${theme.isLight ? 'opacity-5' : 'opacity-20'}`}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Structured Grid */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="pfgrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke={theme.isLight ? 'black' : 'white'} strokeWidth="1" opacity="0.6"/>
              </pattern>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#pfgrid)" />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-16 lg:gap-24 items-center">
            
            {/* Left - Product Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-sm mb-6 sm:mb-8 transition-colors ${
                theme.isLight ? 'bg-blue-600/10' : 'bg-white/10'
              }`}>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={`text-[11px] font-[700] uppercase tracking-[2px] transition-colors ${
                  theme.isLight ? 'text-blue-700' : 'text-white/90'
                }`}>
                  Proprietary Platform
                </span>
              </div>
              
              <h2 className="text-[42px] sm:text-[56px] lg:text-[80px] font-[700] leading-[0.95] tracking-[-0.04em] mb-5 sm:mb-6">
                Process Factory<sup className="text-[22px] sm:text-[32px] align-super">®</sup>
              </h2>
              
              <p className={`text-[18px] sm:text-[22px] font-[300] leading-[1.5] mb-6 sm:mb-8 transition-colors ${
                theme.isLight ? 'text-gray-800' : 'text-white/90'
              }`}>
                Deploy compliance in weeks, not years—while reducing costs by 40%
              </p>

              <p className={`text-[15px] sm:text-[16px] leading-[1.75] mb-10 sm:mb-12 transition-colors ${
                theme.isLight ? 'text-gray-700' : 'text-white/70'
              }`}>
                Transform regulatory compliance from a 12-month bottleneck into a 60-day strategic advantage. Our certified platform delivers pre-built solutions that your teams adopt naturally—minimal training, zero business disruption, immediate ROI.
              </p>

              {/* Key Stats Row */}
              <div className={`grid grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b transition-colors ${
                theme.isLight ? 'border-gray-200' : 'border-white/10'
              }`}>
                <div>
                  <div className={`text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums transition-colors ${
                    theme.isLight ? 'text-blue-600' : 'text-white'
                  }`}>40%</div>
                  <div className={`text-[10px] sm:text-[11px] uppercase tracking-[1px] transition-colors ${
                    theme.isLight ? 'text-gray-500' : 'text-white/60'
                  }`}>Cost Reduction</div>
                </div>
                <div>
                  <div className={`text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums transition-colors ${
                    theme.isLight ? 'text-blue-600' : 'text-white'
                  }`}>60</div>
                  <div className={`text-[10px] sm:text-[11px] uppercase tracking-[1px] transition-colors ${
                    theme.isLight ? 'text-gray-500' : 'text-white/60'
                  }`}>Days to Deploy</div>
                </div>
                <div>
                  <div className={`text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums transition-colors ${
                    theme.isLight ? 'text-blue-600' : 'text-white'
                  }`}>90%</div>
                  <div className={`text-[10px] sm:text-[11px] uppercase tracking-[1px] transition-colors ${
                    theme.isLight ? 'text-gray-500' : 'text-white/60'
                  }`}>User Adoption</div>
                </div>
              </div>

              <PrefetchLink to="/solutions/process-factory">
                <PrimaryButton>
                  Learn about Process Factory®
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
              </PrefetchLink>
            </motion.div>

            {/* Right - Features Grid */}
            {/* Mobile: Horizontal Scroll | Desktop: Grid */}
            <div>
              {/* Mobile Horizontal Scroll */}
              <div className="md:hidden">
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {features.map((feature, idx) => (
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
                        className={`backdrop-blur-sm border rounded-sm p-5 transition-all duration-300 will-change-transform h-full ${
                          theme.isLight 
                            ? 'bg-white border-gray-200 shadow-sm hover:bg-gray-50' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                        style={{
                          transform: activeSlide === idx ? 'scale(1)' : 'scale(0.94)',
                          opacity: activeSlide === idx ? 1 : 0.5,
                          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <feature.icon className="w-7 h-7 text-blue-600 mb-3" strokeWidth={1.5} />
                        <h3 className={`text-[17px] font-[600] mb-2 transition-colors ${
                          theme.isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-[13px] leading-[1.75] transition-colors ${
                          theme.isLight ? 'text-gray-700' : 'text-white/70'
                        }`}>
                          {feature.description}
                        </p>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Dot Indicators */}
                <ScrollDots
                  totalDots={features.length}
                  activeIndex={activeSlide}
                  onDotClick={(idx) => {
                    const container = scrollContainerRef.current;
                    if (container) {
                      container.scrollTo({
                        left: idx * container.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  variant={theme.isLight ? 'light' : 'dark'}
                  className="mt-6"
                />
              </div>

              {/* Desktop Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:grid md:grid-cols-2 gap-5 sm:gap-6"
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className={`backdrop-blur-sm border rounded-sm p-5 sm:p-6 transition-all duration-300 will-change-transform ${
                      theme.isLight 
                        ? 'bg-white border-gray-200 shadow-sm hover:bg-gray-50' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" strokeWidth={1.5} />
                    <h3 className={`text-[17px] sm:text-[18px] font-[600] mb-2 transition-colors ${
                      theme.isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-[13px] sm:text-[14px] leading-[1.75] transition-colors ${
                      theme.isLight ? 'text-gray-700' : 'text-white/70'
                    }`}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}