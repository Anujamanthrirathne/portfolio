import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Set base to root if deployed to root directory
  plugins: [react()],
  build: {
    outDir: 'dist',  // Specify output directory
  },
});
