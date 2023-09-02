import React from "react";
import "./CheckoutProduct.css";
import { Button } from "@mui/material";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, noOfReviews }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (e) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__Left">
        <img src={image} alt={title} />

        <div className="checoutProduct__info">
          <p className="checoutProduct__title">{title}</p>
          <p className="checoutProduct__price">
            <small>$</small>
            <strong> {price} </strong>
          </p>
          <div className="checkoutProduct__rating">
            <p>({rating})</p>
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}> 🌟 </p>
              ))}
            <p>({noOfReviews})</p>
          </div>

          <Button
            onClick={removeFromBasket}
            fullWidth
            className="checkoutProduct__remove"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
