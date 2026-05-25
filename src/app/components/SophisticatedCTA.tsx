import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

export function SophisticatedCTA() {
  const { theme } = useTheme();

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.light }}>
      {/* Sophisticated background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(15, 23, 42, 0.8) 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
        }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[12px] font-mono uppercase tracking-[2px] text-slate-600">
                  Ready to Transform Your SAP Operations?
                </span>
              </div>
            </div>

            {/* Headline with gradient */}
            <h2 className="text-[56px] lg:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] mb-8 max-w-[1000px] mx-auto">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Let's discuss your SAP implementation needs
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-[20px] lg:text-[24px] leading-[1.5] text-slate-600 mb-14 max-w-[750px] mx-auto">
              Schedule a consultation with our SAP experts to explore how we can accelerate your digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <PrefetchLink to="/company/contact">
                <button className="group relative px-10 py-5 bg-slate-900 text-white text-[16px] font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02] shadow-xl shadow-slate-900/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    Schedule a Demo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </PrefetchLink>
              <PrefetchLink to="/company/contact">
                <button className="px-10 py-5 bg-white text-slate-900 text-[16px] font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-lg shadow-slate-200/50">
                  Download Capabilities
                </button>
              </PrefetchLink>
            </div>

            {/* Contact info - Glass cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative max-w-[900px] mx-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur" />
              
              <div className="relative bg-slate-50/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center md:text-left">
                    <div className="text-[12px] font-mono uppercase tracking-[2px] text-slate-500 mb-3">
                      Email Us
                    </div>
                    <a href="mailto:info@anandpag.com" className="text-[20px] font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                      info@anandpag.com
                    </a>
                  </div>
                  
                  <div className="text-center md:text-left md:border-l md:border-slate-300 md:pl-8">
                    <div className="text-[12px] font-mono uppercase tracking-[2px] text-slate-500 mb-3">
                      Call Us
                    </div>
                    <a href="tel:+1-555-0123" className="text-[20px] font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}