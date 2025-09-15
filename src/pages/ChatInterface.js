import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import { Menu, X, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatInterface = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [chatHistory, setChatHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock bot responses
  const getBotResponse = (userMessage) => {
    const responses = {
      en: {
        greeting: "Hello! I'm Campus Assistant. How can I help you today?",
        admission: "For admission information, please visit the admissions office or check our website. The application deadline is usually in June.",
        fees: "Fee structure varies by course. Engineering courses: ₹1,50,000/year, Arts: ₹50,000/year. Scholarships are available.",
        hostel: "We have separate hostels for boys and girls with modern amenities. Hostel fees: ₹80,000/year including meals.",
        default: "I understand you're asking about campus-related queries. Could you please be more specific so I can help you better?"
      },
      hi: {
        greeting: "नमस्ते! मैं कैंपस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
        admission: "प्रवेश की जानकारी के लिए, कृपया प्रवेश कार्यालय में जाएं या हमारी वेबसाइट देखें।",
        fees: "फीस संरचना कोर्स के अनुसार अलग है। इंजीनियरिंग: ₹1,50,000/वर्ष, कला: ₹50,000/वर्ष।",
        hostel: "हमारे पास आधुनिक सुविधाओं के साथ लड़कों और लड़कियों के लिए अलग हॉस्टल हैं।",
        default: "मैं समझ गया कि आप कैंपस से संबंधित प्रश्न पूछ रहे हैं। कृपया अधिक स्पष्ट रूप से बताएं।"
      }
    };

    const lang = responses[selectedLanguage] || responses.en;
    const message = userMessage.toLowerCase();

    if (message.includes('hello') || message.includes('hi') || message.includes('नमस्ते')) {
      return lang.greeting;
    } else if (message.includes('admission') || message.includes('प्रवेश')) {
      return lang.admission;
    } else if (message.includes('fee') || message.includes('फीस')) {
      return lang.fees;
    } else if (message.includes('hostel') || message.includes('हॉस्टल')) {
      return lang.hostel;
    } else {
      return lang.default;
    }
  };

  const handleSendMessage = (message) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMessage = {
      text: message,
      isBot: false,
      timestamp
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(message),
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Update chat history
      const chatTitle = message.length > 30 ? message.substring(0, 30) + '...' : message;
      setChatHistory(prev => [{
        title: chatTitle,
        date: new Date().toLocaleDateString(),
        messages: [...messages, userMessage, botResponse]
      }, ...prev.slice(0, 4)]);
    }, 1500);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleChatSelect = (chat) => {
    setMessages(chat.messages);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="neumorphic rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="gradient-bg p-2 rounded-xl">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Campus Assistant</h1>
                <p className="text-sm text-gray-600">AI-powered support</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>
        </header>
        
        <div className="flex gap-6 relative">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden fixed top-24 left-4 z-20 neumorphic p-3 rounded-xl"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Sidebar */}
          <div className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:relative top-0 left-0 z-10 lg:z-auto transition-transform duration-300 lg:block`}>
            <Sidebar
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              chatHistory={chatHistory}
              onChatSelect={handleChatSelect}
              onFAQClick={(faq) => {
                handleSendMessage(faq.query);
                setIsSidebarOpen(false);
              }}
            />
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-5"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Chat Window */}
          <div className="flex-1 ml-0 lg:ml-0">
            <ChatWindow
              messages={messages}
              onSendMessage={handleSendMessage}
              isTyping={isTyping}
              selectedLanguage={selectedLanguage}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <div className="neumorphic rounded-2xl p-4">
            <p className="text-sm text-gray-600">
              Campus Assistant • Powered by Amazon Q • 
              <span className="mx-2">•</span>
              <button className="text-blue-600 hover:underline">Support</button>
              <span className="mx-2">•</span>
              <button className="text-blue-600 hover:underline">Privacy</button>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatInterface;