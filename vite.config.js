import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Remove the externalization of the asset, let Vite bundle it
      external: [],
    },
    assetsDir: 'assets',  // Specify the directory for assets if needed
  },
});
