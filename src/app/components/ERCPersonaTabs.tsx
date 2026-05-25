import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

const personas = [
  {
    id: 'cco',
    title: 'CHIEF COMPLIANCE OFFICER',
    heading: 'Enterprise-wide visibility for strategic decision-making',
    description: 'Get the executive dashboard you need to drive compliance strategy and report to the board.',
    features: [
      'Real-time risk aggregation across all business units and geographies',
      'Board-ready reporting with one-click compliance scorecards',
      'Predictive analytics to identify emerging risks before they escalate',
      'Executive KPI tracking with customizable benchmarks'
    ],
    screenshot: {
      title: 'Executive Risk Dashboard',
      metrics: [
        { label: 'Critical Risks', value: '3', status: 'red' },
        { label: 'Open Findings', value: '47', status: 'yellow' },
        { label: 'Compliance Score', value: '94%', status: 'green' },
        { label: 'Controls Tested', value: '1,247', status: 'blue' }
      ],
      chart: true
    }
  },
  {
    id: 'risk-manager',
    title: 'RISK MANAGER',
    heading: 'Streamlined workflows for risk assessment and mitigation',
    description: 'Manage risk assessments, track mitigations, and visualize your risk landscape in one platform.',
    features: [
      'Dynamic risk heat maps with drill-down capabilities',
      'Automated risk scoring based on likelihood and impact',
      'Mitigation workflow tracking with accountability assignments',
      'Integration with incident management and audit findings'
    ],
    screenshot: {
      title: 'Risk Assessment & Mitigation',
      metrics: [
        { label: 'Active Risks', value: '127', status: 'blue' },
        { label: 'High Priority', value: '12', status: 'red' },
        { label: 'In Mitigation', value: '34', status: 'yellow' },
        { label: 'Avg. Resolution', value: '8.3d', status: 'green' }
      ],
      heatmap: true
    }
  },
  {
    id: 'auditor',
    title: 'INTERNAL AUDITOR',
    heading: 'End-to-end audit management from planning to reporting',
    description: 'Plan audits, track findings, and manage remediation—all in a single audit workspace.',
    features: [
      'Integrated audit planning with risk-based prioritization',
      'Real-time collaboration between audit teams and business owners',
      'Automated finding tracking with remediation workflows',
      'Historical audit repository for trend analysis'
    ],
    screenshot: {
      title: 'Audit Management Console',
      metrics: [
        { label: 'Active Audits', value: '18', status: 'blue' },
        { label: 'Open Findings', value: '63', status: 'yellow' },
        { label: 'Overdue Items', value: '5', status: 'red' },
        { label: 'Completion Rate', value: '87%', status: 'green' }
      ],
      table: true
    }
  },
  {
    id: 'analyst',
    title: 'COMPLIANCE ANALYST',
    heading: 'Daily workflows designed for hands-on compliance work',
    description: 'Test controls, document evidence, and manage compliance tasks without the administrative burden.',
    features: [
      'Step-by-step controls testing with guided workflows',
      'Evidence collection and documentation in one place',
      'Automated reminders for recurring compliance tasks',
      'Mobile-friendly interface for on-site testing'
    ],
    screenshot: {
      title: 'Controls Testing Workspace',
      metrics: [
        { label: 'Tests Due Today', value: '24', status: 'yellow' },
        { label: 'Completed', value: '156', status: 'green' },
        { label: 'Failed Controls', value: '7', status: 'red' },
        { label: 'Pass Rate', value: '95.5%', status: 'green' }
      ],
      workflow: true
    }
  }
];

