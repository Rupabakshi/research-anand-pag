import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';

export function PremiumCaseStudies() {
  const caseStudies = [
    {
      company: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Outdated SAP ECC system causing operational inefficiencies across 12 global manufacturing facilities with $2B annual revenue.',
      solution: 'Complete S/4HANA migration with integrated master data management, real-time analytics, and process automation.',
      metrics: [
        { value: '$8.5M', label: 'Annual cost savings', highlight: true },
        { value: '45%', label: 'Process efficiency increase' },
        { value: '6 months', label: 'Implementation timeline' },
      ],
      featured: true,
      image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzcwOTMwNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      company: 'Enterprise Retail Group',
      industry: 'Retail & Consumer Goods',
      challenge: 'Disconnected inventory management across 500+ retail locations leading to stockouts and excess inventory costs.',
      solution: 'SAP SD module optimization with predictive analytics and automated inventory replenishment system.',
      metrics: [
        { value: '62%', label: 'Inventory cost reduction', highlight: true },
        { value: '99.2%', label: 'Order fulfillment accuracy' },
        { value: '4 months', label: 'Time to ROI' },
      ],
      image: 'https://images.unsplash.com/photo-1759197894183-ffffa3c7fcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGludmVudG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTMwNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      company: 'Healthcare Provider Network',
      industry: 'Healthcare',
      challenge: 'Complex compliance requirements and patient data management across multi-state healthcare operations.',
      solution: 'SAP HCM implementation with HIPAA-compliant data governance and integrated patient management workflows.',
      metrics: [
        { value: '100%', label: 'Regulatory compliance', highlight: true },
        { value: '$3.2M', label: 'Annual cost avoidance' },
        { value: '35%', label: 'Administrative time saved' },
      ],
      image: 'https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDkzMDUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Light sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Case Studies
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-slate-900 mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real business transformations with measurable impact for industry-leading organizations.
            </p>
          </motion.div>

          {/* Case Studies Grid - Metrics First Design */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Featured Case - Takes Full Width First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                
                {/* Featured badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-600/30">
                    Featured Case
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 relative z-10">
                  {/* Left - Big Metrics */}
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-700 text-xs font-semibold uppercase tracking-wide rounded-full mb-6">
                      {caseStudies[0].industry}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-8">
                      {caseStudies[0].company}
                    </h3>

                    {/* Hero Metrics */}
                    <div className="space-y-6">
                      {caseStudies[0].metrics.map((metric, idx) => (
                        <div key={idx} className={`${metric.highlight ? 'bg-white border border-blue-200 rounded-xl p-6 shadow-lg shadow-blue-100/50' : ''}`}>
                          <div className={`${metric.highlight ? 'text-5xl text-blue-700' : 'text-4xl text-slate-900'} font-bold mb-2`}>
                            {metric.value}
                          </div>
                          <div className="text-slate-600 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Story */}
                  <div className="flex flex-col justify-center">
                    {/* Industry Photo */}
                    <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                      <OptimizedImage
                        src={caseStudies[0].image}
                        alt={caseStudies[0].industry}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
                          Challenge
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {caseStudies[0].challenge}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
                          Solution
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {caseStudies[0].solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Two Supporting Cases */}
            {caseStudies.slice(1).map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full flex flex-col">
                  {/* Industry Photo at Top */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={study.image}
                      alt={study.industry}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold uppercase tracking-wide rounded-full">
                        {study.industry}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">
                      {study.company}
                    </h3>

                    {/* Metrics First - Compact */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`${metric.highlight ? 'text-3xl text-blue-700' : 'text-2xl text-slate-900'} font-bold mb-1`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-600 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Story - Compact */}
                    <div className="space-y-4 flex-grow">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                          Challenge
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                          Solution
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40">
              <span className="font-semibold">View All Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}