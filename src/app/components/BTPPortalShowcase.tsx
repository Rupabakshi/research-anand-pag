import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BTPPortalShowcase() {
  const { theme } = useTheme();

  return (
    <section className="py-20 sm:py-28 lg:py-40 transition-colors duration-500" style={{ backgroundColor: theme.isLight ? 'white' : theme.background.dark }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] mb-8" style={{ color: theme.isLight ? theme.text.onLight : theme.text.primary }}>
                From Manual Coordination to Digital Operating Model
              </h2>
              <div className="space-y-6">
                <p className="text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: theme.isLight ? theme.text.onLightSecondary : theme.text.secondary }}>
                  Fragmented vendor coordination processes—email, spreadsheets, and legacy tools—create operational bottlenecks and data silos.
                </p>
                <p className="text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: theme.isLight ? theme.text.onLightSecondary : theme.text.secondary }}>
                  The SAP BTP Vendor Portal replaces these manual touchpoints with a centralized workflow. Vendors, internal locations, and operations teams work from the same source of truth, reducing manual follow-up and accelerating invoice readiness.
                </p>
                
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    theme.isLight ? 'bg-blue-50 border-blue-100' : 'bg-white/5 border-white/10'
                  }`}>
                    <div className="text-blue-500 font-bold text-[28px] mb-1">80%</div>
                    <div className={`font-semibold text-[14px] uppercase tracking-wider mb-2 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>Manual Reduction</div>
                    <p className={`text-[12px] leading-relaxed ${theme.isLight ? 'text-gray-600' : 'text-slate-400'}`}>Targeted reduction in coordination overhead for service orders.</p>
                  </div>
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    theme.isLight ? 'bg-blue-50 border-blue-100' : 'bg-white/5 border-white/10'
                  }`}>
                    <div className="text-blue-500 font-bold text-[28px] mb-1">Real-time</div>
                    <div className={`font-semibold text-[14px] uppercase tracking-wider mb-2 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>SAP Integration</div>
                    <p className={`text-[12px] leading-relaxed ${theme.isLight ? 'text-gray-600' : 'text-slate-400'}`}>Bi-directional sync with S/4HANA for absolute data consistency.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className={`aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border ${theme.isLight ? 'border-gray-200' : 'border-white/10'}`}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648824572347-517357c9c44e?auto=format&fit=crop&q=80&w=1200"
                  alt="Vendor Portal Logistics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
              
              {/* Floating Card - Navy background to match design system preference for dark accents */}
              <div className="absolute -bottom-10 -left-10 p-8 bg-[#030213] rounded-2xl shadow-2xl border border-white/10 max-w-xs hidden sm:block">
                <div className="flex gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                  ))}
                </div>
                <h4 className="text-white font-bold text-[18px] mb-2 tracking-tight">Proven Performance</h4>
                <p className="text-slate-400 text-[13px] leading-relaxed">
                  Designed for high-volume service order processing in North American logistics networks.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
