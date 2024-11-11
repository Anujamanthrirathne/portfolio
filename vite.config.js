import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio/',  // Adjust this to your actual Vercel deployment path
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
});
