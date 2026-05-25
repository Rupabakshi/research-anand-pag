import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export function EnhancedHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-400/30"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Excellence in Process Optimization Since 2006</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[72px] 2xl:text-[88px] font-bold leading-[0.95] tracking-[-0.03em] mb-6"
            >
              Transform Your Business with{' '}
              <span className="relative">
                <span className="text-blue-300">SAP Solutions</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Maximize ROI on your SAP investments with our expertise in HCM, SD, FI, and Master Data Management. We connect people to processes through innovative solutions.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                { title: 'Process Optimization', desc: 'Streamline operations' },
                { title: 'Industry Expertise', desc: 'Utility, Finance, Insurance' },
                { title: 'End-to-End Solutions', desc: 'Latest technology' },
                { title: 'SAP Partner', desc: 'Certified & Trusted' }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-sm text-blue-200">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Animated Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={18} suffix="+" />
                </div>
                <div className="text-blue-200">Years of Excellence</div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 mt-8"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <div className="text-blue-200">Successful Projects</div>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-blue-200">Enterprise Clients</div>
              </motion.div>

              {/* Stat Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 mt-8"
              >
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-blue-200">Client Satisfaction</div>
              </motion.div>
            </div>

            {/* Decorative animated elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.4, 0.2, 0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}