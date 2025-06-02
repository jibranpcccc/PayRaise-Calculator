#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  console.log('Building for Netlify deployment...');
  
  // Build the client with Vite
  console.log('Building client...');
  execSync('cd client && npm run build', { stdio: 'inherit' });
  
  // Copy client dist to root dist
  console.log('Copying built files...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }
  
  // Copy client/dist to dist
  execSync('cp -r client/dist dist', { stdio: 'inherit' });
  
  // Copy public files if they exist
  if (fs.existsSync('public')) {
    execSync('cp -r public/* dist/', { stdio: 'inherit' });
  }
  
  console.log('Build completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}