import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // This is correct if your app is at the root of the domain
  plugins: [react()],
  build: {
    outDir: 'dist',  // Build output will be placed in 'dist' folder
  },
});
