// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ensure the base path is correct, especially if the app is deployed in a subfolder
  plugins: [react()],
  build: {
    outDir: 'dist',  // Make sure the output goes into the 'dist' folder
  },
});
