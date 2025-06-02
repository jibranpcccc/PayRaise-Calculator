import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
<<<<<<< HEAD
      "@shared": path.resolve(__dirname, "client", "src", "types"),
=======
      "@shared": path.resolve(__dirname, "shared"),
>>>>>>> 7920243b3924f34dad97d9b7d59a610350c685e8
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
<<<<<<< HEAD
    rollupOptions: {
      external: ['@neondatabase/serverless', 'drizzle-orm/neon-serverless', 'ws', 'express'],
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.VITE_STATIC_BUILD': JSON.stringify('true'),
=======
>>>>>>> 7920243b3924f34dad97d9b7d59a610350c685e8
  },
});