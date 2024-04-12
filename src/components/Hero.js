// components/Hero.js
import React, { useState } from "react";

import Prediction from "./prediction"; // Import the Prediction component

const Hero = () => {
  const [showPrediction, setShowPrediction] = useState(false); // State to control the visibility of prediction questions

  // Function to toggle the visibility of prediction questions
  const togglePrediction = () => {
    setShowPrediction(!showPrediction);
  };

  return (
    <div className="hero" id="home">
      <h2>Predict Your Diabetes Risk</h2>
      <p>
        Gluco AI is an advanced machine learning model that can predict your
        risk of developing diabetes based on your health data.
      </p>
      <button className="cta-btn" onClick={togglePrediction}>
        Get Started
      </button>

      {/* Render Prediction component if showPrediction state is true */}
      {showPrediction && <Prediction />}
    </div>
  );
};

export default Hero;
