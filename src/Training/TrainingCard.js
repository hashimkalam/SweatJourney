import React from "react";
import "./TrainingCard.css";

function TrainingCard({ topic, description, image, reverse }) {
  const containerClasses = reverse
    ? "trainingCard__container trainingCard__container--reverse"
    : "trainingCard__container";

  const descriptionClasses = reverse
    ? "trainingCard__containerDescription trainingCard__containerDescription--reverse"
    : "trainingCard__containerDescription";

  const imageClasses = reverse
    ? "trainingCard__containerImage trainingCard__containerImage--reverse"
    : "trainingCard__containerImage";

  return (
    <div className="trainingCard">
      <div className={containerClasses}>
        <div className={descriptionClasses}>
          <h3>{topic}</h3>
          <p>{description}</p>
        </div>
        <div className={imageClasses}>
          <img src={image} alt="Nutrition" />
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
