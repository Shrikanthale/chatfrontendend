import React, { useState, useRef } from 'react';
import { Send, AttachFile, EmojiEmotions, Mic } from '@mui/icons-material';

const MessageInput = ({ onSendMessage, isDarkMode = false }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      setIsTyping(false);
    }
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log('File selected:', file.name);
    }
  };

  return (
    <div className={`border-t p-3 lg:p-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} animate-fade-in`}>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 lg:gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={handleTyping}
            placeholder="Type a message..."
            className={`w-full px-3 lg:px-4 py-2 lg:py-3 pr-10 lg:pr-12 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm lg:text-base ${
              isDarkMode 
                ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400 hover:bg-gray-600'
                : 'border-gray-300 bg-gray-50 hover:bg-white'
            }`}
          />
          <div className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 lg:gap-2">
            <button
              type="button"
              onClick={handleFileUpload}
              className={`p-1 rounded-full transition-colors duration-200 ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
              }`}
            >
              <AttachFile className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'
              }`} />
            </button>
            <button
              type="button"
              className={`p-1 rounded-full transition-colors duration-200 ${
                isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
              }`}
            >
              <EmojiEmotions className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-200 ${
                isDarkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-500 hover:text-yellow-500'
              }`} />
            </button>
          </div>
        </div>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,video/*,audio/*"
        />
        
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-2 lg:p-3 rounded-full transition-all duration-200 transform hover:scale-105 ${
            message.trim()
              ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg'
              : isDarkMode 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
        
        <button
          type="button"
          className={`p-2 lg:p-3 rounded-full transition-all duration-200 transform hover:scale-105 ${
            isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Mic className={`w-4 h-4 lg:w-5 lg:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
        </button>
      </form>
      
      {isTyping && (
        <div className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} animate-pulse`}>
          Typing...
        </div>
      )}
    </div>
  );
};

export default MessageInput;