import path from 'path'

// Base vite
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Element-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// Rollup plugins
import { visualizer } from 'rollup-plugin-visualizer'
import rollupCommonjs from '@rollup/plugin-commonjs'

// Vite plugins
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Progress from 'vite-plugin-progress'
import removeConsole from 'vite-plugin-remove-console'
import viteCompression from 'vite-plugin-compression'

// App Config
import appConfig from './app_config'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        rollupCommonjs(),
        visualizer()
      ]
    }
  },
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    chunkSplitPlugin({
      strategy: 'default'
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    Progress(),
    removeConsole(),
    viteCompression(),
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: appConfig.server
});
