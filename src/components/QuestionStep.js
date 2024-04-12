import React, { useState } from "react";

const QuestionStep = ({ step, inputStep, handleNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleInputChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNextClick = () => {
    // Constructing the input object to be added with the selected answer
    const newInput = {
      question: inputStep.question,
      answer: selectedAnswer,
      type: inputStep.type,
    };
    // Reset selected answer for the next question
    setSelectedAnswer("");
    // Calling handleNext from Prediction.js and passing the new input
    handleNext(newInput);
  };

  return (
    <div>
      <h2>Question {step + 1}</h2>
      <p>{inputStep.question}</p>
      {inputStep.type === "radio" &&
        inputStep.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name={`inputOption-${step}`}
                value={option}
                onChange={handleInputChange}
                checked={selectedAnswer === option}
              />
              {option}
            </label>
          </div>
        ))}
      {inputStep.type === "number" && (
        <input
          type="number"
          value={selectedAnswer}
          onChange={handleInputChange}
        />
      )}
      {inputStep.type === "select" && (
        <select onChange={handleInputChange} value={selectedAnswer}>
          <option value="" disabled>
            Choose an option
          </option>
          {inputStep.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <button
        id="next-button"
        onClick={handleNextClick}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default QuestionStep;
