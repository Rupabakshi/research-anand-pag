import { motion, AnimatePresence } from 'motion/react';
import { Database, CheckCircle2, AlertCircle, Activity, Package, FileText, TrendingUp, Clock, Zap, Shield, ArrowRight, Download, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface BTPPortalInterfaceProps {
  currentView: 'integration' | 'orders' | 'invoices' | 'analytics';
}

export function BTPPortalInterface({ currentView }: BTPPortalInterfaceProps) {
  const { theme } = useTheme();

  // Background color based on theme
  const bgColor = theme.isLight ? '#f8fafc' : (theme.themeName === 'navy' ? '#001e2b' : '#020617');

  return (
    <div className="w-full h-full transition-colors duration-500" style={{ backgroundColor: bgColor }}>
      <AnimatePresence mode="wait">
        {currentView === 'integration' && <IntegrationView key="integration" />}
        {currentView === 'orders' && <OrdersView key="orders" />}
        {currentView === 'invoices' && <InvoicesView key="invoices" />}
        {currentView === 'analytics' && <AnalyticsView key="analytics" />}
      </AnimatePresence>
    </div>
  );
}

// VIEW 1: SAP Integration Dashboard
function IntegrationView() {
  const { theme } = useTheme();
  const connections = [
    { name: 'S/4HANA Core', endpoint: 'api.s4hana.sap.com', status: 'Connected', latency: '12ms', color: 'green' },
    { name: 'BTP Cloud Foundry', endpoint: 'cf.btp.cloud.sap', status: 'Connected', latency: '8ms', color: 'green' },
    { name: 'Document Service', endpoint: 'dms.btp.cloud.sap', status: 'Connected', latency: '15ms', color: 'green' },
    { name: 'Workflow Engine', endpoint: 'workflow.btp.sap', status: 'Syncing', latency: '22ms', color: 'blue' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
            Integration Status
          </h2>
          <p className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
            Real-time SAP S/4HANA connectivity
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 font-bold text-sm">All Systems Operational</span>
        </div>
      </div>

      {/* Connection Cards */}
      <div className="grid grid-cols-2 gap-4">
        {connections.map((conn, i) => (
          <motion.div
            key={conn.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-5 border rounded-xl ${
              theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <Database
                className="w-5 h-5"
                style={{ color: conn.color === 'green' ? 'rgb(74, 222, 128)' : theme.cta.primary }}
              />
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${
                  conn.color === 'green' ? 'bg-green-500/10 border-green-500/20' : ''
                }`}
                style={conn.color !== 'green' ? {
                  backgroundColor: `${theme.cta.primary}10`,
                  borderColor: `${theme.cta.primary}33`
                } : {}}
              >
                {conn.color === 'green' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <Activity className="w-3.5 h-3.5 animate-pulse" style={{ color: theme.cta.primary }} />
                )}
                <span
                  className={`text-xs font-bold ${conn.color === 'green' ? 'text-green-400' : ''}`}
                  style={conn.color !== 'green' ? { color: theme.cta.primary } : {}}
                >
                  {conn.status}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-base mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
              {conn.name}
            </h3>
            <p className="text-xs font-mono mb-3" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#64748b' }}>
              {conn.endpoint}
            </p>
            <div className="flex items-center justify-between text-xs">
              <span style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Latency</span>
              <span className="text-green-400 font-mono font-bold">{conn.latency}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sync Status Bar */}
      <div className={`p-5 border rounded-xl ${
        theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>Last Sync</span>
          <span className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>2 minutes ago</span>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex-1 h-2 rounded-full overflow-hidden ${
            theme.isLight ? 'bg-slate-200' : 'bg-slate-800'
          }`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full"
              style={{
                background: `linear-gradient(to right, ${theme.cta.primary}, rgb(74, 222, 128))`
              }}
            />
          </div>
          <span className="text-green-400 font-bold text-sm">100%</span>
        </div>
      </div>
    </motion.div>
  );
}

// VIEW 2: Order Management
function OrdersView() {
  const { theme } = useTheme();
  const orders = [
    { id: 'PO-24891', vendor: 'Acme Logistics', status: 'In Transit', value: 12450, stage: 'Delivery' },
    { id: 'PO-24890', vendor: 'Global Supply Co', status: 'Confirmed', value: 8920, stage: 'Processing' },
    { id: 'PO-24889', vendor: 'ProServe Inc', status: 'Released', value: 15680, stage: 'Acknowledgment' },
    { id: 'PO-24888', vendor: 'Midwest Partners', status: 'In Transit', value: 6200, stage: 'Delivery' },
    { id: 'PO-24887', vendor: 'East Coast Supply', status: 'Confirmed', value: 9340, stage: 'Processing' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
            Order Lifecycle
          </h2>
          <p className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
            Active purchase orders and workflows
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 border rounded-lg ${
            theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-700'
          }`}>
            <span className="font-bold text-lg" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>142</span>
            <span className="text-sm ml-2" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#64748b' }}>Active</span>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className={`border rounded-xl overflow-hidden ${
        theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}>
        <table className="w-full">
          <thead>
            <tr className={`border-b ${
              theme.isLight ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-800/50'
            }`}>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Order</th>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Vendor</th>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Stage</th>
              <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Status</th>
              <th className="px-5 py-3.5 text-right text-xs font-bold uppercase tracking-wider" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`border-b transition-colors ${
                  theme.isLight ? 'border-slate-100 hover:bg-slate-50' : 'border-slate-800/50 hover:bg-slate-800/30'
                }`}
              >
                <td className="px-5 py-4">
                  <span className="font-mono font-bold text-sm" style={{ color: theme.cta.primary }}>{order.id}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>{order.vendor}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.cta.primary }} />
                    <span className="text-sm" style={{ color: theme.isLight ? theme.text.onLight : '#cbd5e1' }}>{order.stage}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                    order.status === 'In Transit' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    order.status === 'Confirmed' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <span className="font-bold text-sm" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>${order.value.toLocaleString()}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// VIEW 3: Invoice OCR Processing
function InvoicesView() {
  const { theme } = useTheme();
  const invoices = [
    { id: 'INV-8821', doc: 'Invoice_Acme_May.pdf', vendor: 'Acme Logistics', amount: 12450, confidence: 100, status: 'Ready' },
    { id: 'INV-8820', doc: 'Invoice_Global_May.pdf', vendor: 'Global Supply', amount: 8920, confidence: 100, status: 'Ready' },
    { id: 'INV-8819', doc: 'Invoice_ProServe.pdf', vendor: 'ProServe Inc', amount: 15680, confidence: 87, status: 'Processing' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
            Invoice Processing
          </h2>
          <p className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
            OCR-powered document extraction
          </p>
        </div>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg border"
          style={{
            backgroundColor: `${theme.cta.primary}10`,
            borderColor: `${theme.cta.primary}33`
          }}
        >
          <Zap className="w-4 h-4 animate-pulse" style={{ color: theme.cta.primary }} />
          <span className="font-bold text-sm" style={{ color: theme.cta.primary }}>OCR Active</span>
        </div>
      </div>

      {/* Invoice Cards */}
      <div className="space-y-4">
        {invoices.map((inv, i) => (
          <motion.div
            key={inv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`p-6 border rounded-xl transition-all ${
              theme.isLight
                ? 'bg-white border-slate-200 hover:border-slate-300'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-start gap-6">
              {/* Document Preview */}
              <div className={`w-20 h-24 border rounded-lg flex items-center justify-center flex-shrink-0 ${
                theme.isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-800 border-slate-700'
              }`}>
                <FileText className={`w-8 h-8 ${theme.isLight ? 'text-slate-400' : 'text-slate-600'}`} />
              </div>

              {/* Document Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
                      {inv.doc}
                    </h3>
                    <p className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
                      {inv.vendor}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
                      ${inv.amount.toLocaleString()}
                    </div>
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                      inv.status === 'Ready' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                </div>

                {/* Extraction Confidence */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>Extraction Confidence</span>
                    <span className={`font-mono font-bold ${inv.confidence === 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {inv.confidence}%
                    </span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${
                    theme.isLight ? 'bg-slate-200' : 'bg-slate-800'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${inv.confidence}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full rounded-full ${inv.confidence === 100 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg text-xs font-semibold transition-colors ${
                    theme.isLight
                      ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                  }`}>
                    <Eye className="w-3.5 h-3.5" />
                    Review
                  </button>
                  {inv.status === 'Ready' && (
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 rounded-lg text-white text-xs font-semibold hover:bg-blue-700 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Approve
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// VIEW 4: Analytics Dashboard
function AnalyticsView() {
  const { theme } = useTheme();
  const kpis = [
    { label: 'Active Orders', value: '142', change: '+12%', icon: Package, color: 'blue' },
    { label: 'On-Time Rate', value: '97.8%', change: '+2.4%', icon: TrendingUp, color: 'green' },
    { label: 'Avg Response', value: '2.3h', change: '-18%', icon: Clock, color: 'purple' },
  ];

  const vendors = [
    { name: 'Acme Logistics', performance: 98, orders: 142, onTime: '99%' },
    { name: 'Global Supply Co', performance: 96, orders: 128, onTime: '97%' },
    { name: 'ProServe Inc', performance: 94, orders: 95, onTime: '95%' },
    { name: 'Midwest Partners', performance: 99, orders: 87, onTime: '100%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="p-8 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
            Performance Dashboard
          </h2>
          <p className="text-sm" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
            Real-time operational metrics
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors"
          style={{ backgroundColor: theme.cta.primary }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.cta.primaryHover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.cta.primary}
        >
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 border rounded-xl ${
                theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="p-2.5 rounded-lg"
                  style={{
                    backgroundColor: kpi.color === 'blue' ? theme.cta.primary :
                                   kpi.color === 'green' ? 'rgb(22, 163, 74)' :
                                   'rgb(147, 51, 234)'
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-green-400 text-xs font-bold">{kpi.change}</span>
              </div>
              <div className="text-2xl font-bold mb-1" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
                {kpi.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: theme.isLight ? theme.text.onLightSecondary : '#64748b' }}>
                {kpi.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Vendor Performance */}
      <div className={`border rounded-xl p-6 ${
        theme.isLight ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}>
        <h3 className="font-bold text-lg mb-4" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
          Top Vendor Performance
        </h3>
        <div className="space-y-4">
          {vendors.map((vendor, i) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
                  {vendor.name}
                </span>
                <div className="flex items-center gap-4 text-xs">
                  <span style={{ color: theme.isLight ? theme.text.onLightSecondary : '#94a3b8' }}>
                    {vendor.orders} orders
                  </span>
                  <span className="text-green-400 font-bold">{vendor.onTime} on-time</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex-1 h-2 rounded-full overflow-hidden ${
                  theme.isLight ? 'bg-slate-200' : 'bg-slate-800'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${vendor.performance}%` }}
                    transition={{ duration: 1, delay: i * 0.15 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${theme.cta.primary}, rgb(74, 222, 128))`
                    }}
                  />
                </div>
                <span className="font-mono font-bold text-sm w-12 text-right" style={{ color: theme.isLight ? theme.text.onLight : 'white' }}>
                  {vendor.performance}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
