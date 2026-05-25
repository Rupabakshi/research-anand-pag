import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { MapPin, Briefcase, ArrowRight, GraduationCap, Heart, TrendingUp, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useRef, useState, useEffect } from 'react';
import { JobDrawer } from '../../components/JobDrawer';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function Careers() {
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedJob, setSelectedJob] = useState<typeof jobsWithDetails[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const jobsWithDetails = [
    {
      id: 'sap-consultant-b60',
      title: 'SAP Consultant',
      jobCode: 'B60',
      type: 'Full-time',
      location: '1300 Walnut Hill Lane, Ste. 111, Irving, TX, 75038',
      description: 'Analyzing, Designing, and Configuring new computer software and systems in agreement with the clients or employer\'s specifications. Developing and configuring customized SAP Solutions. Providing SAP system support and end-user training. Assess technical requirements and providing teams with technical guidance. Responsible for performance tuning on all the layers of PIA, Database SQL, and supported SAP architecture. Working with ABAP development team, handling SAP or ERP System, experiencing Analyze Client Business Processes. Troubleshooting and resolving issues to optimize performances. Must be willing to travel to set up systems at various client sites across the nation, and perform feasibility studies.',
      requirements: 'Bachelor\'s degree or its equivalent in IT related field + 60 months experience.',
      email: 'hr@anand-pag.com'
    },
    {
      id: 'sap-consultant-m0',
      title: 'SAP Consultant',
      jobCode: 'M0',
      type: 'Full-time',
      location: '1300 Walnut Hill Lane, Ste. 111, Irving, TX, 75038',
      description: 'Analyzing, Designing, and Configuring new computer software and systems in agreement with the clients or employer\'s specifications. Developing and configuring customized SAP Solutions. Providing SAP system support and end-user training. Assess technical requirements and providing teams with technical guidance. Responsible for performance tuning on all the layers of PIA, Database SQL, and supported SAP architecture. Working with ABAP development team, handling SAP or ERP System, experiencing Analyze Client Business Processes. Troubleshooting and resolving issues to optimize performances. Must be willing to travel to set up systems at various client sites across the nation, and perform feasibility studies.',
      requirements: 'Master\'s degree or its equivalent in IT related field.',
      email: 'hr@anand-pag.com'
    },
    {
      id: 'senior-software-engineer',
      title: 'Senior Software Engineer',
      jobCode: '5093.021',
      type: 'Full-time',
      location: '1300 Walnut Hill Lane, Ste. 111, Irving, TX, 75038 and at various unanticipated locations throughout the U.S.',
      description: 'Work with Oracle PeopleSoft HCM and exp. in NA Payroll, Core HR, Time & Labor, ePerformance, Benefits and Absence Management. Use of SQL/PLSQL, People Tools and Integration Broker, Visual Basic, and ASP.',
      requirements: 'Master\'s degree or equiv. in Mechanical Engineering or related Engineering field. *In lieu of Master\'s degree, any Bachelor\'s plus 5 years of exp. is acceptable.',
      email: 'hr@anand-pag.com'
    },
    {
      id: 'sap-developer',
      title: 'SAP Developer',
      jobCode: '5093.020',
      type: 'Full-time',
      location: '1300 Walnut Hill Lane, Ste. 111, Irving, TX, 75038 and at various unanticipated locations throughout the U.S.',
      description: 'Work with SAP, ABAP workbench and HANA Application, SAP NetWeaver Gateway for Programming. SAP Mobile Platform. SAP ECC business modules.',
      requirements: 'Two years of experience in the position offered or related position. Six months of the aforementioned two years of exp. in: (1) SAP, ABAP workbench and HANA Application, SAP NetWeaver Gateway for Programming; (2) SAP Mobile Platform; and (3) SAP ECC business modules.',
      email: 'hr@anand-pag.com'
    }
  ];

  const jobs = jobsWithDetails.map(job => ({
    title: job.title,
    code: job.jobCode,
    type: job.type,
    location: job.location,
    email: job.email
  }));

  const handleJobClick = (job: typeof jobsWithDetails[0]) => {
    setSelectedJob(job);
    setIsDrawerOpen(true);
  };

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Learn from experts',
      description: 'Work alongside senior engineers and SAP veterans. Real mentorship, real growth.'
    },
    {
      icon: Heart,
      title: 'Work-life balance',
      description: 'Competitive benefits. Time off that\'s actually encouraged.'
    },
    {
      icon: TrendingUp,
      title: 'Career growth',
      description: 'From fresh grads to senior roles. We invest in your development.'
    },
    {
      icon: Users,
      title: 'Collaborative team',
      description: 'Global team that supports each other. Work on challenging, meaningful projects.'
    }
  ];

  // Scroll to specific card
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const containerWidth = container.clientWidth;
    const scrollLeft = index * containerWidth;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  // Navigate prev/next
  const handlePrev = () => {
    if (activeSlide > 0) {
      scrollToCard(activeSlide - 1);
    }
  };

  const handleNext = () => {
    if (activeSlide < benefits.length - 1) {
      scrollToCard(activeSlide + 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Track active slide on scroll and update button states
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const currentIndex = Math.round(scrollLeft / containerWidth);
      
      setActiveSlide(Math.min(Math.max(currentIndex, 0), benefits.length - 1));
      
      // Update scroll button states
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < container.scrollWidth - containerWidth - 10);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [benefits.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Team Photo */}
      <section className="relative  overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center" style={{ backgroundColor: theme.background.dark }}>
        {/* Team Photo Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1690383922983-90d7a4658ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW0lMjBvZmZpY2UlMjBjYXN1YWwlMjBsYXVnaGluZ3xlbnwxfHx8fDE3NzEyNzAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Anand PAG team"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 /85" style={{ backgroundColor: theme.background.dark }}></div>
        </div>

        <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-32 sm:py-40 lg:py-48 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6 sm:mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  WE'RE HIRING
                </span>
              </div>

              {/* Headline */}
              <HeroH1 className="mb-6 sm:mb-8">
                Work that challenges you.<br />
                A team that supports you.
              </HeroH1>

              {/* Subline */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] leading-[1.5] sm:leading-[1.6] text-slate-300 mb-8">
                Build your career in enterprise tech with a team that invests in your growth.
              </p>

              {/* CTA */}
              <a
                href="#open-positions"
                className="inline-flex group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative">View open positions</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Section - Light */}
      <section className="bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Why join us
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 max-w-2xl mx-auto">
                Work on meaningful projects with a team that cares about your success.
              </p>
            </motion.div>

            {/* Benefits - Horizontal Scroll on Mobile, Grid on Desktop */}
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto md:overflow-visible scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory'
                } as React.CSSProperties}
              >
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 lg:gap-10">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    const colors = [
                      { bg: 'bg-blue-500', iconBg: 'bg-blue-50', shadow: 'hover:shadow-blue-500/20' },
                      { bg: 'bg-purple-500', iconBg: 'bg-purple-50', shadow: 'hover:shadow-purple-500/20' },
                      { bg: 'bg-green-500', iconBg: 'bg-green-50', shadow: 'hover:shadow-green-500/20' },
                      { bg: 'bg-orange-500', iconBg: 'bg-orange-50', shadow: 'hover:shadow-orange-500/20' }
                    ];
                    const color = colors[index];
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                        className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-gray-300 hover:shadow-xl cursor-default flex-shrink-0 w-full md:w-auto"
                        style={{
                          scrollSnapAlign: 'start'
                        }}
                      >
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          {/* Icon */}
                          <motion.div 
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${color.iconBg} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-all duration-500`}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${color.bg.replace('bg-', 'text-')}`} />
                          </motion.div>
                          
                          {/* Title */}
                          <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-[700] text-gray-900 mb-3 sm:mb-4">
                            {benefit.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-[14px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-gray-600 max-w-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls - Mobile Only */}
              <div className="md:hidden mt-8 space-y-4">
                {/* Dot Indicators */}
                <div className="flex justify-center gap-2">
                  {benefits.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToCard(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeSlide === index
                          ? 'w-8 h-2 bg-blue-600'
                          : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section - Light */}
      <section id="open-positions" className="bg-gray-50 py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Open positions
              </h2>
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobsWithDetails.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => handleJobClick(job)}
                  className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:border-blue-600/50 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Left: Job Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-[20px] lg:text-[22px] font-[700] text-gray-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[11px] sm:text-[12px] font-mono rounded-full">
                          {job.jobCode}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-[14px] text-gray-600 mb-3">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {job.location.toLowerCase().includes('various') || job.location.toLowerCase().includes('unanticipated')
                              ? `Irving, TX + various locations`
                              : 'Irving, TX'}
                          </span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-[13px] text-gray-500 group-hover:text-blue-600 transition-colors">
                        Click to view full job description →
                      </p>
                    </div>

                    {/* Right: View Details Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJobClick(job);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 group-hover:gap-3"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 sm:mt-16 text-center"
            >
              <div className="inline-block p-8 sm:p-12 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-[20px] sm:text-[24px] font-[700] text-gray-900 mb-3">
                  Don't see the right role?
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-gray-600 mb-6 max-w-xl mx-auto">
                  Send us your resume at <a href="mailto:careers@anand-pag.com" className="text-blue-600 hover:text-blue-700 font-semibold">careers@anand-pag.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Drawer */}
      <JobDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        job={selectedJob}
      />
    </div>
  );
}