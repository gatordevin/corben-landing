# 🚀 Vercel Deployment Guide for Kimi Agent

This guide explains how to deploy the Kimi Agent landing page and integrate it with the local Vercel platform.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel CLI installed (`npm i -g vercel`)
- Vercel account with API token

## 🔧 Initial Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Copy the environment configuration file and update with your values:

```bash
# Edit env-config.js with your configuration
# Set the following environment variables:

export VERCEL_TOKEN="your_vercel_token_here"
export VERCEL_ORG_ID="your_vercel_org_id_here"
export VERCEL_PROJECT_ID="your_vercel_project_id_here"
export TELEGRAM_BOT_TOKEN="your_telegram_bot_token"
export TELEGRAM_CHAT_ID="your_telegram_chat_id"
export TOGETHER_API_KEY="your_together_api_key"
export GMAIL_EMAIL="your_gmail_email"
export GMAIL_PASSWORD="your_gmail_password"
```

### 3. Link to Vercel Project
```bash
npx vercel link
```

## 🏗️ Building the Application

### Development Mode
```bash
# Run individual services
npm run dev          # Main landing page
npm run dev:blog     # Blog service (port 3001)
pm run dev:app      # App service (port 3002)
npm run dev:api      # API service (port 3003)
```

### Production Build
```bash
# Build all services
npm run build:all

# Or build individual services
npm run build:main
npm run build:blog
npm run build:app
npm run build:api
```

## 🚀 Deployment Options

### Option 1: Automated Deployment Script
```bash
# Deploy to production
./deploy-vercel.sh

# Deploy as preview
./deploy-vercel.sh --preview

# Skip build step (if already built)
./deploy-vercel.sh --skip-build
```

### Option 2: Manual Vercel Deployment
```bash
# Build all applications
npm run build:all

# Deploy to Vercel
npx vercel deploy --prod

# Or deploy as preview
npx vercel deploy
```

### Option 3: Node.js Deployment Script
```bash
# Using the enhanced deployment script
node vercel-deploy.js

# Preview deployment
node vercel-deploy.js --preview
```

## 🔗 Local Platform Integration

### Start Local Vercel Platform
```bash
cd /home/farmspace/secure-kimi-agent-java/workspace/local-vercel-platform
npm start
```

### Register Landing Page with Platform
The landing page automatically registers itself with the local platform when started.

### Platform Dashboard
- Local: http://localhost:3100
- Main app: http://localhost:8080
- Platform subdomain: http://platform.localhost:8080

## 📊 Deployment Verification

### Health Check
```bash
# Check if deployment is healthy
curl https://your-deployment-url.vercel.app/health

# Check API status
curl https://your-deployment-url.vercel.app/api/status

# Check platform integration
curl https://your-deployment-url.vercel.app/platform/status
```

### Manual Testing
1. Visit your deployment URL
2. Check all subdomains work:
   - Main: `https://your-domain.vercel.app`
   - Blog: `https://blog.your-domain.vercel.app`
   - App: `https://app.your-domain.vercel.app`
   - API: `https://api.your-domain.vercel.app`

## 🔧 Configuration Files

### vercel.json
Main Vercel configuration with:
- Build settings
- Route configuration
- Function settings
- Environment variables
- Headers and rewrites

### env-config.js
Environment configuration management with:
- Vercel API settings
- Application configuration
- Security settings
- Validation functions

### platform-integration.js
Integration with local Vercel platform:
- Automatic registration
- Status monitoring
- Deployment management
- Proxy configuration

## 📁 Project Structure
```
landing-page/
├── api/                    # API routes for Vercel
│   └── index.js           # Main API handler
├── dist/                  # Built applications
├── src/                   # Source files
├── vercel.json           # Vercel configuration
├── env-config.js         # Environment configuration
├── platform-integration.js # Local platform integration
├── vercel-deploy.js      # Deployment script
├── deploy-vercel.sh      # Shell deployment script
├── subdomain-router.js   # Original router
├── subdomain-router-enhanced.js # Enhanced router with platform integration
└── package.json          # Dependencies and scripts
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Vercel CLI Issues**
   ```bash
   # Update Vercel CLI
   npm update -g vercel
   
   # Re-authenticate
   vercel logout
   vercel login
   ```

3. **Environment Variables**
   ```bash
   # Check Vercel environment
   vercel env ls
   
   # Add missing variables
   vercel env add VERCEL_TOKEN
   ```

4. **Platform Integration**
   ```bash
   # Check platform status
   curl http://localhost:3100/api/apps
   
   # Restart platform
   cd /home/farmspace/secure-kimi-agent-java/workspace/local-vercel-platform
   npm restart
   ```

### Debug Mode
```bash
# Enable debug logging
export DEBUG=kimi-agent:*
npm start
```

## 📈 Performance Optimization

### Build Optimization
- Use `npm run build:all` for production builds
- Enable compression in Vercel settings
- Optimize images and assets

### Caching
- Static assets are cached for 1 year
- API responses use appropriate cache headers
- Browser caching configured

### Monitoring
- Health checks run automatically
- Error tracking with console logging
- Performance monitoring available

## 🔐 Security

### Environment Variables
- Never commit sensitive data
- Use Vercel environment variables
- Rotate tokens regularly

### API Security
- Input validation on all endpoints
- Rate limiting configured
- CORS properly configured

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review Vercel documentation
3. Check platform logs
4. Verify environment configuration

## 🎯 Next Steps

After successful deployment:
1. Configure custom domain
2. Set up monitoring
3. Configure CI/CD pipeline
4. Test all functionality
5. Update documentation