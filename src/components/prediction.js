// Prediction.js
import React, { useState } from "react";
import QuestionStep from "./QuestionStep"; // Make sure the path is correct
import SubmitStep from "./SubmitStep"; // Make sure the path is correct
import inputSteps from "./inputSteps"; // Assuming you moved your questions here

const Prediction = () => {
  const [step, setStep] = useState(0);
  const [userInputs, setUserInputs] = useState([]);
  const [predictionResult, setPredictionResult] = useState("");

  const handleNext = (newInput) => {
    setUserInputs([...userInputs, newInput]);
    setStep(step + 1);
  };

  const updatePredictionResult = (result) => {
    setPredictionResult(result);
  };

  return (
    <div className="prediction-section">
      {step < inputSteps.length ? (
        <QuestionStep
          step={step}
          inputStep={inputSteps[step]}
          handleNext={handleNext}
        />
      ) : (
        <SubmitStep
          userInputs={userInputs}
          updatePredictionResult={updatePredictionResult}
        />
      )}
      {predictionResult && <div>Prediction: {predictionResult}</div>}
    </div>
  );
};

export default Prediction;
