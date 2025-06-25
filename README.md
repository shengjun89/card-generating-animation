# 飞书React组件库

> 基于飞书设计规范的高质量React组件库

[![npm version](https://img.shields.io/npm/v/feishu-react-components.svg)](https://www.npmjs.com/package/feishu-react-components)
[![license](https://img.shields.io/npm/l/feishu-react-components.svg)](https://github.com/bytedance/feishu-react-components/blob/main/LICENSE)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Arco Design](https://img.shields.io/badge/Arco%20Design-2.60+-green.svg)](https://arco.design/)

## ✨ 特性

- 🎨 **飞书设计规范** - 严格遵循飞书视觉设计语言
- 🚀 **开箱即用** - 高质量React组件，开箱即用
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎯 **TypeScript** - 完整的TypeScript类型定义
- 🌙 **主题定制** - 支持浅色/深色主题切换
- ♿ **无障碍** - 完整的键盘导航和屏幕阅读器支持
- 🔧 **高度可定制** - 灵活的API设计，支持深度定制

## 📦 安装

```bash
npm install feishu-react-components
# 或
yarn add feishu-react-components
# 或
pnpm add feishu-react-components
```

## 🚀 快速开始

```jsx
import React, { useState } from 'react'
import { AiChatSender } from 'feishu-react-components'

function App() {
  const [message, setMessage] = useState('')

  const handleSend = (text) => {
    console.log('发送消息:', text)
    setMessage('')
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <AiChatSender
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        placeholder="输入您的问题..."
      />
    </div>
  )
}

export default App
```

## 🧩 组件列表

| 组件 | 描述 | 状态 |
|------|------|------|
| **AiChatSender** | AI聊天发送器，支持多行输入、文件上传、模型选择 | ✅ 稳定 |
| **FeishuButton** | 飞书风格按钮组件 | ✅ 稳定 |
| **FeishuCard** | 飞书风格卡片容器 | ✅ 稳定 |
| **FeishuInput** | 飞书风格输入框 | ✅ 稳定 |

## 📖 文档

- 📚 [完整开发者指南](./COMPONENT_GUIDE.md) - 详细的API文档和使用示例
- 🎨 [设计规范](https://universe.bytedance.net/) - 飞书官方设计规范
- 🔧 [Arco Design](https://arco.design/react/docs/start) - 底层UI框架文档

## 🎯 核心组件 - AiChatSender

### 功能特性

- ✅ **智能输入** - 自动高度调整，支持多行文本
- ✅ **工具集成** - 文件上传、深度思考、联网搜索
- ✅ **模型选择** - 支持多种AI模型切换
- ✅ **状态管理** - Loading、禁用、停止生成等状态
- ✅ **快捷键** - Enter发送，Shift+Enter换行
- ✅ **响应式** - 完美适配各种屏幕尺寸

### 基础用法

```jsx
import { AiChatSender } from 'feishu-react-components'

<AiChatSender
  value={message}
  onChange={setMessage}
  onSend={handleSend}
  deepThinkEnabled={true}
  searchEnabled={true}
  selectedModel="deepseek-v3"
  loading={false}
  placeholder="输入您的问题..."
/>
```

## 🎨 主题定制

### CSS变量

```css
:root {
  --feishu-primary-color: #1664ff;
  --feishu-text-primary: #1f2329;
  --feishu-bg-primary: #ffffff;
  --feishu-border-radius: 6px;
}
```

### 深色主题

```css
[data-theme='dark'] {
  --feishu-text-primary: #f7f8fa;
  --feishu-bg-primary: #17171a;
}
```

## 🔧 开发

```bash
# 克隆项目
git clone https://github.com/bytedance/feishu-react-components.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 代码检查
npm run lint
```

## 📋 系统要求

- React >= 16.8.0
- Node.js >= 14.0.0
- 现代浏览器支持 ES2015+

## 🤝 贡献

我们欢迎所有形式的贡献！请阅读 [贡献指南](./CONTRIBUTING.md) 了解详情。

### 贡献者

感谢所有为这个项目做出贡献的开发者！

## 📄 许可证

[MIT](./LICENSE) © ByteDance

## 🔗 相关链接

- [飞书官网](https://www.feishu.cn/)
- [Arco Design](https://arco.design/)
- [React](https://reactjs.org/)
- [问题反馈](https://github.com/bytedance/feishu-react-components/issues)

---

<p align="center">
  Made with ❤️ by ByteDance Team
</p>