const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'corben-agent-api'
  });
});

// API endpoints for Corben Agent
app.get('/api/status', (req, res) => {
  res.json({
    agent: 'Corben AI Agent',
    version: '2.5',
    status: 'online',
    capabilities: [
      'browser-automation',
      'file-operations', 
      'telegram-integration',
      'api-access',
      'captcha-solving'
    ]
  });
});

app.get('/api/tools', (req, res) => {
  res.json({
    tools: [
      'launchBrowser',
      'navigateTo',
      'click',
      'type',
      'takeScreenshot',
      'solveCaptcha',
      'sendTelegram',
      'readFile',
      'writeFile',
      'searchCode',
      'checkTogetherBalance'
    ]
  });
});

// Proxy to local Vercel platform
app.use('/platform', createProxyMiddleware({
  target: 'http://localhost:3100',
  changeOrigin: true,
  pathRewrite: {
    '^/platform': ''
  }
}));

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

module.exports = app;