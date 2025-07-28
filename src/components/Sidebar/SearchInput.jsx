import React, { useState } from 'react';
import { Search, Clear } from '@mui/icons-material';

const SearchInput = ({ onSearch, isDarkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch?.('');
  };

  return (
    <div className="p-3 lg:p-4">
      <div className="relative">
        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-200 ${
          isFocused ? 'text-blue-500' : isDarkMode ? 'text-gray-400' : 'text-gray-400'
        }`}>
          <Search className="w-4 h-4 lg:w-5 lg:h-5" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search conversations..."
          className={`w-full pl-8 lg:pl-10 pr-8 lg:pr-10 py-2 lg:py-3 border rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base ${
            isFocused 
              ? 'border-blue-500 bg-white shadow-lg' 
              : isDarkMode 
                ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 hover:bg-gray-600'
                : 'border-gray-300 bg-gray-50 hover:bg-white'
          }`}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-200 ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Clear className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;