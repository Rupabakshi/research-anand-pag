import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function BTPPortalMetrics() {
  const { theme } = useTheme();
  const metrics = [
    { label: 'Implementation', value: '4-5 Months', sub: 'Rapid enterprise delivery' },
    { label: 'Vendor Network', value: '500+', sub: 'Active external partners' },
    { label: 'Service Volume', value: '1,000+', sub: 'Monthly orders processed' },
    { label: 'PDF Generation', value: 'Seconds', sub: 'High-volume batching' },
  ];

  return (
    <section className={`py-12 border-y transition-colors duration-500 ${theme.isLight ? 'bg-white border-gray-100' : 'bg-slate-950 border-white/5'}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric, i) => (
              <motion.div
                key={`btp-metric-item-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <div className={`text-[11px] font-bold uppercase tracking-[2px] mb-2 ${theme.isLight ? 'text-gray-500' : 'text-slate-400'}`}>{metric.label}</div>
                <div className={`text-[32px] sm:text-[40px] font-bold leading-none mb-2 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>{metric.value}</div>
                <div className={`text-[14px] ${theme.isLight ? 'text-gray-500' : 'text-slate-400'}`}>{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
