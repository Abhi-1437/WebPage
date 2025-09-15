import React, { useState } from 'react';
import { Globe, MessageCircle, HelpCircle, History, ChevronDown } from 'lucide-react';

const Sidebar = ({ selectedLanguage, onLanguageChange, chatHistory, onChatSelect, onFAQClick }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
  ];

  const faqs = [
    { text: 'Admission Process', query: 'Tell me about admission process' },
    { text: 'Fee Structure', query: 'What is the fee structure?' },
    { text: 'Hostel Information', query: 'Tell me about hostel facilities' },
    { text: 'Library Timings', query: 'What are library timings?' },
    { text: 'Academic Calendar', query: 'Show me academic calendar' }
  ];

  return (
    <div className="w-80 neumorphic rounded-2xl p-6 space-y-6 h-fit">
      {/* Language Selector */}
      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
          <Globe className="w-5 h-5 mr-2" />
          Language
        </h3>
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="w-full flex items-center justify-between p-3 neumorphic-inset rounded-xl"
          >
            <span className="flex items-center">
              {languages.find(l => l.code === selectedLanguage)?.flag} 
              <span className="ml-2">{languages.find(l => l.code === selectedLanguage)?.name}</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLanguageOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 neumorphic rounded-xl overflow-hidden z-10">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsLanguageOpen(false);
                  }}
                  className="w-full flex items-center p-3 hover:bg-blue-50 transition-colors"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick FAQs */}
      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
          <HelpCircle className="w-5 h-5 mr-2" />
          Quick Help
        </h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => onFAQClick && onFAQClick(faq)}
              className="w-full text-left p-3 neumorphic-inset rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              {faq.text}
            </button>
          ))}
        </div>
      </div>

      {/* Chat History */}
      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
          <History className="w-5 h-5 mr-2" />
          Recent Chats
        </h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat, index) => (
              <button
                key={index}
                onClick={() => onChatSelect(chat)}
                className="w-full text-left p-3 neumorphic-inset rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="text-sm font-medium truncate">{chat.title}</div>
                <div className="text-xs text-gray-500">{chat.date}</div>
              </button>
            ))
          ) : (
            <p className="text-sm text-gray-500 p-3">No recent chats</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;