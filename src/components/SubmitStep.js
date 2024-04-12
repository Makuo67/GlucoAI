import React from "react";

const SubmitStep = ({ userInputs, updatePredictionResult }) => {
  // Provided mappings
  const yesNoMapping = { Yes: 1, No: 0 };
  const maleFemaleMapping = { Male: 1, Female: 0 };
  const ageMapping = {
    "18-24": 1,
    "25-29": 2,
    "30-34": 3,
    "35-39": 4,
    "40-44": 5,
    "45-49": 6,
    "50-54": 7,
    "55-59": 8,
    "60-64": 9,
    "65-69": 10,
    "70-74": 11,
    "75-79": 12,
    "80 and older": 13,
  };
  const educationMapping = {
    "Never attended school/Kindergarten": 1,
    Elementary: 2,
    "Some high school": 3,
    "High school graduate": 4,
    "Some college or technical school": 5,
    "College graduate": 6,
  };
  const incomeMapping = {
    "< $10,000": 1,
    "$10,000 - $14,000": 2,
    "$15,000 - $19,000": 3,
    "$20,000 - $24,000": 4,
    "$25,000 - $34,000": 5,
    "$35,000 - $49,000": 6,
    "$50,000 - $74,000": 7,
    "$75,000 or more": 8,
  };
  const healthMapping = {
    Excellent: 1,
    "Very Good": 2,
    Good: 3,
    Fair: 4,
    Poor: 5,
  };

  // This function converts the user's textual answers to numerical values or appropriate formats
  // based on the mappings defined above.
  const prepareInputForAPI = () => {
    const inputObject = userInputs.reduce((acc, { question, answer }) => {
      let value = answer; // Default to raw answer

      // Apply specific mappings based on the question
      if (yesNoMapping[answer] !== undefined) {
        value = yesNoMapping[answer];
      } else if (maleFemaleMapping[answer] !== undefined) {
        value = maleFemaleMapping[answer];
      } else if (ageMapping[answer] !== undefined) {
        value = ageMapping[answer];
      } else if (educationMapping[answer] !== undefined) {
        value = educationMapping[answer];
      } else if (incomeMapping[answer] !== undefined) {
        value = incomeMapping[answer];
      } else if (healthMapping[answer] !== undefined) {
        value = healthMapping[answer];
      } else {
        // For numerical inputs like BMI, MentHlth, PhysHlth, convert to integer
        value = parseInt(answer, 10);
      }

      // Use the API's expected field names as keys
      const apiFieldMapping = {
        "Have you been told you have high blood pressure by a doctor, nurse, or other health professional?":
          "HighBP",
        "Have you EVER been told by a doctor, nurse or other health professional that your blood cholesterol is high?":
          "HighChol",
        "Have you had a cholesterol check within the past five years?":
          "CholCheck",
        "Have you smoked at least 100 cigarettes in your entire life?":
          "Smoker",
        "Have you ever been told you had a stroke?": "Stroke",
        "Have you ever reported having coronary heart disease (CHD) or myocardial infarction (MI)?":
          "HeartDiseaseorAttack",
        "Did you do any physical activity or exercise during the past 30 days other than your regular job?":
          "PhyActiviity",
        "Do you consume fruit 1 or more times per day?": "Fruits",
        "Do you consume vegetables 1 or more times per day?": "Veggies",
        "Are you a heavy drinker (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)?":
          "HvyAlcoholConsump",
        "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, or government plans such as Medicare, or Indian Health Service?":
          "AnyHealthcare",
        "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?":
          "NoDocbcCost",
        "Do you have serious difficulty walking or climbing stairs?":
          "DiffWalk",
        "In general, how would you rate your health?": "GenHlth",
        "For how many days during the past 30 days was your mental health not good?":
          "MentHlth",
        "For how many days during the past 30 days was your physical health not good?":
          "PhysHlth",
        "What is your Body Mass Index (BMI)?": "BMI",
        "What is your sex?": "Sex",
        "What is your age category?": "Age",
        "What is the highest grade or year of school you completed?":
          "Education",
        "What is your annual household income from all sources?": "Income",
      };

      const apiFieldName = apiFieldMapping[question];
      if (apiFieldName) {
        acc[apiFieldName] = value;
      }

      return acc;
    }, {});

    return inputObject;
  };

  // Handles submission of the prepared data to the API
  const handleSubmit = async () => {
    const inputObject = prepareInputForAPI();
    console.log(JSON.stringify(inputObject, null, 2));

    try {
      const response = await fetch(
        "https://glucoai-5bra.onrender.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputObject),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      // Message Output
      // Message Output
      const message =
        result.prediction === 0
          ? "No Diabetes Risk Detected"
          : "Diabetes Risk Detected!";
      const messageStyle = {
        color: result.prediction === 0 ? "green" : "red",
        fontWeight: "bold",
        fontSize: "18px",
        marginTop: "20px",
      };
      updatePredictionResult(<div style={messageStyle}>{message}</div>);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      updatePredictionResult("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <button id="submit-button" onClick={handleSubmit}>
        Submit for Prediction
      </button>
    </div>
  );
};

export default SubmitStep;
