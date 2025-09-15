import React from 'react';
import { Bot, LogOut, Settings } from 'lucide-react';

const Header = ({ onLogout, showSettings = false, onSettingsClick }) => {
  return (
    <header className="neumorphic rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="gradient-bg p-2 rounded-xl">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Campus Assistant</h1>
            <p className="text-sm text-gray-600">AI-powered support</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {showSettings && (
            <button
              onClick={onSettingsClick}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;