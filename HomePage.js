import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="auth-page">
        <h2>Welcome to HealthCert</h2>
        <p>Securely manage your vaccination and health records.</p>

        <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
          <button onClick={() => navigate("/login")}>Log In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>

        <div className="about-us">
          <h3>About Us</h3>
          <p>
            HealthCert is your secure digital companion for storing vaccination history, 
            managing medical records, and sharing essential health info with schools 
            and healthcare providers—all in one place.
          </p>
        </div>
      </div>

      <footer>
        Created by Team HealthCert: Colby, Serene, Reanna, and Akshish
      </footer>
    </>
  );
}

export default HomePage;
