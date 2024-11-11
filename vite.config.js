import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Use a relative base path
  plugins: [react()],
  build: {
    outDir: 'dist',  // Direct output to 'dist'
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js',  // Ensures hashed JS file name
        chunkFileNames: 'assets/[name]-[hash].js',  // Ensures chunk JS file names
        assetFileNames: 'assets/[name]-[hash][extname]'  // Ensures asset file names are hashed
      }
    }
  }
});
