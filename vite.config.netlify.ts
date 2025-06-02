import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: "client",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        unused: true
      }
    },
    rollupOptions: {
      input: path.resolve(__dirname, "client", "index.html"),
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor-other';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.VITE_STATIC_BUILD': JSON.stringify('true'),
  },
});