export function ERCPersonaTabs() {
  const [activeTab, setActiveTab] = useState(personas[0].id);
  const activePersona = personas.find(p => p.id === activeTab) || personas[0];
  const { theme } = useTheme();

  return (
    <section className="py-20 sm:py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Persona Tabs */}
        <div className="border-b border-gray-200 mb-12 lg:mb-16">
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {personas.map((persona) => {
              const isActive = activeTab === persona.id;
              
              return (
                <button
                  key={persona.id}
                  onClick={() => setActiveTab(persona.id)}
                  className={`
                    relative pb-4 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1.5px] transition-colors
                    ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}
                  `}
                >
                  {persona.title}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Persona Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[700] leading-[1.2] tracking-[-0.02em] text-gray-900 mb-4">
                  {activePersona.heading}
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.7] text-gray-600">
                  {activePersona.description}
                </p>
              </div>

              <ul className="space-y-4">
                {activePersona.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-[14px] sm:text-[15px] leading-[1.65] text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Product Screenshot */}
            <div className="bg-slate-800 rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-6 hidden sm:block">
                  <div className="bg-slate-800/50 rounded-md px-4 py-1.5 text-[12px] sm:text-[13px] text-slate-400 font-mono">
                    app.erc-platform.com/{activePersona.id}
                  </div>
                </div>
              </div>

              {/* Screenshot Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[16px] sm:text-[18px] font-[700] text-white">
                    {activePersona.screenshot.title}
                  </h4>
                  <div className="text-[11px] sm:text-[12px] text-slate-400">
                    Live
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {activePersona.screenshot.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-slate-700">
                      <div className="text-[10px] sm:text-[11px] text-slate-400 mb-1.5 uppercase tracking-wider">
                        {metric.label}
                      </div>
                      <div className={`
                        text-[20px] sm:text-[24px] font-bold
                        ${metric.status === 'green' ? 'text-green-500' : ''}
                        ${metric.status === 'red' ? 'text-red-500' : ''}
                        ${metric.status === 'yellow' ? 'text-yellow-500' : ''}
                        ${metric.status === 'blue' ? 'text-blue-500' : ''}
                      `}>
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Visual Element - varies by persona */}
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-4 sm:p-6">
                  {activePersona.screenshot.chart && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Risk Trend (90 days)</span>
                        <span className="text-[11px] text-slate-400">↓ 12%</span>
                      </div>
                      <div className="h-32 sm:h-40 flex items-end gap-1.5">
                        {[65, 58, 72, 45, 55, 48, 38, 42, 35, 28, 32, 25].map((height, idx) => (
                          <div key={idx} className="flex-1 bg-blue-600 rounded-t" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activePersona.screenshot.heatmap && (
                    <div className="space-y-4">
                      <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Risk Heat Map</span>
                      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                        {Array.from({ length: 25 }).map((_, idx) => {
                          const intensity = Math.random();
                          return (
                            <div
                              key={idx}
                              className="aspect-square rounded"
                              style={{
                                backgroundColor: intensity > 0.7 ? '#ef4444' : intensity > 0.4 ? '#eab308' : '#22c55e',
                                opacity: 0.3 + intensity * 0.7
                              }}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {activePersona.screenshot.table && (
                    <div className="space-y-2">
                      <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Recent Findings</span>
                      {[
                        { title: 'Access Control Review - Q1 2026', priority: 'High' },
                        { title: 'Data Privacy Assessment', priority: 'Critical' },
                        { title: 'Vendor Risk Assessment', priority: 'Medium' },
                        { title: 'SOX 404 Controls Testing', priority: 'High' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                          <span className="text-[12px] sm:text-[13px] text-slate-300 truncate pr-2">{item.title}</span>
                          <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded flex-shrink-0 ${
                            item.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            item.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePersona.screenshot.workflow && (
                    <div className="space-y-2">
                      <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Today's Testing Queue</span>
                      {[
                        { control: 'AC-001: User Access Review', status: 'Pending' },
                        { control: 'AC-045: Privilege Escalation Test', status: 'Completed' },
                        { control: 'DC-023: Data Classification Check', status: 'In Progress' },
                        { control: 'SC-067: Security Patch Validation', status: 'Pending' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                          <span className="text-[12px] sm:text-[13px] text-slate-300 truncate pr-2">{item.control}</span>
                          <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded flex-shrink-0 ${
                            item.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                            item.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-slate-500/20 text-slate-400'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}