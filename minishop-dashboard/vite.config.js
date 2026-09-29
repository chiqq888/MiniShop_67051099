import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const html = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        dashboard: html('./index.html'),
        products: html('./src/products.html'),
        profile: html('./src/profile.html'),
      },
    },
  },
})
