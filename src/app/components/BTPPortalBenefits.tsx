import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Users, BarChart3, ArrowRight, Database, Globe, Zap } from 'lucide-react';
import { ScrollDots } from './ScrollDots';
import { PrefetchLink } from './PrefetchLink';
import { PrimaryButton } from './ui/PrimaryButton';
import { useTheme } from '../contexts/ThemeContext';

export function BTPPortalBenefits() {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Clock,
      title: "Eliminate Manual Lag",
      description: "Replace fragmented email and spreadsheet coordination with a real-time event bus that triggers S/4HANA updates instantly."
    },
    {
      icon: Database,
      title: "Single Source of Truth",
      description: "Bi-directional integration ensures that vendors and internal operations teams are always looking at the exact same data."
    },
    {
      icon: Shield,
      title: "Enterprise Compliance",
      description: "Automated OCR and document classification ensure all service records are compliant before they ever reach your ERP."
    },
    {
      icon: Users,
      title: "Rapid Vendor Adoption",
      description: "A consumer-grade interface designed for zero-training onboarding, ensuring 95%+ vendor participation within weeks."
    }
  ];

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    const handleScroll = () => {
      if (currentRef) {
        const slideIndex = Math.round(currentRef.scrollLeft / currentRef.clientWidth);
        setActiveSlide(slideIndex);
      }
    };
    if (currentRef) currentRef.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 sm:py-28 lg:py-40 transition-colors duration-500" style={{ backgroundColor: theme.isLight ? 'white' : theme.background.dark }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left - Benefit Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-sm mb-8 transition-colors ${
                theme.isLight ? 'bg-blue-600/10' : 'bg-white/10'
              }`}>
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className={`text-[11px] font-[700] uppercase tracking-[2px] ${theme.isLight ? 'text-blue-700' : 'text-white'}`}>
                  Strategic Outcomes
                </span>
              </div>
              
              <h2 className="text-[42px] sm:text-[56px] lg:text-[80px] font-[700] leading-[0.95] tracking-[-0.04em] mb-6" style={{ color: theme.text.primary }}>
                The Digital <br /> Vendor Desk
              </h2>
              
              <p className="text-[18px] sm:text-[22px] font-[300] leading-[1.5] mb-8" style={{ color: theme.isLight ? theme.text.onLightSecondary : theme.text.secondary }}>
                Stop chasing status updates and start managing by exception with a portal that works as hard as your ERP.
              </p>

              {/* Key Stats Row */}
              <div className={`grid grid-cols-3 gap-6 mb-12 pb-12 border-b transition-colors ${
                theme.isLight ? 'border-gray-200' : 'border-white/10'
              }`}>
                <div>
                  <div className="text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums text-blue-600">80%</div>
                  <div className={`text-[10px] uppercase tracking-[1px] ${theme.isLight ? 'text-gray-500' : 'text-white/60'}`}>Manual Reduction</div>
                </div>
                <div>
                  <div className="text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums text-blue-600">4mo</div>
                  <div className={`text-[10px] uppercase tracking-[1px] ${theme.isLight ? 'text-gray-500' : 'text-white/60'}`}>To Go-Live</div>
                </div>
                <div>
                  <div className="text-[36px] sm:text-[48px] font-[700] leading-none mb-2 tabular-nums text-blue-600">95%</div>
                  <div className={`text-[10px] uppercase tracking-[1px] ${theme.isLight ? 'text-gray-500' : 'text-white/60'}`}>User Adoption</div>
                </div>
              </div>

              <PrefetchLink to="/company/contact">
                <PrimaryButton>
                  Schedule a Solution Deep-Dive
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
              </PrefetchLink>
            </motion.div>

            {/* Right - Cards */}
            <div>
              <div className="md:hidden">
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
                >
                  {benefits.map((benefit, idx) => (
                    <div key={`btp-benefit-slide-${idx}`} className="flex-shrink-0 snap-start" style={{ width: 'calc(100vw - 64px)' }}>
                      <div className={`border rounded-sm p-6 h-full transition-all ${
                        theme.isLight ? 'bg-white border-gray-200' : 'bg-white/5 border-white/10'
                      }`}>
                        <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className={`text-[18px] font-bold mb-2 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>{benefit.title}</h3>
                        <p className={`text-[14px] leading-[1.7] ${theme.isLight ? 'text-gray-600' : 'text-slate-400'}`}>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ScrollDots totalDots={benefits.length} activeIndex={activeSlide} variant={theme.isLight ? 'light' : 'dark'} className="mt-6" />
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={`btp-benefit-grid-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-8 rounded-sm border transition-all hover:scale-[1.02] ${
                      theme.isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className={`text-[20px] font-bold mb-3 ${theme.text.primary}`}>{benefit.title}</h3>
                    <p className={`text-[14px] leading-[1.7] ${theme.text.secondary}`}>{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
