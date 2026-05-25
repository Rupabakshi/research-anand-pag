import { motion } from 'motion/react';
import { ArrowRight, Building2, ShoppingCart, HeartPulse } from 'lucide-react';
import { Button } from './ui/button';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: Building2,
      client: 'Global Manufacturing Leader',
      industry: 'Manufacturing',
      challenge: 'Legacy SAP system causing operational inefficiencies across 12 manufacturing facilities.',
      solution: 'S/4HANA migration with integrated Master Data Management and real-time analytics.',
      results: [
        { metric: '$8.5M', label: 'Annual cost savings' },
        { metric: '45%', label: 'Process efficiency' },
        { metric: '6 months', label: 'Implementation' },
      ],
    },
    {
      icon: ShoppingCart,
      client: 'Retail Enterprise',
      industry: 'Retail & Consumer Goods',
      challenge: 'Disconnected inventory across 500+ retail locations leading to stockouts.',
      solution: 'SAP SD optimization with predictive analytics and automated replenishment.',
      results: [
        { metric: '62%', label: 'Inventory cost reduction' },
        { metric: '99.2%', label: 'Order accuracy' },
        { metric: '4 months', label: 'Time to ROI' },
      ],
    },
    {
      icon: HeartPulse,
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Compliance requirements and patient data management across multi-state operations.',
      solution: 'SAP HCM implementation with HIPAA-compliant data governance.',
      results: [
        { metric: '100%', label: 'Compliance achievement' },
        { metric: '$3.2M', label: 'Cost avoidance' },
        { metric: '35%', label: 'Admin time saved' },
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-slate-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations, measurable impact. See how we've helped leading organizations optimize their SAP investments.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-10">
                    {/* Left: Company Info */}
                    <div className="lg:col-span-1">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {study.client}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">
                        {study.industry}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                            Challenge
                          </p>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                            Solution
                          </p>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="lg:col-span-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-6">
                        Results & Impact
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center md:text-left">
                            <div className="text-5xl font-bold text-blue-600 mb-2">
                              {result.metric}
                            </div>
                            <div className="text-slate-600">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                        <Button 
                          variant="ghost" 
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold"
                        >
                          Read Full Case Study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 font-semibold">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}