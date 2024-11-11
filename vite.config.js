import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/assets/main-BqibTNCe.js'], // Externalize the asset
    },
  },
});
