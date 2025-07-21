import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar, IconButton, InputAdornment } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' },
    { from: 'user', text: 'Hi! I want to know more about your services.' },
    { from: 'bot', text: 'Sure! Ask me anything.' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    // Simulate bot reply
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: "I'm just a demo bot!" }]);
    }, 800);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
      <Paper elevation={10} sx={{ p: 0, borderRadius: 5, minWidth: 370, maxWidth: 500, width: '100%', height: 600, display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', borderTopLeftRadius: 20, borderTopRightRadius: 20, py: 2, mb: 1 }}>
          <Avatar sx={{ bgcolor: 'white', color: 'primary.main', mr: 1 }}>
            <ChatBubbleOutlineIcon />
          </Avatar>
          <Typography variant="h4" sx={{ fontFamily: '"Caveat", cursive', fontWeight: 700, color: 'white', letterSpacing: 2 }}>
            Chat Room
          </Typography>
        </Box>
        {/* Chat Area */}
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 1, bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 3 }}>
          {messages.map((msg, idx) => (
            <Box key={idx} sx={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 1.5,
                  maxWidth: '70%',
                  bgcolor: msg.from === 'user' ? 'primary.main' : 'grey.200',
                  color: msg.from === 'user' ? 'white' : 'black',
                  borderTopLeftRadius: msg.from === 'user' ? 16 : 4,
                  borderTopRightRadius: msg.from === 'user' ? 4 : 16,
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  fontFamily: 'inherit',
                  fontSize: '1.1rem',
                }}
              >
                {msg.text}
              </Paper>
            </Box>
          ))}
          <div ref={chatEndRef} />
        </Box>
        {/* Input Area */}
        <Box component="form" onSubmit={handleSend} sx={{ display: 'flex', alignItems: 'center', p: 2, borderTop: '1px solid #eee', bgcolor: 'rgba(255,255,255,0.9)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            fullWidth
            variant="outlined"
            sx={{ mr: 2, fontFamily: 'inherit' }}
            InputProps={{
              style: { fontFamily: 'inherit' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" color="primary">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatPage;
