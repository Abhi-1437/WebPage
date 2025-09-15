import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FileTable from '../components/FileTable';
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  TrendingUp, 
  Clock,
  AlertCircle,
  CheckCircle,
  Home,
  FileText,
  Activity,
  LogOut,
  Upload,
  Shield
} from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'admission-guide.pdf',
      type: 'PDF Document',
      size: 2048576,
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'fee-structure.docx',
      type: 'Word Document', 
      size: 1024000,
      uploadDate: '2024-01-14'
    }
  ]);
  const [chatLogs, setChatLogs] = useState([
    {
      id: 1,
      date: '2024-01-15 10:30',
      userType: 'Student',
      query: 'What is the admission process?',
      response: 'The admission process involves...',
      language: 'English'
    },
    {
      id: 2,
      date: '2024-01-15 09:15',
      userType: 'Parent',
      query: 'फीस की जानकारी चाहिए',
      response: 'फीस संरचना के लिए...',
      language: 'Hindi'
    }
  ]);
  const [languages, setLanguages] = useState([
    { code: 'en', name: 'English', enabled: true },
    { code: 'hi', name: 'Hindi', enabled: true },
    { code: 'te', name: 'Telugu', enabled: true },
    { code: 'ta', name: 'Tamil', enabled: false },
    { code: 'bn', name: 'Bengali', enabled: false }
  ]);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/files')) return 'files';
    if (path.includes('/logs')) return 'logs';
    if (path.includes('/settings')) return 'settings';
    return 'home';
  };

  const stats = [
    { title: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'blue' },
    { title: 'Active Chats', value: '156', change: '+8%', icon: MessageSquare, color: 'green' },
    { title: 'Avg Response Time', value: '1.2s', change: '-15%', icon: Clock, color: 'purple' },
    { title: 'Satisfaction Rate', value: '94%', change: '+3%', icon: TrendingUp, color: 'orange' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFile = {
        id: Date.now(),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date().toISOString().split('T')[0]
      };
      setFiles(prev => [...prev, newFile]);
    }
  };

  const handleFileDelete = (fileId) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleFileUpdate = (file) => {
    document.getElementById('file-update-input').click();
  };

  const handleFileView = (file) => {
    alert(`Viewing file: ${file.name}`);
  };

  const toggleLanguage = (langCode) => {
    setLanguages(prev => prev.map(lang => 
      lang.code === langCode ? { ...lang, enabled: !lang.enabled } : lang
    ));
  };

  const recentChats = chatLogs.slice(0, 4).map(log => ({
    id: log.id,
    user: log.userType + ' #' + (2850 - log.id),
    query: log.query,
    status: 'resolved',
    time: new Date(log.date).toLocaleTimeString()
  }));

  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    const colorClasses = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };

    return (
      <div className="neumorphic rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${colorClasses[stat.color]}`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <span className={`text-sm font-medium ${
            stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {stat.change}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
        <p className="text-gray-600 text-sm">{stat.title}</p>
      </div>
    );
  };

  const SidebarItem = ({ icon: Icon, label, path, isActive }) => (
    <button
      onClick={() => navigate(path)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'gradient-bg text-white shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  const DashboardHome = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="neumorphic rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Recent Chats
          </h3>
          <div className="space-y-3">
            {recentChats.map(chat => (
              <div key={chat.id} className="flex items-center justify-between p-3 neumorphic-inset rounded-xl">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{chat.user}</p>
                  <p className="text-sm text-gray-600 truncate">{chat.query}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    {chat.status}
                  </span>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="neumorphic rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/admin/files')}
              className="w-full p-4 neumorphic-inset rounded-xl hover:bg-blue-50 transition-colors text-left"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Manage Files</p>
                  <p className="text-sm text-gray-600">Upload and organize knowledge base</p>
                </div>
              </div>
            </button>
            <button 
              onClick={() => navigate('/admin/logs')}
              className="w-full p-4 neumorphic-inset rounded-xl hover:bg-green-50 transition-colors text-left"
            >
              <div className="flex items-center">
                <Activity className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">View Chat Logs</p>
                  <p className="text-sm text-gray-600">Monitor user interactions</p>
                </div>
              </div>
            </button>
            <button 
              onClick={() => navigate('/admin/settings')}
              className="w-full p-4 neumorphic-inset rounded-xl hover:bg-orange-50 transition-colors text-left"
            >
              <div className="flex items-center">
                <Settings className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">System Settings</p>
                  <p className="text-sm text-gray-600">Configure languages and preferences</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const FileManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">File Management</h2>
        <div className="flex space-x-3">
          <input
            type="file"
            id="file-upload-input"
            accept=".pdf,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          <input
            type="file"
            id="file-update-input"
            accept=".pdf,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => document.getElementById('file-upload-input').click()}
            className="flex items-center space-x-2 px-4 py-2 gradient-bg text-white rounded-xl hover:shadow-lg transition-all"
          >
            <Upload className="w-4 h-4" />
            <span>Upload File</span>
          </button>
        </div>
      </div>
      <FileTable
        files={files}
        onDelete={handleFileDelete}
        onUpdate={handleFileUpdate}
        onView={handleFileView}
      />
    </div>
  );

  const ChatLogs = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Chat Logs</h2>
      <div className="neumorphic rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date & Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">User Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Query</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Language</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {chatLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-600">{log.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {log.userType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 max-w-xs truncate">{log.query}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.language}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const SystemSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="neumorphic rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Language Settings</h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.code} className="flex items-center justify-between p-3 neumorphic-inset rounded-xl">
                <span className="font-medium text-gray-800">{lang.name}</span>
                <button
                  onClick={() => toggleLanguage(lang.code)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    lang.enabled 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {lang.enabled ? 'Enabled' : 'Disabled'}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="neumorphic rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Admin Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value="admin"
                className="w-full neumorphic-inset rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value="admin@campus.edu"
                className="w-full neumorphic-inset rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="w-full gradient-bg text-white py-3 rounded-xl hover:shadow-lg transition-all">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex">
      {/* Sidebar */}
      <div className="w-64 neumorphic m-4 rounded-2xl p-6 h-fit">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-purple-100 p-2 rounded-xl">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Admin Panel</h1>
            <p className="text-sm text-gray-600">Campus Assistant</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          <SidebarItem 
            icon={Home} 
            label="Dashboard" 
            path="/admin" 
            isActive={getCurrentPage() === 'home'} 
          />
          <SidebarItem 
            icon={FileText} 
            label="File Management" 
            path="/admin/files" 
            isActive={getCurrentPage() === 'files'} 
          />
          <SidebarItem 
            icon={Activity} 
            label="Chat Logs" 
            path="/admin/logs" 
            isActive={getCurrentPage() === 'logs'} 
          />
          <SidebarItem 
            icon={Settings} 
            label="Settings" 
            path="/admin/settings" 
            isActive={getCurrentPage() === 'settings'} 
          />
        </nav>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="neumorphic rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard</h2>
          <p className="text-gray-600">Monitor and manage Campus Assistant performance</p>
        </div>
        
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/files" element={<FileManagement />} />
          <Route path="/logs" element={<ChatLogs />} />
          <Route path="/settings" element={<SystemSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;