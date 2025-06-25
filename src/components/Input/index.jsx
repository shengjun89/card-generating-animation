import React, { useState, useCallback, forwardRef } from 'react'
import { Input as ArcoInput } from '@arco-design/web-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.css'

/**
 * 飞书风格的输入框组件
 * 基于 Arco Design Input 组件封装，符合飞书设计规范
 * 
 * @param {Object} props - 组件属性
 * @param {string} props.placeholder - 占位符文本
 * @param {string} props.value - 输入框的值
 * @param {Function} props.onChange - 值变化时的回调函数
 * @param {Function} props.onFocus - 获得焦点时的回调函数
 * @param {Function} props.onBlur - 失去焦点时的回调函数
 * @param {string} props.size - 输入框大小 'small' | 'default' | 'large'
 * @param {string} props.status - 输入框状态 'error' | 'warning'
 * @param {boolean} props.disabled - 是否禁用
 * @param {boolean} props.allowClear - 是否显示清除按钮
 * @param {string} props.prefix - 前缀图标或文本
 * @param {string} props.suffix - 后缀图标或文本
 * @param {number} props.maxLength - 最大输入长度
 * @param {boolean} props.showWordLimit - 是否显示字数统计
 * @param {string} props.className - 自定义样式类名
 * @param {Object} props.style - 自定义样式
 */
const FeishuInput = forwardRef((
  {
    placeholder = '请输入内容',
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    size = 'default',
    status,
    disabled = false,
    allowClear = false,
    prefix,
    suffix,
    maxLength,
    showWordLimit = false,
    className,
    style,
    ...restProps
  },
  ref
) => {
  const [focused, setFocused] = useState(false)

  // 处理焦点事件
  const handleFocus = useCallback((e) => {
    setFocused(true)
    onFocus?.(e)
  }, [onFocus])

  const handleBlur = useCallback((e) => {
    setFocused(false)
    onBlur?.(e)
  }, [onBlur])

  // 处理值变化
  const handleChange = useCallback((value, e) => {
    onChange?.(value, e)
  }, [onChange])

  // 组合样式类名
  const inputClassName = classNames(
    'feishu-input',
    {
      'feishu-input--focused': focused,
      'feishu-input--disabled': disabled,
      [`feishu-input--${size}`]: size,
      [`feishu-input--${status}`]: status,
    },
    className
  )

  return (
    <ArcoInput
      ref={ref}
      className={inputClassName}
      style={style}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPressEnter={onPressEnter}
      size={size}
      status={status}
      disabled={disabled}
      allowClear={allowClear}
      prefix={prefix}
      suffix={suffix}
      maxLength={maxLength}
      showWordLimit={showWordLimit}
      {...restProps}
    />
  )
})

// 设置组件显示名称
FeishuInput.displayName = 'FeishuInput'

// 属性类型检查
FeishuInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onPressEnter: PropTypes.func,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  status: PropTypes.oneOf(['error', 'warning']),
  disabled: PropTypes.bool,
  allowClear: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  maxLength: PropTypes.number,
  showWordLimit: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default FeishuInput