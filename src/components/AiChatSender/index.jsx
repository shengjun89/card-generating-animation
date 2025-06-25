import React, { useState, useRef, useCallback, forwardRef } from 'react'
import { Input, Select, Upload } from '@arco-design/web-react'
import { IconPlus, IconSearch, IconSend, IconStop, IconLoading, IconBulb, IconUp, IconArrowUp } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import FeishuButton from '../Button'
import FeishuCard from '../Card'
import './index.css'

// 深度思考图标组件 - 使用 Arco Design 的灯泡图标
const IconAiDeepthinkOutlined = () => {
  return <IconBulb />;
}

/**
 * 发送按钮组件
 * 支持 loading、disabled、stop generating 三种状态
 */
const SenterIcon = forwardRef(({
  loading = false,
  disabled = false,
  stopGenerating = false,
  onClick,
  className,
  ...restProps
}, ref) => {
  const getIcon = () => {
    if (loading) return <IconLoading spin />
    if (stopGenerating) return (
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 0C26.3888 0 34 7.61116 34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0ZM14 12C12.8954 12 12 12.8954 12 14V20C12 21.1046 12.8954 22 14 22H20C21.1046 22 22 21.1046 22 20V14C22 12.8954 21.1046 12 20 12H14Z" fill="#1F2329"/>
      </svg>
    )
    // 使用向上箭头图标
    return <IconArrowUp />
  }

  const getType = () => {
    if (disabled) return 'secondary'
    if (stopGenerating) return 'outline'
    return 'primary'
  }

  return (
    <FeishuButton
      ref={ref}
      className={classNames('dai-chat-sender__send-btn', className)}
      type={getType()}
      shape="circle"
      size="default"
      icon={getIcon()}
      disabled={disabled && !stopGenerating}
      loading={loading}
      onClick={onClick}
      {...restProps}
    />
  )
})

SenterIcon.displayName = 'SenterIcon'
SenterIcon.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  stopGenerating: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

/**
 * AiChatSender - 飞书风格的AI聊天发送器组件
 * 基于Arco Design封装，支持多行输入、文件上传、深度思考、联网搜索等功能
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.value - 输入框的值
 * @param {Function} props.onChange - 值变化时的回调函数
 * @param {Function} props.onSend - 发送消息的回调函数
 * @param {Function} props.onAddFile - 添加文件的回调函数
 * @param {boolean} props.deepThinkEnabled - 深度思考是否启用
 * @param {Function} props.onDeepThinkToggle - 深度思考切换回调
 * @param {boolean} props.searchEnabled - 联网搜索是否启用
 * @param {Function} props.onSearchToggle - 联网搜索切换回调
 * @param {string} props.selectedModel - 当前选中的模型
 * @param {Function} props.onModelChange - 模型变化回调
 * @param {Array} props.modelOptions - 模型选项列表
 * @param {boolean} props.loading - 是否处于加载状态
 * @param {boolean} props.disabled - 是否禁用
 * @param {boolean} props.stopGenerating - 是否显示停止生成按钮
 * @param {Function} props.onStop - 停止生成回调
 * @param {string} props.placeholder - 输入框占位符
 * @param {number} props.maxHeight - 最大高度（默认400px）
 * @param {string} props.className - 自定义样式类名
 * @param {Object} props.style - 自定义样式
 */
