import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { useNavigate } from "react-router-dom";
import "./App.css";

function HealthProfilePage() {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [classifiedData, setClassifiedData] = useState({
    vaccinationHistory: "",
    medicalRecords: "",
    medicationUsage: "",
    allergies: "",
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          console.log("Extracted Text: ", text);
          setExtractedText(text);
          classifyText(text);
        })
        .catch((err) => {
          console.error("Error during OCR:", err);
        });
    }
  };

  const classifyText = (text) => {
    const vaccinationHistory = [];
    const medicalRecords = [];
    const medicationUsage = [];
    const allergies = [];

    const lines = text.split("\n");
    lines.forEach((line) => {
      if (line.toLowerCase().includes("vaccination")) {
        vaccinationHistory.push(line);
      } else if (line.toLowerCase().includes("medication")) {
        medicationUsage.push(line);
      } else if (line.toLowerCase().includes("allergy")) {
        allergies.push(line);
      } else {
        medicalRecords.push(line);
      }
    });

    setClassifiedData({
      vaccinationHistory: vaccinationHistory.join("\n"),
      medicalRecords: medicalRecords.join("\n"),
      medicationUsage: medicationUsage.join("\n"),
      allergies: allergies.join("\n"),
    });
  };

  return (
    <div className="auth-page">
      <h2>Your Health Profile</h2>

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        <button onClick={handleUpload} className="primary-button">
          Upload and Extract Text
        </button>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          style={{ width: "300px", marginTop: "1rem" }}
        />
      )}

      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}

      <div>
        <section>
          <h3>Vaccination History</h3>
          <p>{classifiedData.vaccinationHistory}</p>
        </section>
        <section>
          <h3>Medical Records</h3>
          <p>{classifiedData.medicalRecords}</p>
        </section>
        <section>
          <h3>Medication Usage</h3>
          <p>{classifiedData.medicationUsage}</p>
        </section>
        <section>
          <h3>Allergies</h3>
          <p>{classifiedData.allergies}</p>
        </section>
      </div>

      <p className="link-text" onClick={() => navigate("/")}>
        Back to Home
      </p>
    </div>
  );
}

export default HealthProfilePage;
