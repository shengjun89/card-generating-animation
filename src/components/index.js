/**
 * Feishu React Components Library
 * 飞书 React 组件库统一导出入口
 * 
 * 基于 Arco Design 封装的飞书风格组件集合
 * 提供一致的设计语言和用户体验
 */

// 导入所有组件
import AiChatSender from './AiChatSender'
import FeishuButton from './Button'
import FeishuCard from './Card'
import FeishuInput from './Input'

// 统一导出所有组件
export {
  AiChatSender,
  FeishuButton,
  FeishuCard,
  FeishuInput
}

// 默认导出（可选，提供另一种导入方式）
export default {
  AiChatSender,
  FeishuButton,
  FeishuCard,
  FeishuInput
}

/**
 * 使用示例：
 * 
 * // 方式1：按需导入
 * import { AiChatSender, FeishuButton } from 'feishu-react-components'
 * 
 * // 方式2：全量导入
 * import * as FeishuComponents from 'feishu-react-components'
 * const { AiChatSender, FeishuButton } = FeishuComponents
 * 
 * // 方式3：默认导入
 * import FeishuComponents from 'feishu-react-components'
 * const { AiChatSender, FeishuButton } = FeishuComponents
 */