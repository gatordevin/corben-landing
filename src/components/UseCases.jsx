import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Building2,
  Users,
  TrendingUp,
  FileText,
  Search,
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const UseCases = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Automation",
      description: "Automate complex business processes across multiple systems. From invoice processing to employee onboarding, handle it all with intelligent agents.",
      benefits: ["24/7 availability", "Consistent processing", "Scalable workflows"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Provide instant, intelligent customer support across all channels. Handle complex queries, process refunds, and escalate when needed.",
      benefits: ["Multi-language support", "Seamless human handoff", "Automated routing"]
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Qualify leads, personalize outreach, and nurture prospects through the entire sales funnel with AI-powered automation.",
      benefits: ["Personalized at scale", "Lead qualification", "Campaign automation"]
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Extract, validate, and process information from documents, forms, and emails. Turn unstructured data into actionable insights.",
      benefits: ["Multi-format support", "Data extraction", "Compliance ready"]
    },
    {
      icon: Search,
      title: "Research & Analysis",
      description: "Gather market intelligence, analyze competitors, and generate comprehensive reports. Stay ahead with AI-powered insights.",
      benefits: ["Real-time data collection", "Multi-source aggregation", "Automated reporting"]
    },
    {
      icon: Code,
      title: "Development Ops",
      description: "Automate testing, deployment pipelines, and code reviews. Integrate AI into your development workflow seamlessly.",
      benefits: ["CI/CD integration", "Automated testing", "Code quality analysis"]
    }
  ]

  return (
    <section id="use-cases" className="py-24 md:py-32 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Use Cases</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Transform Your Business Operations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, Corben AI Agent delivers measurable results across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-dark-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-dark-700 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dark-800 pt-6">
                  <div className="flex flex-wrap gap-3">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">See how Corben AI can transform your specific use case</p>
          <motion.a
            href="#demo"
            className="inline-flex items-center space-x-2 bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Request Custom Demo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default UseCases
