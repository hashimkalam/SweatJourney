import React from "react";
import "./Contents.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Membership from "./Membership";
import TrainingCard from "../Training/TrainingCard";
import BMI from "./BMI";
import SuccessStory from "./SuccessStory";
import ArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";

function Contents() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="contents">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <div className="contents__container">
        <div className="contents__story">
          <h1>Success Stories</h1>
          <div className="contents__storyIcons">
            <ArrowLeft className="contents__storyLeftIcon" fontSize="large" />
            <ArrowRight className="contents__storyRightIcon" fontSize="large" />
          </div>
          <div className="contents__storyContainer">
            <SuccessStory
              image="https://www.nerdfitness.com/wp-content/uploads/2012/09/Ryan-Before-After-1.jpg"
              topic="Ryan's Remarkable 115lb Weight Loss Journey"
              description="SweatJourney welcomes everyone, irrespective of size or background—yoga lovers, fitness enthusiasts, athletes, and those looking to lead a healthier life. Meet Ryan, who began his journey towards a healthier lifestyle with SweatJourney. After two years of searching, he discovered this supportive community, resulting in a remarkable weight loss of 115 pounds and counting. Here's his story."
            />
            <SuccessStory
              image="https://www.coreexercisesolutions.com/wp-content/uploads/bb-plugin/cache/jess-1-e1572432438143-circle-54287491a68da2c94262eeca9c5073ac-5db96a04e1520.png"
              topic="Overcoming Postpartum Fitness Challenges"
              description="Jessica shares her postpartum fitness journey, detailing the struggles of getting back in shape after childbirth. She talks about finding time amidst parenting responsibilities, adapting workouts, and ultimately regaining her strength."
            />
            <SuccessStory
              image="https://social.xercise4less.co.uk/wp-content/uploads/2020/01/Weight-Loss-Success-Story-John-Jordan-1024x683.png"
              topic="50 Pounds Down: A Weight Loss Triumph"
              description="John's exceptional determination and dedication were the driving forces behind his remarkable achievement of shedding 50 pounds within just one year. He openly discusses his well-rounded strategy that combined a balanced approach to diet and exercise. Despite encountering some setbacks along the way, John's resilience and perseverance ultimately led to his successful weight loss. Now, he continues to maintain his healthier lifestyle with commitment and enthusiasm."
            />
            <SuccessStory
              image="https://www.nerdfitness.com/wp-content/uploads/2013/06/Anne_Progress.png"
              topic="The Cosplay Hero: How Anne Lost 100 lbs"
              description="Meet Anne, a multi-talented artist based in New York City. She once found herself immersed in online gaming, particularly World of Warcraft. However, Anne's journey took a new direction when she discovered SweatJourney. She applied gaming lessons to level up in real life, resulting in a remarkable transformation worth exploring."
            />
            <SuccessStory
              image="https://www.nerdfitness.com/wp-content/uploads/2013/06/joe.jpg"
              topic="10 Months. 128 Pounds Lost. The Best Transformation I’ve Ever Seen."
              description="Meet Joe, our hero thanks to SweatJourney. In just 10 months, he transformed his life, shedding an incredible 128 pounds. If you're struggling with your weight and fitness, Joe's journey shows it's possible. Let's hear from Joe and thank SweatJourney."
            />
          </div>
        </div>

        <div className="contents__trainingContainer">
          <h1> Personal Training </h1>
          <TrainingCard
            topic="High-Intensity Interval Training (HIIT)"
            description="Incorporate High-Intensity Interval Training (HIIT) into your fitness website to captivate users seeking dynamic and time-efficient workouts. HIIT alternates intense exercise bursts with short recovery periods, boosting calorie burn and cardiovascular fitness. These energetic routines cater to busy schedules, making them perfect for those craving quick yet effective workouts."
            image="https://larsonsportsortho.com/wp-content/uploads/2017/10/shutterstock_675245371.jpg"
            reverse={false}
          />
          <Link to="./training">
            <Button className="contents__moreButton">See More</Button>
          </Link>
        </div>

        <div className="contents__bmiContainer">
          <BMI />
        </div>

        <div className="contents__membershipContainer">
          <h1>Membership</h1>
          <Membership />
        </div>
      </div>
    </div>
  );
}

export default Contents;
