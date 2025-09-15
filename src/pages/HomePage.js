import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Shield, Bot, GraduationCap, MessageCircle, Globe } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="gradient-bg p-6 rounded-3xl">
              <GraduationCap className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Campus Assistant</h1>
          <p className="text-xl text-gray-600 mb-8">Your AI-powered multilingual college companion</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* QR Code Section */}
          <div className="neumorphic rounded-3xl p-8">
            <div className="mb-6">
              <div className="gradient-bg p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Scan QR Code</h2>
              <p className="text-gray-600 mb-6">Students and parents can scan this QR code to access the chatbot</p>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="neumorphic-inset rounded-2xl p-8 mb-6">
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-300">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">QR Code</p>
                  <p className="text-xs text-gray-400">Scan to chat</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/chat')}
              className="w-full gradient-bg text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Open Chatbot
            </button>
          </div>

          {/* Admin Access */}
          <div className="neumorphic rounded-3xl p-8">
            <div className="mb-6">
              <div className="bg-purple-100 p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard</h2>
              <p className="text-gray-600 mb-6">Manage files, view logs, and configure chatbot settings</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="neumorphic-inset rounded-xl p-4 text-left">
                <h3 className="font-semibold text-gray-800">File Management</h3>
                <p className="text-sm text-gray-600">Upload, update, and delete knowledge base files</p>
              </div>
              <div className="neumorphic-inset rounded-xl p-4 text-left">
                <h3 className="font-semibold text-gray-800">Chat Logs</h3>
                <p className="text-sm text-gray-600">Monitor conversations and user interactions</p>
              </div>
              <div className="neumorphic-inset rounded-xl p-4 text-left">
                <h3 className="font-semibold text-gray-800">Settings</h3>
                <p className="text-sm text-gray-600">Configure languages and system preferences</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/admin/login')}
              className="w-full bg-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Shield className="w-5 h-5 inline mr-2" />
              Admin Login
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="neumorphic rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-xl w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Multilingual</h4>
              <p className="text-sm text-gray-600">Support for 5+ languages</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-xl w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Bot className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">AI Powered</h4>
              <p className="text-sm text-gray-600">Amazon Q integration</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-3 rounded-xl w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-sm text-gray-600">Always available assistance</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Powered by Amazon Q • AWS Integration Ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;