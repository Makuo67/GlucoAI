const inputSteps = [
  {
    question:
      "Have you been told you have high blood pressure by a doctor, nurse, or other health professional?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Have you EVER been told by a doctor, nurse or other health professional that your blood cholesterol is high?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "Have you had a cholesterol check within the past five years?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "What is your Body Mass Index (BMI)?",
    type: "number",
  },
  {
    question: "Have you smoked at least 100 cigarettes in your entire life?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "Have you ever been told you had a stroke?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Have you ever reported having coronary heart disease (CHD) or myocardial infarction (MI)?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Did you do any physical activity or exercise during the past 30 days other than your regular job?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "Do you consume fruit 1 or more times per day?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "Do you consume vegetables 1 or more times per day?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Are you a heavy drinker (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, or government plans such as Medicare, or Indian Health Service?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question:
      "Was there a time in the past 12 months when you needed to see a doctor but could not because of cost?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "In general, how would you rate your health?",
    options: ["Excellent", "Very Good", "Good", "Fair", "Poor"],
    type: "select",
  },
  {
    question:
      "For how many days during the past 30 days was your mental health not good?",
    type: "number",
    options: [0, 30],
  },
  {
    question:
      "For how many days during the past 30 days was your physical health not good?",
    type: "number",
    options: [0, 30],
  },
  {
    question: "Do you have serious difficulty walking or climbing stairs?",
    options: ["Yes", "No"],
    type: "radio",
  },
  {
    question: "What is your sex?",
    options: ["Male", "Female"],
    type: "radio",
  },
  {
    question: "What is your age category?",
    options: [
      "18-24",
      "25-29",
      "30-34",
      "35-39",
      "40-44",
      "45-49",
      "50-54",
      "55-59",
      "60-64",
      "65-69",
      "70-74",
      "75-79",
      "80 and older",
    ],
    type: "select",
    // For sliders, the options array could be used differently or complemented by a separate configuration
  },
  {
    question: "What is the highest grade or year of school you completed?",
    options: [
      "Never attended school/Kindergarten",
      "Elementary",
      "Some high school",
      "High school graduate",
      "Some college or technical school",
      "College graduate",
    ],
    type: "select",
    // Additional handling might be needed for custom slider display
  },
  {
    question: "What is your annual household income from all sources?",
    options: [
      "< $10,000",
      "$10,000 - $14,000",
      "$15,000 - $19,000",
      "$20,000 - $24,000",
      "$25,000 - $34,000",
      "$35,000 - $49,000",
      "$50,000 - $74,000",
      "$75,000 or more",
    ],
    type: "select",
  },
];

export default inputSteps;
