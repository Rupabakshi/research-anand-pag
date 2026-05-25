import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { HeroH1 } from './ui';

export function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">Excellence in SAP Since 2006</span>
              </motion.div>
              
              {/* Main Headline with gradient */}
              <HeroH1>
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-white">Your Enterprise</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  with SAP
                </span>
              </HeroH1>
              
              {/* Subtitle */}
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                We help Fortune 500 companies achieve <span className="text-blue-400 font-semibold">40-60% cost reduction</span> through expert SAP implementation and digital transformation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg font-semibold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 transition-all border-0"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg font-semibold"
                >
                  View Case Studies
                </Button>
              </div>

              {/* Animated stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Enterprise Clients' },
                  { value: '100+', label: 'Projects Delivered' },
                  { value: '18+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="backdrop-blur-lg bg-white/5 rounded-2xl p-4 border border-white/10"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Large center card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl p-8 flex flex-col justify-center"
              >
                <div className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  60%
                </div>
                <div className="text-white text-xl font-semibold">Cost Reduction</div>
                <div className="text-slate-400 text-sm mt-2">Average client savings</div>
              </motion.div>

              {/* Small floating cards */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-20 right-0 w-48 backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 shadow-xl p-6"
              >
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-slate-300 text-sm">Client Satisfaction</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 left-0 w-48 backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/20 shadow-xl p-6"
              >
                <div className="text-4xl font-bold text-white mb-2">3-6</div>
                <div className="text-slate-300 text-sm">Months to ROI</div>
              </motion.div>

              {/* SAP Certified badge */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-10 backdrop-blur-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-2xl border border-yellow-400/30 shadow-2xl px-6 py-4"
              >
                <div className="text-sm font-bold text-yellow-200 mb-1">SAP Certified</div>
                <div className="text-xs text-yellow-300/80">Gold Partner</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}