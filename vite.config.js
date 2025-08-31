import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para Vercel/Netlify
export default defineConfig({
  plugins: [react()],
  base: './', // 🔑 Importante para carregar imagens e assets
})