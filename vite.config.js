import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Engineering-Universe/',
  plugins: [react()],
  build: { outDir: 'dist' }
})