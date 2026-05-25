import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';
import { useTheme } from '../contexts/ThemeContext';

export function EnterpriseCTA() {
  const { theme } = useTheme();

  return (
    <section className="relative py-32 lg:py-40" style={{ backgroundColor: theme.background.light }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="mb-8">
              <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                Ready to Transform Your SAP Operations?
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[48px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-0.02em] text-slate-900 mb-8 max-w-[900px] mx-auto">
              Let's discuss your SAP implementation needs
            </h2>

            {/* Subtext */}
            <p className="text-[20px] lg:text-[24px] leading-[1.5] text-slate-600 mb-12 max-w-[700px] mx-auto">
              Schedule a consultation with our SAP experts to explore how we can accelerate your digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrefetchLink to="/company/contact">
                <button className="px-8 py-4 bg-slate-900 text-white text-[16px] font-semibold rounded-xl hover:bg-slate-800 transition-colors">
                  Schedule a Demo
                </button>
              </PrefetchLink>
              <PrefetchLink to="/company/contact">
                <button className="px-8 py-4 bg-white text-slate-900 text-[16px] font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                  Download Capabilities
                </button>
              </PrefetchLink>
            </div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-slate-200"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div>
                  <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-2">
                    Email
                  </div>
                  <a href="mailto:info@anandpag.com" className="text-[18px] font-medium text-slate-900 hover:text-[#0EA5E9] transition-colors">
                    info@anandpag.com
                  </a>
                </div>
                <div className="hidden md:block w-px h-12 bg-slate-200" />
                <div>
                  <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-2">
                    Phone
                  </div>
                  <a href="tel:+1-555-0123" className="text-[18px] font-medium text-slate-900 hover:text-[#0EA5E9] transition-colors">
                    +1 (555) 012-3456
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}