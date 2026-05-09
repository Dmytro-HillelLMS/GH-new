import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        
        includePaths: [
          path.resolve(__dirname, './src/scss'),
          path.resolve(__dirname, './src/scss/base')
        ],
        // Сучасний api для Sass
        api: 'modern-compiler'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});