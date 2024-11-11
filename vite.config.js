// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Matches the subfolder where the app is deployed
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensures the build files are outputted in the 'dist' folder
  },
});
