import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Brain, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">Enterprise AI Platform</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white block">Intelligent Automation</span>
            <span className="gradient-text block mt-2">for Enterprise</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deploy AI agents that execute complex workflows with enterprise-grade security.
            Browser automation, API integration, and multi-LLM orchestration built for scale.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="bg-white text-dark-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Request Demo</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="border border-dark-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-800/50 hover:border-dark-500 transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">35+ Built-in Tools</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Browser automation, file operations, APIs, and database integrations</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Enterprise Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Runtime sandboxing, encrypted credential vault, SOC 2 compliant</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Multi-LLM Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">OpenAI, Anthropic, Google AI, and 50+ models via OpenRouter</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-dark-800"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">35+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">SOC 2</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Support</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
