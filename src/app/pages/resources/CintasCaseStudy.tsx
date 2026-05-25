import { motion } from 'motion/react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Layers, 
  Database, 
  FileText, 
  ShieldCheck, 
  Settings,
  Layout,
  Globe
} from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';
import { HeroH1, EyebrowPill } from '../../components/ui';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function CintasCaseStudy() {
  const { theme } = useTheme();

  const capabilities = [
    {
      title: "SAP BTP-Based Enterprise Portal",
      description: "A scalable, secure, and extensible foundation for vendor operations, moving beyond manual tools to a modern cloud platform.",
      icon: Layout
    },
    {
      title: "SAP S/4HANA Integration",
      description: "Real-time synchronization of vendor actions, scheduling updates, and status changes with the enterprise system of record.",
      icon: Database
    },
    {
      title: "Order Acceptance & Scheduling",
      description: "Centralized hub for vendors to view assigned orders, accept/reject work, and enter scheduling details, reducing email-based coordination.",
      icon: Clock
    },
    {
      title: "Status Workflow Engine",
      description: "Structured service order lifecycle defining clear transitions, trigger-based updates, and shared visibility across all teams.",
      icon: Settings
    },
    {
      title: "Document Classification",
      description: "Direct upload and structured classification of invoices and service orders to improve quality and ensure invoice readiness.",
      icon: FileText
    },
    {
      title: "High-Volume PDF Processing",
      description: "Asynchronous background generation of large service order bundles, supporting non-mobile vendors without sacrificing performance.",
      icon: Layers
    },
    {
      title: "Multi-Role Secure Access",
      description: "Granular access control for internal ops, external vendors, administrators, and regional locations ensuring data separation.",
      icon: ShieldCheck
    },
    {
      title: "Backend Reliability Layer",
      description: "Queue-based execution with retry handling and error management designed for real enterprise integration conditions.",
      icon: Globe
    }
  ];

  const outcomes = [
    { title: "Improved Collaboration", description: "Vendors have a single source of truth for all order-related activities." },
    { title: "Better Visibility", description: "Internal teams track acknowledgement and scheduling status in real-time." },
    { title: "Reduced Manual Work", description: "Drastic reduction in dependency on email follow-ups and spreadsheet tracking." },
    { title: "Stronger Document Readiness", description: "Improved paperwork completeness for faster downstream billing review." },
    { title: "Faster Invoice Prep", description: "Cleaner documentation workflows leading to accelerated invoice readiness." },
    { title: "Scalable Foundation", description: "A flexible architecture ready for future reporting and automation enhancements." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        ></div>
        
        {/* Ambient Lights */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-50, 75, -50] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', left: '5%' }}
        />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <EyebrowPill className="mb-8">Success Story: Cintas</EyebrowPill>
                  <HeroH1 className="mb-6">
                    SAP BTP Vendor Portal for Enterprise Service Operations
                  </HeroH1>
                  <p className="text-[18px] lg:text-[22px] text-slate-300 leading-[1.6] mb-10 max-w-2xl">
                    Anand PAG helped Cintas modernize vendor service order operations with a secure SAP BTP-based portal integrated with SAP S/4HANA, centralizing collaboration for a Fortune 500 leader.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                      <div className="text-blue-400 text-[24px] font-bold">4-5 Months</div>
                      <div className="text-slate-400 text-[12px] uppercase tracking-wider font-semibold">Delivery Timeline</div>
                    </div>
                    <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                      <div className="text-blue-400 text-[24px] font-bold">500+</div>
                      <div className="text-slate-400 text-[12px] uppercase tracking-wider font-semibold">External Vendors</div>
                    </div>
                    <div className="px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                      <div className="text-blue-400 text-[24px] font-bold">Fortune 500</div>
                      <div className="text-slate-400 text-[12px] uppercase tracking-wider font-semibold">Client Status</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1634468413956-831adf9d5a06?auto=format&fit=crop&q=80&w=1200"
                    alt="Cintas Fire Safety Operations"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">Industry</div>
              <div className="text-gray-900 font-semibold">Enterprise Services</div>
            </div>
            <div>
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">Core Platform</div>
              <div className="text-gray-900 font-semibold">SAP BTP</div>
            </div>
            <div>
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">Integration</div>
              <div className="text-gray-900 font-semibold">SAP S/4HANA</div>
            </div>
            <div>
              <div className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-1">Focus</div>
              <div className="text-gray-900 font-semibold">Workflow Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-16">
                
                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 tracking-tight">
                    The Challenge: Replacing Manual Fragmentation
                  </h2>
                  <p className="text-[16px] lg:text-[17px] text-gray-600 leading-[1.7] mb-6">
                    Cintas needed to transform a manual, fragmented vendor coordination process into a secure, centralized, and SAP-integrated service order workflow.
                  </p>
                  <p className="text-[16px] lg:text-[17px] text-gray-600 leading-[1.7]">
                    The existing process relied heavily on manual coordination, email communication, spreadsheet tracking, and disconnected legacy tools. Internal operations teams struggled to track service orders, while vendors lacked a clear way to acknowledge work and provide documentation at scale.
                  </p>
                  
                  <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Limited visibility into order progress",
                      "Heavy manual follow-up dependency",
                      "Inconsistent document classification",
                      "Delays in invoice readiness",
                      "Fragmented workflows across tools",
                      "Security risks with shared data"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 tracking-tight">
                    The Anand PAG Solution
                  </h2>
                  <p className="text-[16px] lg:text-[17px] text-gray-600 leading-[1.7] mb-8">
                    We designed and delivered a cloud-based Vendor Portal using SAP BTP as the foundation and SAP S/4HANA as the core enterprise system of record. This solution created a secure collaboration layer between Cintas internal teams, external vendors, and regional locations.
                  </p>
                  
                  <div className="p-8 bg-blue-50 border border-blue-100 rounded-2xl">
                    <h4 className="text-[18px] font-bold text-blue-900 mb-4">A Digital Operating Model</h4>
                    <p className="text-[15px] text-blue-800 leading-[1.6]">
                      "The goal was not just to build a portal. The goal was to create a digital operating model where vendors, locations, and internal teams could work from the same source of truth, reduce manual coordination, and support high-volume enterprise operations."
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Sidebar Stats & Tech */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-12">
                  
                  {/* Results Card */}
                  <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
                    <h3 className="text-[20px] font-bold mb-6">Key Outcomes</h3>
                    <div className="space-y-6">
                      {outcomes.map((outcome, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <div className="font-bold text-[15px]">{outcome.title}</div>
                            <div className="text-[13px] text-slate-400 mt-1">{outcome.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Browser Chrome UI Placeholder */}
                  <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
                    <div className="bg-slate-700 px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-slate-900/50 rounded px-3 py-1 text-[11px] text-slate-400 font-mono">
                          vendor.cintas.com/orders
                        </div>
                      </div>
                    </div>
                    <div className="p-6 aspect-[16/10] bg-slate-900">
                      <div className="space-y-4">
                        <div className="h-6 w-32 bg-slate-800 rounded animate-pulse"></div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-20 bg-slate-800 rounded p-3">
                            <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
                            <div className="h-4 w-12 bg-blue-500/30 rounded"></div>
                          </div>
                          <div className="h-20 bg-slate-800 rounded p-3">
                            <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
                            <div className="h-4 w-12 bg-green-500/30 rounded"></div>
                          </div>
                          <div className="h-20 bg-slate-800 rounded p-3">
                            <div className="h-2 w-full bg-slate-700 rounded mb-2"></div>
                            <div className="h-4 w-12 bg-purple-500/30 rounded"></div>
                          </div>
                        </div>
                        <div className="h-32 bg-slate-800 rounded flex items-center justify-center">
                          <Layout className="w-8 h-8 text-slate-700" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Grid */}
      <section className="py-24 lg:py-40 bg-[#030213] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mb-16 lg:mb-24">
              <EyebrowPill className="mb-6">Technical Architecture</EyebrowPill>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-white leading-tight mb-6">
                Built for Enterprise Complexity
              </h2>
              <p className="text-[18px] text-slate-400 leading-relaxed">
                The solution combined SAP BTP development, S/4HANA integration, and workflow automation into a single, high-reliability platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <cap.icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-[14px] text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[32px] lg:text-[48px] font-bold text-gray-900 mb-8 leading-[1.1]">
                  Delivered in 4-5 Months with Continuous Feedback
                </h2>
                <p className="text-[16px] lg:text-[17px] text-gray-600 leading-[1.8] mb-8">
                  Anand PAG worked closely with Cintas stakeholders to translate business pain points into product requirements. Our iterative delivery approach allowed Cintas to see working functionality early, providing feedback that shaped the final product around real operational needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Discovery of manual operational bottlenecks",
                    "Rapid design & validation of vendor workflows",
                    "Continuous stakeholder feedback loops",
                    "Comprehensive testing across SAP & document cycles"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-[15px] font-medium text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <div className="relative">
                <div className="aspect-square bg-blue-600 rounded-2xl rotate-3 absolute inset-0 opacity-10"></div>
                <div className="aspect-square bg-slate-900 rounded-2xl -rotate-2 relative overflow-hidden shadow-2xl p-12">
                   <div className="flex flex-col h-full justify-between">
                      <div className="text-[48px] font-bold text-blue-500 leading-none tracking-tighter">
                        80%
                      </div>
                      <div className="text-white">
                        <div className="text-[20px] font-bold mb-2">Manual Reduction</div>
                        <p className="text-slate-400 text-[14px]">Targeted reduction in coordination overhead across internal teams and vendors.</p>
                      </div>
                      <div className="pt-8 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <div className="text-slate-500 text-[12px] font-mono">PROJECT_VELOCITY</div>
                          <div className="flex gap-1">
                            {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-blue-500"></div>)}
                            {[1,2,3].map(i => <div key={i} className="w-1 h-4 bg-slate-700"></div>)}
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-8 tracking-tight">
            Transform Your Vendor Operations
          </h2>
          <p className="text-slate-400 text-[18px] lg:text-[20px] mb-12 max-w-2xl mx-auto">
            Ready to modernize your SAP-integrated workflows with a secure cloud-based operating model?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrefetchLink
              to="/company/contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02]"
            >
              Request a Demo
            </PrefetchLink>
            <PrefetchLink
              to="/resources/case-studies"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              View More Case Studies
            </PrefetchLink>
          </div>
        </div>
      </section>
    </div>
  );
}