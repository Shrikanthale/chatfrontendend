import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // You may need to install js-cookie
import { useAuthContext } from '../context/AuthContext';

const SignIn = () => {
    const navigate = useNavigate()
    const { setAuthUser } = useAuthContext();
    const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/user/signin', login);
  
      if (response.status === 200 && response.data.token) {
        // Optional: Set cookie if needed
        document.cookie = `Bearer=${response.data.token}; path=/;`;
  
        // ✅ Save only user data
        const userData = response.data;
        localStorage.setItem("chat-user", JSON.stringify(userData));
        setAuthUser(userData); // ✅ Now this is correct
  
        navigate("/");
      }
    } catch (error) {
      console.log("Sign-in failed:", error);
    }
  };
  

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Paper elevation={8} sx={{ p: 5, borderRadius: 4, minWidth: 350, maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" sx={{ fontFamily: '"Caveat", cursive', fontWeight: 700, mb: 2, color: 'primary.main', letterSpacing: 2 }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSignIn} sx={{ width: '100%', mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={login.email}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputProps={{ style: { fontFamily: 'inherit' } }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={login.password}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputProps={{ style: { fontFamily: 'inherit' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, borderRadius: 2, fontWeight: 600, fontFamily: 'inherit', boxShadow: 3 }}
            fullWidth
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
