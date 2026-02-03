import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Copy,
  Check,
  ChevronRight,
  Code,
  Terminal,
  Book,
  Key,
  Search,
  ExternalLink
} from 'lucide-react'

const ApiNavbar = () => {
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
            <span className="text-gray-300 text-sm font-medium">API</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
            <a href="/app.html" className="text-gray-400 hover:text-white transition-colors text-sm">Dashboard</a>
            <a href="/blog.html" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
            <a href="/#demo" className="bg-white text-dark-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
              Get API Key
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const CodeBlock = ({ code, language, title }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-dark-900 border border-dark-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-dark-800">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-400">{title || language}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  )
}

const endpoints = [
  {
    method: 'GET',
    path: '/v1/agents',
    description: 'List all agents',
    color: 'bg-green-500/10 text-green-400'
  },
  {
    method: 'POST',
    path: '/v1/agents',
    description: 'Create a new agent',
    color: 'bg-yellow-500/10 text-yellow-400'
  },
  {
    method: 'GET',
    path: '/v1/agents/{id}',
    description: 'Get agent details',
    color: 'bg-green-500/10 text-green-400'
  },
  {
    method: 'POST',
    path: '/v1/tasks',
    description: 'Execute a task',
    color: 'bg-yellow-500/10 text-yellow-400'
  },
  {
    method: 'GET',
    path: '/v1/tasks/{id}',
    description: 'Get task status',
    color: 'bg-green-500/10 text-green-400'
  },
  {
    method: 'DELETE',
    path: '/v1/agents/{id}',
    description: 'Delete an agent',
    color: 'bg-red-500/10 text-red-400'
  }
]

const sdks = [
  { name: 'JavaScript / Node.js', icon: 'JS', status: 'Stable' },
  { name: 'Python', icon: 'PY', status: 'Stable' },
  { name: 'Go', icon: 'GO', status: 'Beta' },
  { name: 'Ruby', icon: 'RB', status: 'Coming Soon' }
]

function ApiApp() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <ApiNavbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Developer Documentation</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corben AI API</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Integrate AI automation into your applications with our powerful REST API. Build intelligent workflows programmatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#quickstart" className="inline-flex items-center space-x-2 bg-white text-dark-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Code className="w-5 h-5" />
                <span>Quick Start</span>
              </a>
              <a href="#" className="inline-flex items-center space-x-2 border border-dark-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-900 transition-colors">
                <Book className="w-5 h-5" />
                <span>Full Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            id="quickstart"
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Quick Start</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Authentication */}
              <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Authentication</h3>
                    <p className="text-gray-400 text-sm">Secure API access</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  All API requests require authentication using your API key in the Authorization header.
                </p>
                <CodeBlock
                  code={`Authorization: Bearer YOUR_API_KEY`}
                  language="HTTP Header"
                  title="HTTP Header"
                />
              </div>

              {/* Base URL */}
              <div className="bg-dark-900/50 border border-dark-800 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Base URL</h3>
                    <p className="text-gray-400 text-sm">API endpoint</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  All API requests should be made to our secure production endpoint.
                </p>
                <CodeBlock
                  code={`https://api.corbenai.com`}
                  language="URL"
                  title="Base URL"
                />
              </div>
            </div>
          </motion.div>

          {/* API Endpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">API Endpoints</h2>
            <div className="bg-dark-900/50 border border-dark-800 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-800">
                    <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                    <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoints.map((endpoint, index) => (
                    <tr key={index} className="border-b border-dark-800 last:border-0 hover:bg-dark-800/30 transition-colors cursor-pointer">
                      <td className="py-4 px-6">
                        <span className={`px-2.5 py-1 rounded text-xs font-medium ${endpoint.color}`}>
                          {endpoint.method}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <code className="text-primary-400 font-mono text-sm">{endpoint.path}</code>
                      </td>
                      <td className="py-4 px-6 text-gray-400 text-sm hidden md:table-cell">{endpoint.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Code Examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Code Examples</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-yellow-500/10 rounded flex items-center justify-center text-yellow-400 text-xs font-bold">JS</span>
                  <span>JavaScript / Node.js</span>
                </h3>
                <CodeBlock
                  code={`import { CorbenAI } from '@corben-ai/sdk';

const client = new CorbenAI({
  apiKey: process.env.CORBEN_API_KEY
});

// Create an agent
const agent = await client.agents.create({
  name: 'Email Assistant',
  type: 'automation',
  tools: ['browser', 'email', 'file']
});

// Execute a task
const task = await client.tasks.create({
  agentId: agent.id,
  instructions: 'Check my inbox and summarize unread emails'
});

console.log(task.result);`}
                  language="javascript"
                  title="JavaScript"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center text-blue-400 text-xs font-bold">PY</span>
                  <span>Python</span>
                </h3>
                <CodeBlock
                  code={`from corben_ai import CorbenAI
import os

client = CorbenAI(api_key=os.environ['CORBEN_API_KEY'])

# Create an agent
agent = client.agents.create(
    name='Email Assistant',
    type='automation',
    tools=['browser', 'email', 'file']
)

# Execute a task
task = client.tasks.create(
    agent_id=agent.id,
    instructions='Check my inbox and summarize unread emails'
)

print(task.result)`}
                  language="python"
                  title="Python"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center text-green-400 text-xs font-bold">cURL</span>
                  <span>cURL</span>
                </h3>
                <CodeBlock
                  code={`# Create an agent
curl -X POST https://api.corbenai.com/v1/agents \\
  -H "Authorization: Bearer $CORBEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Email Assistant",
    "type": "automation",
    "tools": ["browser", "email", "file"]
  }'

# Execute a task
curl -X POST https://api.corbenai.com/v1/tasks \\
  -H "Authorization: Bearer $CORBEN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agent_123",
    "instructions": "Check my inbox and summarize unread emails"
  }'`}
                  language="bash"
                  title="cURL"
                />
              </div>
            </div>
          </motion.div>

          {/* SDKs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Official SDKs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sdks.map((sdk, index) => (
                <div
                  key={index}
                  className="bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-dark-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-sm font-bold text-gray-300">
                      {sdk.icon}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      sdk.status === 'Stable' ? 'bg-green-500/10 text-green-400' :
                      sdk.status === 'Beta' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-gray-500/10 text-gray-400'
                    }`}>
                      {sdk.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white">{sdk.name}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Create your free account and get your API key to start building with Corben AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#demo" className="inline-flex items-center justify-center space-x-2 bg-white text-dark-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Key className="w-5 h-5" />
                <span>Get API Key</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center space-x-2 border border-dark-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-900 transition-colors">
                <span>Contact Sales</span>
              </a>
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

export default ApiApp
