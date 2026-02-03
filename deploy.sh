#!/bin/bash

# Kimi AI Agent Landing Page Deployment Script

echo "🚀 Building Kimi AI Agent Landing Page..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Production files are in the 'dist' directory"
    echo ""
    echo "🌐 To deploy:"
    echo "   - Upload the 'dist' folder to your web server"
    echo "   - Or use: npm run preview (to test locally)"
    echo ""
    echo "🔧 For custom deployment:"
    echo "   - Vercel: vercel --prod"
    echo "   - Netlify: netlify deploy --prod --dir=dist"
    echo "   - AWS S3: aws s3 sync dist/ s3://your-bucket-name"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi