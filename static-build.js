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
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}