// Simple subdomain router for local development
// This can be extended for production use with proper DNS configuration

const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Subdomain to port mapping
const subdomainMap = {
  'www': 3000,
  'main': 3000,
  'blog': 3001,
  'app': 3002,
  'api': 3003
};

// Serve static files for main domain
app.use(express.static(path.join(__dirname, 'dist')));

// Subdomain routing middleware
app.use((req, res, next) => {
  const hostname = req.get('host');
  const subdomain = hostname ? hostname.split('.')[0] : 'www';
  
  console.log(`Routing request for subdomain: ${subdomain}`);
  
  // Route to different ports based on subdomain
  if (subdomain === 'blog') {
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/blog': '/'
      }
    })(req, res, next);
  } else if (subdomain === 'app') {
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/app': '/'
      }
    })(req, res, next);
  } else if (subdomain === 'api') {
    createProxyMiddleware({
      target: 'http://localhost:3003',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })(req, res, next);
  } else {
    // Main domain - serve the landing page
    next();
  }
});

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Subdomain router running on port ${PORT}`);
  console.log(`📍 Main site: http://localhost:${PORT}`);
  console.log(`📝 Blog: http://blog.localhost:${PORT}`);
  console.log(`📊 App: http://app.localhost:${PORT}`);
  console.log(`🔧 API: http://api.localhost:${PORT}`);
});