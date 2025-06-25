// 飞书React组件库入口文件
// 导出所有组件供外部使用

// 基础组件
export { default as FeishuInput } from './components/Input'
export { default as FeishuButton } from './components/Button'
export { default as FeishuCard } from './components/Card'

// 工具函数
export * from './utils'

// 样式
import './styles/index.css'

// 版本信息
export const version = '1.0.0'

// 组件库名称
export const name = 'FeishuReactComponents'