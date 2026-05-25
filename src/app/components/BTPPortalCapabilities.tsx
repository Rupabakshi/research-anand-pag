import { motion } from 'motion/react';
import { EyebrowPill } from './ui';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Database, 
  Layout, 
  Clock, 
  Settings, 
  FileText, 
  Layers, 
  ShieldCheck, 
  Globe,
  BarChart3
} from 'lucide-react';

export function BTPPortalCapabilities() {
  const { theme } = useTheme();
  
  const pillars = [
    {
      title: "Operational Efficiency",
      subtitle: "Eliminate manual overhead with pre-built automation layers.",
      items: [
        { label: "Workflow Engine", desc: "Structured transitions for the entire service order lifecycle." },
        { label: "Document Intake & OCR", desc: "Automated extraction of S/4HANA fields from vendor PDFs." },
        { label: "High-Volume PDF Processing", desc: "Batch generation of service order bundles in seconds." }
      ],
      icon: Layout
    },
    {
      title: "Enterprise Integrity",
      subtitle: "Rock-solid integration built on SAP-certified standards.",
      items: [
        { label: "S/4HANA Sync", desc: "Real-time, bi-directional event bus for absolute consistency." },
        { label: "Role-Based Security", desc: "Granular access control for internal ops and external partners." },
        { label: "Reliability Layer", desc: "Queue-based execution with automated retry and error handling." }
      ],
      icon: Database
    },
    {
      title: "Strategic Visibility",
      subtitle: "Turn fragmented data into actionable executive insights.",
      items: [
        { label: "Ops Analytics", desc: "Real-time visibility into vendor fulfillment and scheduling." },
        { label: "Vendor Performance", desc: "Quantitative metrics for partner service level agreements." },
        { label: "Network Access", desc: "Global, multi-region secure access for diverse vendor bases." }
      ],
      icon: BarChart3
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-40 transition-colors duration-500" style={{ backgroundColor: theme.isLight ? 'white' : 'rgb(10, 15, 25)' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <EyebrowPill className="mb-6">Core Capabilities</EyebrowPill>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.1] mb-6" style={{ color: theme.isLight ? theme.text.onLight : theme.text.primary }}>
              Engineered for Enterprise Scale
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.7]" style={{ color: theme.isLight ? theme.text.onLightSecondary : theme.text.secondary }}>
              Moving beyond basic portal functionality. We deliver a complete digital operating model for complex service order networks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  theme.isLight 
                    ? 'bg-gray-50 border-gray-100' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                  theme.isLight ? 'bg-white shadow-sm' : 'bg-slate-900'
                }`}>
                  <pillar.icon className="w-7 h-7 text-blue-500" />
                </div>
                
                <h3 className={`text-[24px] font-bold mb-3 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>{pillar.title}</h3>
                <p className={`text-[15px] mb-8 leading-relaxed ${theme.isLight ? 'text-gray-600' : 'text-slate-400'}`}>{pillar.subtitle}</p>
                
                <div className="space-y-6 mt-auto">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="flex gap-4">
                      <div className="mt-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /></div>
                      <div>
                        <div className={`text-[15px] font-bold mb-1 ${theme.isLight ? 'text-gray-900' : 'text-white'}`}>{item.label}</div>
                        <div className={`text-[13px] leading-relaxed ${theme.isLight ? 'text-gray-500' : 'text-slate-400'}`}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

