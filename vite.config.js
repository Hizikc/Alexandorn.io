import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/', // ОБЯЗАТЕЛЬНО точка и слэш! Это заставит пути на гитхабе работать правильно
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true
  }
});
