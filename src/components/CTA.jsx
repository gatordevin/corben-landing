import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Building, User, Phone, Calendar } from 'lucide-react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for joining the beta! We\'ll be in touch soon with your access details.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        useCase: '',
        timeline: ''
      })
    }, 2000)
  }

  const useCaseOptions = [
    'Enterprise Automation',
    'Customer Support',
    'Sales & Marketing',
    'Document Processing',
    'Research & Analysis',
    'Custom Development'
  ]

  const timelineOptions = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ]

  return (
    <section id="demo" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">Join the Beta</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Get Early Access to</span>
              <span className="gradient-text block">Corben AI</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience AI that builds its own tools. Powered by large language models with open source support today and cloud models coming soon.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Self-building AI that creates its own tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">LLM-powered reasoning and intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Open source models supported today</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Cloud models (OpenAI, Anthropic) coming soon</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Have questions?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>hello@corbenai.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Join the Beta</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Company *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Use Case
                  </label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a use case</option>
                    {useCaseOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Request Beta Access</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>

              <p className="text-gray-400 text-sm text-center mt-6">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA