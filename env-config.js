// Environment Configuration for Vercel Deployment
const envConfig = {
  // Vercel Deployment Configuration
  VERCEL_TOKEN: process.env.VERCEL_TOKEN,
  VERCEL_ORG_ID: process.env.VERCEL_ORG_ID,
  VERCEL_PROJECT_ID: process.env.VERCEL_PROJECT_ID,

  // Application Settings
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: process.env.PORT || 3000,

  // API Configuration
  API_BASE_URL: process.env.API_BASE_URL || 'https://your-domain.vercel.app',
  WEBSOCKET_URL: process.env.WEBSOCKET_URL || 'wss://your-domain.vercel.app',

  // Telegram Configuration (for notifications)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,

  // Together AI Configuration
  TOGETHER_API_KEY: process.env.TOGETHER_API_KEY,

  // Gmail Configuration (for browser automation)
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,

  // Database Configuration (if needed)
  DATABASE_URL: process.env.DATABASE_URL,

  // Security Configuration
  JWT_SECRET: process.env.JWT_SECRET,
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
};

// Validate required environment variables
function validateEnv() {
  const required = [
    'VERCEL_TOKEN',
    'VERCEL_ORG_ID',
    'VERCEL_PROJECT_ID'
  ];

  const missing = required.filter(key => !envConfig[key]);
  
  if (missing.length > 0) {
    console.warn('⚠️  Missing environment variables:', missing.join(', '));
    console.warn('Please set these in your Vercel dashboard or .env file');
  }

  return missing.length === 0;
}

module.exports = {
  envConfig,
  validateEnv
};