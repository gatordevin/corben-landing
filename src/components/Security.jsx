import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Shield,
  Lock,
  Eye,
  CheckCircle,
  Key,
  Server,
  FileCheck,
  Network
} from 'lucide-react'

const Security = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const securityFeatures = [
    {
      icon: Shield,
      title: "Complete Isolation",
      description: "The AI runs in a fully isolated environment. No access to your systems without explicit permission. Every boundary is enforced."
    },
    {
      icon: Lock,
      title: "Verify Everything",
      description: "Zero implicit trust. Every action, every request, every data access is verified and authenticated before execution."
    },
    {
      icon: Eye,
      title: "Full Audit Trail",
      description: "Complete visibility into every operation. Real-time monitoring, detailed logs, and instant alerting on anomalies."
    },
    {
      icon: Key,
      title: "Encrypted Credentials",
      description: "AES-256 encryption for all sensitive data. Credentials never exposed in logs, memory, or transit."
    },
    {
      icon: Server,
      title: "Network Segmentation",
      description: "Strict network isolation with explicit allowlisting. No unauthorized connections. No data exfiltration paths."
    },
    {
      icon: FileCheck,
      title: "Least Privilege",
      description: "Minimal permissions by default. The AI only gets access to what it absolutely needs, nothing more."
    }
  ]

  const complianceItems = [
    { name: "SOC 2 Type II", status: "In Progress" },
    { name: "ISO 27001", status: "Planned" },
    { name: "GDPR", status: "Designed For" },
    { name: "HIPAA", status: "Designed For" },
    { name: "CCPA", status: "Designed For" }
  ]

  return (
    <section id="security" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-900/30 border border-green-500/40 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-bold uppercase tracking-wider">Zero Trust Environment</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            No Implicit Trust. <span className="text-green-400">Ever.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Corben AI runs in a completely isolated, zero trust security model. Every action is verified. Every connection is authenticated.
            Enterprise-grade security isn't an add-on - it's the foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-dark-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-dark-700 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gray-300" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Compliance Roadmap
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We're building with compliance in mind from day one. Our architecture is designed to meet the highest security standards.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {complianceItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-dark-800/50 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Zero Trust Principles
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Network className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-400 font-medium">Never Trust, Always Verify</p>
                    <p className="text-gray-400 text-sm">No action is assumed safe. Every operation is verified before execution.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Key className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-400 font-medium">Assume Breach</p>
                    <p className="text-gray-400 text-sm">Built as if every component could be compromised. Defense in depth at every layer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-400 font-medium">Explicit Verification</p>
                    <p className="text-gray-400 text-sm">Every identity, device, and data flow is explicitly verified continuously.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-green-900/20 border-2 border-green-500/40 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-green-400 mb-1">Zero Trust</p>
            <p className="text-gray-400 text-sm">Security Model</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">Isolated</p>
            <p className="text-gray-500 text-sm">Environment</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">Verified</p>
            <p className="text-gray-500 text-sm">Every Action</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">AES-256</p>
            <p className="text-gray-500 text-sm">Encryption</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security
