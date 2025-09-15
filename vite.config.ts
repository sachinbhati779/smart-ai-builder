import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages, set the `base` to '/<repo-name>/' before building.
  // base: '/smart-ai-builder/',
})
