import { Play, Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { PrefetchLink } from './PrefetchLink';

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  const highlights = [
    { icon: Award, label: 'Award-Winning Solutions', value: '15+' },
    { icon: Users, label: 'Enterprise Clients', value: '50+' },
    { icon: TrendingUp, label: 'Average ROI', value: '350%' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business <span className="text-blue-700">Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how leading enterprises are revolutionizing their operations with our solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-2xl aspect-video group">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-purple-900/90 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-blue-700 ml-1" fill="currentColor" />
                </motion.button>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Process Factory® Platform Demo
                </h3>
                <p className="text-white/90">
                  See how we've helped Fortune 500 companies reduce costs by 60%
                </p>
              </div>
            </div>

            {/* Video Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                  <div className="text-xs text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <div className="font-semibold text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-600">VP of Operations</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "The transformation has been incredible. We're processing 10x more transactions with half the staff."
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Miller</div>
                  <div className="text-sm text-gray-600">CTO</div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-3">
                "Best investment we've made. ROI was achieved in just 6 months. Highly recommended!"
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-3 text-lg">Ready to See More?</h4>
              <p className="text-blue-100 mb-4 text-sm">
                Schedule a personalized demo with our experts
              </p>
              <PrefetchLink to="/company/contact">
                <button className="w-full bg-white text-blue-900 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors">
                  Book Demo Call
                </button>
              </PrefetchLink>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Avg. Implementation</span>
                  <span className="font-bold text-blue-700">4-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Client Retention</span>
                  <span className="font-bold text-blue-700">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Projects Completed</span>
                  <span className="font-bold text-blue-700">100+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}