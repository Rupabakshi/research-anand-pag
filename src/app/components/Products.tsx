import { Shield, TrendingUp, Factory, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Products() {
  const products = [
    {
      icon: Shield,
      title: 'Enterprise Regulatory Compliance',
      description: 'Address competition risks while maintaining compliance with statutory and organizational regulations',
      features: [
        'Real-time legislative updates',
        'Efficient control design & monitoring',
        'Comprehensive compliance cataloging',
        'Continuous control monitoring',
        'Efficient auditing & reporting'
      ],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage data-driven insights to make informed business decisions and forecast trends',
      features: [
        'Advanced data modeling',
        'Real-time analytics dashboard',
        'Trend forecasting & predictions',
        'Risk assessment tools',
        'Custom reporting capabilities'
      ],
      color: 'purple'
    },
    {
      icon: Factory,
      title: 'Process Factory®',
      description: 'Comprehensive workflow automation platform that transforms your business processes',
      features: [
        'Drag-and-drop workflow builder',
        'Process optimization tools',
        'Integration with SAP & other systems',
        'Automated approval workflows',
        'Real-time process monitoring'
      ],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Process Factory Mobile®',
      description: 'Take your business processes on the go with our mobile-optimized solution',
      features: [
        'Native mobile applications',
        'Offline capability',
        'Real-time notifications',
        'Mobile-first user interface',
        'Cross-platform compatibility'
      ],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-700',
      hover: 'group-hover:bg-blue-700',
      button: 'text-blue-700 hover:text-blue-800'
    },
    purple: {
      bg: 'bg-purple-100',
      icon: 'text-purple-700',
      hover: 'group-hover:bg-purple-700',
      button: 'text-purple-700 hover:text-purple-800'
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-700',
      hover: 'group-hover:bg-green-700',
      button: 'text-green-700 hover:text-green-800'
    },
    orange: {
      bg: 'bg-orange-100',
      icon: 'text-orange-700',
      hover: 'group-hover:bg-orange-700',
      button: 'text-orange-700 hover:text-orange-800'
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Innovative Solutions for <span className="text-blue-700">Modern Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With rapidly changing business environments, our products help you address competition while maintaining compliance and optimizing processes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const colors = colorClasses[product.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.hover} transition-colors duration-300`}>
                    <product.icon className={`w-8 h-8 ${colors.icon} group-hover:text-white transition-colors duration-300`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className={`w-full ${colors.button} font-semibold`}
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Want to see how our products can transform your business?
          </p>
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}