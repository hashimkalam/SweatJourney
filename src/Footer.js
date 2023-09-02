import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__containerLeft">
          <div className="footer__containerLeftTop">
            <p>Privacy Policy</p>
            <p>Terms and Consitions of Use</p>
          </div>
          <div className="footer__containerLeftBottom">
            <p>Copyright &copy; 2023 - SweatJourney</p>
          </div>
        </div>
        <div className="footer__containerRight">
          <p>Contact</p>
          <InstagramIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
      </div>
      <p>Designed By Hashim Kalam</p>
    </div>
  );
}

export default Footer;
