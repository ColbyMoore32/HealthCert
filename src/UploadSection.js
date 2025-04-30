const classifyData = (text) => {
  const vaccinationHistory = [];
  const medicalRecords = [];
  const medications = [];
  const allergies = [];

  const vaccinationKeywords = [
    "vaccination",
    "vaccines",
    "vaccine",
    "shots",
    "immunizations",
    "immunization",
  ];
  const medicalKeywords = [
    "medical",
    "diagnoses",
    "diagnosis",
    "history",
    "conditions",
    "treatment",
    "surgery",
    "procedure",
  ];
  const medicationKeywords = [
    "medication",
    "medications",
    "medicine",
    "prescriptions",
    "dosage",
    "pills",
    "treatment",
  ];
  const allergyKeywords = [
    "allergy",
    "allergies",
    "allergic",
    "reaction",
    "sensitivity",
    "intolerance",
  ];

  const lines = text.split("\n");

  lines.forEach((line) => {
    const lowerCaseLine = line.toLowerCase();

    if (
      vaccinationKeywords.some((keyword) => lowerCaseLine.includes(keyword))
    ) {
      vaccinationHistory.push(line);
    } else if (
      medicalKeywords.some((keyword) => lowerCaseLine.includes(keyword))
    ) {
      medicalRecords.push(line);
    } else if (
      medicationKeywords.some((keyword) => lowerCaseLine.includes(keyword))
    ) {
      medications.push(line);
    } else if (
      allergyKeywords.some((keyword) => lowerCaseLine.includes(keyword))
    ) {
      allergies.push(line);
    }
  });

  return {
    vaccinationHistory,
    medicalRecords,
    medications,
    allergies,
  };
};