const AiChatSender = forwardRef(({
  value = '',
  onChange,
  onSend,
  onAddFile,
  deepThinkEnabled = false,
  onDeepThinkToggle,
  searchEnabled = false,
  onSearchToggle,
  selectedModel = 'DeepSeek V3',
  onModelChange,
  modelOptions = [
    { label: 'DeepSeek V3', value: 'deepseek-v3' },
    { label: 'GPT-4', value: 'gpt-4' },
    { label: 'Claude 3', value: 'claude-3' },
  ],
  loading = false,
  disabled = false,
  stopGenerating = false,
  onStop,
  placeholder = '输入消息...',
  maxHeight = 300,
  className,
  style,
  ...restProps
}, ref) => {
  const textareaRef = useRef(null)
  const [textareaHeight, setTextareaHeight] = useState('auto')

  // 处理输入变化
  const handleInputChange = useCallback((inputValue) => {
    onChange?.(inputValue)
    
    // 自动调整高度
    if (textareaRef.current) {
      const textarea = textareaRef.current.dom || textareaRef.current
      textarea.style.height = 'auto'
      const scrollHeight = textarea.scrollHeight
      const newHeight = Math.min(scrollHeight, maxHeight)
      textarea.style.height = `${newHeight}px`
      setTextareaHeight(newHeight)
    }
  }, [onChange, maxHeight])

  // 处理发送
  const handleSend = useCallback(() => {
    if (value.trim() && !disabled && !loading) {
      onSend?.(value)
    }
  }, [value, disabled, loading, onSend])

  // 处理回车发送
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }, [handleSend])

  // 处理文件上传
  const handleFileUpload = useCallback((fileList) => {
    onAddFile?.(fileList)
  }, [onAddFile])

  // 组合样式类名
  const containerClassName = classNames(
    'dai-chat-sender',
    {
      'dai-chat-sender--disabled': disabled,
      'dai-chat-sender--loading': loading,
    },
    className
  )

  return (
    <FeishuCard
      ref={ref}
      className={containerClassName}
      style={{
        ...style,
        maxHeight: `${maxHeight + 80}px`, // 为工具栏预留空间
      }}
      bordered
      {...restProps}
    >
      <div className="dai-chat-sender__content">
        {/* 输入内容区域 */}
        <div className="dai-chat-sender__input-content">
          <div className="dai-chat-sender__input-area">
            <Input.TextArea
              ref={textareaRef}
              className="dai-chat-sender__textarea"
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              autoSize={{
                minRows: 1,
                maxRows: Math.floor(maxHeight / 24), // 假设每行24px
              }}
              style={{
                resize: 'none',
                border: 'none',
                boxShadow: 'none',
                background: 'transparent',
              }}
            />
          </div>
        </div>

        {/* 工具栏 */}
        <div className="dai-chat-sender__toolbar">
          {/* 左侧工具按钮组 */}
          <div className="dai-chat-sender__left-tools">
            {/* 添加按钮 */}
            <Upload
              multiple
              showUploadList={false}
              onChange={handleFileUpload}
              disabled={disabled}
            >
              <FeishuButton
                className="dai-chat-sender__tool-btn"
                type="text"
                size="default"
                icon={<IconPlus />}
                disabled={disabled}
                title="添加文件"
              />
            </Upload>

            {/* 深度思考按钮 - 优化后的DOM结构 */}
            <button
              className={classNames(
                'dai-chat-sender__tool-btn',
                'dai-chat-sender__tool-btn--toggle',
                {
                  'dai-chat-sender__tool-btn--active': deepThinkEnabled,
                }
              )}
              onClick={onDeepThinkToggle}
              disabled={disabled}
              title="深度思考"
              type="button"
            >
              {/* 边框层 */}
              <div className="dai-chat-sender__tool-btn-border" />
              
              {/* 内容容器 */}
              <div className="dai-chat-sender__tool-btn-content">
                <div className="dai-chat-sender__tool-btn-inner">
                  {/* 左侧图标容器 */}
                  <div className="dai-chat-sender__tool-btn-icon">
                    <div className="dai-chat-sender__tool-btn-icon-wrapper">
                      <IconBulb />
                    </div>
                  </div>
                  
                  {/* 文字标签 */}
                  <div className="dai-chat-sender__tool-btn-text">
                    深度思考
                  </div>
                </div>
              </div>
            </button>

            {/* 联网搜索按钮 - 与深度思考按钮保持一致的结构 */}
            <button
              className={classNames(
                'dai-chat-sender__tool-btn',
                'dai-chat-sender__tool-btn--toggle',
                {
                  'dai-chat-sender__tool-btn--active': searchEnabled,
                }
              )}
              onClick={onSearchToggle}
              disabled={disabled}
              title="联网搜索"
              type="button"
            >
              {/* 边框层 */}
              <div className="dai-chat-sender__tool-btn-border" />
              
              {/* 内容容器 */}
              <div className="dai-chat-sender__tool-btn-content">
                <div className="dai-chat-sender__tool-btn-inner">
                  {/* 左侧图标容器 */}
                  <div className="dai-chat-sender__tool-btn-icon">
                    <div className="dai-chat-sender__tool-btn-icon-wrapper">
                      <IconSearch />
                    </div>
                  </div>
                  
                  {/* 文字标签 */}
                  <div className="dai-chat-sender__tool-btn-text">
                    联网搜索
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* 右侧控制区 */}
          <div className="dai-chat-sender__right-controls">
            {/* 模型选择器 */}
            <Select
              className="dai-chat-sender__model-selector"
              value={selectedModel}
              onChange={onModelChange}
              options={modelOptions}
              size="default"
              disabled={disabled}
              style={{ minWidth: 120 }}
            />

            {/* 发送按钮 */}
            <SenterIcon
              loading={loading}
              disabled={disabled || !value.trim()}
              stopGenerating={stopGenerating}
              onClick={stopGenerating ? onStop : handleSend}
            />
          </div>
        </div>
      </div>
    </FeishuCard>
  )
})

// 设置组件显示名称
AiChatSender.displayName = 'AiChatSender'

// 属性类型检查
AiChatSender.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSend: PropTypes.func,
  onAddFile: PropTypes.func,
  deepThinkEnabled: PropTypes.bool,
  onDeepThinkToggle: PropTypes.func,
  searchEnabled: PropTypes.bool,
  onSearchToggle: PropTypes.func,
  selectedModel: PropTypes.string,
  onModelChange: PropTypes.func,
  modelOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  stopGenerating: PropTypes.bool,
  onStop: PropTypes.func,
  placeholder: PropTypes.string,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default AiChatSender
export { SenterIcon }