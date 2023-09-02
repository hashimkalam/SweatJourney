import React from "react";
import "./Nutrition.css";
import NutritionCard from "./NutritionCard";
import CommonBanner from "../CommonBanner";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Nutrition() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="nutrition">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <CommonBanner
        heading="Nutrition"
        image="https://img.mensxp.com/media/content/2018/Oct/what-is-the-best-time-to-drink-your-protein-shake-1400x653-1538983650.jpg"
      />
      <h1>Unlock the Secrets of a Vibrant Lifestyle</h1>
      <NutritionCard
        heading="Nutrient Basics:"
        description="Nutrients are essential compounds that our bodies require for growth, energy, and overall well-being. 
        They are classified into two categories: macronutrients and micronutrients."
        image="https://www.germx.com/wp-content/uploads/2022/02/stock-photo-healthy-lifestyle-concept-with-diet-and-fitness-382697113.jpeg"
        topic="Macronutrients:"
        subpoint1="Carbohydrates: Provide energy and support brain function."
        subpoint2="Proteins: Essential for tissue repair, enzyme production, and immune function."
        subpoint3="Fats: Aid in nutrient absorption, protect organs, and store energy."
        topic2="Micronutrients:"
        subpoint4="Vitamins: Play crucial roles in various bodily processes, such as immunity and metabolism."
        subpoint5="Minerals: Contribute to bone health, fluid balance, and nerve function."
        reverse={false}
      />
      <NutritionCard
        heading="Hydration:"
        description="Staying hydrated is fundamental for maintaining good health and supporting fitness endeavors. 
        Water is essential for several bodily functions:"
        image="https://evofitness.at/wp-content/uploads/2022/08/EVO-2022-PP-AUGUST_Banner_-04.jpg"
        topic="Points to consider:"
        subpoint1="Performance Boost: Hydration enhances physical performance, improving endurance and strength during workouts."
        subpoint2="Temperature Regulation: Adequate water intake helps regulate body temperature, preventing overheating."
        subpoint3="Nutrient Transport: Water facilitates the transportation of nutrients and oxygen to cells."
        topic2="More points to consdier:"
        subpoint4="Toxin Elimination: Hydration aids in flushing out waste products and toxins from the body."
        subpoint5="Cognitive Function: Water intake is linked to improved focus, concentration, and mental clarity."
        reverse={true}
      />
      <NutritionCard
        heading="Yoga and Flexibility Training"
        description="Enhance flexibility, balance, and relaxation by offering diverse yoga classes on your website. 
        From the meditative pace of Hatha to the flowing movements of Vinyasa, cater to various preferences. Yoga 
        not only nurtures physical flexibility but also fosters mental clarity, making it an ideal addition for 
        individuals seeking holistic wellness through calming and empowering practices."
        image="https://images.everydayhealth.com/images/ehfc-flexibility-and-exercise-1440x810.jpg"
        reverse={false}
      />
      <NutritionCard
        heading="Functional Training"
        description="Embrace functional training, a workout philosophy centered on movements that mimic real-life 
        activities. These exercises improve everyday functionality and reduce the risk of injuries by enhancing 
        muscle coordination and joint stability. Empower users to excel in both fitness and daily life by 
        incorporating functional training routines that challenge their bodies in practical and beneficial ways."
        image="https://mensfitness.co.uk/wp-content/uploads/sites/2/2020/11/GettyImages-1186565884.jpg?w=900"
        reverse={true}
      />

      <NutritionCard
        heading="CrossFit or Functional Fitness"
        description="Enrich your website with CrossFit or functional fitness programs that merge cardiovascular 
        conditioning, weightlifting, and bodyweight exercises. These comprehensive workouts cultivate strength, 
        endurance, and agility, reflecting the CrossFit ethos of varied and intense routines. Engage users with 
        a platform that brings camaraderie, competition, and measurable progress into their fitness journey."
        image="https://img.livestrong.com/640/clsd/getty/c487878ac38e4a91bd21ff1f4db29214.jpg"
        reverse={false}
      />
      <NutritionCard
        heading="Cardiovascular Endurance Training"
        description="Cater to cardio enthusiasts with specialized programs designed to elevate cardiovascular endurance. 
        Running, cycling, swimming—offer diverse activities that bolster heart health and stamina. These training plans 
        guide users in progressively challenging their aerobic capacity, promoting cardiovascular efficiency, and 
        ensuring they're well-equipped for both fitness goals and active lifestyles."
        image="https://www.verywellfit.com/thmb/DBS_xhjsnM92I5b_2UixQKuhhJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/men-running-on-the-gym-treadmill-171582786-5ad7eab41f4e130038eae6f6.jpg"
        reverse={true}
      />
    </div>
  );
}

export default Nutrition;
