import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function BTPPortalCTA() {
  const { theme } = useTheme();
  return (
    <section className="py-20 sm:py-28 lg:py-40 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: theme.background.dark }}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${theme.isLight ? 'rgba(0,0,0,0.1)' : 'rgba(148, 163, 184, 0.1)'} 1px, transparent 1px), 
                            linear-gradient(90deg, ${theme.isLight ? 'rgba(0,0,0,0.1)' : 'rgba(148, 163, 184, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] mb-8 tracking-[-0.02em]" style={{ color: theme.text.primary }}>
            Transform Your Vendor Operations
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-12 leading-[1.6]" style={{ color: theme.text.secondary }}>
            Ready to modernize your SAP-integrated workflows with a secure cloud-based operating model?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrefetchLink to="/company/contact">
              <button className="group relative px-8 py-4 bg-blue-600 text-white text-[15px] font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50">
                <span className="relative">Request a Consultation</span>
              </button>
            </PrefetchLink>
            <PrefetchLink
              to="/resources/case-studies/cintas"
              className="px-8 py-4 bg-transparent text-[15px] font-semibold rounded-xl border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 transition-all inline-flex items-center justify-center gap-2"
              style={{ color: theme.text.primary }}
            >
              Read Success Story
              <ArrowRight className="w-4 h-4" />
            </PrefetchLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
