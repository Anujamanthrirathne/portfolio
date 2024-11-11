import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://portfolio-3h6g.vercel.app/',  // Set the base path to your deployed URL
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the output goes into the 'dist' folder
  },
});
