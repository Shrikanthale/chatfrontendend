// src/Routes/AppRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../Registration/SignUp";
import SignIn from "../Registration/SignIn"; // Make sure this filename matches exactly
import ChatPage from "../Home/ChatPage";
import CreatePost from "../Pages/Post/CreatePost";
import AllPost from "../Pages/Post/AllPost";
import { useAuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  const { authUser } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={authUser ? <ChatPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/createpost"
          element={authUser ? <CreatePost /> : <Navigate to="/signin" />}
        />
        <Route path="/posts" element={<AllPost />} />
        {/* fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
