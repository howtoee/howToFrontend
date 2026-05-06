import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/howToFrontend/',

  build: {
    // Target modern browsers — smaller output, native ESM
    target: 'es2020',

    // Raise the inline limit so small assets (icons, tiny images) become
    // base64 data-URIs (zero extra requests)
    assetsInlineLimit: 8192, // 8 KB

    rollupOptions: {
      output: {
        // Code-split heavy libraries so the initial bundle stays small
        manualChunks: {
          'react-vendor':   ['react', 'react-dom'],
          'router':         ['react-router-dom'],
          'framer':         ['framer-motion'],
          'gsap':           ['gsap'],
          'icons':          ['@heroicons/react'],
        },
      },
    },

    // Produce source maps only in development
    sourcemap: false,

    // Minify CSS in the build
    cssMinify: true,
  },

  // Dev server: allow big WebP files without timeout
  server: {
    fs: { allow: ['..'] },
  },

  // Tell Vite to treat .webp as static assets (already default, but explicit)
  assetsInclude: ['**/*.webp', '**/*.avif'],
})