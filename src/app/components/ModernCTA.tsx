import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function ModernCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/30"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-bold text-white">Ready to Get Started?</span>
            </motion.div>

            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] text-white mb-8">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                SAP Investment
              </span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our experts to discover how we can help you achieve{' '}
              <span className="font-bold text-yellow-200">measurable results</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-8 text-lg font-bold shadow-2xl hover:shadow-white/50 transition-all border-0"
              >
                <Calendar className="mr-3 w-6 h-6" />
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-3 border-white text-white hover:bg-white/20 backdrop-blur-sm px-12 py-8 text-lg font-bold"
              >
                Download Capabilities
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>

            {/* Animated stats cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: '$500M+', label: 'Client Savings Generated', delay: 0.3 },
                { value: '100+', label: 'Successful Projects', delay: 0.4 },
                { value: '98%', label: 'Client Retention Rate', delay: 0.5 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}