import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Building2, Target, Users, Award, TrendingUp, Shield, Lightbulb, Clock, Globe, CheckCircle, Factory, Heart, Landmark, Pill, Droplet, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { PrefetchLink } from '../../components/PrefetchLink';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function AboutUs() {
  const { theme } = useTheme();
  const [expandedExecutive, setExpandedExecutive] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const stats = [
    { value: 18, label: 'Years of Experience', icon: Clock },
    { value: 500, label: 'Projects Delivered', icon: CheckCircle },
    { value: 50, label: 'SAP Experts', icon: Users },
    { value: '5+', label: 'Industry Verticals', icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer Success',
      description: 'We measure our success by the ROI and efficiency gains our clients achieve with their SAP investments.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our solutions to meet the latest technology changes and industry best practices.'
    },
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'Delivering enterprise-grade solutions with the highest standards of quality and reliability.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Industry veterans with deep domain expertise across utility, finance, healthcare, insurance, and life sciences.'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Focus',
      description: 'Eliminating redundant activities and optimizing business processes for maximum operational efficiency.'
    }
  ];

  const industries = [
    {
      icon: Droplet,
      title: 'Utilities',
      description: 'SAP AMI, meter data management, and operations support systems'
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Finance, accounting, and regulatory compliance solutions'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Patient management, compliance, and healthcare operations'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Policy management, claims processing, and customer service'
    },
    {
      icon: Pill,
      title: 'Life Sciences',
      description: 'R&D operations, regulatory compliance, and quality management'
    }
  ];

  const timeline = [
    {
      year: '2006',
      title: 'Company Founded',
      description: 'Anand PAG Inc. established with a vision to maximize ROI on SAP investments for enterprises.'
    },
    {
      year: '2010',
      title: 'Expanded Capabilities',
      description: 'Launched comprehensive services in HCM, Finance, and Master Data Management.'
    },
    {
      year: '2014',
      title: 'Mobile Innovation',
      description: 'Introduced Process Factory Mobile® for end-to-end mobility solutions.'
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Achieved SAP partner certifications and expanded into healthcare and life sciences.'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Serving Fortune 500 clients with enterprise regulatory compliance and workflow automation.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Centered Content */}
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  OUR MISSION
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ hyphens: 'none', wordBreak: 'normal' }}
              >
                <HeroH1 className="mb-6">
                  <span className="inline-block">Turn Operational Complexity</span>
                  <br className="hidden lg:block" /> Into{' '}
                  <span className="whitespace-nowrap text-blue-400">Competitive Advantage</span>
                </HeroH1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-16 sm:mb-20"
              >
                For nearly two decades, we've powered digital transformation for Fortune 500 leaders across Utilities, Finance, Healthcare, Insurance, and Life Sciences—turning complex SAP investments into competitive advantage.
              </motion.p>
            </div>

            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMG9mZmljZXxlbnwxfHx8fDE3NzEyNTk5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Anand PAG Team"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Stats Row Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 mt-16 sm:mt-20"
            >
              <div className="text-center">
                <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-white mb-1">
                  <AnimatedCounter end={stats[0].value as number} suffix="+" duration={1500} />
                </div>
                <div className="text-[13px] sm:text-[14px] text-slate-400 uppercase tracking-wider">
                  Years
                </div>
              </div>

              <div className="text-center">
                <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-white mb-1">
                  <AnimatedCounter end={stats[1].value as number} suffix="+" duration={1500} />
                </div>
                <div className="text-[13px] sm:text-[14px] text-slate-400 uppercase tracking-wider">
                  Projects
                </div>
              </div>

              <div className="text-center">
                <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold text-white mb-1">
                  <AnimatedCounter end={stats[2].value as number} suffix="+" duration={1500} />
                </div>
                <div className="text-[13px] sm:text-[14px] text-slate-400 uppercase tracking-wider">
                  Experts
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Leadership Team - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 sm:mb-20"
            >
              <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] text-gray-900 mb-6">
                Leadership
              </h2>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.5] text-gray-600 max-w-3xl">
                Industry veterans building the future of enterprise transformation
              </p>
            </motion.div>

            {/* Founder - Full Width Feature */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-20 sm:mb-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Large Photo */}
                <div className="relative group order-1">
                  <div className="relative aspect-[3/4] max-h-[500px] sm:max-h-[600px] lg:max-h-[650px] rounded-3xl overflow-hidden bg-gray-100">
                    <img
                      src="https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/SekharYenamandra.webp"
                      alt="Sekhar Yenamandra"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Blue gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl">
                    <div className="text-[14px] font-semibold uppercase tracking-wider">Founder & CEO</div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-2">
                  <h3 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold leading-[0.95] tracking-[-0.03em] text-gray-900 mb-6">
                    Sekhar Yenamandra
                  </h3>
                  <div className="space-y-4 text-[16px] sm:text-[18px] leading-[1.7] text-gray-600">
                    <p>
                      Founder and CEO of Anand PAG Inc., Sekhar has transformed the company from a boutique software development firm into a recognized pioneer in SAP usability and enterprise regulatory compliance.
                    </p>
                    <p>
                      With 30+ years of experience across Manufacturing, Life Sciences, Utilities, and Public Sector organizations, his technical expertise spans SAP SD, FI, Project Systems, and Workflow. An alumnus of one of India's premier engineering institutes with a degree in Engineering, Sekhar has led 500+ successful implementations for Fortune 500 enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Team - Asymmetric Grid */}
            <div className="mb-20 sm:mb-28">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-12"
              >
                Executive Team
              </motion.h3>

              {/* Grid with varied heights */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    name: 'Robert (Robb) J. Bourland',
                    title: 'Director',
                    bio: 'Energy industry veteran with 33 years of experience in business process and technology integration. Former Director at Southern California Edison where he led SAP implementation, Enterprise Information Management, and Usability initiatives. Harvard Business School and Pepperdine Executive Management graduate. Currently serves on Anand PAG Inc. Board of Directors.',
                    image: 'https://real-serve-public-assets.s3.us-east-1.amazonaws.com/website/robb-bourland.jpg'
                  },
                  {
                    name: '[Executive Name]',
                    title: 'VP of Client Services',
                    bio: 'Client engagement expert focused on delivering measurable ROI through strategic SAP implementations. Leads client success initiatives across utilities, healthcare, and financial services sectors with a track record of driving operational excellence and long-term partnership growth.',
                    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop'
                  },
                  {
                    name: '[Executive Name]',
                    title: 'VP of Operations',
                    bio: 'Operations leader ensuring excellence in project delivery through rigorous quality controls and proven delivery frameworks. Oversees enterprise-scale SAP deployments with focus on on-time delivery, risk mitigation, and continuous improvement across all client engagements.',
                    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=800&fit=crop'
                  }
                ].map((leader, index) => {
                  const isExpanded = expandedExecutive === index;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      {/* Card Container - Fixed aspect ratio */}
                      <div 
                        className={`relative rounded-2xl cursor-pointer transition-all duration-500 aspect-[4/5] ${
                          isExpanded 
                            ? 'shadow-2xl shadow-gray-900/20 ring-2 ring-gray-200' 
                            : 'shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/15 hover:scale-[1.02]'
                        }`}
                        onClick={() => setExpandedExecutive(isExpanded ? null : index)}
                      >
                        {/* Photo Background - Full size when collapsed, thumbnail when expanded */}
                        <motion.div
                          className="absolute overflow-hidden"
                          animate={
                            isExpanded
                              ? { 
                                  top: 24, 
                                  left: 24, 
                                  width: 100, 
                                  height: 100, 
                                  borderRadius: 16 
                                }
                              : { 
                                  top: 0, 
                                  left: 0, 
                                  width: '100%', 
                                  height: '100%', 
                                  borderRadius: 16 
                                }
                          }
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          style={{ zIndex: 10 }}
                        >
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Dark overlay - only when collapsed */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                            animate={{ opacity: isExpanded ? 0 : 0.9 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Blue accent line - only when collapsed */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                            animate={{ opacity: isExpanded ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Name overlay on photo - only when collapsed */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                            animate={{ opacity: isExpanded ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider text-blue-400 mb-2">
                              {leader.title}
                            </div>
                            <h4 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight">
                              {leader.name}
                            </h4>
                          </motion.div>
                        </motion.div>

                        {/* Expanded Bio Content - White background with scrollable text */}
                        <motion.div
                          className="absolute inset-0 bg-white rounded-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isExpanded ? 1 : 0 }}
                          transition={{ duration: 0.4, delay: isExpanded ? 0.2 : 0 }}
                          style={{ 
                            pointerEvents: isExpanded ? 'auto' : 'none',
                            zIndex: 5
                          }}
                          onWheel={(e) => {
                            // Prevent page scroll when scrolling inside the card
                            e.stopPropagation();
                          }}
                        >
                          {/* Header section - Fixed position at top */}
                          <div className="absolute top-0 left-0 right-0 p-6 lg:p-8">
                            <div className="flex items-start gap-4">
                              {/* Spacer for thumbnail (100px width) */}
                              <div className="w-[100px] flex-shrink-0"></div>
                              
                              {/* Title and Name */}
                              <div className="flex-1 pt-1">
                                <div className="font-semibold uppercase tracking-wider text-blue-600 mb-2 text-[10px]">
                                  {leader.title}
                                </div>
                                <h4 className="font-bold text-gray-900 leading-tight text-[15px]">
                                  {leader.name}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* Bio text - Scrollable area with absolute positioning */}
                          <div 
                            className="absolute left-6 right-6 lg:left-8 lg:right-8 bottom-6 lg:bottom-8 overflow-y-auto scrollbar-hide"
                            style={{ top: '140px' }}
                            onWheel={(e) => {
                              const element = e.currentTarget;
                              const isScrollable = element.scrollHeight > element.clientHeight;
                              
                              if (isScrollable) {
                                // Check if at top or bottom
                                const atTop = element.scrollTop === 0;
                                const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
                                
                                // Only prevent default if we're not at the boundaries or scrolling in the available direction
                                if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
                                  e.stopPropagation();
                                }
                              }
                            }}
                          >
                            <p className="text-[14px] sm:text-[15px] leading-[1.7] text-gray-600 pr-2">
                              {leader.bio}
                            </p>
                          </div>

                          {/* Collapse Button */}
                          <button
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                            style={{ zIndex: 30 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedExecutive(null);
                            }}
                          >
                            <ChevronUp className="w-5 h-5" />
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Practice Leaders - Horizontal Scroll Cards */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-12"
              >
                Practice Leaders
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                {[
                  {
                    name: '[Name]',
                    title: 'SAP HCM',
                    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop'
                  },
                  {
                    name: '[Name]',
                    title: 'SAP Finance',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop'
                  },
                  {
                    name: '[Name]',
                    title: 'Utilities',
                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop'
                  },
                  {
                    name: '[Name]',
                    title: 'Healthcare',
                    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop'
                  },
                  {
                    name: '[Name]',
                    title: 'Insurance',
                    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'
                  },
                  {
                    name: '[Name]',
                    title: 'Life Sciences',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
                  }
                ].map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                      
                      {/* Name at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider text-blue-400 mb-1">
                          {leader.title}
                        </div>
                        <div className="text-[15px] sm:text-[16px] font-bold text-white leading-tight">
                          {leader.name}
                        </div>
                      </div>

                      {/* Blue accent line on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values - Dark */}
      <section id="our-values" className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        {/* Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [50, -50, 50],
              y: [-30, 50, -30],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '20%', right: '10%' }}
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300">
                The principles that guide everything we do
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => {
                const isExpanded = expandedValue === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Mobile: Accordion Card */}
                    <div 
                      className="md:hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
                      onClick={() => setExpandedValue(isExpanded ? null : index)}
                    >
                      {/* Collapsed Header */}
                      <div className="flex items-center gap-4 p-5">
                        <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-6 h-6 text-blue-400" strokeWidth={2} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-[18px] font-bold text-white">
                            {value.title}
                          </h3>
                        </div>

                        {/* Chevron */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </motion.div>
                      </div>

                      {/* Expandable Description */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-[76px]">
                          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/60">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Desktop/Tablet: Regular Grid Card */}
                    <div className="hidden md:block bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all">
                      <div className="w-12 h-12 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-blue-400" strokeWidth={2} />
                      </div>
                      
                      <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3">
                        {value.title}
                      </h3>
                      
                      <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/60">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Office Locations - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Our Locations
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600">
                Global presence to serve Fortune 500 enterprises across continents
              </p>
            </motion.div>

            {/* US Offices */}
            <div className="mb-16 sm:mb-20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-8 text-center"
              >
                United States
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                
                {/* Corporate Headquarters */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-xl relative"
                >
                  {/* HQ Badge */}
                  <div className="absolute -top-3 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider">
                    Corporate Headquarters
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6 mt-2">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
                        Texas Office
                      </h4>
                      <p className="text-[13px] text-blue-600 font-semibold mt-1">
                        Coppell, TX
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[14px] sm:text-[15px] leading-[1.7] text-gray-600">
                    <p>
                      <strong className="text-gray-900">Address:</strong><br />
                      3100 Olympus Blvd, #460<br />
                      Coppell, TX 75019
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      +1 (972) 499-8126
                    </p>
                    <p>
                      <strong className="text-gray-900">Fax:</strong><br />
                      +1 (888) 366-9097
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      info@anand-pag.com
                    </p>
                  </div>
                </motion.div>

                {/* California Office */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
                        California Office
                      </h4>
                      <p className="text-[13px] text-blue-600 font-semibold mt-1">
                        San Dimas, CA
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[14px] sm:text-[15px] leading-[1.7] text-gray-600">
                    <p>
                      <strong className="text-gray-900">Address:</strong><br />
                      417 West Allen Avenue, Suite 111<br />
                      San Dimas, CA 91773
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      +1 (972) 499-8126
                    </p>
                    <p>
                      <strong className="text-gray-900">Fax:</strong><br />
                      +1 (888) 366-9097
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      info@anand-pag.com
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* India Offices */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-8 text-center"
              >
                India
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Hyderabad */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[18px] sm:text-[19px] font-bold text-gray-900">
                        Hyderabad
                      </h4>
                      <p className="text-[12px] text-blue-600 font-semibold mt-1">
                        Telangana
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] sm:text-[14px] leading-[1.7] text-gray-600">
                    <p>
                      <strong className="text-gray-900">Address:</strong><br />
                      114/2RT, Prakash Nagar<br />
                      Begumpet, Hyderabad<br />
                      AP 500 016, India
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      +91-962-023-1397
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      info@anand-pag.com
                    </p>
                  </div>
                </motion.div>

                {/* Kakinada */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[18px] sm:text-[19px] font-bold text-gray-900">
                        Kakinada
                      </h4>
                      <p className="text-[12px] text-blue-600 font-semibold mt-1">
                        Andhra Pradesh
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] sm:text-[14px] leading-[1.7] text-gray-600">
                    <p>
                      <strong className="text-gray-900">Address:</strong><br />
                      1st Floor STPI Building<br />
                      Behind District Collector's Office<br />
                      Kakinada, AP 530 001, India
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      +91-962-023-1397
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      info@anand-pag.com
                    </p>
                  </div>
                </motion.div>

                {/* Bangalore */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-[18px] sm:text-[19px] font-bold text-gray-900">
                        Bangalore
                      </h4>
                      <p className="text-[12px] text-blue-600 font-semibold mt-1">
                        Karnataka
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] sm:text-[14px] leading-[1.7] text-gray-600">
                    <p>
                      <strong className="text-gray-900">Address:</strong><br />
                      #119, 8th Cross<br />
                      PAI Layout, Bangalore<br />
                      KA 560 016, India
                    </p>
                    <p>
                      <strong className="text-gray-900">Phone:</strong><br />
                      +91-962-023-1397
                    </p>
                    <p>
                      <strong className="text-gray-900">Email:</strong><br />
                      info@anand-pag.com
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [-50, 50, -50],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Ready to Maximize Your SAP Investment?
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Let's discuss how Anand PAG can help optimize your business processes and drive measurable results.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink
                  to="/company/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="relative">Get in Touch</span>
                </PrefetchLink>
                
                <PrefetchLink
                  to="/solutions/btp-portal"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  Explore Solutions
                </PrefetchLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}