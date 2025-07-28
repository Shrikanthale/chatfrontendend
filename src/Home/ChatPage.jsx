import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import MessageContainer from '../components/Messages/MessageContainer.jsx';
import { Menu, Close, DarkMode, LightMode } from '@mui/icons-material';

const ChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    // Close mobile menu when conversation is selected
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Auto-select first conversation on mount
  useEffect(() => {
    if (!selectedConversation) {
      // Simulate selecting the first conversation
      setSelectedConversation({
        name: 'Alice Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        status: 'online',
        lastSeen: '2 minutes ago'
      });
    }
  }, [selectedConversation]);

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col`}>
      {/* Mobile Header */}
      <div className={`lg:hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b p-3 flex items-center justify-between`}>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMobileMenu}
            className={`p-1.5 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
          >
            {isMobileMenuOpen ? (
              <Close className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            )}
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">💬</span>
            </div>
            <h1 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ChatApp</h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-1.5 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <LightMode className="w-5 h-5 text-yellow-400" />
            ) : (
              <DarkMode className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {selectedConversation && (
            <div className="flex items-center space-x-2">
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                {selectedConversation.name}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Header with Dark Mode Toggle */}
      <div className={`hidden lg:flex items-center justify-between p-4 border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">💬</span>
          </div>
          <h1 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ChatApp</h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? (
            <LightMode className="w-6 h-6 text-yellow-400" />
          ) : (
            <DarkMode className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:relative lg:flex-shrink-0
          absolute inset-y-0 left-0 z-50
          transition-transform duration-300 ease-in-out
        `}>
          <Sidebar onSelectConversation={handleSelectConversation} isDarkMode={isDarkMode} />
        </div>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          />
        )}

        {/* Message Container */}
        <div className={`flex-1 flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {selectedConversation ? (
            <MessageContainer selectedConversation={selectedConversation} isDarkMode={isDarkMode} />
          ) : (
            <div className={`flex-1 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
              <div className="text-center p-6">
                <div className={`w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse`}>
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Welcome to ChatApp
                </h2>
                <p className={`text-sm mb-4 max-w-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Select a conversation from the sidebar to start chatting. 
                  Experience beautiful animations and responsive design!
                </p>
                <div className="flex items-center justify-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Online</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>Fast</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;