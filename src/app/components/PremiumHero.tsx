import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { HeroH1 } from './ui';

export function PremiumHero() {
  return (
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      {/* Subtle background accent - single clean line */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="mb-6">
                <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
                  SAP Gold Partner Since 2006
                </span>
              </div>
              
              <HeroH1 variant="light" className="mb-8">
                Enterprise SAP Solutions That Drive Results
              </HeroH1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Anand PAG helps Fortune 500 companies optimize SAP investments and accelerate digital transformation with proven expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-base font-semibold"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-14 text-base font-semibold"
                >
                  View Our Work
                </Button>
              </div>

              {/* Clean stats row */}
              <div className="flex items-center gap-12 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">$500M+</div>
                  <div className="text-sm text-slate-600">Client Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">100+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-1">98%</div>
                  <div className="text-sm text-slate-600">Retention</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Clean data visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Large key metric card */}
              <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-12">
                <div className="space-y-10">
                  {/* Primary metric */}
                  <div className="border-b border-slate-100 pb-8">
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Average Cost Reduction
                    </div>
                    <div className="text-7xl font-bold text-blue-600">60%</div>
                  </div>

                  {/* Supporting metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">6 mo</div>
                      <div className="text-sm text-slate-600">Implementation</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">3-6 mo</div>
                      <div className="text-sm text-slate-600">to ROI</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                      <div className="text-sm text-slate-600">Support</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
                      <div className="text-sm text-slate-600">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small accent card */}
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-lg px-6 py-4 shadow-lg">
                <div className="text-xs font-semibold mb-1">SAP Certified</div>
                <div className="text-sm font-bold">Gold Partner</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}