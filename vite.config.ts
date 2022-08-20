import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build:{ // bundle names without hashing
    rollupOptions:{
      output:{
        assetFileNames:"assets/[name]_historias[extname]",
        entryFileNames:"assets/[name]_historias.js"
      }
    } 
  }
 
})
