import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { auth } from "../firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="logo.png" />
      </Link>
      <div className="login__container">
        <div className="login__containerHeading">
          <Link to="/" className="login__backLink">
            <ArrowBackIosIcon className="login__backIcon" />
          </Link>
          <h1>Sign In</h1>
        </div>

        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={signIn}
            className="login__containerButton"
          >
            Sign In
          </Button>
        </form>
        <p>
          By signing-in you agree to SweatJourney's Conditions of Use & Sale.
        </p>
      </div>
      <Link to="./createAccount">
        <Button className="login__registerButton">Create your account</Button>
      </Link>
    </div>
  );
}

export default Login;
