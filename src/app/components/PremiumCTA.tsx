import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

export function PremiumCTA() {
  const { theme } = useTheme();

  return (
    <section className="py-32 relative overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Sophisticated dark background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Ready to Get Started?
              </span>
            </div>
            
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] text-white mb-6">
              Ready to Optimize Your SAP Investment?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our SAP experts to discuss your business objectives and explore how we can help you achieve measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 h-14 text-base font-semibold shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 px-10 h-14 text-base font-semibold transition-all"
              >
                Download Capabilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">$500M+</div>
                <div className="text-sm text-slate-400 font-medium">Client Savings Generated</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-slate-400 font-medium">Successful Implementations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-5xl font-bold text-white mb-3 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-slate-400 font-medium">Client Retention Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}