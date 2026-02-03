import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Use Cases", href: "#use-cases" },
        { name: "Security", href: "#security" },
        { name: "Pricing", href: "#pricing" },
        { name: "Changelog", href: "#changelog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api.html" },
        { name: "Blog", href: "/blog.html" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "Status", href: "#status" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Security", href: "#security-policy" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" }
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-400">Get the latest AI automation insights, product updates, and industry news delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <button className="bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-dark-950" />
              </div>
              <span className="text-xl font-bold text-white">Corben AI</span>
            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Enterprise-grade AI automation platform with secure browser automation, tool execution, and multi-LLM integration.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-900 hover:bg-dark-800 border border-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              {currentYear} Corben AI. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span>Beta now open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
