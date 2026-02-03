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
      title: "Runtime Sandboxing",
      description: "Bytecode-level transformation prevents dangerous operations. Your code runs in a controlled environment with enforced boundaries."
    },
    {
      icon: Lock,
      title: "Encrypted Credential Vault",
      description: "AES-256 encryption for all sensitive data. Credentials are never exposed in logs or memory. Zero-trust architecture."
    },
    {
      icon: Eye,
      title: "Audit Logging",
      description: "Complete audit trail of all operations. Monitor every action with detailed logs and real-time alerting."
    },
    {
      icon: Key,
      title: "Role-Based Access",
      description: "Granular permissions with multi-factor authentication. Control who can access what with enterprise-grade IAM."
    },
    {
      icon: Server,
      title: "Network Isolation",
      description: "Controlled network access with domain allowlisting. Prevent data exfiltration and unauthorized connections."
    },
    {
      icon: FileCheck,
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit. Your sensitive information is protected at every step."
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
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Enterprise Security</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Security First, Always
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built with enterprise-grade security from the ground up. Your data is protected with military-grade encryption and zero-trust architecture.
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Zero-Trust Architecture
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Network className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Network Segmentation</p>
                    <p className="text-gray-400 text-sm">Isolated execution environments with strict network policies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Key className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Identity Verification</p>
                    <p className="text-gray-400 text-sm">Every request authenticated and authorized at multiple layers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Continuous Monitoring</p>
                    <p className="text-gray-400 text-sm">Real-time threat detection and automated response</p>
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
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">AES-256</p>
            <p className="text-gray-500 text-sm">Encryption</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">Sandboxed</p>
            <p className="text-gray-500 text-sm">Execution</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">Zero-Trust</p>
            <p className="text-gray-500 text-sm">Architecture</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-2xl md:text-3xl font-bold text-white mb-1">Audit</p>
            <p className="text-gray-500 text-sm">Logging</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security
