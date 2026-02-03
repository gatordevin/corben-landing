// Enhanced subdomain router with platform integration
// This can be extended for production use with proper DNS configuration

const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const PlatformIntegration = require('./platform-integration');

const app = express();

// Subdomain to port mapping
const subdomainMap = {
  'www': 3000,
  'main': 3000,
  'blog': 3001,
  'app': 3002,
  'api': 3003
};

// Initialize platform integration
const platformIntegration = new PlatformIntegration();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Initialize platform integration
platformIntegration.initialize().then(() => {
  console.log('🔄 Platform integration initialized');
}).catch(error => {
  console.error('❌ Platform integration failed:', error);
});

// Use platform integration middleware
app.use('/', platformIntegration.createMiddleware());

// Enhanced subdomain routing middleware
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
  } else if (subdomain === 'platform') {
    // Redirect to platform dashboard
    res.redirect('http://localhost:3100');
  } else {
    // Main domain - serve the landing page
    next();
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'kimi-agent-landing'
  });
});

// API endpoints
app.get('/api/status', (req, res) => {
  res.json({
    service: 'Kimi Agent Landing Page',
    status: 'online',
    version: '1.0.0',
    platform: {
      url: platformIntegration.platformUrl,
      status: 'initializing'
    },
    timestamp: new Date().toISOString()
  });
});

// Handle the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Enhanced subdomain router running on port ${PORT}`);
  console.log(`📍 Main site: http://localhost:${PORT}`);
  console.log(`📝 Blog: http://blog.localhost:${PORT}`);
  console.log(`📊 App: http://app.localhost:${PORT}`);
  console.log(`🔧 API: http://api.localhost:${PORT}`);
  console.log(`🌐 Platform: http://platform.localhost:${PORT}`);
  console.log(`🔗 Platform integration: Enabled`);
});