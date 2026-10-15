import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/etzfizz-digital/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: false,
  },
})
