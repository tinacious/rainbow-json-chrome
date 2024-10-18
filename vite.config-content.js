/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  build: {
    emptyOutDir: false,
    outDir: 'rainbow-json-chrome',
    sourcemap: 'inline',

    rollupOptions: {
      input: resolve(__dirname, './src/content-script.ts'),

      output: {
        inlineDynamicImports: true,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  }
})
