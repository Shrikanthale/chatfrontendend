import React from "react";
import SearchInput from "./SearchInput.jsx";
import Conversions from "./Conversions.jsx";
import Logout from "./Logout.jsx";

const Sidebar = ({ onSelectConversation, isDarkMode }) => {
  const handleSearch = (term) => {
    console.log("Searching for:", term);
  };

  return (
    <div
      className={`w-72 lg:w-80 ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-r flex flex-col h-full shadow-lg`}
    >
      {/* Header */}
      <div
        className={`p-3 lg:p-4 border-b ${
          isDarkMode
            ? "border-gray-700 bg-gradient-to-r from-gray-700 to-gray-800"
            : "border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600"
        } flex-shrink-0`}
      >
        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-500 text-sm lg:text-xl font-bold">💬</span>
          </div>
          <div>
            <h1 className={`font-bold text-sm lg:text-lg text-white`}>ChatApp</h1>
            <p className="text-xs text-blue-100">Beautiful conversations</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <SearchInput onSearch={handleSearch} isDarkMode={isDarkMode} />

      {/* Conversations */}
      <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        <Conversions
          isDarkMode={isDarkMode}
          onSelectConversation={(conv) => {
            onSelectConversation(conv); // Pass selection to ChatPage
          }}
        />
      </div>

      {/* Logout */}
      <Logout isDarkMode={isDarkMode} />
    </div>
  );
};

export default Sidebar;
