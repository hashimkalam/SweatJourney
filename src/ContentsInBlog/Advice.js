import React from "react";
import "./Advice.css";

function Advice({
  title,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  point7,
}) {
  return (
    <div className="advice">
      <div className="advice__container">
        <h1>{title}</h1>
        <div className="advice__containerContent">
          <p>{point1}</p>
          <p>{point2}</p>
        </div>
        {point3 && point4 && point5 && (
          <div className="advice__containerContent">
            <p>{point3}</p>
            <p>{point4}</p>
            <p>{point5}</p>
          </div>
        )}
        {point6 && point7 && (
          <div className="advice__containerContent">
            <p>{point6}</p>
            <p>{point7}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Advice;
