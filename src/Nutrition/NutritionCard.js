import React from "react";
import "./NutritionCard.css";

function NutritionCard({
  heading,
  topic,
  topic2,
  description,
  subpoint1,
  subpoint2,
  subpoint3,
  subpoint4,
  subpoint5,

  image,
  reverse,
}) {
  const containerClasses = reverse
    ? "nutritionCard__container nutritionCard__container--reverse"
    : "nutritionCard__container";

  const descriptionClasses = reverse
    ? "nutritionCard__containerDescription nutritionCard__containerDescription--reverse"
    : "nutritionCard__containerDescription";

  const imageClasses = reverse
    ? "nutritionCard__containerImage nutritionCard__containerImage--reverse"
    : "nutritionCard__containerImage";

  return (
    <div className="nutritionCard">
      <div className={containerClasses}>
        <div className={descriptionClasses}>
          <h2>{heading}</h2>
          <p>{description}</p>

          <h3>{topic}</h3>

          <li>{subpoint1}</li>
          <li>{subpoint2}</li>
          <li>{subpoint3}</li>

          <h3>{topic2}</h3>

          <li>{subpoint4}</li>
          <li>{subpoint5}</li>
        </div>
        <div className={imageClasses}>
          <img src={image} alt="Nutrition" />
        </div>
      </div>
    </div>
  );
}

export default NutritionCard;
