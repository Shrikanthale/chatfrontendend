// src/Hooks/useLogout.js
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/api/user/logout");
      localStorage.removeItem("chat-user");
      setAuthUser(null);  // 🔥 Important to update context
      navigate("/signin"); // 🔄 Redirect user after logout
    } catch (error) {
      console.log("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
