import React, { useState } from "react";
import "./Contact.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CommonBanner from "./CommonBanner";

function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const position = [34.0522, -118.2437];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="contact">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <CommonBanner
        heading="Contact"
        image="https://media.istockphoto.com/id/470062516/photo/strong-man.jpg?s=612x612&w=0&k=20&c=7ClhVsIxYM2wnXiiUGu0NHC9rcIsa0nkKbDxGrwLnho="
      />
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__infoLeft">
            <h2>Got Questions? Reach Out to Us!</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <textarea
                value={message}
                placeholder="Reason for Contacting Us"
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <Button fullWidth className="contact__infoButton" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="contact__infoRight">
            <h2>Why Choose Us?</h2>
            <h4>
              Embark on your fitness journey with SweatJourney! 🏋️‍♀️ Elevate your
              experience with personalized plans, expert guidance, and a
              supportive community. From tailored workouts to nutritional
              insights, SweatJourney has it all. Join us today and unlock
              fitness at your fingertips. Make every drop of sweat count – join
              SweatJourney and become your best self! 💪🌟
            </h4>

            <div className="contact__infoRightContents">
              <div className="contact__infoDetails">
                <h4>Opening Hours </h4>
                <p>
                  Mon - Fri <ArrowRightIcon /> 7am to 7pm
                </p>
                <p>
                  Sat - Sun <ArrowRightIcon /> 7am to 12 noon
                </p>
              </div>
              <div className="contact__infoDetails">
                <h4>Location</h4>
                <p>123 Main Street, Los Angeles, CA 90001</p>
              </div>
              <div className="contact__infoDetails">
                <h4>Contact</h4>
                <p> sweatjourney@gmail.com </p>
                <p> +271 1584 2574 </p>
              </div>
              <div className="contact__infoDetails">
                <h4>Follow us on</h4>
                <h5>
                  <InstagramIcon fontSize="large" />
                  <FacebookIcon fontSize="large" />
                  <TwitterIcon fontSize="large" />
                  <YouTubeIcon fontSize="large" />
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__map">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Official Location Of The Gym</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
