import React, { useEffect, useState } from "react";
import "./Payments.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { Button } from "@mui/material";

function Payments() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // const payload = await stripe
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payments">
      <div className="payments__container">
        <p>{user ? user?.displayName : "Guest"}</p>
      </div>

      <form className="payments__input" onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />

        <div className="payments__price">
          <CurrencyFormat
            renderText={(formattedValue) => (
              <>
                <h3>Order Total: {formattedValue}</h3>
              </>
            )}
            decimalScale={2}
            value={2.5}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
          <Button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p> Processing </p> : <p>Buy Now</p>}</span>
          </Button>
        </div>

        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Payments;
