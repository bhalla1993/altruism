import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages, match this to your repository name.
  base: '/altruism/',
  plugins: [react()],
})
