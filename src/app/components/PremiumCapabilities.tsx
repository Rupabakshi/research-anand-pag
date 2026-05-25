import { motion } from 'motion/react';
import { Settings, Wrench, Smartphone, GraduationCap, Users, Headphones, Building2, TrendingUp, Heart, DollarSign, Zap, Users as UsersIcon, ArrowRight } from 'lucide-react';

export function PremiumCapabilities() {
  const capabilities = [
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamline operations across HCM, Finance, Healthcare, and Work Management.',
      tags: ['HCM', 'Finance', 'Healthcare'],
      color: 'blue',
    },
    {
      icon: Wrench,
      title: 'Systems Integration',
      description: 'Connect SAP with Azure, SharePoint, Salesforce, and enterprise platforms.',
      tags: ['Azure', 'SharePoint', 'Salesforce'],
      color: 'indigo',
    },
    {
      icon: Smartphone,
      title: 'Mobility Solutions',
      description: 'Enterprise mobile applications with SAP Mobile, Intune, and Afaria.',
      tags: ['SAP Mobile', 'Intune', 'Afaria'],
      color: 'cyan',
    },
    {
      icon: GraduationCap,
      title: 'Software Services',
      description: 'Global delivery, training, certification, and process reengineering.',
      tags: ['Training', 'Certification', 'Global Delivery'],
      color: 'violet',
    },
    {
      icon: Users,
      title: 'Resource Management',
      description: 'On-demand project managers, analysts, and developers on T&M basis.',
      tags: ['PM', 'Analysts', 'Developers'],
      color: 'emerald',
    },
    {
      icon: Headphones,
      title: 'Managed Services',
      description: 'End-to-end IT operations, network, workplace, and data center services.',
      tags: ['Operations', 'Network', 'Data Center'],
      color: 'orange',
    },
  ];

  const industries = [
    { name: 'Manufacturing', icon: Building2 },
    { name: 'Retail & Consumer', icon: TrendingUp },
    { name: 'Healthcare', icon: Heart },
    { name: 'Financial Services', icon: DollarSign },
    { name: 'Energy & Utilities', icon: Zap },
    { name: 'Public Sector', icon: UsersIcon },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        bg: 'from-blue-500/10 to-blue-600/5',
        icon: 'from-blue-500 to-blue-600',
        text: 'text-blue-600',
        border: 'group-hover:border-blue-200',
        shadow: 'group-hover:shadow-blue-100/50',
      },
      indigo: {
        bg: 'from-indigo-500/10 to-indigo-600/5',
        icon: 'from-indigo-500 to-indigo-600',
        text: 'text-indigo-600',
        border: 'group-hover:border-indigo-200',
        shadow: 'group-hover:shadow-indigo-100/50',
      },
      cyan: {
        bg: 'from-cyan-500/10 to-cyan-600/5',
        icon: 'from-cyan-500 to-cyan-600',
        text: 'text-cyan-600',
        border: 'group-hover:border-cyan-200',
        shadow: 'group-hover:shadow-cyan-100/50',
      },
      violet: {
        bg: 'from-violet-500/10 to-violet-600/5',
        icon: 'from-violet-500 to-violet-600',
        text: 'text-violet-600',
        border: 'group-hover:border-violet-200',
        shadow: 'group-hover:shadow-violet-100/50',
      },
      emerald: {
        bg: 'from-emerald-500/10 to-emerald-600/5',
        icon: 'from-emerald-500 to-emerald-600',
        text: 'text-emerald-600',
        border: 'group-hover:border-emerald-200',
        shadow: 'group-hover:shadow-emerald-100/50',
      },
      orange: {
        bg: 'from-orange-500/10 to-orange-600/5',
        icon: 'from-orange-500 to-orange-600',
        text: 'text-orange-600',
        border: 'group-hover:border-orange-200',
        shadow: 'group-hover:shadow-orange-100/50',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Sophisticated light mesh gradient background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
                Key Capabilities
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-slate-900 mb-6">
              Maximize ROI on SAP Investments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end solutions in HCM, SD, FI, and Master Data Management, suited for the latest technology changes in your industry.
            </p>
          </motion.div>

          {/* Capabilities Grid - 3 Column Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              const colors = getColorClasses(capability.color);
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className={`relative bg-white border border-slate-200 ${colors.border} rounded-2xl p-8 h-full hover:shadow-xl ${colors.shadow} transition-all duration-300 hover:-translate-y-1`}>
                    {/* Gradient Background Accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.bg} rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colors.icon} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className={`text-2xl font-bold text-slate-900 mb-3 group-hover:${colors.text} transition-colors`}>
                        {capability.title}
                      </h3>
                      
                      <p className="text-slate-600 text-base leading-relaxed mb-6">
                        {capability.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {capability.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className={`flex items-center gap-2 ${colors.text} text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.65 + idx * 0.05 }}
                    className="group"
                  >
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-lg hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all text-center hover:-translate-y-1">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-700/20 transition-all group-hover:scale-110">
                        <Icon className="w-8 h-8 text-blue-600" strokeWidth={2} />
                      </div>
                      <div className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors leading-tight">
                        {industry.name}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}