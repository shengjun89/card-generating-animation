import React, { forwardRef } from 'react'
import { Card as ArcoCard } from '@arco-design/web-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

/**
 * 飞书风格的卡片组件
 * 基于 Arco Design Card 组件封装，符合飞书设计规范
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.title - 卡片标题
 * @param {React.ReactNode} props.extra - 卡片右上角的操作区域
 * @param {boolean} props.bordered - 是否有边框
 * @param {boolean} props.hoverable - 是否可悬浮
 * @param {boolean} props.loading - 是否为加载中状态
 * @param {string} props.size - 卡片尺寸 'default' | 'small'
 * @param {React.ReactNode} props.cover - 卡片封面
 * @param {Array} props.actions - 卡片操作组
 * @param {React.ReactNode} props.children - 卡片内容
 * @param {string} props.className - 自定义样式类名
 * @param {Object} props.style - 自定义样式
 */
const FeishuCard = forwardRef((
  {
    title,
    extra,
    bordered = true,
    hoverable = false,
    loading = false,
    size = 'default',
    cover,
    actions,
    children,
    className,
    style,
    ...restProps
  },
  ref
) => {
  // 组合样式类名
  const cardClassName = classNames(
    'feishu-card',
    {
      'feishu-card--bordered': bordered,
      'feishu-card--hoverable': hoverable,
      'feishu-card--loading': loading,
      [`feishu-card--${size}`]: size,
      'feishu-card--has-cover': cover,
      'feishu-card--has-actions': actions && actions.length > 0,
    },
    className
  )

  return (
    <ArcoCard
      ref={ref}
      className={cardClassName}
      style={style}
      title={title}
      extra={extra}
      bordered={bordered}
      hoverable={hoverable}
      loading={loading}
      size={size}
      cover={cover}
      actions={actions}
      {...restProps}
    >
      {children}
    </ArcoCard>
  )
})

// 设置组件显示名称
FeishuCard.displayName = 'FeishuCard'

// 属性类型检查
FeishuCard.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  cover: PropTypes.node,
  actions: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default FeishuCard