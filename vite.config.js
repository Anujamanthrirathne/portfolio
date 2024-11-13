import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ensure base path is correct for assets
  plugins: [react()],
  build: {
    outDir: 'dist',  // The directory Vite will output the build files to
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js',  // Output JS file names with hash
        chunkFileNames: 'assets/[name]-[hash].js',  // Ensure chunk JS files have hashes
        assetFileNames: 'assets/[name]-[hash][extname]'  // Ensure assets have hashed file names
      }
    }
  }
});
