import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/software-engineering-universe/',
  plugins: [react()],
  build: { outDir: 'dist' }
})