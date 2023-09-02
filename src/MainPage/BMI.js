import React, { useState } from "react";
import "./BMI.css";
import { Button } from "@mui/material";
import AddAlertIcon from "@mui/icons-material/AddAlert";

function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [total, setTotal] = useState("");
  const [feedback, setFeedback] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    setTotal(bmi.toFixed(2));

    if (isNaN(bmi)) {
      setFeedback(
        <p style={{ fontSize: "12px" }}>Enter the required values!</p>
      );
    } else if (bmi > 40) {
      setFeedback(
        <p
          style={{
            color: "rgba(255, 0, 0, 1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Obesity <AddAlertIcon />
        </p>
      );
    } else if (bmi > 35) {
      setFeedback(<p style={{ color: "rgba(255, 0, 0, 1)" }}>Obesity</p>);
    } else if (bmi > 30) {
      setFeedback(<p style={{ color: "rgba(255, 0, 0, .7)" }}>Obesity</p>);
    } else if (bmi > 25) {
      setFeedback(<p style={{ color: "rgba(255, 165, 0, 1)" }}>Overweight</p>);
    } else if (bmi > 18.5) {
      setFeedback(<p style={{ color: "rgba(0, 255, 0, 1)" }}>Normal</p>);
    } else if (bmi > 16) {
      setFeedback(<p style={{ color: "rgba(255, 0, 0, .7)" }}>Underweight</p>);
    } else {
      setFeedback(
        <p
          style={{
            color: "rgba(255, 0, 0, 1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Underweight <AddAlertIcon />
        </p>
      );
    }
    setWeight("");
    setHeight("");
  };

  return (
    <div className="bmi">
      <div className="bmi__container">
        <h2>Unlock Your Health Stats: Calculate Your BMI </h2>
        <p>Ready to Begin? Kickstart Your Journey with Your BMI!</p>
        <form>
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
            type="number"
          />
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in m"
            type="number"
          />
          <Button
            className="bmi__containerButton"
            onClick={calculateBMI}
            type="button"
          >
            Calculate
          </Button>
          <div className="bmi__result">
            <h5>Your BMI is - {total}</h5>
            {feedback}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMI;
