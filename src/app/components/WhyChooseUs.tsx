import { Shield, Zap, Users, Award, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { PrefetchLink } from './PrefetchLink';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Industry Expertise',
      description: '18+ years of proven excellence in SAP implementations across Utility, Finance, Insurance, and Life Sciences sectors',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running in weeks, not months. Our streamlined approach ensures fast time-to-value',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 expert support team ensuring your systems run smoothly. We\'re always here when you need us',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'SAP Gold Partner and Microsoft Certified with ISO 27001 compliance for security you can trust',
      gradient: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Clock,
      title: 'Proven ROI',
      description: 'Average 350% ROI within first year. Our clients see measurable results in 6-10 months',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: '98% client satisfaction and 85% repeat business. We treat your success as our success',
      gradient: 'from-red-500 to-red-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            <span className="text-sm font-semibold">Why Anand PAG Inc</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Leading Enterprises <span className="text-blue-700">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just implement solutions—we partner with you for long-term success
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Animated background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.gradient} rounded-bl-full opacity-5`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Join 50+ leading enterprises who trust Anand PAG Inc for their digital transformation journey. 
                Let's discuss how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrefetchLink to="/company/contact">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-lg hover:shadow-xl">
                    Start Your Transformation
                  </button>
                </PrefetchLink>
                <PrefetchLink to="/company/contact">
                  <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                    Talk to an Expert
                  </button>
                </PrefetchLink>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-600" />
            <span>SAP Gold Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <span>50+ Enterprise Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-600" />
            <span>98% Satisfaction Rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}