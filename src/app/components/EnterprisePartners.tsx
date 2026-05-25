import { motion } from 'motion/react';

export function EnterprisePartners() {
  const partners = [
    {
      name: "SAP",
      status: "Gold Partner",
      since: "2006",
      description: "18+ years of certified SAP implementation expertise"
    },
    {
      name: "Microsoft",
      status: "Azure Certified",
      since: "2012",
      description: "Cloud integration and enterprise mobility solutions"
    },
    {
      name: "Salesforce",
      status: "Premier Partner",
      since: "2015",
      description: "CRM integration and business process automation"
    }
  ];

  const industries = [
    "Manufacturing",
    "Retail & Consumer",
    "Healthcare",
    "Financial Services",
    "Energy & Utilities",
    "Public Sector"
  ];

  return (
    <section className="relative py-32 lg:py-40 bg-[#0F172A]">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-20 lg:mb-32"
          >
            <div className="mb-6">
              <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                Strategic Partnerships
              </span>
            </div>
            <h2 className="text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-0.015em] text-white mb-8 max-w-[800px]">
              Certified expertise across the enterprise stack
            </h2>
            <p className="text-[20px] lg:text-[22px] leading-[1.5] text-slate-400 max-w-[700px]">
              Long-standing partnerships with industry leaders ensure our clients receive best-in-class implementation and support.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 lg:mb-32">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all">
                  {/* Logo placeholder */}
                  <div className="w-full h-20 bg-white/10 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                    <span className="text-[24px] font-semibold text-white">{partner.name}</span>
                  </div>

                  {/* Status badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                      <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-[#0EA5E9]">
                        {partner.status}
                      </span>
                    </div>
                  </div>

                  {/* Since */}
                  <div className="mb-4">
                    <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                      Since {partner.since}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[16px] leading-[1.6] text-slate-400">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-12">
              <div className="mb-6">
                <span className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500">
                  Industries We Serve
                </span>
              </div>
              <h3 className="text-[36px] lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.015em] text-white max-w-[700px]">
                Fortune 500 expertise across sectors
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                      <span className="text-[18px] font-semibold text-white">
                        {industry.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <div className="text-[13px] font-medium text-slate-300 leading-tight">
                      {industry}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 lg:mt-32 pt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div>
                <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                  Experience
                </div>
                <div className="text-[40px] lg:text-[48px] font-semibold text-white leading-none">18+</div>
                <div className="text-[14px] text-slate-400 mt-2">Years in business</div>
              </div>
              <div>
                <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                  Projects
                </div>
                <div className="text-[40px] lg:text-[48px] font-semibold text-white leading-none">500+</div>
                <div className="text-[14px] text-slate-400 mt-2">Successfully delivered</div>
              </div>
              <div>
                <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                  Clients
                </div>
                <div className="text-[40px] lg:text-[48px] font-semibold text-white leading-none">100%</div>
                <div className="text-[14px] text-slate-400 mt-2">Fortune 500 focused</div>
              </div>
              <div>
                <div className="text-[13px] font-mono uppercase tracking-[1.5px] text-slate-500 mb-3">
                  Savings
                </div>
                <div className="text-[40px] lg:text-[48px] font-semibold text-white leading-none">$500M+</div>
                <div className="text-[14px] text-slate-400 mt-2">Client value generated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
