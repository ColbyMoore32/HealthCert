import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const success = onLogin(username, password);
    if (success === "institution") {
      navigate("/institution");
    } else if (success === "user") {
      navigate("/health-profile");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="auth-page">
      <h2>Log in to HealthCert</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
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
        <p onClick={() => navigate("/signup")} className="link-text">
          Sign up
        </p>
        <p onClick={() => navigate("/")} className="link-text">
          Back to Home
        </p>
        <p onClick={() => navigate("/institution-login")} className="link-text">
          Institution Login
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
