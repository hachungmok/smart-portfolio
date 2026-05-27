'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: '안녕하세요! 포트폴리오에 대해 궁금한 점이 있으시면 편하게 질문해 주세요.' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })) })
      })
      
      const data = await response.json()
      
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || '오류가 발생했습니다.'
      }])
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '죄송합니다, 연결 중 오류가 발생했습니다.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-full md:w-[400px] md:h-[600px] bg-surface md:rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-white/10 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 bg-white/5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-text">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-text transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-primary text-background' : 'bg-white/10 text-primary'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-background rounded-tr-none' : 'bg-white/5 border border-white/5 rounded-tl-none'}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 max-w-[85%] self-start">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white/10 text-primary">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/5 rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-muted" />
                  <span className="text-sm text-muted">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-background border-t border-white/5">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about the portfolio..."
                className="flex-1 bg-surface border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-text"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
