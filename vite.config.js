import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    // Copy static assets
    copyPublicDir: true
  },
  server: {
    port: 3000,
    open: true
  },
  // Ensure static assets are served
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.png', '**/*.gif', '**/*.webp', '**/*.svg']
});
