import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';
import { PrimaryButton } from './ui/PrimaryButton';
import { useTheme } from '../contexts/ThemeContext';

export function FinalCTA() {
  const { theme } = useTheme();

  return (
    <section className="py-20 sm:py-28 lg:py-40" style={{ backgroundColor: theme.background.light }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] mb-6" style={{ color: theme.text.onLight }}>
                Ready to Transform Your Compliance Management?
              </h2>

              <p className="text-[16px] sm:text-[17px] leading-[1.7] mb-10 sm:mb-12" style={{ color: theme.text.onLightSecondary }}>
                See how ERC can automate your compliance workflows and reduce risk exposure by 70%
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrefetchLink to="/company/contact">
                  <PrimaryButton>
                    Request ERC demo
                  </PrimaryButton>
                </PrefetchLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}