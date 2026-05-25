import { Award, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Our Partners</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Trusted <span className="text-blue-700">Technology Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Long-standing partnerships with renowned and reliable technology leaders
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SAP Partner */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold mb-2">SAP Partner</h3>
              <p className="text-blue-100">Multiple Partnership Levels</p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="w-full h-24 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=100&fit=crop"
                    alt="SAP Partner Logo"
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Since inception in 2006, Anand PAG Inc. has been partnering with SAP at various levels. We are proud to be recognized across multiple partnership tiers.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SAP SSTP Partner</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SAP ISV Vendor</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SAP Services Partner</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SAP Cloud Solutions Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft Partner */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 text-white">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Microsoft Partner</h3>
              <p className="text-green-100">Registered Partner Network</p>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="w-full h-24 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=300&h=100&fit=crop"
                    alt="Microsoft Partner Logo"
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Anand PAG Inc. is a Registered Microsoft Partner providing cutting-edge technology solutions using the latest Microsoft platforms and cloud technologies.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Windows Azure Cloud Solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SharePoint Development</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Office 365 Integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Microsoft Dynamics Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">18+</div>
            <div className="text-gray-600">Years Partnership</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">100+</div>
            <div className="text-gray-600">Joint Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}