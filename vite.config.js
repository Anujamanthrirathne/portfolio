import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // Import the react plugin

export default defineConfig({
  base: '/portfolio/',  // Adjust this to your actual Vercel deployment path
  plugins: [react()],   // Use the react plugin
  build: {
    outDir: 'dist'      // Ensure Vercel knows where to look for build output
  },
});
