import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, ChevronDown, ExternalLink } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ]

  const resourceItems = [
    { name: 'Documentation', href: '/docs', external: false },
    { name: 'API Reference', href: '/api.html', external: false },
    { name: 'Blog', href: '/blog.html', external: false },
    { name: 'Status', href: '#status', external: false },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-dark-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-dark-950" />
            </div>
            <span className="text-xl font-bold text-white">Corben AI</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 text-sm font-medium"
                whileHover={{ scale: 1.02 }}
              >
                {item.name}
              </motion.a>
            ))}

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 text-sm font-medium flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-dark-900 border border-dark-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {resourceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-dark-800 transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/app.html"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Sign In
            </a>
            <motion.a
              href="#demo"
              className="bg-white text-dark-950 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-dark-800 overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-3 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}

                <div className="border-t border-dark-800 my-4 pt-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Resources</p>
                  {resourceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="border-t border-dark-800 pt-4 space-y-3">
                  <a
                    href="/app.html"
                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 text-base font-medium"
                  >
                    Sign In
                  </a>
                  <a
                    href="#demo"
                    className="block w-full bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
