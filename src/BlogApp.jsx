import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, Clock, User, Tag, ChevronRight, Search } from 'lucide-react'

const BlogNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-950/95 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-dark-950" />
            </div>
            <span className="text-xl font-bold text-white">Corben AI</span>
            <span className="text-gray-500 text-sm font-medium">/</span>
            <span className="text-gray-300 text-sm font-medium">Blog</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="/app.html" className="text-gray-400 hover:text-white transition-colors text-sm">Dashboard</a>
            <a href="/api.html" className="text-gray-400 hover:text-white transition-colors text-sm">API</a>
            <a href="/#demo" className="bg-white text-dark-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Enterprise AI Automation",
    excerpt: "Discover how AI agents are revolutionizing business processes and transforming the way companies operate at scale.",
    category: "Industry Insights",
    author: "Sarah Chen",
    date: "February 1, 2026",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Scalable AI Workflows with Corben",
    excerpt: "Learn best practices for implementing AI automation that scales with your business needs and maintains reliability.",
    category: "Engineering",
    author: "Michael Torres",
    date: "January 28, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 3,
    title: "Security Best Practices for AI Agents",
    excerpt: "Understanding the security implications of AI automation and how to protect your data in production environments.",
    category: "Security",
    author: "Emily Watson",
    date: "January 25, 2026",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Multi-LLM Architecture: Choosing the Right Model",
    excerpt: "A comprehensive guide to selecting and orchestrating multiple language models for different use cases.",
    category: "Engineering",
    author: "David Kim",
    date: "January 22, 2026",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 5,
    title: "Case Study: 70% Cost Reduction at Fortune 500",
    excerpt: "How a leading enterprise achieved dramatic cost savings through intelligent automation deployment.",
    category: "Case Studies",
    author: "Sarah Chen",
    date: "January 18, 2026",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    title: "Browser Automation: Beyond Basic Scraping",
    excerpt: "Advanced techniques for reliable browser automation including CAPTCHA handling and session management.",
    category: "Engineering",
    author: "Michael Torres",
    date: "January 15, 2026",
    readTime: "12 min read",
    featured: false
  }
]

const categories = ["All", "Industry Insights", "Engineering", "Security", "Case Studies", "Product Updates"]

function BlogApp() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <BlogNavbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Corben AI Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Automation Insights</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expert perspectives on AI automation, enterprise technology, and the future of intelligent workflows.
            </p>
          </motion.div>

          {/* Search and Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-dark-900 border border-dark-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dark-700 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-white text-dark-950'
                      : 'bg-dark-900 text-gray-400 hover:text-white border border-dark-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
          >
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-dark-700 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-dark-800 text-gray-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a href="#" className="flex items-center space-x-1 text-primary-400 text-sm font-medium group-hover:text-primary-300">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Regular Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-dark-700 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-dark-800 text-gray-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-dark-900 border border-dark-800 text-white rounded-lg font-medium hover:bg-dark-800 transition-colors">
              Load More Articles
            </button>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get the latest insights on AI automation, industry trends, and product updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dark-600 transition-colors"
              />
              <button className="bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              {new Date().getFullYear()} Corben AI Agent. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlogApp
