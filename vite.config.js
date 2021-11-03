import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess(),
    // dev: !production,
    css: css => {
      css.write('public/bundle.css')
    },
  })],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
})
