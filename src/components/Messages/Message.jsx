import React from 'react';
import { CheckCircle, Done, DoneAll, Schedule } from '@mui/icons-material';

const Message = ({ message, isOwn, timestamp, status = 'sent', isDarkMode = false }) => {
  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <Schedule className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <Done className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <DoneAll className="w-4 h-4 text-blue-500" />;
      default:
        return <Schedule className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4 animate-slide-in`}>
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${isOwn ? 'order-2' : 'order-1'}`}>
        {/* Avatar */}
        {!isOwn && (
          <div className="flex items-end mb-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-semibold mr-2">
              {message.sender?.charAt(0) || 'U'}
            </div>
          </div>
        )}
        
        {/* Message Content */}
        <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`relative px-4 py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
              isOwn
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
                : isDarkMode 
                  ? 'bg-gray-700 text-gray-200 rounded-bl-md'
                  : 'bg-gray-100 text-gray-800 rounded-bl-md'
            }`}
          >
            {/* Message Text */}
            <div className="text-sm leading-relaxed">
              {message.text}
            </div>
            
            {/* Timestamp and Status */}
            <div className={`flex items-center justify-end mt-1 gap-1 ${
              isOwn ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <span className="text-xs">
                {formatTime(timestamp)}
              </span>
              {isOwn && getStatusIcon(status)}
            </div>
          </div>
        </div>
        
        {/* Own Avatar */}
        {isOwn && (
          <div className="flex items-end justify-end mb-1 mt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center text-white text-sm font-semibold ml-2">
              Me
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;