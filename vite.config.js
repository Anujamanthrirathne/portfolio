// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Use a relative base path
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory is 'dist'
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js', // Ensure hashed JS file names
        chunkFileNames: 'assets/[name]-[hash].js', // Ensure chunk JS file names
        assetFileNames: 'assets/[name]-[hash][extname]' // Ensure asset file names are hashed
      }
    }
  }
});
