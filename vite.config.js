import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3006',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 3005,
    host: '0.0.0.0',
  },
})
