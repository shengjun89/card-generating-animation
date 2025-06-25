# 飞书React组件库 - 开发者调用指南

## 📋 项目概述

**feishu-react-components** 是一个基于飞书设计规范的React组件库，采用Arco Design作为底层UI框架，提供了一套符合飞书视觉风格的高质量组件。

### 🏗️ 架构设计

```
飞书组件库架构
├── 基础层 (Arco Design)
│   ├── 基础UI组件
│   ├── 设计令牌
│   └── 主题系统
├── 封装层 (Feishu Components)
│   ├── 样式定制
│   ├── 行为增强
│   └── API统一
└── 业务层 (Application Components)
    ├── AiChatSender (复合组件)
    ├── 业务逻辑集成
    └── 用户体验优化
```

## 🚀 快速开始

### 安装依赖

```bash
npm install react react-dom @arco-design/web-react classnames prop-types
```

### 基础导入

```jsx
// 导入组件
import AiChatSender from './components/AiChatSender'
import FeishuButton from './components/Button'
import FeishuCard from './components/Card'
import FeishuInput from './components/Input'

// 导入样式 (如果需要)
import './components/AiChatSender/index.css'
```

## 📦 组件清单

### 1. AiChatSender - AI聊天发送器

**组件类型**: 复合业务组件  
**复杂度**: ⭐⭐⭐⭐⭐  
**依赖**: FeishuButton, FeishuCard, Arco Input/Select/Upload

#### 功能特性
- ✅ 多行文本输入，自动高度调整
- ✅ 工具按钮组（文件上传、深度思考、联网搜索）
- ✅ 模型选择器
- ✅ 智能发送按钮（支持loading/disabled/stop状态）
- ✅ 键盘快捷键（Enter发送，Shift+Enter换行）
- ✅ 响应式设计
- ✅ 无障碍支持

#### API接口

```typescript
interface AiChatSenderProps {
  // 基础属性
  value?: string                    // 输入框的值
  onChange?: (value: string) => void // 值变化回调
  onSend?: (text: string) => void   // 发送消息回调
  placeholder?: string              // 占位符文本
  maxHeight?: number               // 最大高度(默认300px)
  
  // 功能开关
  deepThinkEnabled?: boolean        // 深度思考是否启用
  onDeepThinkToggle?: () => void   // 深度思考切换回调
  searchEnabled?: boolean          // 联网搜索是否启用
  onSearchToggle?: () => void      // 联网搜索切换回调
  
  // 文件上传
  onAddFile?: (fileList: FileList) => void // 文件上传回调
  
  // 模型选择
  selectedModel?: string           // 当前选中的模型
  onModelChange?: (model: string) => void // 模型变化回调
  modelOptions?: Array<{           // 模型选项列表
    label: string
    value: string
  }>
  
  // 状态控制
  loading?: boolean                // 是否处于加载状态
  disabled?: boolean               // 是否禁用
  stopGenerating?: boolean         // 是否显示停止生成按钮
  onStop?: () => void             // 停止生成回调
  
  // 样式定制
  className?: string               // 自定义样式类名
  style?: React.CSSProperties      // 自定义样式
}
```

#### 使用示例

```jsx
import React, { useState } from 'react'
import AiChatSender from './components/AiChatSender'

function ChatApp() {
  const [message, setMessage] = useState('')
  const [deepThink, setDeepThink] = useState(false)
  const [search, setSearch] = useState(false)
  const [model, setModel] = useState('deepseek-v3')
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)

  const handleSend = (text) => {
    console.log('发送消息:', text)
    setLoading(true)
    setGenerating(true)
    
    // 模拟API调用
    setTimeout(() => {
      setLoading(false)
      setGenerating(false)
      setMessage('') // 清空输入框
    }, 3000)
  }

  const handleStop = () => {
    setGenerating(false)
    setLoading(false)
  }

  const handleAddFile = (fileList) => {
    console.log('添加文件:', Array.from(fileList))
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <AiChatSender
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
        stopGenerating={generating}
        onStop={handleStop}
        placeholder="输入您的问题..."
        maxHeight={400}
      />
    </div>
  )
}
```

### 2. FeishuButton - 飞书风格按钮

**组件类型**: 基础UI组件  
**复杂度**: ⭐⭐  
**依赖**: Arco Button

#### API接口

```typescript
interface FeishuButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'dashed' | 'text'
  size?: 'mini' | 'small' | 'default' | 'large'
  status?: 'warning' | 'danger' | 'success'
  disabled?: boolean
  loading?: boolean
  shape?: 'square' | 'round' | 'circle'
  long?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
  onClick?: (event: MouseEvent) => void
  className?: string
  style?: React.CSSProperties
}
```

#### 使用示例

```jsx
import FeishuButton from './components/Button'
import { IconSend } from '@arco-design/web-react/icon'

// 基础按钮
<FeishuButton type="primary">主要按钮</FeishuButton>

// 图标按钮
<FeishuButton 
  type="primary" 
  icon={<IconSend />}
  shape="circle"
/>

// 加载状态
<FeishuButton loading>加载中...</FeishuButton>
```

### 3. FeishuCard - 飞书风格卡片

