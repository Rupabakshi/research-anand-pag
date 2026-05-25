import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, AlertTriangle, FileText } from 'lucide-react';
import { PrefetchLink } from '../../components/PrefetchLink';
import { PrimaryButton, SecondaryButton, HeroH1, EyebrowPill } from '../../components/ui';
import { useTheme } from '../../contexts/ThemeContext';

export default function ERCSolution() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Product Screenshot */}
      <ERCProductHero />

      {/* Persona Tabs Section */}
      <ERCPersonaTabs />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

// ============================================================================
// ERCProductHero - Inlined
// ============================================================================
function ERCProductHero() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden pt-24 lg:pt-32 pb-0 px-6 sm:px-8 lg:px-12" style={{ backgroundColor: theme.background.dark }}>
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }} 
        />
      </div>

      {/* Subtle Ambient Light - minimal */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ backgroundColor: theme.accent.ambient1 }} />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Left-Aligned Hero Content */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                ENTERPRISE COMPLIANCE
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ hyphens: 'none', wordBreak: 'normal' }}
          >
            <HeroH1 className="mb-6">
              Stay <span className="whitespace-nowrap">Audit-Ready,</span><br />Always
            </HeroH1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] sm:text-[18px] leading-[1.6] text-slate-400 mb-8 max-w-xl"
          >
            Real-time compliance monitoring with automated controls testing across 50+ regulatory frameworks.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <PrefetchLink to="/company/contact">
              <PrimaryButton>
                Request Demo
              </PrimaryButton>
            </PrefetchLink>
            <PrefetchLink to="/resources/case-studies">
              <SecondaryButton>
                View Case Studies
              </SecondaryButton>
            </PrefetchLink>
          </motion.div>
        </div>

        {/* Product Screenshot - GIANT, clean, no extra wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative -mx-6 sm:mx-0"
        >
          <div className="bg-slate-800 rounded-t-2xl border border-slate-700 border-b-0 overflow-hidden shadow-2xl">
            <ERCDashboardScreenshot />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ERCDashboardScreenshot - Inlined
// ============================================================================
function ERCDashboardScreenshot() {
  const [complianceRate] = useState(99.7);
  const { theme } = useTheme();

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: theme.background.dark }}>
      {/* Top Bar - Simple */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <h2 className="text-lg lg:text-xl font-semibold text-white">Compliance Dashboard</h2>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-green-400">Live</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">
            Filters
          </button>
          <button
            className="px-5 py-2 text-white text-sm font-medium rounded-lg transition-colors"
            style={{ backgroundColor: theme.cta.primary }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.cta.primaryHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.cta.primary}
          >
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs text-slate-400">Compliance</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">{complianceRate}%</div>
          <div className="text-xs text-green-400">+0.2% this week</div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xs text-slate-400">Controls</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">1,247</div>
          <div className="text-xs text-slate-400">Monitored</div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
            </div>
            <span className="text-xs text-slate-400">Alerts</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">3</div>
          <div className="text-xs text-orange-400">Requires review</div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs text-slate-400">Frameworks</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">52</div>
          <div className="text-xs text-slate-400">Active</div>
        </div>
      </div>

      {/* Main Content Area - Table/List View */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-slate-700/50 bg-slate-800/30">
          <div className="col-span-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Control</div>
          <div className="col-span-2 text-xs font-medium text-slate-400 uppercase tracking-wider hidden lg:block">Framework</div>
          <div className="col-span-2 text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:block">Last Test</div>
          <div className="col-span-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Status</div>
          <div className="col-span-2 text-xs font-medium text-slate-400 uppercase tracking-wider hidden lg:block">Risk</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-slate-700/50">
          {[
            { name: 'User Access Controls', framework: 'SOX 404', time: '2m ago', status: 'pass', risk: 'low' },
            { name: 'Data Encryption Standards', framework: 'GDPR', time: '5m ago', status: 'pass', risk: 'low' },
            { name: 'Financial Close Process', framework: 'SOX 404', time: '12m ago', status: 'warning', risk: 'medium' },
            { name: 'Change Management', framework: 'ITGC', time: '18m ago', status: 'pass', risk: 'low' },
            { name: 'Segregation of Duties', framework: 'SOX 404', time: '25m ago', status: 'pass', risk: 'low' },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-slate-800/30 transition-colors">
              <div className="col-span-4 text-sm text-white font-medium">{row.name}</div>
              <div className="col-span-2 text-sm text-slate-400 hidden lg:block">{row.framework}</div>
              <div className="col-span-2 text-sm text-slate-500 hidden sm:block">{row.time}</div>
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                  row.status === 'pass' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                  'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                }`}>
                  {row.status === 'pass' ? 'Passed' : 'Review'}
                </span>
              </div>
              <div className="col-span-2 hidden lg:block">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                  row.risk === 'low' ? 'bg-slate-700/50 text-slate-300' :
                  'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                }`}>
                  {row.risk === 'low' ? 'Low' : 'Medium'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// ERCPersonaTabs - Inlined
// ============================================================================
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
    title: 'AUDITOR',
    heading: 'Continuous controls monitoring for real-time assurance',
    description: 'Automate control testing, track evidence, and streamline your audit program with intelligent workflows.',
    features: [
      'Automated test scripts for continuous controls monitoring',
      'Evidence repository with version control and audit trails',
      'Issue tracking from detection to remediation closure',
      'Pre-built audit programs for major frameworks (SOX, GDPR, ISO 27001)'
    ],
    screenshot: {
      title: 'Controls Testing Automation',
      metrics: [
        { label: 'Tests Scheduled', value: '342', status: 'blue' },
        { label: 'Auto-Passed', value: '315', status: 'green' },
        { label: 'Manual Review', value: '24', status: 'yellow' },
        { label: 'Failed', value: '3', status: 'red' }
      ],
      workflow: true
    }
  },
  {
    id: 'compliance-analyst',
    title: 'COMPLIANCE ANALYST',
    heading: 'Simplified compliance management for day-to-day operations',
    description: 'Execute control tests, document findings, and collaborate seamlessly with remediation owners.',
    features: [
      'Task management with automated reminders and escalations',
      'Collaboration tools for cross-functional remediation efforts',
      'Real-time dashboards to monitor your workload and deadlines',
      'Customizable workflows that match your organization\'s processes'
    ],
    screenshot: {
      title: 'Daily Operations Dashboard',
      metrics: [
        { label: 'My Tasks', value: '12', status: 'blue' },
        { label: 'Overdue', value: '2', status: 'red' },
        { label: 'Completed Today', value: '8', status: 'green' },
        { label: 'Team Capacity', value: '87%', status: 'yellow' }
      ],
      tasks: true
    }
  }
];

function ERCPersonaTabs() {
  const [activeTab, setActiveTab] = useState('cco');
  const { theme } = useTheme();

  const activePersona = personas.find(p => p.id === activeTab) || personas[0];

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-[700] leading-[1.15] tracking-[-0.02em] text-gray-900 mb-4"
            >
              Built for your entire compliance team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[16px] sm:text-[17px] leading-[1.7] text-gray-600 max-w-2xl mx-auto"
            >
              From executives to analysts, ERC provides role-specific views and workflows for every stakeholder in your compliance organization.
            </motion.p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16"
          >
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActiveTab(persona.id)}
                className="px-5 py-3 text-[13px] sm:text-[14px] font-semibold rounded-lg transition-all"
                style={activeTab === persona.id ? {
                  backgroundColor: theme.cta.primary,
                  color: 'white',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                } : {
                  backgroundColor: '#f3f4f6',
                  color: '#374151'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== persona.id) {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== persona.id) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                {persona.title}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                
                {/* Left: Text Content */}
                <div>
                  <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[700] leading-[1.2] tracking-[-0.02em] text-gray-900 mb-4">
                    {activePersona.heading}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] text-gray-600 leading-[1.7] mb-8">
                    {activePersona.description}
                  </p>

                  <div className="space-y-4">
                    {activePersona.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-[15px] text-gray-700 leading-[1.6]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Screenshot Mockup */}
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8">
                  <div className="mb-6">
                    <h4 className="text-[16px] sm:text-[18px] font-semibold text-white mb-1">
                      {activePersona.screenshot.title}
                    </h4>
                    <div className="h-0.5 w-12 bg-blue-500 rounded"></div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {activePersona.screenshot.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 rounded-lg border ${
                          metric.status === 'red' ? 'bg-red-500/10 border-red-500/30' :
                          metric.status === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
                          metric.status === 'green' ? 'bg-green-500/10 border-green-500/30' :
                          'bg-blue-500/10 border-blue-500/30'
                        }`}
                      >
                        <div className="text-[11px] sm:text-[12px] text-slate-400 mb-2">{metric.label}</div>
                        <div className={`text-[22px] sm:text-[26px] font-bold ${
                          metric.status === 'red' ? 'text-red-400' :
                          metric.status === 'yellow' ? 'text-yellow-400' :
                          metric.status === 'green' ? 'text-green-400' :
                          'text-blue-400'
                        }`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Element Based on Type */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    {activePersona.screenshot.chart && (
                      <div className="space-y-3">
                        <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Risk Trend (Last 30 Days)</span>
                        <div className="flex items-end gap-1 sm:gap-2 h-32">
                          {[65, 58, 70, 62, 55, 48, 52, 45, 40, 38, 35, 30].map((height, idx) => (
                            <div key={idx} className="flex-1 bg-blue-500/30 rounded-t" style={{ height: `${height}%` }}></div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activePersona.screenshot.heatmap && (
                      <div className="space-y-2">
                        <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Risk Heat Map</span>
                        <div className="grid grid-cols-5 gap-1 sm:gap-2">
                          {[
                            ['low', 'low', 'medium', 'medium', 'high'],
                            ['low', 'low', 'medium', 'high', 'high'],
                            ['low', 'medium', 'medium', 'high', 'critical'],
                            ['medium', 'medium', 'high', 'high', 'critical'],
                            ['medium', 'high', 'high', 'critical', 'critical']
                          ].map((row, rowIdx) => (
                            row.map((risk, colIdx) => (
                              <div 
                                key={`${rowIdx}-${colIdx}`} 
                                className={`aspect-square rounded ${
                                  risk === 'low' ? 'bg-green-500/30' :
                                  risk === 'medium' ? 'bg-yellow-500/30' :
                                  risk === 'high' ? 'bg-orange-500/30' :
                                  'bg-red-500/50'
                                }`}
                              />
                            ))
                          ))}
                        </div>
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

                    {activePersona.screenshot.tasks && (
                      <div className="space-y-2">
                        <span className="text-[12px] sm:text-[13px] text-slate-300 font-semibold">Today's Priority Tasks</span>
                        {[
                          { task: 'Review Q4 SOX controls', due: 'Today, 2:00 PM', priority: 'high' },
                          { task: 'Update risk assessment', due: 'Today, 4:30 PM', priority: 'high' },
                          { task: 'Prepare board report', due: 'Tomorrow', priority: 'medium' },
                          { task: 'Team sync: GDPR readiness', due: 'Tomorrow', priority: 'low' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start justify-between py-2 border-b border-slate-700 last:border-0">
                            <div className="flex-1 pr-2">
                              <div className="text-[12px] sm:text-[13px] text-slate-300">{item.task}</div>
                              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">{item.due}</div>
                            </div>
                            <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded flex-shrink-0 ${
                              item.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                              item.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-slate-500/20 text-slate-400'
                            }`}>
                              {item.priority}
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
      </div>
    </section>
  );
}

// ============================================================================
// FinalCTA - Inlined
// ============================================================================
function FinalCTA() {
  const { theme } = useTheme();

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      {/* Ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: theme.accent.ambient1 }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: theme.accent.ambient2 }}></div>
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            
            {/* Left - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-[700] leading-[1.1] tracking-[-0.02em] mb-6 text-white">
                Ready to transform your compliance program?
              </h2>
              
              <p className="text-[16px] sm:text-[17px] text-slate-300 leading-[1.7] mb-10 max-w-[520px]">
                See how ERC can streamline your risk management, automate compliance testing, and provide enterprise-wide visibility for your entire compliance organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <PrefetchLink to="/company/contact">
                  <PrimaryButton>
                    Request ERC demo
                  </PrimaryButton>
                </PrefetchLink>
                
                <PrefetchLink to="/resources/whitepapers">
                  <SecondaryButton>
                    Download product overview
                  </SecondaryButton>
                </PrefetchLink>
              </div>
            </motion.div>

            {/* Right - What you'll get */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all">
                <h3 className="text-[20px] lg:text-[22px] font-[700] text-white mb-6">What you'll get:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[16px] font-[600] text-white mb-1">Compliance Assessment</div>
                      <div className="text-[14px] text-white/60 leading-[1.6]">Free evaluation of your current risk and compliance landscape</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[16px] font-[600] text-white mb-1">Live ERC Demo</div>
                      <div className="text-[14px] text-white/60 leading-[1.6]">Personalized walkthrough tailored to your compliance needs</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[16px] font-[600] text-white mb-1">Implementation Roadmap</div>
                      <div className="text-[14px] text-white/60 leading-[1.6]">Step-by-step plan to modernize your compliance program</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[16px] font-[600] text-white mb-1">Efficiency Analysis</div>
                      <div className="text-[14px] text-white/60 leading-[1.6]">Projected time savings and cost reduction metrics</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className="flex items-center gap-4 bg-blue-500/10 border border-blue-500/20 rounded-lg px-6 py-4">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-[14px] text-slate-300">
                  <span className="font-[600] text-white">No commitment required.</span> All consultations are confidential.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}