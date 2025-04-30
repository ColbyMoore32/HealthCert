import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function InstitutionPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-page institution-page">
      <h2>Institution Access</h2>
      <p>Search or upload certified documents with user permission.</p>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Patient ID or Name"
          className="input-field"
        />
        <input type="file" className="input-field" />
      </div>

      <button className="primary-button">Upload Record</button>

      {}
      <p className="link-text" onClick={() => navigate("/")}>
        Back to Home
      </p>
    </div>
  );
}

export default InstitutionPage;
