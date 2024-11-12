import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensure assets are loaded from root
  plugins: [react()],
  build: {
    outDir: 'dist', // Output to dist folder
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]' // Ensures correct file paths
      }
    }
  }
});
