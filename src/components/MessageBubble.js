import React from 'react';
import { Bot, User, Volume2 } from 'lucide-react';

const MessageBubble = ({ message, isBot, timestamp, onSpeak }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4 animate-slide-up`}>
      <div className={`flex items-start space-x-3 max-w-xs sm:max-w-md lg:max-w-lg ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isBot ? 'gradient-bg' : 'bg-gray-300'
        }`}>
          {isBot ? (
            <Bot className="w-6 h-6 text-white" />
          ) : (
            <User className="w-6 h-6 text-gray-600" />
          )}
        </div>

        {/* Message Content */}
        <div className={`neumorphic rounded-2xl p-4 ${
          isBot ? 'bg-white' : 'chat-gradient text-white'
        }`}>
          <p className={`text-sm ${isBot ? 'text-gray-800' : 'text-white'}`}>
            {message}
          </p>
          
          <div className={`flex items-center justify-between mt-2 ${
            isBot ? 'text-gray-500' : 'text-white/80'
          }`}>
            <span className="text-xs">{timestamp}</span>
            {isBot && onSpeak && (
              <button
                onClick={() => onSpeak(message)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;