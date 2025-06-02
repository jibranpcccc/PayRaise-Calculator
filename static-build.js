<<<<<<< HEAD
// Build script for static deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting static build process...');

try {
  // Set environment for frontend-only build
  process.env.NODE_ENV = 'production';
  process.env.VITE_STATIC_BUILD = 'true';
  
  // Run the build with Netlify config
  console.log('Building with Vite...');
  execSync('npx vite build --config vite.config.netlify.ts', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('Static build completed successfully!');
=======
// Static build script for PayRaise Calculator
import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

console.log('Building PayRaise Calculator for static deployment...');

// Build the frontend
try {
  console.log('Building frontend...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Copy essential files to dist
  console.log('Copying essential files...');
  
  // Create dist directory if it doesn't exist
  if (!existsSync('dist')) {
    mkdirSync('dist', { recursive: true });
  }
  
  // Copy public files
  if (existsSync('public/sitemap.xml')) {
    copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
  }
  
  if (existsSync('public/robots.txt')) {
    copyFileSync('public/robots.txt', 'dist/robots.txt');
  }
  
  console.log('Static build completed successfully!');
  console.log('Upload the "dist" folder to your hosting provider.');
  
>>>>>>> 7920243b3924f34dad97d9b7d59a610350c685e8
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}