import React from "react";
import "./Banner.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Banner() {
  const [{ user }] = useStateValue();
  return (
    <div className="banner">
      <div className="banner__contents">
        <h1>Excuses Don't Burn Calories.</h1>

        <h2>
          {user
            ? `Embrace fitness. Welcome Back ${user.displayName}`
            : "Embrace fitness. Welcome... Guest"}
          !
        </h2>

        <Link to="./training">
          <Button className="banner__button" variant="outlined">
            Get Started
          </Button>
        </Link>
      </div>
      {/*
      <iframe
      className="banner__iframe"
        frameborder="0"
        src="https://biteable.com/watch/embed/3996651/38cc86a7c3848162edcb08d3fe7f1dba"
        allowfullscreen="true"
        allow="autoplay"
      ></iframe> */}
    </div>
  );
}

export default Banner;
