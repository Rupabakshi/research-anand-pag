import { useState } from 'react';
import { Check, X, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { PrefetchLink } from './PrefetchLink';

export function FeatureComparison() {
  const [activeTab, setActiveTab] = useState<'manual' | 'automated'>('manual');

  const features = [
    {
      category: 'Process Efficiency',
      items: [
        { 
          name: 'Time to Complete Process', 
          manual: '4-6 hours', 
          automated: '15-30 minutes',
          tooltip: 'Average time for standard approval workflow'
        },
        { 
          name: 'Error Rate', 
          manual: '10-15%', 
          automated: '<1%',
          tooltip: 'Data entry and processing errors'
        },
        { 
          name: 'Staff Required', 
          manual: '5-8 FTEs', 
          automated: '1-2 FTEs',
          tooltip: 'Full-time employees needed'
        },
        { 
          name: 'Processing Capacity', 
          manual: '50-100/day', 
          automated: '1000+/day',
          tooltip: 'Transactions processed daily'
        }
      ]
    },
    {
      category: 'Compliance & Accuracy',
      items: [
        { 
          name: 'Audit Trail', 
          manual: false, 
          automated: true,
          tooltip: 'Complete tracking of all changes'
        },
        { 
          name: 'Real-time Compliance Monitoring', 
          manual: false, 
          automated: true,
          tooltip: 'Automated regulatory compliance checks'
        },
        { 
          name: 'Version Control', 
          manual: false, 
          automated: true,
          tooltip: 'Document and process versioning'
        },
        { 
          name: 'Automated Alerts', 
          manual: false, 
          automated: true,
          tooltip: 'Notifications for exceptions'
        }
      ]
    },
    {
      category: 'Cost & ROI',
      items: [
        { 
          name: 'Annual Operating Cost', 
          manual: '$500K-800K', 
          automated: '$150K-250K',
          tooltip: 'Including labor, systems, and overhead'
        },
        { 
          name: 'Implementation Time', 
          manual: 'N/A', 
          automated: '3-6 months',
          tooltip: 'Time to full deployment'
        },
        { 
          name: 'ROI Timeline', 
          manual: 'N/A', 
          automated: '6-10 months',
          tooltip: 'Break-even point'
        },
        { 
          name: 'Scalability', 
          manual: 'Limited', 
          automated: 'Unlimited',
          tooltip: 'Ability to handle growth'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
            <span className="text-sm font-semibold">Compare Solutions</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4">
            Manual vs <span className="text-blue-700">Automated</span> Processes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference automation makes to your business operations
          </p>
        </motion.div>

        {/* Toggle View (Mobile) */}
        <div className="flex justify-center gap-4 mb-8 md:hidden">
          <button
            onClick={() => setActiveTab('manual')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'manual'
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Manual Process
          </button>
          <button
            onClick={() => setActiveTab('automated')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'automated'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Automated
          </button>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-700">
                <h3 className="text-xl font-bold">Features</h3>
              </div>
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-700 bg-red-900/30 hidden md:block">
                <h3 className="text-xl font-bold text-center">Manual Process</h3>
                <p className="text-sm text-gray-300 text-center mt-1">Traditional Approach</p>
              </div>
              <div className="p-6 bg-green-900/30 hidden md:block">
                <h3 className="text-xl font-bold text-center">Automated Solution</h3>
                <p className="text-sm text-gray-300 text-center mt-1">Our Technology</p>
              </div>
            </div>

            {/* Table Body */}
            <TooltipProvider>
              {features.map((category, catIndex) => (
                <div key={catIndex}>
                  {/* Category Header */}
                  <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900">{category.category}</h4>
                  </div>

                  {/* Feature Rows */}
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      {/* Feature Name */}
                      <div className="p-6 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      {/* Manual Value */}
                      <div className={`p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 ${
                        activeTab === 'manual' || window.innerWidth >= 768 ? '' : 'hidden'
                      }`}>
                        {typeof item.manual === 'boolean' ? (
                          item.manual ? (
                            <Check className="w-6 h-6 text-green-600" />
                          ) : (
                            <X className="w-6 h-6 text-red-600" />
                          )
                        ) : (
                          <span className="text-gray-700 text-center">{item.manual}</span>
                        )}
                      </div>

                      {/* Automated Value */}
                      <div className={`p-6 flex items-center justify-center bg-green-50/50 ${
                        activeTab === 'automated' || window.innerWidth >= 768 ? '' : 'hidden'
                      }`}>
                        {typeof item.automated === 'boolean' ? (
                          item.automated ? (
                            <Check className="w-6 h-6 text-green-600" />
                          ) : (
                            <X className="w-6 h-6 text-red-600" />
                          )
                        ) : (
                          <span className="text-green-700 font-semibold text-center">{item.automated}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </TooltipProvider>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-3">Ready to Make the Switch?</h4>
              <p className="text-blue-100 mb-6">
                Join leading enterprises who've already transformed their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrefetchLink to="/company/contact">
                  <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Demo
                  </button>
                </PrefetchLink>
                <PrefetchLink to="/company/contact">
                  <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Download Comparison Guide
                  </button>
                </PrefetchLink>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto"
        >
          {[
            { value: '70%', label: 'Time Savings', color: 'blue' },
            { value: '85%', label: 'Error Reduction', color: 'green' },
            { value: '60%', label: 'Cost Reduction', color: 'purple' },
            { value: '10x', label: 'Capacity Increase', color: 'orange' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200"
            >
              <div className={`text-4xl font-bold mb-2 text-${stat.color}-700`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}