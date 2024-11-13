import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Use relative base path to allow Vercel to serve assets correctly
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory is 'dist' as Vercel will look for this
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js',  // Ensure JS files are hashed
        chunkFileNames: 'assets/[name]-[hash].js',  // Ensure chunk files are hashed
        assetFileNames: 'assets/[name]-[hash][extname]'  // Ensure assets (images, etc.) are hashed
      }
    }
  }
});
