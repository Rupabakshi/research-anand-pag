import { ArrowRight, Target, Users, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useMediaConfig } from '../../config/media';

export function About() {
  const { config } = useMediaConfig();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <span className="text-sm font-semibold">About Anand PAG Inc</span>
            </div>
            
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-6">
              Connecting People to <span className="text-blue-700">Processes</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 2006, Anand PAG Inc. has been delivering innovative solutions that help our customers maximize ROI on their SAP investments across HCM, SD, FI, and Master Data Management areas.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With our team of industry experts spanning Utility, Finance, Insurance, and Life Sciences sectors, we deliver end-to-end solutions designed for the latest technology advancements in the industry.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 font-medium">
                We provide user-friendly, optimized business processes that reduce redundant activities and improve overall efficiency for businesses of all sizes.
              </p>
            </div>

            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <ImageWithFallback
                    src={config.aboutImages.collaboration}
                    alt="Business professionals collaborating"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <ImageWithFallback
                    src={config.aboutImages.teamMeeting}
                    alt="Team meeting"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <ImageWithFallback
                    src={config.aboutImages.workspace}
                    alt="Modern office workspace"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg"
                >
                  <ImageWithFallback
                    src={config.aboutImages.analytics}
                    alt="Data analytics dashboard"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Capabilities */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to optimize your business processes and drive operational excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                  <capability.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h4>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}