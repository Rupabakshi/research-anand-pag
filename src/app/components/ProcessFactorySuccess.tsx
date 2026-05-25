import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PrefetchLink } from './PrefetchLink';

export function ProcessFactorySuccess() {
  const { theme } = useTheme();

  return (
    <section className="py-24 lg:py-40 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Success Story</span>
              </div>
              
              <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] mb-6">
                Fortune 500 Vendor Portal Transformation
              </h2>
              
              <p className="text-[16px] lg:text-[18px] text-gray-600 leading-relaxed mb-8">
                See how Cintas digitized their vendor service order operations by delivering a secure SAP BTP-based portal in just 5 months.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Replaced fragmented email & spreadsheet workflows",
                  "Centralized vendor scheduling & document upload",
                  "Integrated directly with SAP S/4HANA",
                  "Supported high-volume PDF & print processing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <PrefetchLink
                to="/resources/case-studies/cintas"
                className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-blue-700 inline-flex items-center gap-2"
              >
                Read Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </PrefetchLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] -rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1634468413956-831adf9d5a06?auto=format&fit=crop&q=80&w=1200" 
                  alt="Cintas Operations" 
                  className="w-full aspect-video object-cover"
                />
                <div className="p-8">
                  <div className="flex gap-12">
                    <div>
                      <div className="text-[32px] font-bold text-blue-600 leading-none mb-1">500+</div>
                      <div className="text-[12px] text-gray-500 uppercase font-bold tracking-wider">Vendors</div>
                    </div>
                    <div>
                      <div className="text-[32px] font-bold text-blue-600 leading-none mb-1">5mo.</div>
                      <div className="text-[12px] text-gray-500 uppercase font-bold tracking-wider">Delivery</div>
                    </div>
                    <div>
                      <div className="text-[32px] font-bold text-blue-600 leading-none mb-1">S/4</div>
                      <div className="text-[12px] text-gray-500 uppercase font-bold tracking-wider">Core</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}