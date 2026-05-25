import { motion } from 'motion/react';
import { TrendingUp, Cog, Users, Headphones } from 'lucide-react';

export function SophisticatedCapabilities() {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "Business Transformation",
      description: "Lean Six Sigma and business process reengineering across order-to-cash, procure-to-pay, and manufacturing workflows. Data-driven analysis identifies bottlenecks and eliminates waste to drive operational excellence.",
      metric: "38%",
      metricLabel: "cycle time reduction"
    },
    {
      icon: Cog,
      title: "Technology Solutions",
      description: "End-to-end enterprise application integration using SAP PI/PO, Dell Boomi, and MuleSoft. Native and hybrid mobile solutions for warehouse management, field service, and executive dashboards with offline-capable architectures.",
      metric: "850+",
      metricLabel: "integrations deployed"
    },
    {
      icon: Users,
      title: "Talent & Delivery",
      description: "Flexible engagement models from staff augmentation to dedicated project teams with 250+ certified consultants. Comprehensive enablement programs including technical SAP certification, end-user adoption, and role-based training curricula.",
      metric: "12,000+",
      metricLabel: "users trained"
    },
    {
      icon: Headphones,
      title: "Managed Services",
      description: "24/7 application management for mission-critical SAP environments. Dedicated technical account managers with <15min response SLA for P1 incidents ensuring business continuity.",
      metric: "99.97%",
      metricLabel: "system availability"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(3, 2, 19, 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(3, 2, 19, 0.8) 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
        }} />
        
        {/* Subtle brand accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#155DFC]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="mb-4 sm:mb-6">
              <span className="text-[11px] sm:text-[32px] font-mono uppercase tracking-[2px] sm:tracking-[3px] text-slate-500 font-semibold">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-[700] leading-[1.1] tracking-[-0.025em] text-[#030213] mb-4 sm:mb-6 max-w-[900px]">
              Enterprise transformation expertise that delivers results
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] text-slate-600 max-w-[750px]">
              From implementation to innovation, comprehensive ERP solutions that drive measurable results across your enterprise.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative h-full bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 hover:border-[#155DFC]/30 hover:shadow-[0_8px_30px_rgba(21,93,252,0.08)] transition-all duration-300"
                >
                  {/* Icon & Metric */}
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#155DFC]/5 border border-[#155DFC]/10">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#155DFC]" strokeWidth={2} />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-[24px] sm:text-[28px] font-[700] text-[#030213] leading-none">
                        {capability.metric}
                      </div>
                      <div className="text-[11px] sm:text-[12px] text-slate-500 mt-1">
                        {capability.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-[700] leading-[1.2] tracking-[-0.02em] text-[#030213] mb-3 sm:mb-4">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-slate-600 mb-4 sm:mb-5">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}