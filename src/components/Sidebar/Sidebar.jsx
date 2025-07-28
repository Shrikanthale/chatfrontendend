import React from 'react';
import SearchInput from './SearchInput';
import Conversions from './Conversions';
import Logout from './Logout';

const Sidebar = ({ onSelectConversation, isDarkMode = false }) => {
  const handleSearch = (term) => {
    // Add search functionality here
    console.log('Searching for:', term);
  };

  return (
    <div className={`w-72 lg:w-80 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col h-full shadow-lg`}>
      {/* Header */}
      <div className={`p-3 lg:p-4 border-b ${isDarkMode ? 'border-gray-700 bg-gradient-to-r from-gray-700 to-gray-800' : 'border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600'} flex-shrink-0`}>
        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-500 text-sm lg:text-xl font-bold">💬</span>
          </div>
          <div>
            <h1 className={`font-bold text-sm lg:text-lg ${isDarkMode ? 'text-white' : 'text-white'}`}>ChatApp</h1>
            <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-blue-100'}`}>Beautiful conversations</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex-shrink-0">
        <SearchInput onSearch={handleSearch} isDarkMode={isDarkMode} />
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        <Conversions onSelectConversation={onSelectConversation} isDarkMode={isDarkMode} />
      </div>

      {/* Logout */}
      <div className="flex-shrink-0">
        <Logout isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Sidebar;