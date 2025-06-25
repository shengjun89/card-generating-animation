/**
 * 组件库使用示例
 * 展示如何导入和使用 feishu-react-components 中的各个组件
 */

import React, { useState } from 'react'
import { 
  AiChatSender, 
  FeishuButton, 
  FeishuCard, 
  FeishuInput 
} from '../components'

const ComponentUsageExample = () => {
  const [inputValue, setInputValue] = useState('')
  const [chatValue, setChatValue] = useState('')
  const [loading, setLoading] = useState(false)

  // 模拟发送消息
  const handleSend = (message) => {
    console.log('发送消息:', message)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  // 模拟停止生成
  const handleStop = () => {
    console.log('停止生成')
    setLoading(false)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Feishu React Components 使用示例</h1>
      
      {/* FeishuCard 示例 */}
      <FeishuCard 
        title="组件展示卡片"
        extra={<FeishuButton size="small">操作</FeishuButton>}
        style={{ marginBottom: '20px' }}
      >
        <p>这是一个飞书风格的卡片组件，用于展示内容和操作。</p>
      </FeishuCard>

      {/* FeishuInput 示例 */}
      <FeishuCard title="输入框组件" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>普通输入框：</label>
          <FeishuInput
            placeholder="请输入内容"
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            allowClear
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>大尺寸输入框：</label>
          <FeishuInput
            size="large"
            placeholder="大尺寸输入框"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px' }}>禁用状态：</label>
          <FeishuInput
            placeholder="禁用状态"
            disabled
            value="不可编辑的内容"
          />
        </div>
      </FeishuCard>

      {/* FeishuButton 示例 */}
      <FeishuCard title="按钮组件" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <FeishuButton type="primary">主要按钮</FeishuButton>
          <FeishuButton type="secondary">次要按钮</FeishuButton>
          <FeishuButton type="outline">边框按钮</FeishuButton>
          <FeishuButton type="text">文本按钮</FeishuButton>
          <FeishuButton type="primary" loading>加载中</FeishuButton>
          <FeishuButton disabled>禁用按钮</FeishuButton>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          <FeishuButton size="small">小按钮</FeishuButton>
          <FeishuButton size="default">默认按钮</FeishuButton>
          <FeishuButton size="large">大按钮</FeishuButton>
        </div>
      </FeishuCard>

      {/* AiChatSender 示例 */}
      <FeishuCard title="AI 聊天发送器" style={{ marginBottom: '20px' }}>
        <AiChatSender
          value={chatValue}
          onChange={setChatValue}
          onSend={handleSend}
          onStop={handleStop}
          loading={loading}
          placeholder="输入您的问题，支持多行文本..."
          searchEnabled={true}
          onSearchToggle={(enabled) => console.log('搜索开关:', enabled)}
          selectedModel="gpt-4"
          modelOptions={[
            { label: 'GPT-4', value: 'gpt-4' },
            { label: 'GPT-3.5', value: 'gpt-3.5' },
            { label: 'Claude', value: 'claude' }
          ]}
          onModelChange={(model) => console.log('切换模型:', model)}
          maxHeight={200}
        />
      </FeishuCard>

      {/* 使用说明 */}
      <FeishuCard title="使用说明">
        <div style={{ lineHeight: '1.6' }}>
          <h3>导入方式</h3>
          <pre style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
{`// 按需导入
import { AiChatSender, FeishuButton } from 'feishu-react-components'

// 全量导入
import * as FeishuComponents from 'feishu-react-components'
const { AiChatSender, FeishuButton } = FeishuComponents`}
          </pre>
          
          <h3>组件特性</h3>
          <ul>
            <li><strong>AiChatSender</strong>: 智能聊天输入组件，支持多行输入、工具按钮、模型选择等</li>
            <li><strong>FeishuButton</strong>: 飞书风格按钮，支持多种类型、尺寸和状态</li>
            <li><strong>FeishuCard</strong>: 飞书风格卡片，用于内容展示和布局</li>
            <li><strong>FeishuInput</strong>: 飞书风格输入框，支持多种尺寸和状态</li>
          </ul>
        </div>
      </FeishuCard>
    </div>
  )
}

export default ComponentUsageExample