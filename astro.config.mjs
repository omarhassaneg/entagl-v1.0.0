import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/client']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'astro-client': ['@astrojs/client']
          }
        }
      }
    }
  }
});