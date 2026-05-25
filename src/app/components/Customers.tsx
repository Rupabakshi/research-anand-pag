import { ImageWithFallback } from './figma/ImageWithFallback';

export function Customers() {
  const customers = [
    {
      name: 'Southern California Edison',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop'
    },
    {
      name: 'Cintas',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop'
    },
    {
      name: 'Consumers Energy',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop'
    },
    {
      name: 'PALL Corporation',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop'
    },
    {
      name: 'WK Kellogg Foundation',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop'
    },
    {
      name: 'Farmers Insurance',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop'
    }
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Our Customers</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Trusted by <span className="text-blue-700">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <ImageWithFallback
                  src={customer.logo}
                  alt={customer.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border border-blue-200">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  "
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "Anand PAG Inc. has been instrumental in our digital transformation journey. Their expertise in SAP and process optimization has helped us achieve significant cost savings and operational efficiency."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                      alt="Client testimonial"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">John Smith</div>
                    <div className="text-gray-600 text-sm">CTO, Fortune 500 Energy Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-700 mb-2">100+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-700 mb-2">85%</div>
            <div className="text-gray-600">Repeat Business</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}