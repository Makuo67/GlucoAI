from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib
from fastapi import Request


# Load model
model = joblib.load("diabetes.pkl")
scaler = joblib.load("diabetes_scaler.pkl")

app = FastAPI()

origins = [
    "http://localhost:3000",  # Assuming your React app runs on localhost:3000
    "http://127.0.0.1:3000",  # Include both localhost and 127.0.0.1 for safety
    "https://glucoai.onrender.com",  # react URL

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins to make requests
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class PredictionInput(BaseModel):
    HighBP: int
    HighChol: int
    CholCheck: int
    BMI: int
    Smoker: int
    Stroke: int
    HeartDiseaseorAttack: int
    PhyActiviity: int
    Fruits: int
    Veggies: int
    HvyAlcoholConsump: int
    AnyHealthcare: int
    NoDocbcCost: int
    GenHlth: int
    MentHlth: int
    PhysHlth: int
    DiffWalk: int
    Sex: int
    Age: int
    Education: int
    Income: int


# @app.post("/predict")
# async def predict(request: Request):
#     # Get and print the raw body for debugging
#     body = await request.body()
#     print(body.decode("utf-8"))  # Temporarily print input_data for debugging


@app.post("/predict")
async def predict(input_data: PredictionInput):
    try:

        # Convert input data to a format your model expects, e.g., a NumPy array
        data = np.array(
            [[input_data.HighBP, input_data.HighChol, input_data.CholCheck,
              input_data.BMI, input_data.Smoker, input_data.Stroke, input_data.HeartDiseaseorAttack,
              input_data.PhyActiviity, input_data.Fruits, input_data.Veggies, input_data.HvyAlcoholConsump, input_data.AnyHealthcare,
              input_data.NoDocbcCost, input_data.GenHlth, input_data.MentHlth, input_data.PhysHlth,
              input_data.DiffWalk, input_data.Sex, input_data.Age, input_data.Education, input_data.Income]])
        # Make prediction

        scaled_input_features = scaler.transform(data)
        prediction = model.predict(scaled_input_features)

        if isinstance(prediction, np.ndarray):
            # Correctly extracts the first item as a Python scalar
            prediction_result = prediction.item(0)
        else:
            prediction_result = prediction

        # You can customize the return message based on your prediction
        return {"prediction": prediction_result}
    except Exception as e:
        print(f"Error during prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))
