import React, { useState } from "react";
import "./CreateAccount.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { auth } from "../firebase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        console.log("User account created successfully.");
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="createAccount">
      <Link to="/">
        <img className="createAccount__logo" src="../logo.png" />
      </Link>
      <div className="createAccount__container">
        <div className="createAccount__containerHeading">
          <Link to="/login" className="createAccount__backLink">
            <ArrowBackIosIcon className="createAccount__backIcon" />
          </Link>
          <h1>Register</h1>
        </div>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
          <Button onClick={signUp} className="createAccount__registerButton">
            Create your account
          </Button>
        </form>
        <p>
          By creating an account, you agree to SweatJourney's Conditions of Use
          & Sale.
        </p>
      </div>
    </div>
  );
}

export default CreateAccount;
