import React, { useState } from 'react'
import AiChatSender from '../components/AiChatSender'
import './AiChatSenderExample.css'

/**
 * AiChatSender 组件使用示例
 */
function AiChatSenderExample() {
  const [message, setMessage] = useState('')
  const [deepThinkEnabled, setDeepThinkEnabled] = useState(false)
  const [searchEnabled, setSearchEnabled] = useState(false)
  const [selectedModel, setSelectedModel] = useState('deepseek-v3')
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [chatHistory, setChatHistory] = useState([])

  // 模型选项
  const modelOptions = [
    { label: 'DeepSeek V3', value: 'deepseek-v3' },
    { label: 'GPT-4 Turbo', value: 'gpt-4-turbo' },
    { label: 'Claude 3 Opus', value: 'claude-3-opus' },
    { label: 'Gemini Pro', value: 'gemini-pro' },
    { label: 'Llama 3', value: 'llama-3' },
  ]

  // 处理发送消息
  const handleSend = (text) => {
    if (!text.trim()) return

    // 添加用户消息到历史记录
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: text,
      timestamp: new Date(),
      model: selectedModel,
      deepThink: deepThinkEnabled,
      search: searchEnabled,
    }

    setChatHistory(prev => [...prev, userMessage])
    setMessage('') // 清空输入框
    setLoading(true)
    setGenerating(true)

    // 模拟 AI 响应
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'かしこまりました！',
        timestamp: new Date(),
        model: selectedModel,
      }

      setChatHistory(prev => [...prev, aiMessage])
      setLoading(false)
      setGenerating(false)
    }, 2000 + Math.random() * 3000) // 随机延迟 2-5 秒
  }

  // 处理停止生成
  const handleStop = () => {
    setLoading(false)
    setGenerating(false)
    console.log('停止生成')
  }

  // 处理文件添加
  const handleAddFile = (fileList) => {
    console.log('添加文件:', Array.from(fileList).map(f => f.name))
    // 这里可以实现文件上传逻辑
  }

  // 处理深度思考切换
  const handleDeepThinkToggle = () => {
    setDeepThinkEnabled(!deepThinkEnabled)
    console.log('深度思考:', !deepThinkEnabled)
  }

  // 处理搜索切换
  const handleSearchToggle = () => {
    setSearchEnabled(!searchEnabled)
    console.log('联网搜索:', !searchEnabled)
  }

  // 处理模型变化
  const handleModelChange = (model) => {
    setSelectedModel(model)
    console.log('切换模型:', model)
  }

  // 清空聊天记录
  const clearHistory = () => {
    setChatHistory([])
  }

  return (
    <div className="chat-example">
      <div className="chat-example__container">
        {/* 聊天历史区域 */}
        <div className="chat-history">
          {chatHistory.length === 0 ? (
            <div className="chat-history__empty">
              <h1>你想开发什么样的飞书应用？</h1>
              <div className="chat-history__tips">
                {/* <h3>功能说明：</h3> */}
                <ul>
                  <li>📝 支持多行文本输入，Enter 发送，Shift+Enter 换行</li>
                  <li>📎 点击添加按钮可以上传文件</li>
                  <li>🧠 深度思考模式：启用更深入的分析</li>
                  <li>🔍 联网搜索：获取实时信息</li>
                  <li>🤖 模型选择：切换不同的 AI 模型</li>
                  <li>⏹️ 生成过程中可以点击停止按钮</li>
                </ul>
              </div>
            </div>
          ) : (
            chatHistory.map((msg) => (
              <div key={msg.id} className={`message-wrapper message-wrapper--${msg.type}`}>
                <div className="message__header">
                  <span className="message__sender">
                    {msg.type === 'user' ? '👤 您' : '🤖 AI'}
                  </span>
                  <span className="message__time">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className={`message message--${msg.type}`}>
                  <div className="message__content">
                    {msg.content.split('\n').map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                  {msg.type === 'user' && (msg.deepThink || msg.search) && (
                    <div className="message__features">
                      {msg.deepThink && <span className="feature-tag">🧠 深度思考</span>}
                      {msg.search && <span className="feature-tag">🔍 联网搜索</span>}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          
          {/* 加载状态 */}
          {loading && (
            <div className="message-wrapper message-wrapper--ai">
              <div className="message__header">
                <span className="message__sender">🤖 AI</span>
                <span className="message__time">正在思考...</span>
              </div>
              <div className="message message--ai message--loading">
                <div className="message__content">
                  <div className="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 输入区域 */}
        <div className="chat-input">
          <AiChatSender
            value={message}
            onChange={setMessage}
            onSend={handleSend}
            onAddFile={handleAddFile}
            deepThinkEnabled={deepThinkEnabled}
            onDeepThinkToggle={handleDeepThinkToggle}
            searchEnabled={searchEnabled}
            onSearchToggle={handleSearchToggle}
            selectedModel={selectedModel}
            onModelChange={handleModelChange}
            modelOptions={modelOptions}
            loading={loading}
            stopGenerating={generating}
            onStop={handleStop}
            placeholder="输入您的问题...（Enter 发送，Shift+Enter 换行）"
            maxHeight={300}
          />
        </div>
      </div>

      {/* 状态信息 */}
      <div className="chat-example__status">
        <div className="status-item">
          <strong>当前模型：</strong>
          {modelOptions.find(m => m.value === selectedModel)?.label}
        </div>
        <div className="status-item">
          <strong>深度思考：</strong>
          <span className={deepThinkEnabled ? 'status--enabled' : 'status--disabled'}>
            {deepThinkEnabled ? '已启用' : '已禁用'}
          </span>
        </div>
        <div className="status-item">
          <strong>联网搜索：</strong>
          <span className={searchEnabled ? 'status--enabled' : 'status--disabled'}>
            {searchEnabled ? '已启用' : '已禁用'}
          </span>
        </div>
        <div className="status-item">
          <strong>消息数量：</strong>
          {chatHistory.length}
        </div>
        <div className="status-item">
          <button 
            className="clear-btn" 
            onClick={clearHistory}
            disabled={chatHistory.length === 0}
          >
            清空记录
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiChatSenderExample