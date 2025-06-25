import { useState } from 'react'
import AiChatSenderExample from './examples/AiChatSenderExample'
import ComponentUsageExample from './examples/ComponentUsageExample'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('chat')

  const renderView = () => {
    switch (currentView) {
      case 'chat':
        return <AiChatSenderExample />
      case 'components':
        return <ComponentUsageExample />
      default:
        return <AiChatSenderExample />
    }
  }

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: '60px', 
        right: '20px', 
        zIndex: 1000,
        display: 'flex',
        gap: '8px'
      }}>
        <button 
          onClick={() => setCurrentView('chat')}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            background: currentView === 'chat' ? '#1890ff' : '#fff',
            color: currentView === 'chat' ? '#fff' : '#333',
            cursor: 'pointer'
          }}
        >
          聊天示例
        </button>
        <button 
          onClick={() => setCurrentView('components')}
          style={{
            padding: '8px 16px',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            background: currentView === 'components' ? '#1890ff' : '#fff',
            color: currentView === 'components' ? '#fff' : '#333',
            cursor: 'pointer'
          }}
        >
          组件示例
        </button>
      </div>
      {renderView()}
    </>
  )
}

export default App