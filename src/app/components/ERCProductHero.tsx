import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';
import { PrimaryButton, SecondaryButton, EyebrowPill, HeroH1 } from './ui';
import { useTheme } from '../contexts/ThemeContext';

export function ERCProductHero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }} 
        />
      </div>

      {/* Subtle Ambient Light - minimal */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10 lg:mb-6"
            >
              <EyebrowPill>
                Enterprise Regulatory Compliance
              </EyebrowPill>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <HeroH1 className="mb-8 sm:mb-10 lg:mb-8">
                Automate Compliance,<br className="hidden sm:block" /> Eliminate Risk
              </HeroH1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-12 sm:mb-14 lg:mb-12"
            >
              Centralize compliance management across all regulatory frameworks with automated monitoring, real-time alerts, and comprehensive reporting.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <PrefetchLink to="/company/contact">
                <PrimaryButton>
                  Request Demo
                </PrimaryButton>
              </PrefetchLink>
              <SecondaryButton>
                Watch Video
              </SecondaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}