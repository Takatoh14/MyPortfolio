import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // ← 本番公開での相対パス指定
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "src/styles/_variables.scss";`
      }
    }
  }
})
