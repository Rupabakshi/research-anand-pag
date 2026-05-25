import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { Factory, TrendingUp, Cog, BarChart3, Network, Zap, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';
import { PrimaryButton, SecondaryButton, EyebrowPill } from '../../components/ui';

export default function Manufacturing() {
  const { theme } = useTheme();
  const challenges = [
    {
      icon: Network,
      title: 'Supply Chain Visibility',
      description: 'Lack of real-time visibility across global supply chain causing inventory issues and production delays'
    },
    {
      icon: Cog,
      title: 'Production Optimization',
      description: 'Manual planning processes unable to respond quickly to demand changes and market shifts'
    },
    {
      icon: BarChart3,
      title: 'Quality Management',
      description: 'Disconnected quality systems making it difficult to maintain consistency across facilities'
    },
    {
      icon: TrendingUp,
      title: 'Asset Performance',
      description: 'Reactive maintenance strategies leading to unplanned downtime and equipment failures'
    }
  ];

  const solutions = [
    {
      title: 'SAP S/4HANA for Manufacturing',
      description: 'End-to-end digital supply chain with real-time production planning, inventory optimization, and predictive analytics',
      benefits: ['35% inventory reduction', 'Real-time demand sensing', 'Integrated planning across plants']
    },
    {
      title: 'Quality Management Integration',
      description: 'Automated quality workflows from raw materials to finished goods with compliance documentation',
      benefits: ['99.5% quality compliance', 'Automated defect tracking', 'Real-time quality metrics']
    },
    {
      title: 'Predictive Maintenance',
      description: 'IoT-enabled asset monitoring with predictive analytics to prevent unplanned downtime',
      benefits: ['40% reduction in downtime', 'Extended equipment life', 'Optimized maintenance costs']
    },
    {
      title: 'Workflow Automation',
      description: 'Process Factory® automation for production approvals, change management, and compliance workflows',
      benefits: ['60% faster approvals', 'Audit-ready documentation', 'Reduced manual errors']
    }
  ];

  const caseStudy = {
    client: 'Fortune 500 Manufacturing Company',
    challenge: 'Global manufacturer struggled with inventory visibility across 40+ facilities, leading to stockouts and excess inventory simultaneously.',
    solution: 'Implemented SAP S/4HANA with integrated supply chain management and real-time analytics dashboards.',
    results: [
      { metric: '35%', label: 'Inventory Reduction' },
      { metric: '92%', label: 'On-Time Delivery' },
      { metric: '$22M', label: 'Working Capital Released' },
      { metric: '48 hrs', label: 'Planning Cycle Time' }
    ]
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>

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
            
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
              >
                <Factory className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  MANUFACTURING
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] xl:text-[64px] 2xl:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] text-white mb-6"
                style={{ hyphens: 'none', wordBreak: 'normal' }}
              >
                <span className="inline-block">Transform Production Into</span>
                <br className="hidden lg:block" /> <span className="whitespace-nowrap">Competitive Advantage</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                SAP solutions that optimize supply chains, improve quality, and enable predictive manufacturing operations
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Challenges - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
                Manufacturing Challenges We Solve
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <challenge.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.65] text-gray-600">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Solutions - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Our Manufacturing Solutions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all"
                >
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/60 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[14px] text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Case Study - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full mb-6 text-[11px] font-semibold uppercase tracking-wider">
                  Success Story
                </div>
                
                <h3 className="text-[28px] sm:text-[36px] font-bold text-gray-900 mb-4">
                  {caseStudy.client}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-[15px] sm:text-[16px] leading-[1.7] text-gray-600">
                      {caseStudy.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-[16px] font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-[15px] sm:text-[16px] leading-[1.7] text-gray-600">
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-[28px] sm:text-[32px] font-bold text-blue-600 mb-1">
                        {result.metric}
                      </div>
                      <div className="text-[12px] text-gray-600 uppercase tracking-wider">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="relative  py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
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
                Optimize Your Manufacturing Operations
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Let's discuss how SAP can transform your production processes and supply chain
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink to="/company/contact">
                  <PrimaryButton>
                    Schedule Consultation
                  </PrimaryButton>
                </PrefetchLink>
                <PrefetchLink to="/solutions/btp-portal">
                  <SecondaryButton>
                    Explore Solutions
                  </SecondaryButton>
                </PrefetchLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}