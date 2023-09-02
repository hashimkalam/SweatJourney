import React from "react";
import CommonBanner from "./CommonBanner";
import "./Gallery.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Gallery() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="gallery">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <CommonBanner
        heading="Gallery"
        image="https://getwallpapers.com/wallpaper/full/7/5/c/53625.jpg"
      />

      <div className="gallery__container">
        <div className="gallery__containerIndividual">
          <h1>One-on-One Workouts</h1>
          <div className="gallery__IndividualImages">
            <img src="https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg" />
            <img src="https://c0.wallpaperflare.com/preview/502/804/61/fitness-men-sports-gym.jpg" />
            <img src="https://images.unsplash.com/photo-1675026482188-8102367ecc16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80" />
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <img src="https://thebookofman.com/wp-content/uploads/2018/09/daniel-apodaca-405078-unsplash-1920x1442.jpg" />
            <img src="https://images.pexels.com/photos/6295766/pexels-photo-6295766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </div>

        <div className="gallery__containerGroup">
          <h1>GatherFit Sessions</h1>
          <div className="gallery__GroupImages">
            <img src="https://c4.wallpaperflare.com/wallpaper/646/617/279/group-fitness-gym-weights-wallpaper-preview.jpg" />
            <img src="https://media.istockphoto.com/id/966295656/photo/every-step-taken-towards-fitness-pays-off.jpg?s=612x612&w=0&k=20&c=w6P5ALkC8LqBuAvi0jDOGWhWDaZQRF4XQS4eOSi51ck=" />
            <img src="https://c1.wallpaperflare.com/preview/202/347/589/athletes-endurance-energy-exercise.jpg" />
            <img src="https://cdn.lessons.com/assets/images/content/lessons-group-of-men-and-women-lifting-weights-in-a-crossfit-class.jpg" />
          </div>
        </div>

        <div className="gallery__containerMma">
          <h1>CageCombat Workout</h1>
          <div className="gallery__mmaImages">
            <img src="https://res.cloudinary.com/display97/image/upload/5925/JKS_1983-1-212029.jpg" />
            <img src="https://www.elite-mma.com/wp-content/uploads/2020/03/martial-arts-discipline-scaled.jpg" />
            <img src="https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/07/WildBM-10-of-159-2.jpg?w=731" />
            <img src="https://cdn.shopify.com/s/files/1/0632/8218/4418/t/37/assets/rsz_mma_shockdoctor_2018_14-1681724123039.jpg?v=1681724124" />
            <img src="https://www.theluxeinsider.com/wp-content/uploads/2021/06/mma-10.jpg" />
            <img src="https://m1fc.com.au/wp-content/uploads/womens-kickboxing-class-m1fc.jpg" />
            <img src="https://evolve-mma.com/wp-content/uploads/2021/09/mma-training-fun.jpg" />
            <img src="https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/5918/100809.png" />
          </div>
        </div>

        <div className="gallery__containerEquipments">
          <h1>Fitness Gear Selection</h1>
          <div className="gallery__EquipmentImages">
            <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <img src="https://img.freepik.com/free-photo/gym-with-barbell-floor-sign-that-says-weight_1340-38220.jpg" />
            <img src="https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg" />
            <img src="https://img.freepik.com/premium-photo/arafed-gym-with-bench-generative-ai_955884-9895.jpg?w=360" />
            <img src="https://img.freepik.com/premium-photo/gym-with-futuristic-minimalist-concept_832479-8376.jpg" />
            <img src="https://img.freepik.com/premium-photo/gym-with-equipment_946657-781.jpg?w=2000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
