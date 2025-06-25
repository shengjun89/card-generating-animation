import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 飞书主题色配置
          '@primary-color': '#1664ff',
          '@success-color': '#00b42a',
          '@warning-color': '#ff7d00',
          '@error-color': '#f53f3f',
          '@font-size-base': '14px',
          '@border-radius-base': '6px'
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'FeishuReactComponents',
      fileName: (format) => `feishu-react-components.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})