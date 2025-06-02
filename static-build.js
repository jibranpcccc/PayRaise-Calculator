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
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}