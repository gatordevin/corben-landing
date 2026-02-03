const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

/**
 * Platform Integration Module
 * Connects the landing page to the local Vercel platform
 */
class PlatformIntegration {
  constructor() {
    this.platformUrl = process.env.PLATFORM_URL || 'http://localhost:3100';
    this.appsDir = path.join(__dirname, 'apps');
    this.configFile = path.join(__dirname, 'platform-apps.json');
  }

  /**
   * Initialize platform integration
   */
  async initialize() {
    console.log(chalk.blue('🔌 Initializing platform integration...'));

    // Ensure apps directory exists
    await fs.ensureDir(this.appsDir);

    // Load existing configuration
    let config = {};
    if (await fs.pathExists(this.configFile)) {
      config = await fs.readJson(this.configFile);
    }

    // Register this app with the local platform
    await this.registerWithPlatform(config);

    console.log(chalk.green('✅ Platform integration initialized'));
    return config;
  }

  /**
   * Register this application with the local Vercel platform
   */
  async registerWithPlatform(config) {
    const appConfig = {
      name: 'kimi-landing',
      port: process.env.PORT || 3000,
      directory: '.',
      startCommand: 'serve',
      subdomain: 'kimi',
      description: 'Kimi AI Agent Landing Page',
      type: 'main'
    };

    try {
      // Try to register with platform
      const response = await fetch(`${this.platformUrl}/api/apps`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appConfig)
      });

      if (response.ok) {
        console.log(chalk.green('✅ Registered with local platform'));
      } else {
        console.log(chalk.yellow('⚠️  Could not register with platform (may not be running)'));
      }
    } catch (error) {
      console.log(chalk.yellow('⚠️  Platform not available:', error.message));
    }

    // Save configuration
    config['kimi-landing'] = appConfig;
    await fs.writeJson(this.configFile, config, { spaces: 2 });
  }

  /**
   * Create Express middleware for platform integration
   */
  createMiddleware() {
    const router = express.Router();

    // Health check endpoint
    router.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        service: 'platform-integration',
        platformUrl: this.platformUrl,
        timestamp: new Date().toISOString()
      });
    });

    // Platform status endpoint
    router.get('/platform/status', async (req, res) => {
      try {
        const response = await fetch(`${this.platformUrl}/api/apps`);
        const apps = await response.json();
        
        res.json({
          status: 'connected',
          platformUrl: this.platformUrl,
          apps: apps,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        res.status(503).json({
          status: 'disconnected',
          platformUrl: this.platformUrl,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    });

    // Proxy to platform dashboard
    router.use('/platform', createProxyMiddleware({
      target: this.platformUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/platform': ''
      },
      onError: (err, req, res) => {
        console.error(chalk.red('Platform proxy error:'), err.message);
        res.status(503).json({
          error: 'Platform not available',
          message: 'The local Vercel platform is not running',
          platformUrl: this.platformUrl
        });
      }
    }));

    // Deploy endpoint
    router.post('/deploy', async (req, res) => {
      try {
        const { target = 'vercel', preview = false } = req.body;
        
        console.log(chalk.blue(`🚀 Starting deployment to ${target}...`));

        let deploymentUrl;
        
        if (target === 'vercel') {
          // Use Vercel deployment script
          const { execSync } = require('child_process');
          const command = preview 
            ? 'node vercel-deploy.js --preview'
            : 'node vercel-deploy.js';
          
          deploymentUrl = execSync(command, { 
            encoding: 'utf8',
            stdio: 'pipe'
          }).trim();
        } else if (target === 'platform') {
          // Deploy to local platform
          deploymentUrl = `${this.platformUrl}/kimi-landing`;
        } else {
          throw new Error(`Unknown deployment target: ${target}`);
        }

        res.json({
          success: true,
          target,
          deploymentUrl,
          preview,
          timestamp: new Date().toISOString()
        });

      } catch (error) {
        console.error(chalk.red('Deployment failed:'), error);
        res.status(500).json({
          success: false,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    });

    return router;
  }

  /**
   * Get platform status
   */
  async getPlatformStatus() {
    try {
      const response = await fetch(`${this.platformUrl}/api/apps`);
      if (response.ok) {
        return {
          status: 'connected',
          apps: await response.json()
        };
      }
    } catch (error) {
      // Platform not available
    }

    return {
      status: 'disconnected',
      apps: []
    };
  }

  /**
   * Deploy to local platform
   */
  async deployToPlatform(appName = 'kimi-landing') {
    try {
      const response = await fetch(`${this.platformUrl}/api/apps/${appName}/start`, {
        method: 'POST'
      });

      if (response.ok) {
        console.log(chalk.green(`✅ App ${appName} started on platform`));
        return true;
      } else {
        console.log(chalk.red(`❌ Failed to start app ${appName}`));
        return false;
      }
    } catch (error) {
      console.log(chalk.red('❌ Platform deployment failed:'), error.message);
      return false;
    }
  }
}

module.exports = PlatformIntegration;