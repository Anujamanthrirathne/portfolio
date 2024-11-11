import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Set this to match the subfolder where your app will be deployed
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output the build files into the 'dist' folder
  },
});
