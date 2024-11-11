import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ensures the base path is set correctly, especially if the app is deployed in a subfolder.
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the build files
  },
});
