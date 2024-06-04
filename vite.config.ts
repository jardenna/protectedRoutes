import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    eslint(),
    ViteMinifyPlugin({}),
  ],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: './build',
  },
});
