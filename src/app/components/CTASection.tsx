import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

export function CTASection() {
  const { theme } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] mb-6 transition-colors duration-500 ${
              theme.isLight ? 'text-gray-900' : 'text-white'
            }`}>
              Ready to Transform Your SAP Investment?
            </h2>
            <p className={`text-xl mb-10 max-w-2xl mx-auto transition-colors duration-500 ${
              theme.isLight ? 'text-gray-700' : 'text-slate-300'
            }`}>
              Schedule a consultation with our SAP experts to discuss your business challenges and discover how we can help you achieve measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-base font-semibold shadow-xl"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className={`border-2 px-10 py-6 text-base font-semibold transition-all ${
                  theme.isLight 
                    ? 'border-gray-300 text-gray-900 hover:bg-gray-50' 
                    : 'border-slate-500 text-white hover:bg-slate-800'
                }`}
              >
                Download Capabilities Overview
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Trust Stats */}
            <div className={`grid grid-cols-3 gap-8 pt-12 border-t max-w-2xl mx-auto transition-colors duration-500 ${
              theme.isLight ? 'border-gray-200' : 'border-slate-700'
            }`}>
              <div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-900' : 'text-white'
                }`}>$500M+</div>
                <div className={`text-sm transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-600' : 'text-slate-400'
                }`}>Client Savings Generated</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-900' : 'text-white'
                }`}>100+</div>
                <div className={`text-sm transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-600' : 'text-slate-400'
                }`}>Successful Projects</div>
              </div>
              <div>
                <div className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-900' : 'text-white'
                }`}>98%</div>
                <div className={`text-sm transition-colors duration-500 ${
                  theme.isLight ? 'text-gray-600' : 'text-slate-400'
                }`}>Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}