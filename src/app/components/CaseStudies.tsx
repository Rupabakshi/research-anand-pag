import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';
import { useMediaConfig } from '../../config/media';
import { useRef, useState } from 'react';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

// Scroll Dots Component
function ScrollDots({ 
  totalDots, 
  activeIndex, 
  onDotClick,
  variant = 'dark',
  className = ''
}: { 
  totalDots: number; 
  activeIndex: number; 
  onDotClick: (index: number) => void;
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const { theme } = useTheme();
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {Array.from({ length: totalDots }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            idx === activeIndex 
              ? theme.isLight ? 'bg-blue-600 w-8' : 'bg-white w-8'
              : theme.isLight ? 'bg-gray-200' : 'bg-white/30'
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
}

export function CaseStudies() {
  const { config } = useMediaConfig();
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const caseStudies = [
    {
      industry: "Manufacturing",
      company: "Global Manufacturing Corporation",
      image: config.caseStudyImages.manufacturing,
      heroMetric: { value: "45%", label: "Faster processing" },
      metrics: [
        { value: "45%", label: "Faster processing" },
        { value: "17", label: "Countries" },
        { value: "Q1", label: "ROI delivered" }
      ],
      challenge: "Legacy SAP HCM system with inefficient payroll processes across 17 countries causing operational delays",
      outcome: "Harmonized global payroll operations with measurable ROI achieved in first quarter of deployment",
      tags: ["SAP HCM", "Global Deployment"]
    },
    {
      industry: "Enterprise Services",
      company: "Cintas Corporation",
      image: "https://images.unsplash.com/photo-1634468413956-831adf9d5a06?auto=format&fit=crop&q=80&w=1200",
      heroMetric: { value: "500+", label: "External Vendors" },
      metrics: [
        { value: "500+", label: "External Vendors" },
        { value: "5 mo.", label: "Delivery Time" },
        { value: "S/4", label: "Core Integration" }
      ],
      challenge: "Manual email and spreadsheet-based vendor coordination causing operational delays and visibility gaps.",
      outcome: "Secure SAP BTP-based Vendor Portal centralizing all service order scheduling and document workflows.",
      tags: ["SAP BTP", "SAP S/4HANA", "Vendor Portal"],
      link: "/resources/case-studies/cintas"
    },
    {
      industry: "Life Sciences",
      company: "International Life Sciences Firm",
      image: config.caseStudyImages.lifeSciences,
      heroMetric: { value: "95%", label: "Data quality" },
      metrics: [
        { value: "95%", label: "Data quality" },
        { value: "$1.8M", label: "Annual savings" },
        { value: "17+", label: "Countries" }
      ],
      challenge: "Inconsistent master data across multiple SAP instances causing operational inefficiencies",
      outcome: "Centralized master data governance achieving enterprise-wide consistency and accuracy",
      tags: ["Process Factory®", "Master Data"]
    },
    {
      industry: "Energy & Utilities",
      company: "Fortune 500 Utility Company",
      image: config.caseStudyImages.energy,
      heroMetric: { value: "60%", label: "Faster audits" },
      metrics: [
        { value: "60%", label: "Faster audits" },
        { value: "$2.4M", label: "Annual savings" },
        { value: "100%", label: "Compliance rate" }
      ],
      challenge: "Legacy SAP HCM system with inefficient payroll processes across 17 countries causing operational delays",
      outcome: "Harmonized global payroll operations with measurable ROI achieved in first quarter of deployment",
      tags: ["SAP S/4HANA", "Process Factory®"]
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 xl:py-40 bg-white border-y border-[#030213]/5">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px]"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm mb-5 sm:mb-6 lg:mb-8 transition-colors ${
                theme.isLight ? 'bg-gray-100' : 'bg-gray-900/5'
              }`}>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                <span className="text-[10px] sm:text-[11px] font-[700] uppercase tracking-[2px] transition-colors" style={{ color: theme.text.onLight }}>
                  Case Studies
                </span>
              </div>
              
              <h2 className="text-[36px] sm:text-[42px] lg:text-[56px] xl:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] mb-4 sm:mb-5 lg:mb-6 transition-colors" style={{ color: theme.text.onLight }}>
                Client success stories
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.75] transition-colors" style={{ color: theme.text.onLightSecondary }}>
                Real transformation outcomes from Fortune 500 enterprises
              </p>
            </motion.div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden -mx-6 sm:-mx-8">
            <div className="flex gap-4 px-6 sm:px-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2" ref={scrollContainerRef} onScroll={handleScroll}>
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: idx * 0.15,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  className="flex-shrink-0 w-[85vw] sm:w-[75vw] snap-center"
                >
                  <div className={`rounded-sm overflow-hidden transition-all duration-500 ${
                    theme.isLight 
                      ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100' 
                      : 'bg-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10'
                  }`}>
                    
                    {/* Image with Gradient Overlay */}
                    <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                      <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                        className="w-full h-full"
                      >
                        <OptimizedImage
                          src={study.image}
                          alt={study.company}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Industry Badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.3 }}
                        className="absolute top-5 left-5"
                      >
                        <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-sm text-[9px] sm:text-[10px] font-[700] text-gray-900 uppercase tracking-[1.5px] shadow-lg">
                          {study.industry}
                        </span>
                      </motion.div>
                      
                      {/* Hero Metric - Bottom */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.4 }}
                        className="absolute bottom-5 left-5 right-5"
                      >
                        <div className="flex items-end gap-3">
                          <div>
                            <div className="text-[48px] sm:text-[56px] font-[700] text-white leading-[0.9] mb-1">
                              {study.heroMetric.value}
                            </div>
                            <div className="text-[11px] font-[600] text-white/90 uppercase tracking-[1px]">
                              {study.heroMetric.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.5 }}
                      className="p-6"
                    >
                      <h3 className={`text-[22px] sm:text-[24px] font-[700] mb-4 leading-[1.2] transition-colors ${
                        theme.isLight ? 'text-gray-900' : 'text-white'
                      }`}>
                        {study.company}
                      </h3>
                      
                      <PrefetchLink to={study.link || "/resources/case-studies"}>
                        <button
                          className="inline-flex items-center gap-2 px-6 py-3 text-white text-[13px] font-[600] rounded-sm transition-all group shadow-lg"
                          style={{ backgroundColor: theme.cta.primary }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.cta.primaryHover}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.cta.primary}
                        >
                          Read full story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </PrefetchLink>
                    </motion.div>

                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Dot Indicators */}
            <ScrollDots
              totalDots={caseStudies.length}
              activeIndex={activeIndex}
              onDotClick={(idx) => {
                if (scrollContainerRef.current) {
                  const cardWidth = scrollContainerRef.current.offsetWidth * 0.85;
                  scrollContainerRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              variant={theme.isLight ? 'light' : 'dark'}
              className="mt-6"
            />
          </div>

          {/* Desktop: Vertical Stack with Premium Animations */}
          <div className="hidden lg:block space-y-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.12,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -4 }}
                className={`group border rounded-sm overflow-hidden transition-all duration-700 ${
                  theme.isLight 
                    ? 'bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.1)]' 
                    : 'bg-slate-900 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.4)]'
                }`}
              >
                <div className="grid grid-cols-12 gap-0 min-h-[480px]">
                  
                  {/* Image */}
                  <div className="col-span-4 relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.05 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
                      className="w-full h-full"
                    >
                      <OptimizedImage
                        src={study.image}
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000"
                      />
                    </motion.div>
                    
                    {/* Premium Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#030213]/30 via-transparent to-[#030213]/20"></div>
                    
                    {/* Industry Badge */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.3 }}
                      className="absolute top-6 left-6"
                    >
                      <span className="px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-sm text-[10px] font-[700] text-gray-900 uppercase tracking-[1.5px] shadow-xl">
                        {study.industry}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="col-span-8 p-10 xl:p-12 flex flex-col">
                    
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.2 }}
                      className={`text-[28px] xl:text-[30px] font-[700] mb-8 tracking-[-0.01em] transition-colors ${
                        theme.isLight ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {study.company}
                    </motion.h3>

                    {/* All Metrics */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.3 }}
                      className={`grid grid-cols-3 gap-8 mb-8 pb-8 border-b transition-colors ${
                        theme.isLight ? 'border-gray-100' : 'border-white/10'
                      }`}
                    >
                      {study.metrics.map((metric, metricIdx) => (
                        <motion.div 
                          key={metricIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.12 + 0.4 + metricIdx * 0.1 }}
                        >
                          <div className="text-[40px] xl:text-[44px] font-[700] text-blue-600 leading-[1] mb-2">
                            {metric.value}
                          </div>
                          <div className={`text-[12px] font-[600] uppercase tracking-[0.5px] transition-colors ${
                            theme.isLight ? 'text-gray-500' : 'text-slate-400'
                          }`}>
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Challenge & Solution */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.5 }}
                      className="grid grid-cols-2 gap-8 mb-6"
                    >
                      <div>
                        <div className={`text-[11px] font-[700] uppercase tracking-[1px] mb-3 transition-colors ${
                          theme.isLight ? 'text-blue-600' : 'text-slate-500'
                        }`}>
                          Challenge
                        </div>
                        <p className={`text-[15px] leading-[1.7] transition-colors ${
                          theme.isLight ? 'text-gray-700' : 'text-slate-300'
                        }`}>
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <div className={`text-[11px] font-[700] uppercase tracking-[1px] mb-3 transition-colors ${
                          theme.isLight ? 'text-blue-600' : 'text-slate-500'
                        }`}>
                          Solution
                        </div>
                        <p className={`text-[15px] leading-[1.7] transition-colors ${
                          theme.isLight ? 'text-gray-700' : 'text-slate-300'
                        }`}>
                          {study.outcome}
                        </p>
                      </div>
                    </motion.div>

                    {/* Footer */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.6 }}
                      className={`flex items-center justify-between gap-4 pt-6 border-t mt-auto transition-colors ${
                        theme.isLight ? 'border-gray-100' : 'border-white/5'
                      }`}
                    >
                      <div className="flex gap-2">
                        {study.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx}
                            className={`text-[10px] font-[600] uppercase tracking-[1px] px-3 py-1.5 border rounded-sm transition-colors ${
                              theme.isLight ? 'text-gray-600 border-gray-200' : 'text-slate-400 border-white/10'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <PrefetchLink to={study.link || "/resources/case-studies"}>
                        <button
                          className="inline-flex items-center gap-2 px-6 py-3 text-white text-[13px] font-[600] rounded-sm transition-all group shadow-lg"
                          style={{ backgroundColor: theme.cta.primary }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.cta.primaryHover}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.cta.primary}
                        >
                          Read full story
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </PrefetchLink>
                    </motion.div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}