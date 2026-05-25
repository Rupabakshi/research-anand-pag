import { motion } from 'motion/react';
import { CheckCircle2, Shield, AlertTriangle, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function ERCDashboardScreenshot() {
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
