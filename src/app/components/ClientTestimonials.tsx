import { Quote } from 'lucide-react';
import { useMediaConfig } from '../../config/media';
import { motion } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ClientTestimonials() {
  const { config } = useMediaConfig();
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.88;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveSlide(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "Anand PAG's Enterprise Regulatory Compliance solution transformed our audit processes. Their deep understanding of regulatory requirements combined with SAP expertise delivered exactly what we needed.",
      author: "Sarah Chen",
      title: "Chief Financial Officer",
      company: "Fortune 500 Utility Company",
      metric: "60%",
      metricLabel: "Faster audits",
      image: config.testimonialImages.cfo
    },
    {
      quote: "Deep technical knowledge of SAP HCM and ability to optimize complex workflows delivered measurable ROI within the first quarter. Their consultants understood our requirements and translated them into scalable solutions across 17 countries.",
      author: "Michael Rodriguez",
      title: "VP, Global Operations",
      company: "Global Manufacturing Corporation",
      metric: "Q1",
      metricLabel: "ROI achieved",
      image: config.testimonialImages.ceo
    },
    {
      quote: "The multi-country master data initiative gave us the governance and automation we needed to maintain data integrity across 17+ countries. Their Process Factory platform was transformational, and results exceeded our expectations.",
      author: "Dr. James Thompson",
      title: "Chief Information Officer",
      company: "International Life Sciences Firm",
      metric: "95%",
      metricLabel: "Data quality",
      image: config.testimonialImages.executive
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Animated floating shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large slow-moving circles */}
        <motion.div
          className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-50, 75, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%', backgroundColor: theme.accent.ambient1 }}
        />
        <motion.div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [50, -75, 50],
            y: [25, -40, 25],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '40%', right: '10%', backgroundColor: theme.accent.ambient2 }}
        />
        <motion.div
          className="absolute w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [40, -50, 40],
            y: [-25, 50, -25],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '15%', left: '15%', backgroundColor: theme.accent.ambient3 }}
        />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative">
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
                <div
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: theme.isLight ? 'rgb(239,246,255)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${theme.isLight ? 'rgb(191,219,254)' : 'rgba(255,255,255,0.1)'}`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span
                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] font-bold"
                    style={{ color: theme.isLight ? 'rgb(29,78,216)' : 'rgba(255,255,255,0.7)' }}
                  >
                    Client Voices
                  </span>
                </div>
              </div>

              <h2
                className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] mb-6 sm:mb-8"
                style={{ color: theme.isLight ? 'rgb(17,24,39)' : 'rgb(255,255,255)' }}
              >
                What clients say
              </h2>
              <p
                className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.75]"
                style={{ color: theme.isLight ? 'rgb(75,85,99)' : 'rgba(255,255,255,0.6)' }}
              >
                Validated by C-level executives at Fortune 500 companies
              </p>
            </motion.div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden">
            <div 
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              ref={scrollContainerRef}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 snap-start first:ml-0 ml-0"
                  style={{ width: 'calc(88vw)', marginLeft: idx === 0 ? '0' : undefined }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden h-full"
                    style={{
                      transform: activeSlide === idx ? 'scale(1)' : 'scale(0.96)',
                      opacity: activeSlide === idx ? 1 : 0.5,
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {/* Large Profile Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030213]/80" />
                      
                      {/* Metric badge overlay - Glass Style */}
                      <div className="absolute top-4 right-4 bg-white/10 border border-white/20 text-white px-3 py-2 rounded-md backdrop-blur-md">
                        <div className="text-[20px] font-[700] leading-none tabular-nums">
                          {testimonial.metric}
                        </div>
                        <div className="text-[8px] uppercase tracking-[0.5px] font-[600] mt-1 opacity-80">
                          {testimonial.metricLabel}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Author Info - Prominent */}
                      <div className="mb-5">
                        <div className={`text-[20px] font-[700] mb-2 leading-tight transition-colors ${
                          theme.isLight ? 'text-gray-900' : 'text-white'
                        }`}>
                          {testimonial.author}
                        </div>
                        <div className="text-[13px] text-blue-600 font-[600] mb-1">
                          {testimonial.title}
                        </div>
                        <div className={`text-[12px] font-[500] transition-colors ${
                          theme.isLight ? 'text-gray-500' : 'text-white/50'
                        }`}>
                          {testimonial.company}
                        </div>
                      </div>

                      {/* Quote - Secondary */}
                      <div className="relative">
                        <Quote className={`w-6 h-6 mb-2 transition-colors ${
                          theme.isLight ? 'text-gray-200' : 'text-white/10'
                        }`} strokeWidth={1.5} />
                        <p className={`text-[13px] leading-[1.6] line-clamp-4 transition-colors ${
                          theme.isLight ? 'text-gray-700' : 'text-white/60'
                        }`}>
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = scrollContainerRef.current.offsetWidth * 0.88;
                      scrollContainerRef.current.scrollTo({
                        left: idx * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? 'w-8 h-2 bg-blue-600'
                      : theme.isLight ? 'bg-gray-200' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative border rounded-lg overflow-hidden transition-all duration-700 will-change-transform ${
                  theme.isLight 
                    ? 'bg-white border-gray-100 shadow-sm hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.1)]' 
                    : 'bg-white/[0.03] backdrop-blur-xl border-white/10 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_20px_70px_-15px_rgba(59,130,246,0.3)]'
                }`}
              >
                {/* Large Profile Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030213]/80" />
                  
                  {/* Metric badge overlay - Glass Style */}
                  <div className="absolute top-4 right-4 bg-white/10 border border-white/20 text-white px-3 py-2 rounded-md backdrop-blur-md">
                    <div className="text-[20px] font-[700] leading-none tabular-nums">
                      {testimonial.metric}
                    </div>
                    <div className="text-[8px] uppercase tracking-[0.5px] font-[600] mt-1 opacity-80">
                      {testimonial.metricLabel}
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                </div>

                <div className="p-7">
                  {/* Author Info - Prominent */}
                  <div className="mb-6">
                    <div className={`text-[22px] font-[700] mb-2 leading-tight transition-colors ${
                      theme.isLight ? 'text-gray-900' : 'text-white'
                    }`}>
                      {testimonial.author}
                    </div>
                    <div className="text-[13px] text-blue-600 font-[600] mb-1">
                      {testimonial.title}
                    </div>
                    <div className={`text-[12px] font-[500] transition-colors ${
                      theme.isLight ? 'text-gray-500' : 'text-white/50'
                    }`}>
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Quote - Secondary */}
                  <div className="relative">
                    <Quote className={`w-7 h-7 mb-3 transition-colors ${
                      theme.isLight ? 'text-gray-200' : 'text-white/10'
                    }`} strokeWidth={1.5} />
                    <p className={`text-[14px] leading-[1.65] transition-colors ${
                      theme.isLight ? 'text-gray-700' : 'text-white/60'
                    }`}>
                      {testimonial.quote}
                    </p>
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