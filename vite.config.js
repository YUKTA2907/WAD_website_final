import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path is controlled by the VITE_BASE_PATH environment variable.
// - GitHub Pages build: VITE_BASE_PATH=/WAD_website_final/  (set in .env.production)
// - Vercel build:       VITE_BASE_PATH=/                    (set in vercel.json env)
// - Local dev server:   falls back to /
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
})
