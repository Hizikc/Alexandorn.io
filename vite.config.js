import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Базовый путь для GitHub Pages (название твоего репозитория)
  base: '/alexandoin.io/',

  build: {
    // Собираем в папку docs, чтобы GitHub её увидел
    outDir: 'docs',
    // Очищаем папку перед новой сборкой
    emptyOutDir: true,

    // Настройка многостраничности (чтобы Vite видел и index.html, и 404.html)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  },

  // Настройка локального сервера для разработки
  server: {
    port: 3000,
    open: true
  }
});
