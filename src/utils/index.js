/**
 * 飞书React组件库工具函数
 * 提供常用的辅助功能和工具方法
 */

/**
 * 类名合并工具函数
 * @param {...(string|Object|Array)} classes - 类名参数
 * @returns {string} 合并后的类名字符串
 */
export const classNames = (...classes) => {
  return classes
    .filter(Boolean)
    .map(cls => {
      if (typeof cls === 'string') return cls
      if (typeof cls === 'object' && cls !== null) {
        return Object.keys(cls)
          .filter(key => cls[key])
          .join(' ')
      }
      return ''
    })
    .join(' ')
    .trim()
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 等待时间（毫秒）
 * @param {boolean} immediate - 是否立即执行
 * @returns {Function} 防抖后的函数
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(this, args)
  }
}

/**
 * 节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} limit - 时间间隔（毫秒）
 * @returns {Function} 节流后的函数
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * 深拷贝函数
 * @param {any} obj - 要拷贝的对象
 * @returns {any} 拷贝后的对象
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (typeof obj === 'object') {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

/**
 * 生成唯一ID
 * @param {string} prefix - ID前缀
 * @returns {string} 唯一ID
 */
export const generateId = (prefix = 'feishu') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * 格式化文件大小
 * @param {number} bytes - 字节数
 * @param {number} decimals - 小数位数
 * @returns {string} 格式化后的文件大小
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

/**
 * 格式化日期时间
 * @param {Date|string|number} date - 日期
 * @param {string} format - 格式化模板
 * @returns {string} 格式化后的日期字符串
 */
export const formatDateTime = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  const d = new Date(date)
  if (isNaN(d.getTime())) return ''
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {boolean} 是否为有效邮箱
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * 验证手机号格式（中国大陆）
 * @param {string} phone - 手机号
 * @returns {boolean} 是否为有效手机号
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * 获取URL参数
 * @param {string} name - 参数名
 * @param {string} url - URL地址（可选，默认为当前页面URL）
 * @returns {string|null} 参数值
 */
export const getUrlParam = (name, url = window.location.href) => {
  const urlObj = new URL(url)
  return urlObj.searchParams.get(name)
}

/**
 * 设置URL参数
 * @param {string} name - 参数名
 * @param {string} value - 参数值
 * @param {string} url - URL地址（可选，默认为当前页面URL）
 * @returns {string} 新的URL
 */
export const setUrlParam = (name, value, url = window.location.href) => {
  const urlObj = new URL(url)
  urlObj.searchParams.set(name, value)
  return urlObj.toString()
}

/**
 * 本地存储工具
 */
export const storage = {
  /**
   * 设置本地存储
   * @param {string} key - 键名
   * @param {any} value - 值
   * @param {number} expire - 过期时间（毫秒）
   */
  set(key, value, expire) {
    const data = {
      value,
      expire: expire ? Date.now() + expire : null
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  
  /**
   * 获取本地存储
   * @param {string} key - 键名
   * @returns {any} 值
   */
  get(key) {
    try {
      const item = localStorage.getItem(key)
      if (!item) return null
      
      const data = JSON.parse(item)
      if (data.expire && Date.now() > data.expire) {
        localStorage.removeItem(key)
        return null
      }
      
      return data.value
    } catch (error) {
      console.error('获取本地存储失败:', error)
      return null
    }
  },
  
  /**
   * 删除本地存储
   * @param {string} key - 键名
   */
  remove(key) {
    localStorage.removeItem(key)
  },
  
  /**
   * 清空本地存储
   */
  clear() {
    localStorage.clear()
  }
}

/**
 * 飞书主题色配置
 */
export const feishuColors = {
  primary: '#1664ff',
  primaryHover: '#4080ff',
  primaryActive: '#0e4ba8',
  success: '#00b42a',
  warning: '#ff7d00',
  error: '#f53f3f',
  text: {
    primary: '#1d2129',
    secondary: '#4e5969',
    tertiary: '#86909c',
    quaternary: '#c9cdd4'
  },
  background: {
    primary: '#ffffff',
    secondary: '#f7f8fa',
    tertiary: '#f2f3f5',
    quaternary: '#e5e6eb'
  },
  border: {
    primary: '#f2f3f5',
    secondary: '#e5e6eb',
    tertiary: '#c9cdd4',
    quaternary: '#86909c'
  }
}

/**
 * 飞书断点配置
 */
export const feishuBreakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1600px'
}