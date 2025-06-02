#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Netlify build process...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm ci', { stdio: 'inherit' });

  // Set environment for production build
  process.env.NODE_ENV = 'production';

  // Build the frontend only (skip server build for static hosting)
  console.log('Building frontend with Vite...');
  execSync('npx vite build', { stdio: 'inherit' });

  // Copy public assets to dist if they exist
  if (fs.existsSync('public')) {
    console.log('Copying public assets...');
    const publicFiles = fs.readdirSync('public');
    publicFiles.forEach(file => {
      const srcPath = path.join('public', file);
      const destPath = path.join('dist', file);
      fs.copyFileSync(srcPath, destPath);
    });
  }

  console.log('✅ Build completed successfully!');
  console.log('📁 Output directory: dist/');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}