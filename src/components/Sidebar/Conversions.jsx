import React, { useState } from 'react';
import Conversion from './Conversion';

const Conversions = ({ onSelectConversation, isDarkMode = false }) => {
  const [selectedId, setSelectedId] = useState(null);

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      name: 'Alice Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Hey! How are you doing today? 😊',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      unreadCount: 2,
      isOnline: true,
      status: 'read'
    },
    {
      id: 2,
      name: 'Bob Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The project is looking great!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      unreadCount: 0,
      isOnline: false,
      status: 'read'
    },
    {
      id: 3,
      name: 'Carol Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Can we meet tomorrow?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 1,
      isOnline: true,
      status: 'sent'
    },
    {
      id: 4,
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for the help!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      unreadCount: 0,
      isOnline: false,
      status: 'read'
    },
    {
      id: 5,
      name: 'Emma Brown',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The presentation went well!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    },
    {
      id: 6,
      name: 'Frank Miller',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Let\'s catch up soon!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      unreadCount: 3,
      isOnline: false,
      status: 'sent'
    },
    {
      id: 7,
      name: 'Grace Lee',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The new design looks amazing!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    },
    {
      id: 8,
      name: 'Henry Taylor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Meeting at 3 PM today',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
      unreadCount: 1,
      isOnline: false,
      status: 'sent'
    },
    {
      id: 9,
      name: 'Iris Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Happy birthday! 🎉',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    },
    {
      id: 10,
      name: 'Jack Anderson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The code review is complete',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
      unreadCount: 2,
      isOnline: false,
      status: 'sent'
    },
    {
      id: 11,
      name: 'Kate Martinez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Looking forward to the weekend!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    },
    {
      id: 12,
      name: 'Liam O\'Connor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Great work on the project!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9),
      unreadCount: 1,
      isOnline: false,
      status: 'sent'
    },
    {
      id: 13,
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'The meeting was productive!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    },
    {
      id: 14,
      name: 'Noah Garcia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Can you review my code?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 11),
      unreadCount: 1,
      isOnline: false,
      status: 'sent'
    },
    {
      id: 15,
      name: 'Olivia Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      lastMessage: 'Thanks for the feedback!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
      unreadCount: 0,
      isOnline: true,
      status: 'read'
    }
  ];

  const handleConversationClick = (conversation) => {
    setSelectedId(conversation.id);
    onSelectConversation?.(conversation);
  };

  return (
    <div className="h-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      {conversations.map((conversation, index) => (
        <div
          key={conversation.id}
          className={`animate-slide-in-up`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <Conversion
            conversation={conversation}
            isSelected={selectedId === conversation.id}
            onClick={handleConversationClick}
            isDarkMode={isDarkMode}
          />
        </div>
      ))}
    </div>
  );
};

export default Conversions;