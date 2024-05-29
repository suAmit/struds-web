import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': resolve(__dirname, './src/features'),
      '@styles': resolve(__dirname, './src/styles'),
      '@layouts': resolve(__dirname, './src/layouts'),
    },
  },
});
