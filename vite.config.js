import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vercel knows where to look for build output
    rollupOptions: {
      output: {
        // Customize how the chunks are split
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Bundle all third-party modules into a vendor chunk
          }
        },
      },
    },
  },
  // Optional: Set base path if deploying under a subfolder
  base: '/', // Adjust this if your project is hosted under a subfolder
});
