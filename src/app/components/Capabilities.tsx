import { motion } from 'motion/react';
import { Database, TrendingUp, Shield, Zap, Users, BarChart3 } from 'lucide-react';

export function Capabilities() {
  const capabilities = [
    {
      icon: Database,
      title: 'SAP Implementation',
      description: 'Full lifecycle SAP implementation services from planning and design to deployment and support.',
      metric: 'Average 6-month timeline'
    },
    {
      icon: TrendingUp,
      title: 'S/4HANA Migration',
      description: 'Seamless migration to SAP S/4HANA with minimal disruption and maximum business value.',
      metric: '40% faster processing'
    },
    {
      icon: Shield,
      title: 'Integration Services',
      description: 'Connect SAP with your existing systems for unified data flow and business processes.',
      metric: '100% data integrity'
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Streamline workflows and eliminate bottlenecks through SAP process automation.',
      metric: '60% efficiency gain'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Comprehensive training and adoption programs to ensure successful SAP deployment.',
      metric: '95% user adoption'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Advanced SAP analytics and real-time reporting for data-driven decision making.',
      metric: '3x faster insights'
    },
  ];

  return (
    <section className="py-24 bg-white">
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
              Comprehensive SAP Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end SAP solutions designed to transform your business operations and drive measurable results.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-8 h-full hover:border-blue-300 hover:shadow-xl transition-all">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {capability.description}
                    </p>

                    {/* Metric */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm font-semibold text-blue-600">
                        {capability.metric}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}