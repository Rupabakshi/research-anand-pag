import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Wifi, Bell, Download, Zap, CheckCircle, WifiOff, Clock, RefreshCw, Tablet, Monitor } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ProcessFactoryMobile() {
  const { theme } = useTheme();
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      icon: Zap,
      title: "Approve Anywhere",
      description: "Multi-level approvals from any mobile device. Executives approve from the airport, managers approve from the field."
    },
    {
      icon: WifiOff,
      title: "Work Offline",
      description: "Field operations continue without connectivity. Data syncs automatically when connection is restored."
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Critical workflows never wait. Real-time alerts ensure timely action on urgent approvals."
    },
    {
      icon: Smartphone,
      title: "Any Device",
      description: "iPhone, iPad, Android, BlackBerry—no special hardware required. Works on existing devices."
    },
    {
      icon: RefreshCw,
      title: "Real-Time Sync",
      description: "Changes reflect instantly in SAP backend. Complete visibility across desktop and mobile platforms."
    }
  ];

  // Render different phone screens based on active capability
  const renderPhoneContent = () => {
    switch(activeCapability) {
      case 0: // Approve Anywhere
        return (
          <>
            {/* App Header */}
            <div className="bg-blue-600 px-6 py-6">
              <div className="text-[11px] text-blue-200 mb-1">Process Factory® Mobile</div>
              <div className="text-[22px] font-bold text-white mb-4">My Workflows</div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-[18px] font-bold text-white tabular-nums">12</div>
                  <div className="text-[9px] text-blue-100">Pending</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-[18px] font-bold text-white tabular-nums">47</div>
                  <div className="text-[9px] text-blue-100">Approved</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-[18px] font-bold text-white tabular-nums">3</div>
                  <div className="text-[9px] text-blue-100">Urgent</div>
                </div>
              </div>
            </div>

            {/* Workflow List */}
            <div className="bg-slate-900 p-4 space-y-3 pb-8 flex-1 overflow-y-auto">
              
              {/* Urgent Item */}
              <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="text-[10px] text-red-400 uppercase tracking-wide">Urgent</div>
                </div>
                <div className="text-[14px] text-white font-semibold mb-1">Budget Approval</div>
                <div className="text-[11px] text-slate-400 mb-3">$485,000 • Marketing Q3</div>
                <div className="flex gap-2">
                  <button className="flex-1 h-9 bg-red-600/20 border border-red-600/50 rounded-lg text-[12px] font-medium text-red-400">
                    Reject
                  </button>
                  <button className="flex-1 h-9 bg-green-600 rounded-lg text-[12px] font-medium text-white">
                    Approve
                  </button>
                </div>
              </div>

              {/* Regular Items */}
              {[
                { type: 'Purchase Order', id: 'PO-2024-5892', amount: '$12,450' },
                { type: 'Time Off Request', id: 'Sarah Johnson', amount: '5 days' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide">Pending</div>
                  </div>
                  <div className="text-[14px] text-white font-semibold mb-1">{item.type}</div>
                  <div className="text-[11px] text-slate-400 mb-3">{item.id} • {item.amount}</div>
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 bg-slate-700/50 border border-slate-600 rounded-lg text-[12px] font-medium text-slate-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </>
        );

      case 1: // Work Offline
        return (
          <>
            <div className="bg-blue-600 px-6 py-6">
              <div className="text-[11px] text-blue-200 mb-1">Process Factory® Mobile</div>
              <div className="text-[22px] font-bold text-white">Offline Mode</div>
            </div>

            <div className="bg-slate-900 p-6 space-y-4 flex-1">
              
              {/* Offline Status Banner */}
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 flex items-center gap-3">
                <WifiOff className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <div className="text-[13px] text-yellow-400 font-semibold mb-1">Working Offline</div>
                  <div className="text-[11px] text-slate-400">Changes will sync when connected</div>
                </div>
              </div>

              {/* Queued Items */}
              <div className="space-y-3">
                <div className="text-[12px] text-slate-400 uppercase tracking-wide">Queued for Sync (4)</div>
                
                {[
                  { action: 'Approved', item: 'Work Order #8821', time: '2m ago' },
                  { action: 'Completed', item: 'Safety Audit', time: '8m ago' },
                  { action: 'Updated', item: 'Inventory Count', time: '15m ago' },
                  { action: 'Submitted', item: 'Quality Report', time: '22m ago' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-[13px] text-white font-medium">{item.item}</div>
                      <div className="text-[10px] text-slate-400">{item.action} • {item.time}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 2: // Instant Notifications
        return (
          <>
            <div className="bg-blue-600 px-6 py-6">
              <div className="text-[11px] text-blue-200 mb-1">Process Factory® Mobile</div>
              <div className="text-[22px] font-bold text-white">Notifications</div>
            </div>

            <div className="bg-slate-900 p-4 space-y-3 flex-1 overflow-y-auto">
              
              {/* Critical Notification */}
              <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-4 h-4 text-red-400" />
                  <div className="text-[10px] text-red-400 uppercase tracking-wide">Critical</div>
                  <div className="text-[10px] text-slate-400 ml-auto">2m ago</div>
                </div>
                <div className="text-[14px] text-white font-semibold mb-1">Urgent Approval Required</div>
                <div className="text-[12px] text-slate-300 mb-3">Capital expenditure request needs immediate review</div>
                <button className="w-full h-9 bg-red-600 rounded-lg text-[12px] font-medium text-white">
                  Review Now
                </button>
              </div>

              {/* Regular Notifications */}
              {[
                { priority: 'high', icon: '⚡', title: 'Workflow Assigned', desc: 'Purchase approval #4521', time: '15m ago' },
                { priority: 'normal', icon: '✓', title: 'Approval Completed', desc: 'Your PO was approved by Finance', time: '1h ago' },
                { priority: 'normal', icon: '📄', title: 'New Document', desc: 'Q4 Budget Report available', time: '2h ago' },
                { priority: 'normal', icon: '👥', title: 'Team Update', desc: '3 workflows completed today', time: '3h ago' }
              ].map((notif, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[14px]">{notif.icon}</span>
                    <div className="text-[10px] text-slate-400 ml-auto">{notif.time}</div>
                  </div>
                  <div className="text-[13px] text-white font-semibold mb-1">{notif.title}</div>
                  <div className="text-[11px] text-slate-400">{notif.desc}</div>
                </div>
              ))}
            </div>
          </>
        );

      case 3: // Any Device
        return (
          <>
            <div className="bg-blue-600 px-6 py-6">
              <div className="text-[11px] text-blue-200 mb-1">Process Factory® Mobile</div>
              <div className="text-[22px] font-bold text-white">Devices</div>
            </div>

            <div className="bg-slate-900 p-6 space-y-4 flex-1">
              
              <div className="text-[13px] text-slate-300 mb-4">Logged in on 3 devices</div>

              {/* Active Devices */}
              <div className="space-y-3">
                {[
                  { device: 'iPhone 16 Pro Max', location: 'San Francisco, CA', icon: Smartphone, active: true },
                  { device: 'iPad Pro 12.9"', location: 'San Francisco, CA', icon: Tablet, active: false },
                  { device: 'MacBook Pro', location: 'Office Network', icon: Monitor, active: false }
                ].map((device, idx) => (
                  <div key={idx} className={`border rounded-xl p-4 ${device.active ? 'bg-blue-900/20 border-blue-600/30' : 'bg-slate-800/50 border-slate-700'}`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${device.active ? 'bg-blue-600/20' : 'bg-slate-700'}`}>
                        <device.icon className={`w-5 h-5 ${device.active ? 'text-blue-400' : 'text-slate-400'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-[13px] text-white font-semibold">{device.device}</div>
                          {device.active && (
                            <div className="px-2 py-0.5 bg-green-600/20 border border-green-600/30 rounded-full text-[9px] text-green-400 uppercase tracking-wide">
                              Active
                            </div>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400">{device.location}</div>
                        {device.active && (
                          <div className="text-[10px] text-blue-400 mt-1">Last active: Now</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Compatibility Info */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mt-4">
                <div className="text-[12px] text-slate-300 font-medium mb-2">Supported Platforms</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                  <div>✓ iOS 14+</div>
                  <div>✓ Android 10+</div>
                  <div>✓ iPadOS 14+</div>
                  <div>✓ BlackBerry 10</div>
                </div>
              </div>
            </div>
          </>
        );

      case 4: // Real-Time Sync
        return (
          <>
            <div className="bg-blue-600 px-6 py-6">
              <div className="text-[11px] text-blue-200 mb-1">Process Factory® Mobile</div>
              <div className="text-[22px] font-bold text-white">Sync Activity</div>
            </div>

            <div className="bg-slate-900 p-6 space-y-4 flex-1">
              
              {/* Sync Status */}
              <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-4 flex items-center gap-3">
                <div className="relative">
                  <RefreshCw className="w-5 h-5 text-green-400" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-[13px] text-green-400 font-semibold mb-1">Synced with SAP</div>
                  <div className="text-[11px] text-slate-400">Last sync: Just now</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <div className="text-[12px] text-slate-400 uppercase tracking-wide">Recent Sync Activity</div>
                
                {[
                  { action: 'Workflow approved', system: 'SAP ERP', status: 'synced', time: '5s ago' },
                  { action: 'Document uploaded', system: 'SharePoint', status: 'synced', time: '23s ago' },
                  { action: 'Status updated', system: 'SAP ERP', status: 'synced', time: '1m ago' },
                  { action: 'Comment added', system: 'Process Factory', status: 'synced', time: '2m ago' },
                  { action: 'Attachment saved', system: 'SAP ERP', status: 'synced', time: '4m ago' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-[13px] text-white font-medium">{item.action}</div>
                      <div className="text-[10px] text-slate-400">{item.system} • {item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sync Stats */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <div className="text-[20px] font-bold text-white tabular-nums">127</div>
                  <div className="text-[10px] text-slate-400">Syncs Today</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <div className="text-[20px] font-bold text-white tabular-nums">99.8%</div>
                  <div className="text-[10px] text-slate-400">Success Rate</div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: theme.background.dark }}>
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-50, 75, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-mono uppercase tracking-[1.5px] sm:tracking-[2px] text-slate-400">
                  PROCESS FACTORY MOBILE®
                </span>
              </div>

              <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
                Enterprise Workflows in Your Pocket
              </h2>

              <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] leading-[1.5] sm:leading-[1.6] lg:leading-[1.4] text-slate-300 mb-10 sm:mb-12">
                Your executives approve from the airport. Your field teams process work orders offline. Your quality managers complete audits on-site. All seamlessly connected to your SAP environment.
              </p>

              {/* Capabilities List */}
              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveCapability(index)}
                    className={`flex gap-4 cursor-pointer transition-all ${activeCapability === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'}`}
                  >
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${
                      activeCapability === index 
                        ? 'bg-blue-600/30 border-blue-500/40' 
                        : 'bg-blue-600/20 border-blue-500/20'
                    }`}>
                      <capability.icon className="w-5 h-5 text-blue-400" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-[17px] sm:text-[18px] font-semibold text-white mb-1">
                        {capability.title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/60">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Mobile Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex relative justify-center lg:justify-end"
            >
              {/* iPhone 16 Pro Max Mockup - Correct Aspect Ratio (393:852) */}
              <div className="relative w-[340px]" style={{ aspectRatio: '393/852' }}>
                {/* Phone Frame */}
                <div className="relative bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl h-full">
                  {/* Dynamic Island (iPhone 16 Pro Max style) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900 rounded-b-[2rem] z-10"></div>
                  
                  {/* Screen */}
                  <div className="bg-slate-900 rounded-[2.3rem] overflow-hidden h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-slate-800 px-6 py-3 flex items-center justify-between text-[10px] text-white flex-shrink-0">
                      <span>9:41</span>
                      <div className="flex gap-1 items-center">
                        <Wifi className="w-4 h-4" />
                        <div className="w-4 h-3 border border-white rounded-sm flex items-end">
                          <div className="w-full h-2 bg-white"></div>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Content with Animation */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCapability}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 flex flex-col overflow-hidden"
                      >
                        {renderPhoneContent()}
                      </motion.div>
                    </AnimatePresence>

                    {/* Bottom Tab Bar */}
                    <div className="bg-slate-800 px-4 py-3 flex items-center justify-around border-t border-slate-700 flex-shrink-0">
                      {['Home', 'Workflows', 'History', 'Profile'].map((tab, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className={`w-6 h-6 rounded ${i === 1 ? 'bg-blue-600' : 'bg-slate-700'}`}></div>
                          <div className={`text-[8px] ${i === 1 ? 'text-blue-400' : 'text-slate-500'}`}>{tab}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Floating Notification Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-[14px] shadow-lg"
                >
                  3
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 bg-blue-500/20 blur-3xl opacity-50"></div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}