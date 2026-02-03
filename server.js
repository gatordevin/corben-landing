const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve specific HTML pages for multi-page app
const pages = ['blog', 'app', 'api'];
pages.forEach(page => {
  app.get(`/${page}.html`, (req, res) => {
    const filePath = path.join(__dirname, 'dist', `${page}.html`);
    res.sendFile(filePath, (err) => {
      if (err) {
        // Fall back to index.html if specific page doesn't exist
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
      }
    });
  });
});

// Handle SPA routing - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Corben Landing Page running on port ${PORT}`);
  console.log(`📋 http://localhost:${PORT}`);
});
