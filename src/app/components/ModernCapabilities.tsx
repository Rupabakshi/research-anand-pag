import { motion } from 'motion/react';
import { Database, TrendingUp, Shield, Zap, Users, BarChart3 } from 'lucide-react';

export function ModernCapabilities() {
  const capabilities = [
    {
      icon: Database,
      title: 'SAP Implementation',
      description: 'Full lifecycle SAP implementation from planning to deployment.',
      metric: '6-month timeline',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'S/4HANA Migration',
      description: 'Seamless migration with minimal disruption and maximum value.',
      metric: '40% faster processing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Integration Services',
      description: 'Connect SAP with existing systems for unified data flow.',
      metric: '100% data integrity',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Process Optimization',
      description: 'Streamline workflows through SAP process automation.',
      metric: '60% efficiency gain',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Comprehensive training for successful SAP deployment.',
      metric: '95% user adoption',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Advanced analytics for data-driven decision making.',
      metric: '3x faster insights',
      gradient: 'from-rose-500 to-red-500'
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                Comprehensive SAP Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end expertise designed to transform operations and drive measurable results.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Gradient glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-8 h-full hover:shadow-2xl hover:border-slate-300 transition-all duration-300">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {capability.description}
                    </p>

                    {/* Metric with gradient */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className={`text-sm font-bold bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent`}>
                        {capability.metric}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${capability.gradient}`} />
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