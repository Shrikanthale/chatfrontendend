import React, { useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { MoreVert, Phone, VideoCall, Search } from '@mui/icons-material';

const MessageContainer = ({ selectedConversation, isDarkMode = false }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'Me',
      timestamp: new Date(),
      isOwn: true,
      status: 'sent'
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      // Simulate reply
      const reply = {
        id: Date.now() + 1,
        text: "Thanks for your message! I'll get back to you soon. 😊",
        sender: 'Alice',
        timestamp: new Date(),
        isOwn: false
      };
      setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  const conversation = selectedConversation || {
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    status: 'online',
    lastSeen: '2 minutes ago'
  };

  return (
    <div className={`flex flex-col h-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`flex items-center justify-between p-3 lg:p-4 border-b ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} shadow-sm flex-shrink-0`}>
        <div className="flex items-center space-x-2 lg:space-x-3">
          <div className="relative">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
            />
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white ${
              conversation.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
            }`}></div>
          </div>
          <div>
            <h3 className={`font-semibold text-sm lg:text-base ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{conversation.name}</h3>
            <p className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {conversation.status === 'online' ? 'Online' : `Last seen ${conversation.lastSeen}`}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 lg:space-x-2">
          <button className={`p-1.5 lg:p-2 rounded-full transition-colors duration-200 ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
            <Search className={`w-4 h-4 lg:w-5 lg:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
          <button className={`p-1.5 lg:p-2 rounded-full transition-colors duration-200 ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
            <Phone className={`w-4 h-4 lg:w-5 lg:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
          <button className={`p-1.5 lg:p-2 rounded-full transition-colors duration-200 ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
            <VideoCall className={`w-4 h-4 lg:w-5 lg:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
          <button className={`p-1.5 lg:p-2 rounded-full transition-colors duration-200 ${
            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}>
            <MoreVert className={`w-4 h-4 lg:w-5 lg:h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden min-h-0">
        <Messages messages={messages} isTyping={isTyping} isDarkMode={isDarkMode} />
      </div>

      {/* Message Input */}
      <div className="flex-shrink-0">
        <MessageInput onSendMessage={handleSendMessage} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default MessageContainer;