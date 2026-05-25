import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50+ leading enterprises who trust Anand PAG Inc. for their digital transformation journey
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Free Consultation</div>
                <div className="text-sm text-blue-200">Get expert advice tailored to your needs</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Proven ROI</div>
                <div className="text-sm text-blue-200">Measurable results within months</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">24/7 Support</div>
                <div className="text-sm text-blue-200">Always here when you need us</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
            >
              Download Brochure
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-blue-600">
            <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 rounded-lg">SAP Partner</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg">Microsoft Partner</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg">18+ Years Experience</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}