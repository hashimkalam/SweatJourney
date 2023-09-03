import React, { useEffect, useState } from "react";
import "./Payments.css";
import { CardElement } from "@stripe/react-stripe-js";
import { useStateValue } from "../StateProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Payments() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    {
      !error && navigate("/");
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payments">
      <h2> Make your Transaction </h2>
      <form className="payments__input" onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />

        <Button
          onClick={handleSubmit}
          className="payments__button"
          disabled={error || disabled}
        >
          Buy Now
        </Button>

        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Payments;
