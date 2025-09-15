import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Phone, Loader, Volume2 } from 'lucide-react';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ messages, onSendMessage, isTyping, selectedLanguage }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (inputMessage.trim()) {
      onSendMessage(inputMessage.trim());
      setInputMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Placeholder for speech-to-text integration
  };

  const handleEscalate = () => {
    onSendMessage('I would like to speak with a human representative.');
  };

  const handleSpeak = (text) => {
    // Placeholder for text-to-speech integration
    console.log('Speaking:', text);
  };

  return (
    <div className="flex-1 neumorphic rounded-2xl flex flex-col h-[600px]">
      {/* Chat Messages */}
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="gradient-bg p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Welcome to Campus Assistant!
              </h3>
              <p className="text-gray-600">
                How can I help you today? Ask me about admissions, courses, or campus life.
              </p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                message={msg.text}
                isBot={msg.isBot}
                timestamp={msg.timestamp}
                onSpeak={handleSpeak}
              />
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="gradient-bg w-10 h-10 rounded-full flex items-center justify-center">
                    <Loader className="w-6 h-6 text-white animate-spin" />
                  </div>
                  <div className="neumorphic rounded-2xl p-4 bg-white">
                    <p className="text-sm text-gray-600">Campus Assistant is typing...</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="flex-1 neumorphic-inset rounded-2xl p-3">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Type your message...`}
              className="w-full bg-transparent resize-none outline-none text-gray-800 placeholder-gray-500"
              rows="1"
            />
          </div>
          
          <button
            className="p-3 neumorphic rounded-2xl text-gray-600 hover:shadow-lg transition-all duration-300"
            title="Text to Speech"
          >
            <Volume2 className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleVoiceInput}
            className={`p-3 rounded-2xl transition-all duration-300 ${
              isRecording 
                ? 'bg-red-100 text-red-600' 
                : 'neumorphic hover:shadow-lg text-gray-600'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleSend}
            disabled={!inputMessage.trim()}
            className="gradient-bg p-3 rounded-2xl text-white hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          <button
            onClick={handleEscalate}
            className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-xl hover:bg-orange-200 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Speak with Human</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;