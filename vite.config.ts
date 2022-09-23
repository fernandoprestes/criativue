import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@interfaces': fileURLToPath(new URL('./src/@interfaces', import.meta.url)),
      '@fake-data': fileURLToPath(new URL('./src/@fake-data', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/settings/_index.scss";
        @import "./src/styles/tools/_index.scss";`,
      },
    },
  },
  plugins: [vue()],
});
