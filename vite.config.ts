import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
/// <reference types="vitest" />

export default defineConfig(({ command, mode }) => {
  process.env.BROWSER = 'chrome';
  loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react()],
    server: {
      port: 5000,
      host: true,
      strictPort: true,
      watch: {
        usePolling: true,
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './setupTests.ts',
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  };
});
