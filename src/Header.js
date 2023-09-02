import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";

function Header() {
  const [{ user }] = useStateValue();
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="../logo.png" alt="Logo" />
      </Link>
      <SwipeDownAltIcon className="header__icon" onClick={openSidebar} />
      <ul className={`sideMenu ${showSidebar ? "show" : "hide"}`}>
        <SwipeUpAltIcon className="header__closeIcon" onClick={closeSidebar} />
        <li>
          <Link onClick={closeSidebar} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebar} to="/training">
            Training
          </Link>
        </li>

        <li>
          <Link onClick={closeSidebar} to="/gallery">
            Gallery
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebar} to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebar} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={closeSidebar} to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="header__buttons">
        <Link to={!user ? "/login" : ""}>
          <Button
            onClick={handleAuthentication}
            className="header__buttonSignUp"
            variant="outlined"
          >
            {user ? "Sign Out" : "Register"}
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
