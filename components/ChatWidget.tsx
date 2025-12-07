
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I\'m your AI assistant for Motral Web Studio. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || status === LoadingState.LOADING) return;

    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');
    setStatus(LoadingState.LOADING);

    const reply = await sendMessageToGemini(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setStatus(LoadingState.IDLE);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleFeedback = (index: number, type: 'up' | 'down') => {
    setMessages(prev => prev.map((msg, i) => {
      if (i === index) {
        return { 
          ...msg, 
          feedback: msg.feedback === type ? undefined : type 
        };
      }
      return msg;
    }));
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 shadow-lg shadow-brand-900/50 transition-all hover:scale-110 hover:bg-brand-500 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[90%] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl sm:right-6">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-gray-800 bg-gray-950 p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/20">
              <Sparkles className="h-4 w-4 text-brand-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Motral AI</h3>
              <p className="text-xs text-brand-400">Ask about our services</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-900 p-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-brand-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === 'model' && (
                    <div className="mt-1 flex gap-2 px-1">
                      <button
                        onClick={() => handleFeedback(idx, 'up')}
                        className={`rounded p-1 transition-colors hover:bg-gray-800 ${
                          msg.feedback === 'up' ? 'text-brand-500' : 'text-gray-500'
                        }`}
                        aria-label="Helpful"
                        title="Helpful"
                      >
                        <ThumbsUp className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleFeedback(idx, 'down')}
                        className={`rounded p-1 transition-colors hover:bg-gray-800 ${
                          msg.feedback === 'down' ? 'text-rose-500' : 'text-gray-500'
                        }`}
                        aria-label="Not helpful"
                        title="Not helpful"
                      >
                        <ThumbsDown className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {status === LoadingState.LOADING && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-2xl rounded-bl-none px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-brand-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-800 bg-gray-950 p-4">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about website speed..."
                className="w-full rounded-full border border-gray-700 bg-gray-900 py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <button
                onClick={handleSend}
                disabled={status === LoadingState.LOADING || !inputText.trim()}
                className="absolute right-2 rounded-full bg-brand-600 p-2 text-white transition-colors hover:bg-brand-500 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
