import React from 'react';
import { CheckCircle } from '@mui/icons-material';
// import useConversion from '../../Zustand/useConversion';

const Conversion = ({ conversation, isSelected, onClick, isDarkMode = false }) => {
  const {
    name,
    profilePic,
    lastMessage,
    updatedAt,
    unreadCount = 0,
    status = 'offline',
    isOnline = false
  } = conversation;
  // const {selectedConversion , setSelectedConversion} = useConversion()

  // const isSelected = selectedConversion._id ==

  const formatTime = (time) => {
    const now = new Date();
    const messageTime = new Date(time);
    const diffInHours = (now - messageTime) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return messageTime.toLocaleTimeString([], { minute: '2-digit', hour: '2-digit' });
    } else if (diffInHours < 24) {
      return messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return messageTime.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return (
    <>
    <div
      onClick={() => onClick?.(conversation)}
      className={`cursor-pointer transition-all duration-200 ${
        isSelected 
          ? isDarkMode ? 'bg-gray-700 border-r-2 border-blue-500' : 'bg-blue-50 border-r-2 border-blue-500'
          : isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center p-3 lg:p-4 space-x-2 lg:space-x-3">
        {/* profilePic */}
        <div className="relative flex-shrink-0">
          <img
            src={profilePic || "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"}
            alt={name}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
          />
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white ${
            isOnline ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className={`font-semibold truncate text-sm lg:text-base ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>{name}</h4>
            <span className={`text-xs flex-shrink-0 ml-2 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {formatTime(updatedAt)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <p className={`text-xs lg:text-sm truncate flex-1 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {lastMessage}
            </p>
            
            <div className="flex items-center space-x-1 lg:space-x-2 ml-2">
              {unreadCount > 0 && (
                <span className="bg-blue-500 text-white text-xs rounded-full px-1.5 lg:px-2 py-0.5 lg:py-1 min-w-[16px] lg:min-w-[20px] text-center">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </span>
              )}
              {status === 'read' && (
                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Conversion;