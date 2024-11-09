/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  build: {
    emptyOutDir: false,
    outDir: 'rainbow-json-chrome',
    sourcemap: true,
    minify: false,
    rollupOptions: {
      input: resolve(__dirname, './src/background-script.ts'),

      output: {
        inlineDynamicImports: true,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
})
