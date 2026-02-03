import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Globe, Cpu, BarChart3, Zap, Target } from 'lucide-react'

const MarketOpportunity = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const marketStats = [
    {
      icon: Globe,
      value: "$105.6B",
      label: "AI Agent Market by 2034",
      subtext: "From $5.9B in 2024",
      growth: "38.5% CAGR",
      color: "primary"
    },
    {
      icon: Cpu,
      value: "$273B",
      label: "AI in Manufacturing by 2034",
      subtext: "From $5.91B in 2024",
      growth: "46.8% CAGR",
      color: "green"
    },
    {
      icon: TrendingUp,
      value: "62.7%",
      label: "Vertical AI Agent CAGR",
      subtext: "Fastest growing segment",
      growth: "2024-2034",
      color: "purple"
    },
    {
      icon: BarChart3,
      value: "38%",
      label: "NLP Segment Market Share",
      subtext: "Largest segment in 2024",
      growth: "Core Technology",
      color: "cyan"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary-500/10',
        text: 'text-primary-400',
        border: 'border-primary-500/30',
        glow: 'shadow-primary-500/20'
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-500/30',
        glow: 'shadow-green-500/20'
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20'
      },
      cyan: {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/20'
      }
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="market" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-primary-500" />
            <span className="text-primary-400 text-sm font-medium">Market Opportunity</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            The AI Agent Revolution
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The AI agent market is experiencing explosive growth. Corben AI is positioned at the forefront of this transformation,
            with Agentic Process Automation scaling toward a $100B market opportunity.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {marketStats.map((stat, index) => {
            const Icon = stat.icon
            const colors = getColorClasses(stat.color)
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-dark-900/50 rounded-xl p-8 border ${colors.border} hover:bg-dark-900/80 transition-all duration-300 hover:shadow-lg ${colors.glow}`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                <div className={`text-4xl font-bold ${colors.text} mb-2`}>
                  {stat.value}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  {stat.subtext}
                </p>

                <div className={`inline-flex items-center space-x-1 ${colors.bg} ${colors.text} text-xs font-medium px-3 py-1 rounded-full`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.growth}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Why Now?</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                The convergence of advanced LLMs, autonomous agent frameworks, and enterprise automation needs
                has created a unique market opportunity. Self-building AI agents represent the next evolution
                in enterprise software, where AI doesn't just execute tasks - it creates its own tools to solve problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-dark-800 text-gray-300 px-4 py-2 rounded-lg text-sm">Enterprise Automation</span>
                <span className="bg-dark-800 text-gray-300 px-4 py-2 rounded-lg text-sm">Self-Building AI</span>
                <span className="bg-dark-800 text-gray-300 px-4 py-2 rounded-lg text-sm">LLM-Powered</span>
                <span className="bg-dark-800 text-gray-300 px-4 py-2 rounded-lg text-sm">Zero Trust Security</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500/10 to-green-500/10 rounded-xl p-6 border border-primary-500/20">
              <div className="text-center">
                <Zap className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <div className="text-5xl font-bold text-white mb-2">$100B+</div>
                <p className="text-gray-400 text-sm">Agentic Process Automation Market Trajectory</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketOpportunity
