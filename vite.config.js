import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subfolder/',  // Ensures assets use the correct subfolder path
  plugins: [react()],
  build: {
    outDir: 'dist/subfolder',  // Outputs files into `dist/subfolder`
  },
});
