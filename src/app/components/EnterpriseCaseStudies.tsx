import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function EnterpriseCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies = [
    {
      client: "Global Manufacturing Leader",
      industry: "Manufacturing",
      challenge: "Disconnected HCM systems across 47 countries creating compliance risks and operational inefficiencies.",
      solution: "Implemented unified SAP HCM platform with Process Factory® automation for regulatory compliance across all regions.",
      results: [
        { metric: "78%", label: "Reduction in compliance audit time" },
        { metric: "$12M", label: "Annual operational savings" },
        { metric: "6 months", label: "Full deployment timeline" }
      ]
    },
    {
      client: "Fortune 100 Healthcare Provider",
      industry: "Healthcare",
      challenge: "Manual regulatory reporting consuming 2,000+ staff hours monthly with high error rates.",
      solution: "Deployed Process Factory® to automate HIPAA and CMS reporting workflows within SAP environment.",
      results: [
        { metric: "94%", label: "Reduction in manual reporting hours" },
        { metric: "99.8%", label: "Compliance accuracy rate" },
        { metric: "4 weeks", label: "Implementation time" }
      ]
    },
    {
      client: "International Energy Corporation",
      industry: "Energy & Utilities",
      challenge: "Legacy SAP system unable to integrate with modern cloud platforms and mobile workforce needs.",
      solution: "Architected Azure-SAP integration with mobile solutions for field operations across 23 countries.",
      results: [
        { metric: "60%", label: "Faster field service resolution" },
        { metric: "$8M", label: "Infrastructure cost savings" },
        { metric: "15,000+", label: "Mobile users deployed" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const activeCase = caseStudies[activeIndex];

  return (
    <section className="relative py-32 lg:py-40 bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-slate-600 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20 lg:mb-32"
          >
            <div className="mb-6">
              <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.015em] text-slate-900 mb-8 max-w-[800px]">
              Proven results for Fortune 500 enterprises
            </h2>
          </motion.div>

          {/* Case Study Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left - Story */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Client info */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {activeCase.client.split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <div className="text-[20px] font-semibold text-slate-900">{activeCase.client}</div>
                      <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                        {activeCase.industry}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-8">
                  <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                    Challenge
                  </div>
                  <p className="text-[18px] lg:text-[20px] leading-[1.6] text-slate-700">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-10">
                  <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                    Solution
                  </div>
                  <p className="text-[18px] lg:text-[20px] leading-[1.6] text-slate-700">
                    {activeCase.solution}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right - Results */}
            <div className="lg:col-span-5">
              <motion.div
                key={`results-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800 rounded-2xl p-8 lg:p-10 sticky top-24"
              >
                <div className="mb-8">
                  <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-400 mb-4">
                    Results
                  </div>
                </div>

                <div className="space-y-8">
                  {activeCase.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    >
                      <div className="text-[40px] lg:text-[48px] font-semibold text-white leading-none mb-2">
                        {result.metric}
                      </div>
                      <div className="text-[16px] text-slate-400 leading-relaxed">
                        {result.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-16 flex items-center justify-center gap-6">
            {caseStudies.map((study, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="group flex flex-col items-center gap-3"
              >
                <div className={`text-[13px] font-mono uppercase tracking-[1.5px] transition-colors ${
                  idx === activeIndex ? 'text-slate-900' : 'text-slate-400'
                } group-hover:text-slate-900`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                  {idx === activeIndex && (
                    <motion.div
                      className="h-full bg-slate-800"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