**组件类型**: 容器组件  
**复杂度**: ⭐⭐  
**依赖**: Arco Card

#### API接口

```typescript
interface FeishuCardProps {
  title?: string
  extra?: React.ReactNode
  bordered?: boolean
  hoverable?: boolean
  loading?: boolean
  size?: 'default' | 'small'
  cover?: React.ReactNode
  actions?: React.ReactNode[]
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
```

#### 使用示例

```jsx
import FeishuCard from './components/Card'

<FeishuCard 
  title="卡片标题"
  extra={<a href="#">更多</a>}
  bordered
  hoverable
>
  <p>卡片内容</p>
</FeishuCard>
```

### 4. FeishuInput - 飞书风格输入框

**组件类型**: 表单组件  
**复杂度**: ⭐⭐  
**依赖**: Arco Input

#### API接口

```typescript
interface FeishuInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onPressEnter?: () => void
  size?: 'small' | 'default' | 'large'
  status?: 'error' | 'warning'
  disabled?: boolean
  allowClear?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  maxLength?: number
  showWordLimit?: boolean
  className?: string
  style?: React.CSSProperties
}
```

#### 使用示例

```jsx
import FeishuInput from './components/Input'
import { IconSearch } from '@arco-design/web-react/icon'

// 基础输入框
<FeishuInput 
  placeholder="请输入内容"
  value={value}
  onChange={setValue}
/>

// 带图标的输入框
<FeishuInput 
  prefix={<IconSearch />}
  placeholder="搜索..."
  allowClear
/>
```

## 🎨 样式定制

### CSS变量系统

组件库使用CSS变量进行主题定制，支持动态切换：

```css
:root {
  /* 主色调 */
  --feishu-primary-color: #1664ff;
  --feishu-primary-hover: #4080ff;
  --feishu-primary-active: #0e4ba8;
  
  /* 中性色 */
  --feishu-text-primary: #1f2329;
  --feishu-text-secondary: #4e5969;
  --feishu-text-disabled: #c9cdd4;
  
  /* 背景色 */
  --feishu-bg-primary: #ffffff;
  --feishu-bg-secondary: #f7f8fa;
  --feishu-bg-tertiary: #f2f3f5;
  
  /* 边框 */
  --feishu-border-color: #e5e6eb;
  --feishu-border-radius: 6px;
  
  /* 阴影 */
  --feishu-shadow-light: 0 1px 2px rgba(31, 35, 41, 0.08);
  --feishu-shadow-medium: 0 3px 6px rgba(31, 35, 41, 0.12);
}
```

### 深色主题

```css
[data-theme='dark'] {
  --feishu-text-primary: #f7f8fa;
  --feishu-text-secondary: #c9cdd4;
  --feishu-bg-primary: #17171a;
  --feishu-bg-secondary: #232324;
  --feishu-border-color: #2e2e30;
}
```

## 🔧 高级配置

### 响应式断点

```css
/* 移动端 */
@media (max-width: 768px) {
  .dai-chat-sender {
    /* 移动端样式调整 */
  }
}

/* 平板端 */
@media (min-width: 769px) and (max-width: 1024px) {
  /* 平板端样式 */
}

/* 桌面端 */
@media (min-width: 1025px) {
  /* 桌面端样式 */
}
```

### 无障碍支持

组件库内置了完整的无障碍支持：

- ✅ 键盘导航
- ✅ 屏幕阅读器支持
- ✅ ARIA标签
- ✅ 焦点管理
- ✅ 高对比度模式

## 🧪 测试指南

### 单元测试示例

```jsx
import { render, fireEvent, screen } from '@testing-library/react'
import AiChatSender from '../components/AiChatSender'

test('should send message when click send button', () => {
  const mockSend = jest.fn()
  
  render(
    <AiChatSender 
      value="test message"
      onSend={mockSend}
    />
  )
  
  const sendButton = screen.getByRole('button', { name: /发送/i })
  fireEvent.click(sendButton)
  
  expect(mockSend).toHaveBeenCalledWith('test message')
})
```

## 📈 性能优化

### 代码分割

```jsx
// 按需导入
import { lazy, Suspense } from 'react'

const AiChatSender = lazy(() => import('./components/AiChatSender'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AiChatSender />
    </Suspense>
  )
}
```

### 内存优化

- 使用 `React.memo` 避免不必要的重渲染
- 使用 `useCallback` 和 `useMemo` 优化回调函数
- 合理使用 `ref` 避免DOM查询

## 🐛 常见问题

### Q: 组件样式不生效？
A: 确保正确导入了CSS文件，并检查CSS优先级。

### Q: 如何自定义主题？
A: 通过覆盖CSS变量或使用Arco Design的主题定制功能。

### Q: 组件在移动端显示异常？
A: 检查viewport设置和响应式样式是否正确。

## 📚 更多资源

- [Arco Design 官方文档](https://arco.design/react/docs/start)
- [飞书设计规范](https://feishu.cn/design)
- [React 官方文档](https://react.dev)

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

**版本**: v1.0.0  
**最后更新**: 2024年12月  
**维护者**: ByteDance Developer Team