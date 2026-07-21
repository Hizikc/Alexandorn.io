import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '',
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs', // <-- Указываем Vite собирать сайт прямо в папку docs
    emptyOutDir: true // Перед сборкой очистит старый хлам в docs
  }
});
