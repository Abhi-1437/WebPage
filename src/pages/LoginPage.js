import React, { useState } from 'react';
import { User, Shield, Bot, GraduationCap } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState('user');

  const handleLogin = () => {
    onLogin(selectedRole);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="neumorphic rounded-3xl p-8 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="gradient-bg p-4 rounded-2xl">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Campus Assistant</h1>
          <p className="text-gray-600">Your AI-powered college companion</p>
        </div>

        <div className="space-y-4 mb-6">
          <div 
            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedRole === 'user' 
                ? 'bg-blue-100 border-2 border-blue-500 shadow-lg' 
                : 'neumorphic-inset hover:shadow-md'
            }`}
            onClick={() => setSelectedRole('user')}
          >
            <div className="flex items-center space-x-3">
              <User className={`w-6 h-6 ${selectedRole === 'user' ? 'text-blue-600' : 'text-gray-600'}`} />
              <div>
                <h3 className={`font-semibold ${selectedRole === 'user' ? 'text-blue-800' : 'text-gray-800'}`}>
                  Student/User
                </h3>
                <p className="text-sm text-gray-600">Chat with Campus Assistant</p>
              </div>
            </div>
          </div>

          <div 
            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedRole === 'admin' 
                ? 'bg-purple-100 border-2 border-purple-500 shadow-lg' 
                : 'neumorphic-inset hover:shadow-md'
            }`}
            onClick={() => setSelectedRole('admin')}
          >
            <div className="flex items-center space-x-3">
              <Shield className={`w-6 h-6 ${selectedRole === 'admin' ? 'text-purple-600' : 'text-gray-600'}`} />
              <div>
                <h3 className={`font-semibold ${selectedRole === 'admin' ? 'text-purple-800' : 'text-gray-800'}`}>
                  Administrator
                </h3>
                <p className="text-sm text-gray-600">Access admin dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full gradient-bg text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Continue as {selectedRole === 'user' ? 'Student' : 'Administrator'}
        </button>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Powered by Amazon Q • Multilingual Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;