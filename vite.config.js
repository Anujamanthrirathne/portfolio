import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Make sure this matches the subfolder path in your deployed URL
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output the build files into the 'dist' folder
  },
});
