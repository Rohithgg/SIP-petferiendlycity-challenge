"use client"
import { useState } from 'react';
import OpenAI from 'openai';

let openai;
try {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });
} catch (error) {
  console.error('Error initializing OpenAI client:', error);
}

export default function PawBuddy() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm PawBuddy, your guide to the Pet-Friendly City campaign. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  const getBotResponse = async (userMessage) => {
    try {
      if (!openai) {
        throw new Error('OpenAI client is not initialized. Please check your API key configuration.');
      }
      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are PawBuddy, a friendly and knowledgeable guide for the Pet-Friendly City campaign. You help people learn about pet adoption, volunteering opportunities, and community impact stories. Keep responses concise and friendly, focusing on pet-related topics and community initiatives.'
          },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 150,
        temperature: 0.7,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      return "Thanks for mentioning our team is wotking on it.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      // Call OpenAI API
      const response = await getBotResponse(inputValue);
      const botResponse = { id: messages.length + 2, text: response, sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
    } finally {
      setIsLoading(false);
      setInputValue('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-teal-600 hover:bg-teal-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        aria-label="Open chat with PawBuddy"
      >
        <span className="text-2xl">🐾</span>
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl mr-2">🐾</span>
              <h3 className="font-bold">PawBuddy</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-200"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-3/4 p-3 rounded-lg ${message.sender === 'user' 
                      ? 'bg-teal-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
            <div className="flex">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask PawBuddy a question..."
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                disabled={!inputValue.trim()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
