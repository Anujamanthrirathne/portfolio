import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Matches the deployed subfolder
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
