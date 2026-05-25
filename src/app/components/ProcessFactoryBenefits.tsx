import { motion } from 'motion/react';
import { Clock, TrendingDown, Building2, Zap } from 'lucide-react';

export function ProcessFactoryBenefits() {
  const benefits = [
    {
      icon: Clock,
      metric: "60",
      unit: "Days",
      label: "Deployment Time",
      comparison: "vs 18 months"
    },
    {
      icon: TrendingDown,
      metric: "40%",
      unit: "",
      label: "Cost Reduction",
      comparison: "vs custom builds"
    },
    {
      icon: Building2,
      metric: "150+",
      unit: "",
      label: "Enterprise Clients",
      comparison: "Fortune 500"
    },
    {
      icon: Zap,
      metric: "25-40%",
      unit: "",
      label: "Time Savings",
      comparison: "per workflow"
    }
  ];

  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-40">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
              Why Fortune 500 Operations Leaders Choose Process Factory®
            </h2>
          </motion.div>

          {/* Benefit Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={2} />
                </div>

                {/* Metric */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[0.9] tracking-[-0.02em] text-gray-900">
                    {benefit.metric}
                    {benefit.unit && <span className="text-[16px] sm:text-[20px] lg:text-[24px] text-gray-600 ml-1">{benefit.unit}</span>}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-[14px] sm:text-[16px] lg:text-[17px] font-bold text-gray-900 mb-1 sm:mb-2">
                  {benefit.label}
                </h3>

                {/* Comparison text */}
                <p className="text-[11px] sm:text-[13px] text-gray-500">
                  {benefit.comparison}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}