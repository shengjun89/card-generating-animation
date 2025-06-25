import React, { forwardRef } from 'react'
import { Button as ArcoButton } from '@arco-design/web-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

/**
 * 飞书风格的按钮组件
 * 基于 Arco Design Button 组件封装，符合飞书设计规范
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.type - 按钮类型 'primary' | 'secondary' | 'outline' | 'dashed' | 'text'
 * @param {string} props.size - 按钮大小 'mini' | 'small' | 'default' | 'large'
 * @param {string} props.status - 按钮状态 'warning' | 'danger' | 'success'
 * @param {boolean} props.disabled - 是否禁用
 * @param {boolean} props.loading - 是否显示加载状态
 * @param {string} props.shape - 按钮形状 'square' | 'round' | 'circle'
 * @param {boolean} props.long - 是否为长按钮
 * @param {React.ReactNode} props.icon - 按钮图标
 * @param {React.ReactNode} props.children - 按钮内容
 * @param {Function} props.onClick - 点击事件处理函数
 * @param {string} props.className - 自定义样式类名
 * @param {Object} props.style - 自定义样式
 */
const FeishuButton = forwardRef((
  {
    type = 'secondary',
    size = 'default',
    status,
    disabled = false,
    loading = false,
    shape,
    long = false,
    icon,
    children,
    onClick,
    className,
    style,
    ...restProps
  },
  ref
) => {
  // 组合样式类名
  const buttonClassName = classNames(
    'feishu-button',
    {
      [`feishu-button--${type}`]: type,
      [`feishu-button--${size}`]: size,
      [`feishu-button--${status}`]: status,
      [`feishu-button--${shape}`]: shape,
      'feishu-button--long': long,
      'feishu-button--loading': loading,
      'feishu-button--disabled': disabled,
      'feishu-button--icon-only': icon && !children,
    },
    className
  )

  return (
    <ArcoButton
      ref={ref}
      className={buttonClassName}
      style={style}
      type={type}
      size={size}
      status={status}
      disabled={disabled}
      loading={loading}
      shape={shape}
      long={long}
      icon={icon}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </ArcoButton>
  )
})

// 设置组件显示名称
FeishuButton.displayName = 'FeishuButton'

// 属性类型检查
FeishuButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'outline', 'dashed', 'text']),
  size: PropTypes.oneOf(['mini', 'small', 'default', 'large']),
  status: PropTypes.oneOf(['warning', 'danger', 'success']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  shape: PropTypes.oneOf(['square', 'round', 'circle']),
  long: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default FeishuButton