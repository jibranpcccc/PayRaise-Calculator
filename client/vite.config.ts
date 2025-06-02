import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core dependencies
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor';
          }
          if (id.includes('wouter')) {
            return 'router-vendor';
          }
          
          // UI Libraries - split for better caching
          if (id.includes('lucide-react')) {
            return 'icons-vendor';
          }
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          
          // Heavy components that should be split
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1]?.split('.')[0];
            return `page-${pageName}`;
          }
          
          // Calculator components
          if (id.includes('/calculator/')) {
            return 'calculator-components';
          }
          
          // Other vendor dependencies
          if (id.includes('node_modules')) {
            return 'vendor-utils';
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        unused: true,
        dead_code: true,
        sequences: true,
        conditionals: true,
        booleans: true,
        if_return: true,
        join_vars: true
      },
      mangle: {
        safari10: true,
        toplevel: true
      }
    },
    target: 'es2020',
    chunkSizeWarningLimit: 500,
    sourcemap: false
  },
  publicDir: "../public",
  optimizeDeps: {
    include: ['react', 'react-dom', 'wouter', '@tanstack/react-query'],
    exclude: ['@types/node']
  },
  esbuild: {
    drop: ['console', 'debugger'],
    treeShaking: true
  }
});