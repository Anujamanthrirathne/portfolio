import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Ensures assets use the correct subfolder path
  plugins: [react()],
  build: {
    outDir: 'dist/subfolder',  // Outputs files into `dist/subfolder`
    rollupOptions: {
      output: {
        // Ensuring hashed file names for JS and CSS
        entryFileNames: 'assets/index-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
});
