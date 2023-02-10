/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import defineTsConfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), defineTsConfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
    includeSource: ['src/**/*.{js,jsx,ts,tsx}']
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  }
});
