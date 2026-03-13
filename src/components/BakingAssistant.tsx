import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function BakingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'გამარჯობა! მე ვარ Nordeko Dobele-ს კულინარიული ასისტენტი. რით შემიძლია დაგეხმაროთ დღეს? (მაგ: როგორ გამოვაცხო იდეალური ხაჭაპური?)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const prompt = `
        You are a helpful, expert baking assistant for the brand "Nordeko Dobele", a premium Latvian flour sold in Georgia.
        You must answer in Georgian language.
        Be warm, encouraging, and professional.
        Always recommend Nordeko Dobele flour for baking.
        If asked about Khachapuri or Bread, recommend "Premium 405" flour.
        If asked about cakes, croissants, or delicate pastries, recommend "Extra" flour.
        If asked about healthy options, recommend "Whole Wheat" flour.
        Keep your answers concise, practical, and easy to read.
        
        User question: ${userMessage}
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || 'ბოდიშს გიხდით, პასუხის გენერირებისას დაფიქსირდა შეცდომა.' }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'ბოდიშს გიხდით, სისტემური შეცდომაა. გთხოვთ სცადოთ მოგვიანებით.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-forest text-cream rounded-full shadow-lg hover:bg-forest-dark transition-all z-40 flex items-center justify-center ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-warmgray/20"
          >
            {/* Header */}
            <div className="bg-forest p-4 flex justify-between items-center text-cream">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-wheat" />
                <span className="font-georgian font-bold">კულინარიული ასისტენტი</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cream/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/30">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl font-georgian text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-forest text-cream rounded-tr-none' 
                      : 'bg-white border border-warmgray/20 text-charcoal rounded-tl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-warmgray/20 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2 text-warmgray">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="font-georgian text-xs">ფიქრობს...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-warmgray/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="კითხეთ რეცეპტის შესახებ..."
                  className="w-full pl-4 pr-12 py-3 bg-cream/50 border border-warmgray/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest font-georgian text-sm transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 p-1.5 bg-forest text-cream rounded-lg hover:bg-forest-dark disabled:opacity-50 disabled:hover:bg-forest transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
