// Hooks/useSendMessage.js
import { useState } from 'react';
import useConversion from '../Zustand/useConversion';
import axios from 'axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversion, messages, setMessages } = useConversion();

  const sendMessage = async (message) => {
    const token = localStorage.getItem('chat-token');
    if (!selectedConversion?._id || !message?.trim()) return;

    // Optimistic UI: update local state before server confirms
    const newMessage = {
      _id: Date.now().toString(), // temp ID until server sends real one
      text: message,
      sender: 'you',
      createdAt: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);

    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:8000/api/message/send/${selectedConversion._id}`,
        { message },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Replace temp message with actual server response (optional)
      const savedMessage = response.data?.message;
      if (savedMessage) {
        setMessages((prev) =>
          prev.map((m) => (m._id === newMessage._id ? savedMessage : m))
        );
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Rollback if needed
      setMessages((prev) => prev.filter((m) => m._id !== newMessage._id));
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
