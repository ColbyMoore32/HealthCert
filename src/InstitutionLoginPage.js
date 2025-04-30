import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function InstitutionLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    if (username === "institution" && password === "securepassword") {
      navigate("/institution");
    } else {
      alert("Invalid institution credentials.");
    }
  };

  return (
    <div className="auth-page">
      <h2>Institution Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Institution Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
        <p onClick={() => navigate("/")} className="link-text">
          Back to Home
        </p>
      </form>
    </div>
  );
}

export default InstitutionLoginPage;
