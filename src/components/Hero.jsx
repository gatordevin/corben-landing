import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Brain, ChevronRight, Sparkles } from 'lucide-react'

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
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-gray-300 text-sm font-medium">Now Open for Beta</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white block">AI That Builds</span>
            <span className="gradient-text block mt-2">Its Own Tools</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Self-building AI agents powered by large language models. Autonomous tool creation,
            browser automation, and intelligent workflows. Open source models supported, cloud models coming soon.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#demo"
            className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-200 flex items-center space-x-2 shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Join the Beta</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
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
            <h3 className="text-lg font-semibold mb-2 text-white">Self-Building Tools</h3>
            <p className="text-gray-400 text-sm leading-relaxed">AI that autonomously creates and extends its own capabilities</p>
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
            <h3 className="text-lg font-semibold mb-2 text-white">LLM-Powered</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Open source models today, cloud models (OpenAI, Anthropic) coming soon</p>
          </div>
        </motion.div>

        {/* Platform Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-dark-800"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Self</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Building Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">LLM</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Powered Core</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Open</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Source Models</div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
