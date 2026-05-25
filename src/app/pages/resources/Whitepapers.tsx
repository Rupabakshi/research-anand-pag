import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { FileText, Download, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';

export default function Whitepapers() {
  const { theme } = useTheme();
  const whitepapers = [
    {
      id: 1,
      title: 'SAP S/4HANA Migration: A Strategic Framework for 2026',
      category: 'Digital Transformation',
      icon: TrendingUp,
      description: 'Comprehensive guide to planning and executing successful S/4HANA migrations before the 2027 deadline, including risk mitigation strategies and ROI optimization.',
      pages: 28,
      publicationDate: 'February 2026',
      topics: ['Migration Planning', 'Risk Management', 'Change Management', 'ROI Analysis'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      title: 'Enterprise Regulatory Compliance Automation',
      category: 'Compliance',
      icon: Shield,
      description: 'How leading organizations are leveraging automation to achieve 100% regulatory compliance across utilities, healthcare, and financial services sectors.',
      pages: 35,
      publicationDate: 'January 2026',
      topics: ['Regulatory Framework', 'Automation', 'Audit Readiness', 'Risk Mitigation'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'Workflow Automation ROI: Measuring Business Impact',
      category: 'Process Optimization',
      icon: Zap,
      description: 'Data-driven analysis of workflow automation initiatives showing measurable improvements in efficiency, accuracy, and employee satisfaction.',
      pages: 22,
      publicationDate: 'December 2025',
      topics: ['ROI Metrics', 'Process Mining', 'Efficiency Gains', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    },
    {
      id: 4,
      title: 'Healthcare Revenue Cycle Transformation',
      category: 'Industry Solutions',
      icon: BarChart3,
      description: 'Best practices for healthcare organizations to reduce claim denials, accelerate collections, and improve patient financial experiences.',
      pages: 31,
      publicationDate: 'November 2025',
      topics: ['Revenue Cycle', 'Claim Management', 'Patient Experience', 'Financial Analytics'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop'
    },
    {
      id: 5,
      title: 'Master Data Management Excellence',
      category: 'Data Governance',
      icon: FileText,
      description: 'Strategic approach to master data governance as the foundation for successful digital transformation and SAP implementation.',
      pages: 26,
      publicationDate: 'October 2025',
      topics: ['Data Governance', 'Data Quality', 'MDM Strategy', 'Implementation'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    },
    {
      id: 6,
      title: 'Financial Services Compliance in 2026',
      category: 'Financial Services',
      icon: Shield,
      description: 'Navigating the evolving regulatory landscape in banking and investment services with intelligent automation and real-time compliance monitoring.',
      pages: 40,
      publicationDate: 'September 2025',
      topics: ['Financial Regulation', 'KYC/AML', 'Risk Management', 'Compliance Tech'],
      image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&h=500&fit=crop'
    }
  ];

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
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  THOUGHT LEADERSHIP
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] text-white mb-6"
              >
                Expert Whitepapers & Research
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300"
              >
                In-depth analysis and strategic frameworks for SAP transformation, compliance, and enterprise technology
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* Whitepapers Grid - Light */}
      <section className="relative bg-white py-20 sm:py-28 lg:py-40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {whitepapers.map((paper, index) => {
                const Icon = paper.icon;
                return (
                  <motion.article
                    key={paper.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider">
                        {paper.category}
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Page Count */}
                      <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-3 py-1 rounded-lg text-[12px] font-medium">
                        {paper.pages} Pages
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {paper.title}
                      </h3>

                      <p className="text-[14px] sm:text-[15px] leading-[1.65] text-gray-600 mb-6">
                        {paper.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {paper.topics.map((topic, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-[11px] font-medium rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Meta & Download */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <span className="text-[12px] text-gray-500">
                          Published {paper.publicationDate}
                        </span>
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-[13px] font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
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
                Need Custom Research?
              </h2>
              
              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Our experts can provide tailored analysis and recommendations for your specific business challenges
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <PrefetchLink
                  to="/company/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white text-[14px] sm:text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <span className="relative">Request Consultation</span>
                </PrefetchLink>
                
                <PrefetchLink
                  to="/resources/blog"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  Read Our Blog
                </PrefetchLink>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
