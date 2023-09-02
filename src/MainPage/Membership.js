import React from "react";
import "./Membership.css";
import MembershipCard from "./MembershipCard";

function Membership() {
  return (
    <div className="membership">
      <div className="membership__contents">
        <MembershipCard
          color="rgba(30, 144, 255, 1)"
          title="Platinum"
          price="$25.49/mo*"
          description="Upgrade to Premium for personalized workouts, expert nutrition, and a supportive community. 
          Achieve goals faster with advanced features and tailored support. Join SweatJourney Premium for a healthier, 
          stronger you."
        />
        <MembershipCard
          color="rgba(30, 144, 255, .7)"
          title="Standard"
          price="$15.49/mo*"
          description="Discover more with our Standard Membership. Access personalized workouts, expert guidance, a
          nd a supportive community. Elevate your fitness journey and reach goals through SweatJourney's Standard 
          Membership."
        />
        <MembershipCard
          color="rgba(30, 144, 255, .45)"
          title="Junior"
          price="$9.49/mo*"
          description="Spark fitness joy in youngsters with Junior Membership. Tailored for budding enthusiasts, it
           offers age-appropriate workouts, interactive activities, and a fun learning environment. Nurture healthy 
           habits early with SweatJourney's Junior Membership."
        />
      </div>
    </div>
  );
}

export default Membership;
