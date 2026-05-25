import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';
import { PrimaryButton } from './ui/PrimaryButton';
import { useTheme } from '../contexts/ThemeContext';

export function ProcessFactoryCTA() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] mb-6" style={{ color: theme.text.primary }}>
                See How Process Factory® Transforms Your Operations
              </h2>

              <p className="text-[16px] sm:text-[17px] leading-[1.7] mb-10 sm:mb-12" style={{ color: theme.text.secondary }}>
                Join Fortune 500 companies deploying enterprise workflows in weeks instead of years—while reducing costs by 40%
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
                <PrefetchLink to="/company/contact">
                  <PrimaryButton>
                    Request Process Factory® Demo
                  </PrimaryButton>
                </PrefetchLink>
                <PrefetchLink to="/company/contact">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-[14px] sm:text-[15px] font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                    Download Executive Overview
                  </button>
                </PrefetchLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}