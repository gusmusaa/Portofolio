import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm an AI assistant. Ask me anything about Alex's skills or experience!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || !chatSessionRef.current || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const resultStream = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      let fullResponseText = '';
      const responseMsgId = (Date.now() + 1).toString();

      setMessages(prev => [
        ...prev,
        {
          id: responseMsgId,
          role: 'model',
          text: '',
          timestamp: new Date()
        }
      ]);

      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullResponseText += chunkText;

        setMessages(prev => prev.map(msg => 
          msg.id === responseMsgId ? { ...msg, text: fullResponseText } : msg
        ));
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'model',
          text: "I'm having trouble connecting to the server right now. Please try again later.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-accent hover:bg-sky-500'
        }`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-primary" />}
      </button>

      <div
        className={`fixed bottom-24 right-6 w-full max-w-sm bg-secondary/95 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl z-40 transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        <div className="p-4 border-b border-gray-700 bg-primary/50 rounded-t-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <h3 className="text-white font-semibold">Assistant</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-accent' : 'bg-purple-600'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4 text-primary" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              <div className={`p-3 rounded-lg max-w-[80%] text-sm ${
                msg.role === 'user' 
                  ? 'bg-accent text-primary rounded-tr-none' 
                  : 'bg-gray-700 text-gray-100 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex items-start gap-2.5">
               <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                 <Bot className="w-4 h-4 text-white" />
               </div>
               <div className="bg-gray-700 p-3 rounded-lg rounded-tl-none">
                 <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 bg-primary/30 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about my skills..."
              className="flex-1 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 border border-gray-700 focus:border-accent focus:outline-none placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-accent hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed text-primary p-2 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatWidget;