import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';

export function ProductShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(15, 23, 42, 0.8) 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20 lg:mb-28"
          >
            <div className="mb-8">
              <span className="text-[14px] font-mono uppercase tracking-[4px] text-slate-500 font-semibold">
                Featured Product
              </span>
            </div>
            <h2 className="text-[64px] lg:text-[88px] font-[700] leading-[1.05] tracking-[-0.025em] text-slate-900 mb-8 max-w-[900px]">
              Process Factory®
            </h2>
            <p className="text-[22px] lg:text-[26px] leading-[1.5] text-slate-600 max-w-[750px]">
              Our trademarked compliance automation platform transforms regulatory requirements into streamlined SAP workflows.
            </p>
          </motion.div>

          {/* Asymmetric Layout */}
          <div className="space-y-16 lg:space-y-24">
            {/* Featured Hero Metric - Full Width Focal Point */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-slate-800 p-12 lg:p-20 rounded-sm"
            >
              <div className="max-w-[900px]">
                <div className="text-[96px] lg:text-[128px] font-[700] leading-none tracking-[-0.03em] text-white mb-6">
                  75%
                </div>
                <h3 className="text-[32px] lg:text-[40px] font-[700] leading-[1.15] tracking-[-0.02em] text-white mb-6">
                  Reduction in audit preparation time
                </h3>
                <p className="text-[18px] lg:text-[20px] leading-[1.6] text-slate-300 max-w-[650px]">
                  Fortune 500 clients report dramatic efficiency gains through automated compliance workflows that eliminate manual documentation and streamline audit processes.
                </p>
                
                {/* Progress Indicator - Data Visualization */}
                <div className="mt-12 space-y-4 max-w-[700px]">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[13px] font-mono uppercase tracking-[2px] text-slate-400">Before Process Factory®</span>
                    <span className="text-[13px] font-mono text-slate-400">100%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-sm">
                    <div className="h-full w-full bg-slate-600 rounded-sm"></div>
                  </div>
                  
                  <div className="flex justify-between items-baseline mt-6">
                    <span className="text-[13px] font-mono uppercase tracking-[2px] text-slate-400">After Implementation</span>
                    <span className="text-[13px] font-mono text-white">25%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-sm">
                    <div className="h-full w-1/4 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Asymmetric 60/40 Grid - Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column - 60% - Primary Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="lg:col-span-7"
              >
                <h3 className="text-[28px] lg:text-[32px] font-[700] leading-[1.2] tracking-[-0.02em] text-slate-900 mb-8">
                  Enterprise-grade compliance automation
                </h3>
                <div className="space-y-6 mb-12">
                  <p className="text-[17px] lg:text-[18px] leading-[1.7] text-slate-600">
                    Process Factory® integrates directly with your SAP environment to automatically enforce regulatory requirements, track compliance metrics, and generate audit-ready documentation in real-time.
                  </p>
                  <p className="text-[17px] lg:text-[18px] leading-[1.7] text-slate-600">
                    Built specifically for highly regulated industries including pharmaceuticals, medical devices, and financial services, our platform ensures continuous compliance while reducing operational overhead.
                  </p>
                </div>

                {/* Key Capabilities - Minimal Dividers */}
                <div className="space-y-0">
                  <div className="py-8 border-t border-slate-200">
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h4 className="text-[20px] font-[700] text-slate-900 mb-3">
                          Real-time monitoring
                        </h4>
                        <p className="text-[16px] leading-[1.7] text-slate-600">
                          Continuous surveillance of compliance status across all SAP modules with instant alerting for exceptions.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[32px] font-[700] leading-none text-slate-900">99.9%</div>
                        <div className="text-[12px] text-slate-500 mt-1">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-8 border-t border-slate-200">
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h4 className="text-[20px] font-[700] text-slate-900 mb-3">
                          Automated documentation
                        </h4>
                        <p className="text-[16px] leading-[1.7] text-slate-600">
                          Generate audit trails, compliance reports, and regulatory submissions automatically from system data.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[32px] font-[700] leading-none text-slate-900">5K+</div>
                        <div className="text-[12px] text-slate-500 mt-1">Reports/mo</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-8 border-t border-slate-200">
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h4 className="text-[20px] font-[700] text-slate-900 mb-3">
                          Workflow enforcement
                        </h4>
                        <p className="text-[16px] leading-[1.7] text-slate-600">
                          Embed regulatory requirements directly into business processes to prevent non-compliance before it occurs.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[32px] font-[700] leading-none text-slate-900">&lt;1s</div>
                        <div className="text-[12px] text-slate-500 mt-1">Response</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-8 border-t border-b border-slate-200">
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex-1">
                        <h4 className="text-[20px] font-[700] text-slate-900 mb-3">
                          Regulatory coverage
                        </h4>
                        <p className="text-[16px] leading-[1.7] text-slate-600">
                          Pre-built templates for FDA 21 CFR Part 11, SOX, GDPR, and other global regulatory frameworks.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-[32px] font-[700] leading-none text-slate-900">40+</div>
                        <div className="text-[12px] text-slate-500 mt-1">Frameworks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - 40% - Supporting Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 space-y-8"
              >
                {/* Stat Card 1 - Micro Bar Chart */}
                <div className="bg-slate-50 p-8">
                  <div className="text-[56px] lg:text-[64px] font-[700] leading-none tracking-[-0.02em] text-slate-900 mb-4">
                    100%
                  </div>
                  <p className="text-[17px] leading-[1.6] text-slate-600 mb-6">
                    Automated compliance workflows
                  </p>
                  
                  {/* Micro Chart - Workflow Automation */}
                  <div className="space-y-3 pt-6 border-t border-slate-200">
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] text-slate-600">Document generation</span>
                        <span className="text-[12px] font-mono text-slate-900">100%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200">
                        <div className="h-full w-full bg-slate-800"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] text-slate-600">Audit trail capture</span>
                        <span className="text-[12px] font-mono text-slate-900">100%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200">
                        <div className="h-full w-full bg-slate-800"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] text-slate-600">Exception alerting</span>
                        <span className="text-[12px] font-mono text-slate-900">100%</span>
                      </div>
                      <div className="h-1.5 bg-slate-200">
                        <div className="h-full w-full bg-slate-800"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat Card 2 - Timeline Indicator */}
                <div className="bg-slate-50 p-8">
                  <div className="text-[56px] lg:text-[64px] font-[700] leading-none tracking-[-0.02em] text-slate-900 mb-4">
                    24/7
                  </div>
                  <p className="text-[17px] leading-[1.6] text-slate-600 mb-6">
                    Real-time compliance monitoring
                  </p>
                  
                  {/* Timeline Visualization */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-800"></div>
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <div className="w-2 h-2 bg-slate-800"></div>
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <div className="w-2 h-2 bg-slate-800"></div>
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <div className="w-2 h-2 bg-slate-800"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                      <span>00:00</span>
                      <span>08:00</span>
                      <span>16:00</span>
                      <span>24:00</span>
                    </div>
                  </div>
                </div>

                {/* Feature Highlight - Comparison */}
                <div className="border-t-2 border-slate-900 pt-8">
                  <div className="mb-6">
                    <span className="text-[12px] font-mono uppercase tracking-[3px] text-slate-500 font-semibold">
                      SAP Certified Integration
                    </span>
                  </div>
                  
                  {/* Stat Comparison */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline pb-3 border-b border-slate-200">
                      <span className="text-[14px] text-slate-600">S/4HANA</span>
                      <span className="text-[16px] font-[700] text-slate-900">Native</span>
                    </div>
                    <div className="flex justify-between items-baseline pb-3 border-b border-slate-200">
                      <span className="text-[14px] text-slate-600">ECC 6.0+</span>
                      <span className="text-[16px] font-[700] text-slate-900">Certified</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[14px] text-slate-600">Cloud Platform</span>
                      <span className="text-[16px] font-[700] text-slate-900">Supported</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA - Asymmetric Placement */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-start pt-8"
            >
              <PrefetchLink to="/solutions/process-factory">
                <button className="px-8 py-4 bg-slate-800 text-white text-[15px] font-semibold rounded-sm hover:bg-slate-800 transition-colors">
                  Learn More About Process Factory®
                </button>
              </PrefetchLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}