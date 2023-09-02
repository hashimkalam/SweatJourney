import React, { useState } from "react";
import "./MembershipCard.css";
import { Box, Button, Modal } from "@mui/material";
import { useStateValue } from "../StateProvider";
import { CardElement } from "@stripe/react-stripe-js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function MembershipCard({ color, title, price, description }) {
  const bannerStyle = {
    backgroundColor: `${color}`,
  };

  const [{ user }] = useStateValue();
  const [open, setOpen] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    {
      !error && setOpen(false);
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="membershipCard">
      <div className="membershipCard__contentsCard" style={bannerStyle}>
        <h2>{title} </h2>
        <h4> {price}</h4>
        <p>Includes Taxes</p>

        <h4>{description}</h4>

        <Button
          className="membershipCard__contentsButton"
          onClick={() => setOpen(true)}
        >
          Purchase
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className="membershipCard__membershipBox">
            <div className="membershipCard__BoxTop">
              <ArrowBackIosIcon
                fontSize="small"
                onClick={() => setOpen(false)}
              />

              <h2>Payment</h2>
            </div>
            <p>
              Thrilled to witness your proactive steps towards contributing,
              <br />
              {user ? user.displayName : "Spotter"}!
            </p>

            <h4>{price}</h4>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <Button
                type="submit"
                className="payments__button"
                disabled={error || disabled}
              >
                Buy Now
              </Button>
              {error && <div>{error}</div>}
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MembershipCard;
