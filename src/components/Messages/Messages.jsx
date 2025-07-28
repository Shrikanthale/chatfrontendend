import React, { useEffect, useRef } from 'react';
import Message from './Message';

const Messages = ({ messages = [], isTyping = false, isDarkMode = false }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample messages for demonstration
  const sampleMessages = [
    {
      id: 1,
      text: "Hey! How are you doing today? 😊",
      sender: "Alice",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isOwn: false
    },
    {
      id: 2,
      text: "I'm doing great! Just finished working on a new project. How about you?",
      sender: "Me",
      timestamp: new Date(Date.now() - 1000 * 60 * 4),
      isOwn: true,
      status: 'read'
    },
    {
      id: 3,
      text: "That sounds exciting! What kind of project is it?",
      sender: "Alice",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      isOwn: false
    },
    {
      id: 4,
      text: "It's a chat application with beautiful animations and responsive design!",
      sender: "Me",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      isOwn: true,
      status: 'delivered'
    },
    {
      id: 5,
      text: "Wow, that sounds amazing! Can't wait to see it in action! 🚀",
      sender: "Alice",
      timestamp: new Date(Date.now() - 1000 * 60 * 1),
      isOwn: false
    },
    {
      id: 6,
      text: "The animations are so smooth and the design is really modern!",
      sender: "Me",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isOwn: true,
      status: 'read'
    },
    {
      id: 7,
      text: "I love how responsive it is on mobile devices too!",
      sender: "Alice",
      timestamp: new Date(Date.now() - 1000 * 60 * 25),
      isOwn: false
    },
    {
      id: 8,
      text: "Yes, it's built with mobile-first design principles!",
      sender: "Me",
      timestamp: new Date(Date.now() - 1000 * 60 * 20),
      isOwn: true,
      status: 'delivered'
    },
    {
      id: 9,
      text: "The gradient backgrounds and animations make it feel so premium!",
      sender: "Alice",
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      isOwn: false
    },
    {
      id: 10,
      text: "Thank you! I put a lot of effort into the design details.",
      sender: "Me",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      isOwn: true,
      status: 'read'
    }
  ];

  const displayMessages = messages.length > 0 ? messages : sampleMessages;

  return (
    <div className={`flex-1 overflow-y-auto p-4 space-y-4 h-full ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Welcome Message */}
      <div className="text-center py-8">
        <div className={`inline-block rounded-full p-4 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">💬</span>
          </div>
          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Welcome to ChatApp</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Start a conversation and enjoy the beautiful experience!</p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {displayMessages.map((message, index) => (
          <div
            key={message.id || index}
            className={`animate-slide-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Message
              message={message}
              isOwn={message.isOwn}
              timestamp={message.timestamp}
              status={message.status}
              isDarkMode={isDarkMode}
            />
          </div>
        ))}
      </div>

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex justify-start mb-4 animate-fade-in">
          <div className={`flex items-center space-x-2 rounded-full px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Alice is typing...</span>
          </div>
        </div>
      )}

      {/* Scroll to bottom reference */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;