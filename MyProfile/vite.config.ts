import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
    
  },
  css: {
    preprocessorOptions: {
      scss: {
        //全ての SCSS ファイルに自動で _variables.scss を読み込む設定です。
        //additionalData: `@import "src/styles/_variables.scss";`
      }
    }
  }
})
