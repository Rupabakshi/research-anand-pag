import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Settings, Wrench, Smartphone, GraduationCap, Users, Headphones } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';

export function EnterpriseCapabilities() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const capabilities = [
    {
      number: "01",
      icon: Settings,
      title: "Process Optimization",
      description: "Streamline operations across HCM, Finance, Healthcare, and Work Management with proven methodologies that reduce complexity and accelerate business outcomes.",
      tags: ["HCM", "Finance", "Healthcare", "Work Management"]
    },
    {
      number: "02",
      icon: Wrench,
      title: "Systems Integration",
      description: "Connect SAP seamlessly with Azure, SharePoint, Salesforce, and enterprise platforms. Build unified data flows that eliminate silos.",
      tags: ["Azure", "SharePoint", "Salesforce", "GetThere"]
    },
    {
      number: "03",
      icon: Smartphone,
      title: "Mobility Solutions",
      description: "Deploy enterprise mobile applications with SAP Mobile, Microsoft Intune, and SAP Afaria. Empower your workforce anywhere.",
      tags: ["SAP Mobile", "Intune", "Afaria"]
    },
    {
      number: "04",
      icon: GraduationCap,
      title: "Software Services",
      description: "Global delivery, comprehensive training, certification programs, and business process reengineering to maximize your SAP investment.",
      tags: ["Training", "Certification", "Global Delivery"]
    },
    {
      number: "05",
      icon: Users,
      title: "Resource Management",
      description: "On-demand access to certified project managers, business analysts, and SAP developers on a time & materials basis.",
      tags: ["Project Managers", "Analysts", "Developers"]
    },
    {
      number: "06",
      icon: Headphones,
      title: "Managed Services",
      description: "End-to-end IT operations including network management, workplace services, and data center operations with 24/7 support.",
      tags: ["IT Operations", "Network", "Data Center"]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-slate-600 rounded-full blur-[200px]" />
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
                Key Capabilities
              </span>
            </div>
            <h2 className="text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.015em] text-slate-900 mb-8 max-w-[800px]">
              Maximize ROI on SAP investments
            </h2>
            <p className="text-[20px] lg:text-[22px] leading-[1.5] text-slate-600 max-w-[700px]">
              End-to-end solutions in HCM, SD, FI, and Master Data Management, suited for the latest technology changes in your industry.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="group"
                >
                  <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                    {/* Number Label */}
                    <div className="mb-6">
                      <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-400">
                        [{capability.number}]
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-800 rounded-xl group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[28px] lg:text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-slate-900 mb-4">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[16px] lg:text-[18px] leading-[1.6] text-slate-600 mb-6">
                      {capability.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {capability.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-[13px] font-medium text-slate-700 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Process Factory CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 lg:mt-32"
          >
            <div className="bg-slate-800 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 max-w-[700px]">
                <div className="mb-6">
                  <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-400">
                    Featured Product
                  </span>
                </div>
                <h3 className="text-[36px] lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.015em] text-white mb-6">
                  Process Factory®
                </h3>
                <p className="text-[18px] lg:text-[20px] leading-[1.6] text-slate-300 mb-8">
                  Our trademarked compliance automation platform transforms regulatory requirements into streamlined SAP workflows, reducing audit preparation time by 75%.
                </p>
                <PrefetchLink to="/solutions/process-factory">
                  <button className="px-6 py-3.5 bg-white text-slate-900 text-[15px] font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                    Learn More About Process Factory®
                  </button>
                </PrefetchLink>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}