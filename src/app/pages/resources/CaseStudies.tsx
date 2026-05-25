import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowRight, TrendingUp, Clock, Users, CheckCircle, Zap, DollarSign, BarChart3, Shield, FileText } from "lucide-react";
import { PrefetchLink } from '../../components/PrefetchLink';
import { HeroH1, EyebrowPill } from '../../components/ui';

export default function CaseStudies() {
  const { theme } = useTheme();
  const caseStudies = [
    {
      id: 1,
      category: 'Utilities',
      title: 'Major California Utility Transforms Meter Data Management',
      client: 'Fortune 100 Electric Utility',
      challenge: 'Legacy AMI system unable to handle 5+ million smart meters with real-time data processing requirements and regulatory compliance demands.',
      solution: 'Implemented SAP Utilities with custom ERC® framework for automated meter-to-cash processes, enabling real-time data validation and exception handling.',
      results: [
        { metric: '99.7%', label: 'Data Accuracy', icon: CheckCircle },
        { metric: '65%', label: 'Processing Time Reduction', icon: Clock },
        { metric: '$12M', label: 'Annual Savings', icon: DollarSign },
        { metric: '5M+', label: 'Meters Managed', icon: Zap }
      ],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      industry: 'Energy & Utilities',
      timeline: '18 months',
      teamSize: '12 consultants'
    },
    {
      id: 7,
      category: 'Enterprise Services',
      title: 'Fortune 500 Leader Modernizes Vendor Service Operations',
      client: 'Cintas Corporation',
      challenge: 'Manual, fragmented vendor coordination process relying on email and spreadsheets, causing visibility gaps and billing delays.',
      solution: 'Designed and delivered a secure SAP BTP-based Vendor Portal integrated with SAP S/4HANA for centralized order management and document workflows.',
      results: [
        { metric: '500+', label: 'External Vendors', icon: Users },
        { metric: '4-5 mo.', label: 'Implementation', icon: Clock },
        { metric: '100%', label: 'SAP Integrated', icon: CheckCircle },
        { metric: 'High', label: 'PDF Volume', icon: FileText }
      ],
      image: 'https://images.unsplash.com/photo-1634468413956-831adf9d5a06?auto=format&fit=crop&q=80&w=1200',
      industry: 'Fire & Safety Services',
      timeline: '5 months',
      teamSize: 'Focused Delivery Team',
      link: '/resources/case-studies/cintas'
    },
    {
      id: 2,
      category: 'Healthcare',
      title: 'Healthcare System Streamlines Patient Revenue Cycle',
      client: 'Top 10 U.S. Hospital Network',
      challenge: 'Fragmented billing systems across 45 hospitals creating compliance risks, revenue leakage, and patient dissatisfaction with billing processes.',
      solution: 'Deployed Process Factory® Mobile for end-to-end revenue cycle automation with integrated compliance workflows and real-time charge capture.',
      results: [
        { metric: '42%', label: 'Faster Collections', icon: TrendingUp },
        { metric: '89%', label: 'First-Pass Claim Accuracy', icon: CheckCircle },
        { metric: '$28M', label: 'Recovered Revenue', icon: DollarSign },
        { metric: '35%', label: 'Staff Efficiency Gain', icon: Users }
      ],
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
      industry: 'Healthcare',
      timeline: '14 months',
      teamSize: '15 consultants'
    },
    {
      id: 3,
      category: 'Financial Services',
      title: 'Investment Bank Achieves Real-Time Financial Compliance',
      client: 'Global Investment Banking Firm',
      challenge: 'Manual compliance processes unable to keep pace with regulatory changes across multiple jurisdictions, creating audit risks and operational bottlenecks.',
      solution: 'Implemented ERC® Enterprise Regulatory Compliance framework with automated workflow routing, audit trails, and real-time regulatory reporting.',
      results: [
        { metric: '100%', label: 'Regulatory Compliance', icon: Shield },
        { metric: '80%', label: 'Process Automation', icon: Zap },
        { metric: '55%', label: 'Audit Preparation Time Saved', icon: Clock },
        { metric: '0', label: 'Compliance Violations', icon: CheckCircle }
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      industry: 'Financial Services',
      timeline: '12 months',
      teamSize: '10 consultants'
    },
    {
      id: 4,
      category: 'Life Sciences',
      title: 'Pharmaceutical Leader Modernizes R&D Operations',
      client: 'Top 5 Global Pharmaceutical Company',
      challenge: 'Disconnected lab systems and manual data entry causing delays in drug development cycles and compliance documentation for FDA submissions.',
      solution: 'Integrated SAP workflow automation with lab systems and regulatory compliance modules for seamless data capture and automated submission preparation.',
      results: [
        { metric: '6 mo.', label: 'Reduced Development Cycle', icon: Clock },
        { metric: '95%', label: 'Data Integrity Score', icon: CheckCircle },
        { metric: '$45M', label: 'Cost Avoidance', icon: DollarSign },
        { metric: '100%', label: 'FDA Submission Success', icon: TrendingUp }
      ],
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
      industry: 'Life Sciences',
      timeline: '20 months',
      teamSize: '18 consultants'
    },
    {
      id: 5,
      category: 'Insurance',
      title: 'Insurance Provider Transforms Claims Processing',
      client: 'National Insurance Provider',
      challenge: 'Average claims processing time of 45 days creating customer dissatisfaction and competitive disadvantage in rapidly evolving insurance market.',
      solution: 'Deployed intelligent workflow automation with Process Factory® enabling straight-through processing for routine claims and smart routing for complex cases.',
      results: [
        { metric: '12 days', label: 'Average Claims Processing', icon: Clock },
        { metric: '73%', label: 'Reduction in Processing Time', icon: TrendingUp },
        { metric: '4.8/5', label: 'Customer Satisfaction Score', icon: Users },
        { metric: '$18M', label: 'Operational Savings', icon: DollarSign }
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      industry: 'Insurance',
      timeline: '10 months',
      teamSize: '8 consultants'
    },
    {
      id: 6,
      category: 'Manufacturing',
      title: 'Manufacturer Optimizes Global Supply Chain',
      client: 'Fortune 500 Manufacturing Company',
      challenge: 'Lack of real-time visibility across global supply chain causing inventory issues, production delays, and inability to respond to market changes.',
      solution: 'Implemented SAP S/4HANA with integrated supply chain management and real-time analytics dashboards for predictive inventory optimization.',
      results: [
        { metric: '35%', label: 'Inventory Reduction', icon: TrendingUp },
        { metric: '92%', label: 'On-Time Delivery Rate', icon: CheckCircle },
        { metric: '$22M', label: 'Working Capital Released', icon: DollarSign },
        { metric: '48 hrs', label: 'Planning Cycle Time', icon: Clock }
      ],
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop',
      industry: 'Manufacturing',
      timeline: '16 months',
      teamSize: '14 consultants'
    }
  ];

  const industries = ['All Industries', 'Utilities', 'Healthcare', 'Financial Services', 'Life Sciences', 'Insurance', 'Manufacturing'];

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

        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 50, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Centered Content */}
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  CLIENT SUCCESS
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <HeroH1 className="mb-6">
                  Proven Results Across Industries
                </HeroH1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                See how Fortune 500 enterprises achieve measurable ROI through strategic SAP transformation with Anand PAG Inc.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies Grid - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Case Studies */}
            <div className="space-y-20 sm:space-y-28">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image - Alternating sides */}
                  <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-wider">
                        {study.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-600">
                        {study.industry}
                      </span>
                    </div>

                    <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                      {study.title}
                    </h2>

                    <p className="text-[14px] text-blue-600 font-semibold mb-6">
                      {study.client}
                    </p>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-[16px] font-bold text-gray-900 mb-2">The Challenge</h3>
                      <p className="text-[15px] sm:text-[16px] leading-[1.7] text-gray-600">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h3 className="text-[16px] font-bold text-gray-900 mb-2">Our Solution</h3>
                      <p className="text-[15px] sm:text-[16px] leading-[1.7] text-gray-600">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="text-[24px] sm:text-[28px] font-bold text-blue-600 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-[12px] sm:text-[13px] text-gray-600 uppercase tracking-wider">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-6 text-[13px] text-gray-600">
                      <div>
                        <span className="font-semibold text-gray-900">Timeline:</span> {study.timeline}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Team:</span> {study.teamSize}
                      </div>
                    </div>

                    {study.link && (
                      <div className="mt-8">
                        <PrefetchLink
                          to={study.link}
                          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </PrefetchLink>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
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
                Ready to Achieve Similar Results?
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Let's discuss how we can help transform your SAP investment into measurable business value.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink
                  to="/company/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="relative">Schedule a Consultation</span>
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