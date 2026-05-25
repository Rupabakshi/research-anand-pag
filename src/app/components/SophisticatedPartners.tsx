import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { useMediaConfig } from '../../config/media';

export function SophisticatedPartners() {
  const { config } = useMediaConfig();
  
  // Floating logo animation state
  const [floatingLogos, setFloatingLogos] = useState<Array<{
    id: number;
    type: 'sap' | 'microsoft' | 'salesforce';
    x: number;
    y: number;
    duration: number;
  }>>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const spawnLogo = () => {
      const types: Array<'sap' | 'microsoft' | 'salesforce'> = ['sap', 'microsoft', 'salesforce'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      const newLogo = {
        id: nextIdRef.current++,
        type: randomType,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 15 + Math.random() * 10
      };

      setFloatingLogos(prev => [...prev, newLogo]);

      // Remove after animation completes
      setTimeout(() => {
        setFloatingLogos(prev => prev.filter(logo => logo.id !== newLogo.id));
      }, newLogo.duration * 1000);
    };

    // Spawn initial logos
    for (let i = 0; i < 6; i++) {
      setTimeout(() => spawnLogo(), i * 800);
    }

    // Continue spawning
    const interval = setInterval(spawnLogo, 4000);

    return () => clearInterval(interval);
  }, []);

  const partners = [
    {
      name: "SAP",
      logo: config.partners.sap.socialProof,
      status: "Gold Partner since 2006",
      certifications: ["SSTP Partner", "ISV Vendor", "Services Partner", "Cloud Solution Partner"]
    },
    {
      name: "Microsoft",
      logo: null,
      logoComponent: () => (
        <div className="w-32 h-32 grid grid-cols-2 gap-2">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      ),
      status: "Registered Partner",
      certifications: ["Windows Azure", "Cloud Platform Solutions"]
    },
    {
      name: "Salesforce",
      logo: null,
      logoText: "Salesforce",
      status: "Technology Partner",
      certifications: []
    }
  ];

  const customers = [
    "Cintas",
    "Southern California Edison",
    "Consumers Energy",
    "PALL Corporation",
    "WK Kellogg Foundation",
    "Farmers Insurance"
  ];

  const testimonials = [
    {
      quote: "Anand PAG's expertise in SAP regulatory compliance transformed our approach to process governance. Their Process Factory solution reduced our audit preparation time by 60% while ensuring consistent compliance across all business units.",
      author: "Sarah Mitchell",
      title: "VP of Enterprise Systems",
      company: "Fortune 500 Utility Company",
      stat: "60%",
      statLabel: "Faster audit prep",
      image: config.partnerTestimonialImages.executiveWoman
    },
    {
      quote: "The team's deep technical knowledge of SAP HCM and their ability to optimize complex workflows delivered measurable ROI within the first quarter. Their consultants understood our business requirements and translated them into scalable solutions.",
      author: "David Chen",
      title: "CIO",
      company: "Global Manufacturing Corporation",
      stat: "Q1",
      statLabel: "ROI delivered",
      image: config.partnerTestimonialImages.executiveMale
    },
    {
      quote: "Working with Anand PAG on our multi-country master data initiative gave us the governance and automation we needed to maintain data integrity across 17+ countries. Their Process Factory platform was transformational.",
      author: "Jennifer Rodriguez",
      title: "Chief Data Officer",
      company: "International Life Sciences Firm",
      stat: "17+",
      statLabel: "Countries deployed",
      image: config.partnerTestimonialImages.executiveLatina
    }
  ];

  const renderFloatingLogo = (logo: typeof floatingLogos[0]) => {
    if (logo.type === 'sap') {
      return <img src={config.partners.sap.socialProof} alt="SAP" className="w-5 h-5 object-contain opacity-80" />;
    } else if (logo.type === 'microsoft') {
      return (
        <div className="w-5 h-5 grid grid-cols-2 gap-0.5 opacity-80">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      );
    } else {
      return (
        <div className="w-5 h-5 rounded-full bg-[#00A1E0] opacity-80"></div>
      );
    }
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 bg-white overflow-hidden">
      {/* Floating Partner Logos Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingLogos.map((logo) => (
          <motion.div
            key={logo.id}
            initial={{ 
              x: `${logo.x}vw`, 
              y: `${logo.y}vh`,
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              x: [`${logo.x}vw`, `${(logo.x + 30) % 100}vw`],
              y: [`${logo.y}vh`, `${(logo.y + 40) % 100}vh`],
              opacity: [0, 0.15, 0.15, 0],
              scale: [0.5, 1, 1, 0.5]
            }}
            transition={{ 
              duration: logo.duration,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            {renderFloatingLogo(logo)}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 sm:mb-28 lg:mb-32"
          >
            <div className="mb-6">
              <span className="text-[11px] sm:text-[12px] font-mono uppercase tracking-[2px] sm:tracking-[3px] text-slate-500 font-semibold">
                Client Validation
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] text-[#030213] mb-4 tracking-[-0.02em]">
              Trusted by Fortune 500 leaders
            </h2>
            <p className="text-[16px] sm:text-[18px] text-slate-600 max-w-[700px]">
              Strategic partnerships and measurable results across enterprise organizations
            </p>
          </motion.div>
          
          {/* Technology Partners - Glass Cards with Depth */}
          <div className="mb-24 sm:mb-32 lg:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h3 className="text-[24px] sm:text-[28px] font-[700] text-[#030213] mb-3 tracking-[-0.01em]">
                Technology partners
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600">
                Strategic alliances with enterprise technology leaders since 2006
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glass morphism card */}
                  <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-sm overflow-hidden shadow-lg shadow-slate-900/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-slate-900/10 group-hover:border-slate-300/80">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-10 sm:p-12 text-center">
                      {/* Logo */}
                      <div className="mb-8 flex items-center justify-center h-32">
                        {partner.logo ? (
                          <motion.img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="h-24 w-auto object-contain opacity-90 drop-shadow-sm"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ duration: 0.3 }}
                          />
                        ) : partner.logoComponent ? (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <partner.logoComponent />
                          </motion.div>
                        ) : (
                          <div className="text-[40px] font-[700] text-slate-300">{partner.logoText}</div>
                        )}
                      </div>
                      
                      {/* Status */}
                      <div className="text-[14px] sm:text-[15px] text-slate-700 mb-6 font-[600]">
                        {partner.status}
                      </div>
                      
                      {/* Certifications */}
                      {partner.certifications.length > 0 && (
                        <div className="space-y-2.5 pt-6 border-t border-slate-200/60">
                          {partner.certifications.map((cert, certIdx) => (
                            <motion.div 
                              key={certIdx} 
                              className="text-[13px] text-slate-600"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + certIdx * 0.05 }}
                            >
                              {cert}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enterprise Clients - Flowing Text with Motion */}
          <div className="mb-24 sm:mb-32 lg:mb-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h3 className="text-[24px] sm:text-[28px] font-[700] text-[#030213] mb-3 tracking-[-0.01em]">
                Enterprise clients
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600">
                Fortune 500 companies rely on our enterprise transformation expertise
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {customers.map((customer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -3, x: 4 }}
                  className="group cursor-default"
                >
                  <div className="text-[18px] sm:text-[20px] font-[600] text-slate-700 group-hover:text-[#155DFC] transition-all duration-300">
                    {customer}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials - Large Photos with Glass Overlays */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16"
            >
              <h3 className="text-[24px] sm:text-[28px] font-[700] text-[#030213] mb-3 tracking-[-0.01em]">
                What our clients say
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600">
                Measurable impact for enterprise organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="relative group overflow-hidden rounded-sm shadow-2xl shadow-slate-900/15 transition-all duration-500 hover:shadow-slate-900/25"
                >
                  {/* Photo Background */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-[#030213]/60 to-transparent"></div>
                    
                    {/* Glass Content Card - Overlays bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                      {/* Stat Callout - Floating Glass Effect */}
                      <motion.div 
                        className="inline-block mb-6 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-[48px] sm:text-[56px] font-[700] text-white leading-none tracking-[-0.02em] drop-shadow-lg">
                          {testimonial.stat}
                        </div>
                        <div className="text-[12px] text-white/80 uppercase tracking-[1.5px] mt-2 font-[600]">
                          {testimonial.statLabel}
                        </div>
                      </motion.div>

                      {/* Quote - White text on dark gradient */}
                      <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/95 mb-5 drop-shadow-lg">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="pt-5 border-t border-white/20">
                        <div className="text-[15px] font-[700] text-white mb-1">
                          {testimonial.author}
                        </div>
                        <div className="text-[13px] text-white/80 mb-0.5">
                          {testimonial.title}
                        </div>
                        <div className="text-[13px] text-white/70">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}