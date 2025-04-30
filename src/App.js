import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HealthProfilePage from "./HealthProfilePage";
import HomePage from "./HomePage";
import ChatSupport from "./ChatSupport";
import InstitutionLoginPage from "./InstitutionLoginPage";
import InstitutionPage from "./InstitutionPage";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const getStoredUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const onSignUp = (username, password) => {
    const newUser = { username, password };
    const users = getStoredUsers();
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(newUser);
  };

  const onLogin = (username, password) => {
    const users = getStoredUsers();
    const matchedUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (matchedUser) {
      setUser(matchedUser);
      return "user";
    }
    return false;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/signup" element={<SignUpPage onSignUp={onSignUp} />} />
        <Route path="/health-profile" element={<HealthProfilePage />} />
        <Route path="/institution-login" element={<InstitutionLoginPage />} />
        <Route path="/institution" element={<InstitutionPage />} />
      </Routes>
      <ChatSupport />
    </Router>
  );
}

export default App;
