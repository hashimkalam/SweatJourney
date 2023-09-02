import React from "react";
import "./SuccessStory.css";

function SuccessStory({ image, topic, description }) {
  return (
    <div className="successStory">
      <div className="successStory__contents">
        <img src={image} alt={topic} />
        <div className="successStory__contentsDesc">
          <h2>{topic}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessStory;
