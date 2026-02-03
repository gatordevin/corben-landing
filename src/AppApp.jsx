import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Bot,
  Activity,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Settings,
  Key,
  FileText,
  Plus,
  Search,
  Bell,
  User,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw
} from 'lucide-react'

const DashboardNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-950 border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-dark-950" />
              </div>
              <span className="text-lg font-bold text-white">Corben AI</span>
            </a>
            <div className="hidden md:flex items-center space-x-1">
              <button className="px-4 py-2 text-white bg-dark-800 rounded-lg text-sm font-medium">Dashboard</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-colors">Agents</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-colors">Workflows</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white rounded-lg text-sm font-medium transition-colors">Logs</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2 pl-4 border-l border-dark-800">
              <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-400" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const StatCard = ({ title, value, change, changeType, icon: Icon }) => (
  <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      {change && (
        <div className={`flex items-center space-x-1 text-sm ${changeType === 'up' ? 'text-green-400' : 'text-red-400'}`}>
          {changeType === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{change}</span>
        </div>
      )}
    </div>
    <p className="text-3xl font-bold text-white mb-1">{value}</p>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
)

const agents = [
  { id: 1, name: "Email Processor", status: "running", tasks: 142, success: 98.5, lastRun: "2 min ago" },
  { id: 2, name: "Web Scraper", status: "running", tasks: 89, success: 97.2, lastRun: "5 min ago" },
  { id: 3, name: "Document Analyzer", status: "idle", tasks: 0, success: 99.1, lastRun: "1 hour ago" },
  { id: 4, name: "Customer Support Bot", status: "running", tasks: 234, success: 96.8, lastRun: "1 min ago" },
  { id: 5, name: "Data Sync Agent", status: "error", tasks: 12, success: 85.0, lastRun: "15 min ago" }
]

const recentActivity = [
  { id: 1, type: "success", message: "Email Processor completed batch job", time: "2 min ago" },
  { id: 2, type: "success", message: "Web Scraper extracted 150 records", time: "5 min ago" },
  { id: 3, type: "error", message: "Data Sync Agent failed: Connection timeout", time: "15 min ago" },
  { id: 4, type: "info", message: "Customer Support Bot escalated ticket #4521", time: "18 min ago" },
  { id: 5, type: "success", message: "Document Analyzer processed 45 documents", time: "1 hour ago" }
]

function AppApp() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <DashboardNavbar />

      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
          >
            <div>
              <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-400">Monitor your AI agents and automation workflows</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="flex items-center space-x-2 px-4 py-2 bg-dark-900 border border-dark-800 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white text-dark-950 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Agent</span>
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <StatCard title="Active Agents" value="24" change="+3" changeType="up" icon={Bot} />
            <StatCard title="Tasks Completed" value="1,247" change="+12%" changeType="up" icon={CheckCircle} />
            <StatCard title="Success Rate" value="98.7%" change="-0.2%" changeType="down" icon={Activity} />
            <StatCard title="API Calls Today" value="89,432" change="+8%" changeType="up" icon={BarChart3} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agents Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-dark-900/50 border border-dark-800 rounded-xl"
            >
              <div className="p-6 border-b border-dark-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Active Agents</h2>
                  <button className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                    View All
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-dark-800">
                      <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                      <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Tasks</th>
                      <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Success</th>
                      <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agents.map((agent) => (
                      <tr key={agent.id} className="border-b border-dark-800 last:border-0 hover:bg-dark-800/30 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center">
                              <Bot className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="font-medium text-white">{agent.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            agent.status === 'running' ? 'bg-green-500/10 text-green-400' :
                            agent.status === 'idle' ? 'bg-gray-500/10 text-gray-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              agent.status === 'running' ? 'bg-green-400' :
                              agent.status === 'idle' ? 'bg-gray-400' :
                              'bg-red-400'
                            }`}></span>
                            <span className="capitalize">{agent.status}</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-300">{agent.tasks}</td>
                        <td className="py-4 px-6 text-gray-300">{agent.success}%</td>
                        <td className="py-4 px-6 text-gray-500">{agent.lastRun}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-900/50 border border-dark-800 rounded-xl"
            >
              <div className="p-6 border-b border-dark-800">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6 space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'success' ? 'bg-green-500/10' :
                      activity.type === 'error' ? 'bg-red-500/10' :
                      'bg-blue-500/10'
                    }`}>
                      {activity.type === 'success' ? <CheckCircle className="w-4 h-4 text-green-400" /> :
                       activity.type === 'error' ? <AlertCircle className="w-4 h-4 text-red-400" /> :
                       <Activity className="w-4 h-4 text-blue-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-300 leading-relaxed">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-dark-800">
                <button className="w-full text-center text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                  View All Activity
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-dark-900/50 border border-dark-800 rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-dark-800/50 rounded-xl hover:bg-dark-800 transition-colors group">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-3 group-hover:bg-dark-600 transition-colors">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-sm font-medium">Create Agent</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-dark-800/50 rounded-xl hover:bg-dark-800 transition-colors group">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-3 group-hover:bg-dark-600 transition-colors">
                  <FileText className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-sm font-medium">View Logs</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-dark-800/50 rounded-xl hover:bg-dark-800 transition-colors group">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-3 group-hover:bg-dark-600 transition-colors">
                  <Key className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-sm font-medium">API Keys</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-dark-800/50 rounded-xl hover:bg-dark-800 transition-colors group">
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center mb-3 group-hover:bg-dark-600 transition-colors">
                  <Settings className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-sm font-medium">Settings</span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default AppApp
