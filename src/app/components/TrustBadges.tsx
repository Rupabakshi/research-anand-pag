import { Award, Shield, CheckCircle, Star, Trophy, Target } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: 'SAP Gold Partner',
      year: '2006-2024',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Shield,
      title: 'ISO 27001 Certified',
      year: 'Security Excellence',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Star,
      title: 'Microsoft Partner',
      year: 'Registered',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Trophy,
      title: 'Top SAP Partner',
      year: 'Excellence Award',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: Target,
      title: '98% Success Rate',
      year: 'Project Delivery',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: CheckCircle,
      title: 'Certified Experts',
      year: '50+ Certifications',
      color: 'from-teal-500 to-teal-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <span className="text-sm font-semibold">Trust & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certified <span className="text-blue-700">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by industry leaders and certified for delivering world-class solutions
          </p>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-300 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Compliance Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-blue-200">Client Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Zero</div>
              <div className="text-blue-200">Security Breaches</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
