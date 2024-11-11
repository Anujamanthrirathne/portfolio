import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Ensure this matches your Vercel deployment subfolder
  plugins: [react()],
  build: {
    outDir: 'dist/subfolder',  // Specify the output directory
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-[hash].js',  // Ensures hashed JS file name
        chunkFileNames: 'assets/[name]-[hash].js',  // Ensures chunk JS file names
        assetFileNames: 'assets/[name]-[hash][extname]'  // Ensures asset file names are hashed
      }
    }
  },
});
