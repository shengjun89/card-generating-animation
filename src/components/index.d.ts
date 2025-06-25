/**
 * Feishu React Components Library Type Definitions
 * 飞书 React 组件库类型定义文件
 */

import { ReactNode, CSSProperties } from 'react'

// 通用类型定义
export type Size = 'mini' | 'small' | 'default' | 'large'
export type ButtonType = 'primary' | 'secondary' | 'outline' | 'dashed' | 'text'
export type ButtonStatus = 'warning' | 'danger' | 'success'
export type ButtonShape = 'square' | 'round' | 'circle'
export type InputStatus = 'error' | 'warning'
export type CardSize = 'default' | 'small'

// AiChatSender 组件类型
export interface ModelOption {
  label: string
  value: string
}

export interface AiChatSenderProps {
  /** 输入框的值 */
  value?: string
  /** 值变化时的回调函数 */
  onChange?: (value: string) => void
  /** 发送消息时的回调函数 */
  onSend?: (message: string) => void
  /** 停止生成时的回调函数 */
  onStop?: () => void
  /** 是否显示加载状态 */
  loading?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否正在生成（显示停止按钮） */
  stopGenerating?: boolean
  /** 占位符文本 */
  placeholder?: string
  /** 输入框最大高度 */
  maxHeight?: number
  /** 是否启用搜索功能 */
  searchEnabled?: boolean
  /** 搜索开关切换回调 */
  onSearchToggle?: (enabled: boolean) => void
  /** 当前选中的模型 */
  selectedModel?: string
  /** 模型选项列表 */
  modelOptions?: ModelOption[]
  /** 模型切换回调 */
  onModelChange?: (model: string) => void
  /** 文件上传回调 */
  onFileUpload?: (file: File) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

// FeishuButton 组件类型
export interface FeishuButtonProps {
  /** 按钮类型 */
  type?: ButtonType
  /** 按钮大小 */
  size?: Size
  /** 按钮状态 */
  status?: ButtonStatus
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示加载状态 */
  loading?: boolean
  /** 按钮形状 */
  shape?: ButtonShape
  /** 是否为长按钮 */
  long?: boolean
  /** 按钮图标 */
  icon?: ReactNode
  /** 点击事件回调 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 按钮内容 */
  children?: ReactNode
}

// FeishuCard 组件类型
export interface FeishuCardProps {
  /** 卡片标题 */
  title?: ReactNode
  /** 卡片右上角的操作区域 */
  extra?: ReactNode
  /** 是否有边框 */
  bordered?: boolean
  /** 是否可悬浮 */
  hoverable?: boolean
  /** 是否为加载中状态 */
  loading?: boolean
  /** 卡片尺寸 */
  size?: CardSize
  /** 卡片封面 */
  cover?: ReactNode
  /** 卡片操作组 */
  actions?: ReactNode[]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 卡片内容 */
  children?: ReactNode
}

// FeishuInput 组件类型
export interface FeishuInputProps {
  /** 占位符文本 */
  placeholder?: string
  /** 输入框的值 */
  value?: string
  /** 默认值 */
  defaultValue?: string
  /** 值变化时的回调函数 */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  /** 获得焦点时的回调函数 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** 失去焦点时的回调函数 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  /** 按下回车键时的回调函数 */
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  /** 输入框大小 */
  size?: Size
  /** 输入框状态 */
  status?: InputStatus
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 是否显示清除按钮 */
  allowClear?: boolean
  /** 最大长度 */
  maxLength?: number
  /** 是否显示字数统计 */
  showWordLimit?: boolean
  /** 前缀图标 */
  prefix?: ReactNode
  /** 后缀图标 */
  suffix?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

// 组件声明
export declare const AiChatSender: React.FC<AiChatSenderProps>
export declare const FeishuButton: React.FC<FeishuButtonProps>
export declare const FeishuCard: React.FC<FeishuCardProps>
export declare const FeishuInput: React.FC<FeishuInputProps>

// 默认导出类型
export interface FeishuComponents {
  AiChatSender: typeof AiChatSender
  FeishuButton: typeof FeishuButton
  FeishuCard: typeof FeishuCard
  FeishuInput: typeof FeishuInput
}

declare const _default: FeishuComponents
export default _default