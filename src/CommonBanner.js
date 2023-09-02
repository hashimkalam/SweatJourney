import React from "react";
import "./CommonBanner.css";

function CommonBanner({ heading, image }) {
  const bannerStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="commonBanner" style={bannerStyle}>
      <div className="commonBanner__contents">
        <h2>{heading}</h2>
      </div>
    </div>
  );
}

export default CommonBanner;
