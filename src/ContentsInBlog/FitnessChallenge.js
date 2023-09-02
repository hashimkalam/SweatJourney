import React, { useState } from "react";
import "./FitnessChallenge.css";
import { Button } from "@mui/material";

function FitnessChallenge({ title, description, video }) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const accept = () => {
    setIsAccepted(true);
  };
  const remove = () => {
    setIsRemoved(true);
  };

  return (
    <div className={`fitnessChallenge ${isRemoved ? "removed" : ""}`}>
      <div className="fitnessChallenge__Video">
        <iframe
          src={video}
          frameBorder="0"
          allowFullScreen
          title="Fitness Challenge Video"
        ></iframe>
      </div>

      <div className="fitnessChallenge__Info">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="fitnessChallenge__Button">
          {isAccepted ? (
            <p className="challengeStatus">Challenge Accepted 💪</p>
          ) : (
            <Button onClick={accept} className="fitnessChallenge__ButtonAccept">
              Accept
            </Button>
          )}
          <Button onClick={remove} className="fitnessChallenge__ButtonDecline">
            Back Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FitnessChallenge;
