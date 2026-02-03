# Kimi AI Landing Page with Subdomain Routing

A professional landing page for Kimi AI Agent with multi-subdomain support for blog, app dashboard, and API documentation.

## 🚀 Features

- **Main Domain** (`kimi.ai`) - Professional landing page
- **Blog Subdomain** (`blog.kimi.ai`) - AI automation insights and articles
- **App Subdomain** (`app.kimi.ai`) - Enterprise dashboard
- **API Subdomain** (`api.kimi.ai`) - Developer documentation

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Routing**: Multi-page Vite configuration
- **Subdomain Routing**: Express.js proxy middleware
- **Styling**: Dark theme with gradient accents

## 📦 Installation

```bash
# Install dependencies
npm install

# Build all subdomains
npm run build:all

# Start subdomain router (serves all sites)
npm start

# Or run individual development servers
npm run dev        # Main site (port 3000)
npm run dev:blog   # Blog (port 3001)
npm run dev:app    # App dashboard (port 3002)
npm run dev:api    # API docs (port 3003)
```

## 🌐 Subdomain Structure

### Main Site (kimi.ai)
- Hero section with value proposition
- Features showcase
- Use cases
- Security highlights
- Call-to-action
- Professional design

### Blog (blog.kimi.ai)
- AI automation articles
- Industry insights
- Technical tutorials
- Company updates

### App Dashboard (app.kimi.ai)
- Enterprise metrics dashboard
- Agent monitoring
- Task statistics
- Quick actions
- Real-time data

### API Documentation (api.kimi.ai)
- REST API reference
- Code examples (JavaScript, Python, cURL)
- Authentication guide
- Quick start guide

## 🔧 Configuration

### Local Development
For local testing, you can use `/etc/hosts` or similar:
```
127.0.0.1 kimi.ai
127.0.0.1 blog.kimi.ai
127.0.0.1 app.kimi.ai
127.0.0.1 api.kimi.ai
```

### Production Deployment
1. **DNS Setup**: Configure A records for each subdomain
2. **CDN/Proxy**: Use Cloudflare, Vercel, or similar for subdomain routing
3. **SSL**: Ensure HTTPS for all subdomains
4. **Build**: Run `npm run build:all` to generate all sites

## 📁 Project Structure

```
landing-page/
├── index.html              # Main landing page
├── blog.html               # Blog subdomain
├── app.html                # App dashboard
├── api.html                # API documentation
├── src/
│   ├── App.js              # Main app component
│   ├── BlogApp.js          # Blog app component
│   ├── AppApp.js           # Dashboard app component
│   ├── ApiApp.js           # API docs component
│   └── components/         # Shared components
├── vite.config.ts          # Main Vite config
├── vite.blog.config.ts     # Blog Vite config
├── vite.app.config.ts      # App Vite config
├── vite.api.config.ts      # API Vite config
├── subdomain-router.js     # Express subdomain router
└── package.json
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
- Deploy each subdomain as separate Vercel project
- Configure subdomain routing in Vercel dashboard
- Automatic SSL and CDN

### Option 2: Cloudflare Pages
- Similar to Vercel with Cloudflare's CDN
- Configure DNS and subdomain routing

### Option 3: Traditional Hosting
- Use the Express subdomain router
- Configure nginx/apache for subdomain routing
- Manual SSL certificate management

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:all
EXPOSE 8080
CMD ["npm", "run", "router"]
```

## 🔒 Security Features

- HTTPS enforcement
- API key authentication
- Rate limiting ready
- Input validation
- XSS protection

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
{
  primary: '#3B82F6',    // Blue
  secondary: '#8B5CF6',  // Purple
  accent: '#10B981',     // Green
}
```

### Content
- Update `src/components/` for main site content
- Modify `src/BlogApp.js` for blog content
- Edit `src/AppApp.js` for dashboard metrics
- Update `src/ApiApp.js` for API documentation

### Subdomains
Add new subdomains by:
1. Creating new HTML entry point
2. Adding Vite config
3. Creating app component
4. Updating subdomain router
5. Adding DNS records

## 📈 Performance

- Code splitting by subdomain
- Optimized builds with Vite
- Lazy loading for components
- CDN-ready static assets
- Compression enabled

## 🧪 Testing

```bash
# Test all builds
npm run build:all

# Test individual builds
npm run build:main
npm run build:blog
npm run build:app
npm run build:api

# Test subdomain router
npm run router
```

## 📞 Support

For questions or issues:
- Check the GitHub repository
- Review Vite documentation
- Consult Express.js documentation
- Check subdomain routing guides

## 📄 License

MIT License - Feel free to use for your projects!