import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Globe,
  Terminal,
  Brain,
  Shield,
  GitBranch,
  Cloud,
  Workflow,
  Database,
  Lock,
  Cpu
} from 'lucide-react'

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: Globe,
      title: "Browser Automation",
      description: "Full browser control with screenshot-based debugging, intelligent CAPTCHA handling, and multi-tab session management for complex web workflows."
    },
    {
      icon: Terminal,
      title: "35+ AI Tools",
      description: "Comprehensive tool suite including file operations, API integrations, code execution, and database operations. Everything your AI agents need."
    },
    {
      icon: Brain,
      title: "Multi-LLM Support",
      description: "Seamlessly integrate with OpenAI, Anthropic, Google AI, Groq, and 50+ models through OpenRouter. Model-agnostic architecture."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Runtime sandboxing, encrypted credential vault, and bytecode transformation. Your data stays protected at every layer."
    },
    {
      icon: Workflow,
      title: "Workflow Orchestration",
      description: "Complex multi-step processes with error handling, retry logic, and conditional branching. Build reliable automation pipelines."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Container-ready deployment with horizontal scaling. Run in your cloud or ours with full observability and monitoring."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Platform Capabilities</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Enterprise-Grade AI Infrastructure
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built for scale, security, and reliability. Everything you need to deploy AI agents in production environments.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-dark-700 hover:bg-dark-900/80 transition-all duration-300"
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

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">High-Performance Runtime</p>
                    <p className="text-gray-400 text-sm">Sub-millisecond tool execution with optimized bytecode transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Database className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Persistent State Management</p>
                    <p className="text-gray-400 text-sm">Durable execution with automatic checkpointing and recovery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Zero-Trust Security</p>
                    <p className="text-gray-400 text-sm">Every operation verified, every connection authenticated</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Platform Capabilities</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">35+</p>
                  <p className="text-gray-500 text-sm">Built-in Tools</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">50+</p>
                  <p className="text-gray-500 text-sm">LLM Models</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">Full</p>
                  <p className="text-gray-500 text-sm">Browser Control</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">Beta</p>
                  <p className="text-gray-500 text-sm">Now Available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
