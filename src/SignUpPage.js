import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter a username and password.");
      return;
    }
    onSignUp(username, password);
    navigate("/health-profile");
  };

  return (
    <div className="auth-page">
      <h2>Sign Up for HealthCert</h2>
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
        <button type="submit">Sign up</button>
        <p onClick={() => navigate("/login")} className="link-text">
          Login
        </p>
        <p onClick={() => navigate("/")} className="link-text">
          Back to Home
        </p>
      </form>
    </div>
  );
}

export default SignUpPage;
