import React from "react";
import "./ShopCard.css";
import { Button } from "@mui/material";
import { useStateValue } from "../StateProvider";

function ShopCard({ id, title, price, rating, noOfReviews, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        noOfReviews: noOfReviews,
      },
    });
  };

  return (
    <div className="shopCard">
      <div className="shopCard__info">
        <p className="shopCard__title"> {title} </p>
        <p className="shopCard__price">
          <small> $ </small>
          <strong> {price} </strong>
        </p>

        <div className="shopCard__rating">
          <p>{rating}</p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> 🌟 </p>
            ))}
          <p>({noOfReviews})</p>
        </div>
      </div>

      <img src={image} alt="" />

      <Button onClick={addToBasket} className="shopCard__button" fullWidth>
        Add to Basket
      </Button>
    </div>
  );
}

export default ShopCard;
