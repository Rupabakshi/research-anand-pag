import { motion } from 'motion/react';
import { CheckCircle2, Award, Shield, Cloud } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMediaConfig } from '../../config/media';

export function PartnerCredibility() {
  const { config } = useMediaConfig();

  const sapPartner = {
    name: 'SAP',
    status: 'Gold Partner',
    since: '2006',
    certifications: [
      { icon: Award, label: 'Gold Certified' },
      { icon: CheckCircle2, label: 'S/4HANA Certified' },
      { icon: Shield, label: 'Security Certified' },
    ],
    stats: [
      { value: '18+', label: 'Years Partnership' },
      { value: '150+', label: 'SAP Projects' },
    ]
  };

  const otherPartners = [
    {
      name: 'Microsoft',
      status: 'Registered Partner',
      description: 'Azure, Dynamics 365, and Power Platform integration expertise.',
      bgGradient: 'from-blue-600 to-blue-800',
      image: config.partnerCredibilityImages.microsoft.header,
      accentColor: 'blue',
    },
    {
      name: 'Salesforce',
      status: 'Solutions Partner',
      description: 'CRM integration and enterprise sales automation solutions.',
      bgGradient: 'from-cyan-500 to-cyan-700',
      image: config.partnerCredibilityImages.salesforce.header,
      accentColor: 'cyan',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/30 via-transparent to-transparent opacity-60" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Technology Partners
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-slate-900 tracking-tight">
              Enterprise Certified Partnerships
            </h2>
          </motion.div>

          {/* Asymmetric Partner Layout - SAP Hero Left, Others Right */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* SAP Gold Partner - HERO CARD (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 h-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={config.technologyImages.enterpriseTech}
                    alt="Enterprise Technology"
                    className="w-full h-full object-cover opacity-25"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-blue-900/95" />
                </div>
                
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                
                {/* Gold Badge - Visual Icon */}
                <div className="absolute top-6 right-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-xl shadow-yellow-900/30">
                    <Award className="w-8 h-8 text-yellow-900" strokeWidth={2.5} />
                  </div>
                </div>

                <div className="relative z-10 p-10 lg:p-12">
                  {/* Header - Typography as Brand */}
                  <div className="mb-8">
                    <div className="flex items-start gap-4 mb-6">
                      {/* SAP Logo */}
                      <img src={config.logos.partners.sap.credibility} alt="SAP Logo" className="h-20 w-auto flex-shrink-0 object-contain" />
                      <div className="flex-1">
                        <h3 className="text-6xl lg:text-7xl font-bold text-white tracking-tight">{sapPartner.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-yellow-300">{sapPartner.status}</span>
                      <span className="text-blue-200 text-lg">•</span>
                      <span className="text-blue-100 text-lg">Since {sapPartner.since}</span>
                    </div>
                  </div>

                  {/* Visual Certification Badges - Icons Only */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    {sapPartner.certifications.map((cert, idx) => {
                      const Icon = cert.icon;
                      return (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all">
                          <Icon className="w-10 h-10 text-yellow-300 mb-3 mx-auto" strokeWidth={2} />
                          <div className="font-semibold text-white text-sm">{cert.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stats Grid - Larger Numbers */}
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
                    {sapPartner.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-5xl lg:text-6xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-sm text-blue-200 font-medium uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Partners - Stacked (2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Microsoft Partner */}
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 h-full group">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={config.technologyImages.microsoft}
                    alt="Microsoft Technology"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-blue-800/95" />
                </div>

                {/* Decorative gradient blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Header with Large Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Microsoft Four-Square Logo */}
                    <div className="grid grid-cols-2 gap-1.5 w-16 h-16 flex-shrink-0">
                      <div className="bg-red-500 rounded-sm" />
                      <div className="bg-green-500 rounded-sm" />
                      <div className="bg-blue-400 rounded-sm" />
                      <div className="bg-yellow-400 rounded-sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">Microsoft</h3>
                      <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                        Registered Partner
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-base">
                    Azure, Dynamics 365, and Power Platform integration expertise.
                  </p>
                </div>
              </div>

              {/* Salesforce Partner */}
              <div className="relative bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 h-full group">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={config.technologyImages.salesforce}
                    alt="Salesforce Technology"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/95 to-cyan-700/95" />
                </div>

                {/* Decorative gradient blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300/30 rounded-full blur-3xl" />
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Header with Large Icon */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Salesforce Cloud Icon */}
                    <Cloud className="w-16 h-16 text-white flex-shrink-0" strokeWidth={2.5} fill="white" fillOpacity={0.2} />
                    <div className="flex-1">
                      <h3 className="text-5xl font-bold text-white mb-2 tracking-tight">Salesforce</h3>
                      <div className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                        Solutions Partner
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-base">
                    CRM integration and enterprise sales automation solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}