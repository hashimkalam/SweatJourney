import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import Payments from "./Payments";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__header">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <div className="checkout__headerItems">
                <p id="checkout__welcome">
                  {"Welcome, " + (user ? user.displayName : "Guest")}
                </p>
                <p>Total Amount of items: {basket.length}</p>
                <p>Total Price of items: {value}</p>
              </div>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeparator={true}
          prefix="$"
        />
      </div>
      <h2>Your Cart</h2>
      <hr className="checkout__hr" />
      <div className="checkout__contents">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            noOfReviews={item.noOfReviews}
          />
        ))}
      </div>

      <Payments />
    </div>
  );
}

export default Checkout;
