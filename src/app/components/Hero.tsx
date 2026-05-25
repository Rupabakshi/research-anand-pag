import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { HeroH1 } from './ui';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-md border border-blue-100">
                <span className="text-sm font-semibold text-blue-900 tracking-wide uppercase">
                  Excellence in SAP Since 2006
                </span>
              </div>
              
              {/* Main Headline */}
              <HeroH1 variant="light" className="mb-6">
                Transform Your Business with{' '}
                <span className="text-blue-600">SAP Solutions</span>
              </HeroH1>
              
              {/* Subtitle */}
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We help enterprise organizations optimize SAP investments, reduce costs by 40-60%, and accelerate digital transformation through proven implementation expertise.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base font-semibold"
                >
                  View Case Studies
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="flex items-center gap-8 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600 mt-1">Enterprise Clients</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100+</div>
                  <div className="text-sm text-slate-600 mt-1">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">18+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Stat Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">60%</div>
                  <div className="text-slate-600">Cost Reduction Average</div>
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow mt-8"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">98%</div>
                  <div className="text-slate-600">Client Satisfaction Rate</div>
                </motion.div>

                {/* Stat Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">3-6</div>
                  <div className="text-slate-600">Months to ROI</div>
                </motion.div>

                {/* Stat Card 4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 hover:shadow-2xl transition-shadow mt-8"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">24/7</div>
                  <div className="text-slate-600">Support Coverage</div>
                </motion.div>
              </div>

              {/* Certification Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl px-6 py-4 shadow-2xl"
              >
                <div className="text-sm font-semibold mb-1">SAP Certified</div>
                <div className="text-xs opacity-90">Gold Partner</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}