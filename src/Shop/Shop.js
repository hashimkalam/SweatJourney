import React from "react";
import "./Shop.css";
import ShopCard from "./ShopCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import CommonBanner from "../CommonBanner";

function Shop() {
  const [{ basket }] = useStateValue();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="shop">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <CommonBanner
        heading="Shop"
        image="https://wallpapercave.com/wp/wp2510461.jpg"
      />

      <div className="shop__container">
        <Link to="/checkout">
          <div className="shop__header">
            <ShoppingCartIcon fontSize="large" />
            <h2 style={{ color: "#1E90FF" }}>{basket?.length}</h2>
          </div>
        </Link>
        <div className="shop__row">
          <ShopCard
            id=""
            title="Faster Rubber Hex Dumbbell Sets"
            price={14.99}
            rating={4}
            noOfReviews={522}
            image="https://www.againfaster.com/cdn/shop/products/Dumbbells5.jpg?v=1656453932"
          />
          <ShopCard
            id="8745269138"
            title="METIS Rubber Barbell Weights [10kg-30kg]"
            price={19.99}
            rating={5}
            noOfReviews={522}
            image="https://nwscdn.com/media/catalog/product/2/5/25kg_1_5.jpg"
          />
          <ShopCard
            id="3658974210"
            title="Bowflex Treadmill 22 - Black | NFM"
            price={249.99}
            rating={4}
            noOfReviews={522}
            image="https://www.nfm.com/dw/image/v2/BDFM_PRD/on/demandware.static/-/Sites-nfm-master-catalog/default/dwe86709ce/images/058/20/58201443-3.jpg?sw=1000&sh=1000&sm=fit"
          />
        </div>
        <div className="shop__row">
          <ShopCard
            id="6921748305"
            title="50 lb Kettlebell (23 kg) - Made in the USA"
            price={99.5}
            rating={4}
            noOfReviews={522}
            image="https://www.usa-iron.com/cdn/shop/products/8Y0A9321_reduced_1344x.jpg?v=1655075241"
          />
          <ShopCard
            id="2187965340"
            title="PROIRON Resistance Bands - Assisted Pull-up Bands"
            price={12.99}
            rating={3}
            noOfReviews={128}
            image="https://proiron.com/cdn/shop/products/1_1b7c6409-2209-4228-bfb4-0466bb698196_1000x.jpg?v=1662710311"
          />
        </div>
        <div className="shop__row">
          <ShopCard
            id="7534619820"
            title="METIS Medicine Balls [1-10kg]"
            price={20.99}
            rating={5}
            noOfReviews={412}
            image="https://nwscdn.com/media/catalog/product/m/e/medicine-ball-10kg.jpg"
          />
          <ShopCard
            id="4890237165"
            title="Pro Battle Ropes With Anchor Strap Kit"
            price={129.99}
            rating={4}
            noOfReviews={522}
            image="https://1and1life-cdn.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/08/10091618/pro-ropes.jpg"
          />
          <ShopCard
            id="5062398147"
            title="VAISHNAVI FITNESS Gym Bench Home gym Heavy Duty 8 in 1 Gym Bench"
            price={699.99}
            rating={4}
            noOfReviews={201}
            image="https://m.media-amazon.com/images/I/61OQFmLDuyL.jpg"
          />
          <ShopCard
            id="9321486057"
            title="75cm Stability Ball – Black/White – GoZone – GoZone Canada"
            price={149.99}
            rating={4}
            noOfReviews={522}
            image="https://go-zone.ca/cdn/shop/products/191730243581_2_6013ac81-c3da-4318-beb0-d703a157282d_2000x.jpg?v=1572646096"
          />
        </div>
        <div className="shop__row">
          <ShopCard
            id="6715398204"
            title="TOPOKO Pull Up Bar for Doorway, No Screws Portable Chin Up Bar Doorway, Strength Training Door Frame"
            price={24.99}
            rating={3}
            noOfReviews={129}
            image="https://m.media-amazon.com/images/I/61gRqLFMiLL._AC_UF1000,1000_QL80_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
