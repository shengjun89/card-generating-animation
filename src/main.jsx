import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@arco-design/web-react/dist/css/arco.css'
import './styles/index.css'

/**
 * 飞书React组件库主入口文件
 * 初始化React应用并挂载到DOM
 */

// 开发环境下的性能监控
if (import.meta.env.DEV) {
  // 启用React开发者工具
  if (typeof window !== 'undefined') {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || {}
  }
}

// 创建React根节点
const root = ReactDOM.createRoot(document.getElementById('root'))

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// 热模块替换支持
if (import.meta.hot) {
  import.meta.hot.accept('./App.jsx', () => {
    // 当App组件更新时重新渲染
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  })
}

// 性能监控（生产环境）
if (import.meta.env.PROD) {
  // 可以在这里添加性能监控代码
  console.log('飞书React组件库已加载')
}

// 错误边界处理
window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的Promise拒绝:', event.reason)
  // 可以在这里添加错误上报逻辑
})

window.addEventListener('error', (event) => {
  console.error('全局错误:', event.error)
  // 可以在这里添加错误上报逻辑
})