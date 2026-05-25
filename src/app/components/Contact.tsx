import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Sophisticated gradient background */}
      

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Bold CTA Banner */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-12 lg:p-16 text-center overflow-hidden shadow-2xl shadow-blue-900/30">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  Ready to Get Started?
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-[700] leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Transform Your SAP Operations.<br />
                <span className="text-blue-200">Start Today.</span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join Fortune 500 companies who trust Anand PAG Inc. for enterprise SAP solutions. Let's discuss how Process Factory® can streamline your compliance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Button 
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 bg-transparent px-8 h-14 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">18+ Years</div>
                  <div className="text-sm text-blue-200">SAP Gold Partner</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Fortune 500</div>
                  <div className="text-sm text-blue-200">Trusted Clients</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-blue-200">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}