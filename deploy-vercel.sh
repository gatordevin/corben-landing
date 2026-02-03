#!/bin/bash

# Vercel Deployment Script for Kimi Agent Landing Page
# This script handles the complete deployment process to Vercel

set -e

echo "🚀 Starting Vercel deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_status "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Parse command line arguments
PREVIEW=false
SKIP_BUILD=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --preview|-p)
            PREVIEW=true
            shift
            ;;
        --skip-build|-s)
            SKIP_BUILD=true
            shift
            ;;
        --help|-h)
            echo "Usage: $0 [OPTIONS]"
            echo "Options:"
            echo "  --preview, -p      Deploy as preview (not production)"
            echo "  --skip-build, -s   Skip build step"
            echo "  --help, -h         Show this help message"
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            exit 1
            ;;
    esac
done

print_status "Deployment configuration:"
echo "  Preview: $PREVIEW"
echo "  Skip build: $SKIP_BUILD"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Run build if not skipped
if [ "$SKIP_BUILD" = false ]; then
    print_status "Building applications..."
    npm run build:all
    print_success "Build completed successfully"
else
    print_warning "Skipping build step"
fi

# Deploy to Vercel
if [ "$PREVIEW" = true ]; then
    print_status "Deploying to Vercel (preview)..."
    DEPLOYMENT_URL=$(vercel deploy --yes)
else
    print_status "Deploying to Vercel (production)..."
    DEPLOYMENT_URL=$(vercel deploy --prod --yes)
fi

print_success "Deployment completed!"
print_status "Deployment URL: $DEPLOYMENT_URL"

# Run health check
print_status "Running health check..."
sleep 10  # Wait for deployment to settle

HEALTH_CHECK=$(curl -s "$DEPLOYMENT_URL/api/health" | grep -o '"status":"healthy"' || echo "")

if [ -n "$HEALTH_CHECK" ]; then
    print_success "Health check passed!"
else
    print_warning "Health check failed. Please verify deployment manually."
fi

# Send notification if Telegram is configured
if [ -n "$TELEGRAM_BOT_TOKEN" ] && [ -n "$TELEGRAM_CHAT_ID" ]; then
    print_status "Sending deployment notification..."
    MESSAGE="🚀 Kimi Agent deployed successfully!\n\nURL: $DEPLOYMENT_URL\nEnvironment: $([ "$PREVIEW" = true ] && echo "Preview" || echo "Production")\nHealth Check: $([ -n "$HEALTH_CHECK" ] && echo "✅ Passed" || echo "⚠️  Failed")"
    
    curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
        -d "chat_id=$TELEGRAM_CHAT_ID" \
        -d "text=$MESSAGE" \
        -d "parse_mode=HTML" > /dev/null
    
    print_success "Notification sent!"
fi

print_success "Deployment process completed!"
echo ""
echo "🌐 Deployment URL: $DEPLOYMENT_URL"
echo "📊 Health Check: $([ -n "$HEALTH_CHECK" ] && echo "PASSED" || echo "FAILED")"
echo "🔧 Environment: $([ "$PREVIEW" = true ] && echo "Preview" || echo "Production")"

# Save deployment info
DEPLOYMENT_INFO_FILE="deployment-info.json"
cat > "$DEPLOYMENT_INFO_FILE" << EOF
{
  "deploymentUrl": "$DEPLOYMENT_URL",
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "environment": "$([ "$PREVIEW" = true ] && echo "preview" || echo "production")",
  "healthCheck": "$([ -n "$HEALTH_CHECK" ] && echo "passed" || echo "failed")"
}
EOF

print_status "Deployment info saved to: $DEPLOYMENT_INFO_FILE"