import React, { useState } from "react";
import "./FitnessChallenge.css";
import { Button } from "@mui/material";

function FitnessChallenge({ title, description, video }) {
  const [accepted, setAccepted] = useState(false);

  const accept = () => {
    setAccepted(!accepted);
  };

  return (
    <div className="fitnessChallenge">
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
          {accepted ? (
            <p className="challengeStatus">Challenge Accepted 💪</p>
          ) : (
            <Button onClick={accept} className="fitnessChallenge__ButtonAccept">
              {!accepted && "Accept"}
            </Button>
          )}
          {accepted ? (
            <Button
              onClick={accept}
              className="fitnessChallenge__ButtonDecline"
            >
              Back Out
            </Button>
          ) : (
            <Button className="fitnessChallenge__ButtonDecline">
              Back Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FitnessChallenge;
