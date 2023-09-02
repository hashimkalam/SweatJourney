import React from "react";
import "./Training.css";
import TrainingCard from "./TrainingCard";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CommonBanner from "../CommonBanner";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Training() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="training">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />

      <CommonBanner
        heading="Training"
        image="https://fitnessvolt.com/wp-content/uploads/2020/11/mma-inspired-workout.jpg"
      />
      <div className="training__container">
        <TrainingCard
          topic="High-Intensity Interval Training (HIIT)"
          description="Incorporate High-Intensity Interval Training (HIIT) into your fitness website to captivate users 
        seeking dynamic and time-efficient workouts. HIIT alternates intense exercise bursts with short recovery periods,
         boosting calorie burn and cardiovascular fitness. These energetic routines cater to busy schedules, making them 
         perfect for those craving quick yet effective workouts."
          image="https://larsonsportsortho.com/wp-content/uploads/2017/10/shutterstock_675245371.jpg"
          reverse={false}
        />
        <TrainingCard
          topic="Strength Training and Weightlifting"
          description="Empower fitness enthusiasts with specialized strength training programs that focus on building muscle
         strength and enhancing overall fitness. Tailor workouts to different muscle groups—upper body, lower body, 
         core—for comprehensive development. Share techniques, tips, and progressive plans that equip users with the
         knowledge and confidence to tackle weightlifting and sculpt their desired physique."
          image="https://149874912.v2.pressablecdn.com/wp-content/uploads/2022/11/Strength-training-programs.jpg"
          reverse={true}
        />
        <TrainingCard
          topic="Yoga and Flexibility Training"
          description="Enhance flexibility, balance, and relaxation by offering diverse yoga classes on your website. 
        From the meditative pace of Hatha to the flowing movements of Vinyasa, cater to various preferences. Yoga 
        not only nurtures physical flexibility but also fosters mental clarity, making it an ideal addition for 
        individuals seeking holistic wellness through calming and empowering practices."
          image="https://images.everydayhealth.com/images/ehfc-flexibility-and-exercise-1440x810.jpg"
          reverse={false}
        />
        <TrainingCard
          topic="Functional Training"
          description="Embrace functional training, a workout philosophy centered on movements that mimic real-life 
        activities. These exercises improve everyday functionality and reduce the risk of injuries by enhancing 
        muscle coordination and joint stability. Empower users to excel in both fitness and daily life by 
        incorporating functional training routines that challenge their bodies in practical and beneficial ways."
          image="https://mensfitness.co.uk/wp-content/uploads/sites/2/2020/11/GettyImages-1186565884.jpg?w=900"
          reverse={true}
        />

        <TrainingCard
          topic="CrossFit or Functional Fitness"
          description="Enrich your website with CrossFit or functional fitness programs that merge cardiovascular 
        conditioning, weightlifting, and bodyweight exercises. These comprehensive workouts cultivate strength, 
        endurance, and agility, reflecting the CrossFit ethos of varied and intense routines. Engage users with 
        a platform that brings camaraderie, competition, and measurable progress into their fitness journey."
          image="https://img.livestrong.com/640/clsd/getty/c487878ac38e4a91bd21ff1f4db29214.jpg"
          reverse={false}
        />
        <TrainingCard
          topic="Cardiovascular Endurance Training"
          description="Cater to cardio enthusiasts with specialized programs designed to elevate cardiovascular endurance. 
        Running, cycling, swimming—offer diverse activities that bolster heart health and stamina. These training plans 
        guide users in progressively challenging their aerobic capacity, promoting cardiovascular efficiency, and 
        ensuring they're well-equipped for both fitness goals and active lifestyles."
          image="https://www.verywellfit.com/thmb/DBS_xhjsnM92I5b_2UixQKuhhJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/men-running-on-the-gym-treadmill-171582786-5ad7eab41f4e130038eae6f6.jpg"
          reverse={true}
        />

        <TrainingCard
          topic="Bodyweight Training"
          description="Create bodyweight-focused training plans that require no equipment, making fitness accessible to 
        everyone. Bodyweight exercises leverage a person's own weight to build strength, flexibility, and endurance. 
        These versatile routines can be done anywhere, making them ideal for individuals seeking flexible workout 
        options while prioritizing simplicity and effectiveness."
          image="https://www.anytimefitness.com/wp-content/uploads/2020/07/AdobeStock_288171135-1024x576.jpeg"
          reverse={false}
        />

        <TrainingCard
          topic="Nutrition and Meal Planning"
          description="Offer specialized nutrition programs that educate users about dietary requirements, balanced meal 
        planning, and goal-oriented nutrition. These programs empower individuals to make informed choices about their 
        diet, aligning their nutrition with their fitness objectives. By providing insights into macronutrients, 
        hydration, and supplementation, you equip users with the tools for a comprehensive wellness journey."
          image="https://previews.123rf.com/images/freebird2000/freebird20002002/freebird2000200200008/139990021-diet-healthy-food-and-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background.jpg"
          reverse={true}
        />

        <div className="training__upload">
          <h2>Share Your Transformation</h2>
          <Link to="/transformation">
            <Button className="training__uploadButton">Click Here</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Training;
