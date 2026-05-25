import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { ShoppingBag, TrendingUp, Users, Smartphone, BarChart3, CheckCircle, Zap, DollarSign } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';
import { PrimaryButton, SecondaryButton, EyebrowPill } from '../../components/ui';

export default function Retail() {
  const { theme } = useTheme();
  const challenges = [
    {
      icon: ShoppingBag,
      title: 'Omnichannel Integration',
      description: 'Disconnected systems preventing seamless customer experience across online and physical stores'
    },
    {
      icon: BarChart3,
      title: 'Inventory Optimization',
      description: 'Poor demand forecasting leading to stockouts, overstock, and lost sales opportunities'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Fragmented customer data making it difficult to personalize experiences and target effectively'
    },
    {
      icon: TrendingUp,
      title: 'Supply Chain Agility',
      description: 'Slow response to market changes and inability to adapt to shifting consumer preferences'
    }
  ];

  const solutions = [
    {
      title: 'Omnichannel Commerce Platform',
      description: 'Unified commerce solution connecting online, mobile, and in-store experiences with real-time inventory',
      benefits: ['Seamless customer journey', 'Real-time inventory visibility', 'Unified customer data']
    },
    {
      title: 'Demand Forecasting & Planning',
      description: 'AI-powered demand prediction and automated replenishment to optimize inventory levels',
      benefits: ['30% reduction in stockouts', 'Improved inventory turns', 'Reduced carrying costs']
    },
    {
      title: 'Customer Analytics Platform',
      description: '360-degree customer view with predictive analytics for personalized marketing and merchandising',
      benefits: ['Increased customer lifetime value', 'Higher conversion rates', 'Personalized experiences']
    },
    {
      title: 'Store Operations Automation',
      description: 'Process Factory® for automated workflows in pricing, promotions, and store operations',
      benefits: ['Faster price updates', 'Streamlined promotions', 'Improved compliance']
    }
  ];

  const caseStudy = {
    client: 'National Retail Chain',
    challenge: 'Inability to fulfill online orders from nearby stores leading to lost sales and poor customer satisfaction despite having inventory available.',
    solution: 'Implemented SAP omnichannel solution with real-time inventory visibility and ship-from-store capabilities.',
    results: [
      { metric: '28%', label: 'Increase in Online Sales' },
      { metric: '45%', label: 'Faster Order Fulfillment' },
      { metric: '15%', label: 'Inventory Cost Reduction' },
      { metric: '4.6/5', label: 'Customer Satisfaction' }
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
            x: [50, -50, 50],
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
                <ShoppingBag className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  RETAIL
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-6"
              >
                Create Seamless Shopping Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                SAP solutions that unify commerce, optimize inventory, and deliver personalized customer experiences
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
                Retail Challenges We Solve
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
                Our Retail Solutions
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
                Elevate Your Retail Experience
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Let's discuss how SAP can transform your retail operations and customer experience
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