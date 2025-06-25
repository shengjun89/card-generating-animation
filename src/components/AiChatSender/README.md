# DAiChatSender 组件使用文档

## 概述

`DAiChatSender` 是一个基于飞书设计规范的 AI 聊天发送器组件，支持多行文本输入、工具按钮组、模型选择等功能。组件采用卡片式设计，提供了丰富的交互功能和良好的用户体验。

## 功能特性

- ✅ **多行文本输入**：支持自动高度调整，最大高度可配置（默认400px）
- ✅ **工具按钮组**：包含文件添加、深度思考、联网搜索等功能按钮
- ✅ **模型选择器**：支持下拉选择不同的 AI 模型
- ✅ **智能发送按钮**：支持 loading、disabled、stop generating 三种状态
- ✅ **键盘快捷键**：支持 Enter 发送，Shift+Enter 换行
- ✅ **响应式设计**：适配移动端和桌面端
- ✅ **无障碍支持**：支持键盘导航和屏幕阅读器
- ✅ **主题支持**：支持浅色/深色主题自动切换

## 安装和导入

```jsx
import DAiChatSender, { SenterIcon } from '../components/DAiChatSender'
```

## 基础用法

```jsx
import React, { useState } from 'react'
import DAiChatSender from '../components/DAiChatSender'

function ChatApp() {
  const [message, setMessage] = useState('')
  const [deepThink, setDeepThink] = useState(false)
  const [search, setSearch] = useState(false)
  const [model, setModel] = useState('deepseek-v3')
  const [loading, setLoading] = useState(false)

  const handleSend = (text) => {
    console.log('发送消息:', text)
    setLoading(true)
    // 模拟发送请求
    setTimeout(() => {
      setLoading(false)
      setMessage('') // 清空输入框
    }, 2000)
  }

  const handleAddFile = (fileList) => {
    console.log('添加文件:', fileList)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <DAiChatSender
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        onAddFile={handleAddFile}
        deepThinkEnabled={deepThink}
        onDeepThinkToggle={() => setDeepThink(!deepThink)}
        searchEnabled={search}
        onSearchToggle={() => setSearch(!search)}
        selectedModel={model}
        onModelChange={setModel}
        loading={loading}
        placeholder="输入您的问题..."
      />
    </div>
  )
}
```

## 高级用法

### 自定义模型选项

```jsx
const customModelOptions = [
  { label: 'DeepSeek V3', value: 'deepseek-v3' },
  { label: 'GPT-4 Turbo', value: 'gpt-4-turbo' },
  { label: 'Claude 3 Opus', value: 'claude-3-opus' },
  { label: 'Gemini Pro', value: 'gemini-pro' },
]

<DAiChatSender
  modelOptions={customModelOptions}
  selectedModel="gpt-4-turbo"
  onModelChange={handleModelChange}
  // ... 其他属性
/>
```

### 停止生成功能

```jsx
function ChatWithStop() {
  const [generating, setGenerating] = useState(false)

  const handleSend = (text) => {
    setGenerating(true)
    // 开始生成
  }

  const handleStop = () => {
    setGenerating(false)
    // 停止生成逻辑
  }

  return (
    <DAiChatSender
      loading={generating}
      stopGenerating={generating}
      onSend={handleSend}
      onStop={handleStop}
      // ... 其他属性
    />
  )
}
```

### 自定义样式

```jsx
<DAiChatSender
  className="custom-chat-sender"
  style={{
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }}
  maxHeight={300}
  // ... 其他属性
/>
```

## API 参考

### DAiChatSender Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `value` | `string` | `''` | 输入框的值 |
| `onChange` | `(value: string) => void` | - | 值变化时的回调函数 |
| `onSend` | `(text: string) => void` | - | 发送消息的回调函数 |
| `onAddFile` | `(fileList: FileList) => void` | - | 添加文件的回调函数 |
| `deepThinkEnabled` | `boolean` | `false` | 深度思考是否启用 |
| `onDeepThinkToggle` | `() => void` | - | 深度思考切换回调 |
| `searchEnabled` | `boolean` | `false` | 联网搜索是否启用 |
| `onSearchToggle` | `() => void` | - | 联网搜索切换回调 |
| `selectedModel` | `string` | `'DeepSeek V3'` | 当前选中的模型 |
| `onModelChange` | `(model: string) => void` | - | 模型变化回调 |
| `modelOptions` | `Array<{label: string, value: string}>` | 默认模型列表 | 模型选项列表 |
| `loading` | `boolean` | `false` | 是否处于加载状态 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `stopGenerating` | `boolean` | `false` | 是否显示停止生成按钮 |
| `onStop` | `() => void` | - | 停止生成回调 |
| `placeholder` | `string` | `'输入消息...'` | 输入框占位符 |
| `maxHeight` | `number` | `400` | 最大高度（px） |
| `className` | `string` | - | 自定义样式类名 |
| `style` | `object` | - | 自定义样式 |

### SenterIcon Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `loading` | `boolean` | `false` | 是否显示加载状态 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `stopGenerating` | `boolean` | `false` | 是否显示停止生成状态 |
| `onClick` | `() => void` | - | 点击事件回调 |
| `className` | `string` | - | 自定义样式类名 |

## 事件处理

### 键盘事件

- **Enter**：发送消息（当输入框有内容且未禁用时）
- **Shift + Enter**：换行
- **Tab**：在工具按钮间导航

### 文件上传

组件支持通过点击添加按钮上传文件，支持多文件选择：

```jsx
const handleAddFile = (fileList) => {
  Array.from(fileList).forEach(file => {
    console.log('文件名:', file.name)
    console.log('文件大小:', file.size)
    console.log('文件类型:', file.type)
  })
}
```

## 样式定制

### CSS 变量

组件使用 CSS 变量定义颜色和尺寸，可以通过覆盖这些变量来自定义样式：

```css
.custom-chat-sender {
  --feishu-primary: #your-primary-color;
  --feishu-border-2: #your-border-color;
  --feishu-bg-1: #your-background-color;
}
```

### 主要 CSS 类名

- `.dai-chat-sender` - 主容器
- `.dai-chat-sender__content` - 内容区域
- `.dai-chat-sender__input-content` - 输入区域
- `.dai-chat-sender__textarea` - 文本输入框
- `.dai-chat-sender__toolbar` - 工具栏
- `.dai-chat-sender__left-tools` - 左侧工具按钮组
- `.dai-chat-sender__right-controls` - 右侧控制区
- `.dai-chat-sender__tool-btn` - 工具按钮
- `.dai-chat-sender__send-btn` - 发送按钮

## 无障碍支持

组件遵循 WCAG 2.1 无障碍标准：

- 支持键盘导航
- 提供适当的 ARIA 标签
- 支持屏幕阅读器
- 高对比度模式支持
- 焦点管理

## 浏览器兼容性

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## 注意事项

1. **性能优化**：对于大量文本输入，建议使用防抖处理 `onChange` 事件
2. **文件上传**：组件本身不处理文件上传逻辑，需要在 `onAddFile` 回调中实现
3. **模型选择**：模型选择器的选项需要通过 `modelOptions` 属性传入
4. **高度限制**：组件会自动调整高度，但不会超过 `maxHeight` 设置的值
5. **状态管理**：建议使用状态管理库（如 Redux、Zustand）来管理复杂的聊天状态

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基础的文本输入和发送功能
- 集成工具按钮组和模型选择器
- 实现响应式设计和无障碍支持