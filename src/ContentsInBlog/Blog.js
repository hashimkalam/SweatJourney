import React from "react";
import "./Blog.css";
import FitnessChallenge from "./FitnessChallenge";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CommonBanner from "../CommonBanner";
import Advice from "./Advice";
import FAQs from "./FAQs";

function Blog() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="blog">
      <ArrowDropUpIcon onClick={scrollToTop} className="scrollUp" />
      <CommonBanner
        heading="Blog"
        image="https://wallpaperaccess.com/full/1244688.jpg"
      />
      <div className="blog__contents">
        <div className="blog__challenges">
          <h1>PeakFit Prowess Challenges: Elevate Your Fitness Game!</h1>
          <MultipleStopIcon fontSize="large" className="blog__challengesIcon" />
          <div className="blog__challenge">
            <FitnessChallenge
              className="one"
              title="30-Day Plank Challenge"
              description="Challenge yourself with the 30-Day Plank Challenge! Begin with a short plank hold and 
              progressively increase the duration each day. Strengthen your core muscles and build endurance while 
              improving your posture and balance."
              video="https://www.youtube.com/embed/WWj_ZZ_PSAE"
            />
            <FitnessChallenge
              title="Push-Up Challenge"
              description="Embark on a Push-Up Challenge to enhance your upper body strength. Start with a modest number 
              of push-ups daily, gradually increasing the reps as you build muscle and improve your overall upper body fitness."
              video="https://www.youtube.com/embed/fqGd8jUdr2I"
            />
            <FitnessChallenge
              title="Squat Challenge"
              description="Join the Squat Challenge to sculpt your lower body and boost leg strength. Begin with a 
              comfortable squat count and steadily raise the bar over the challenge period. Watch your legs become stronger and more toned."
              video="https://www.youtube.com/embed/mGvzVjuY8SY"
            />

            <FitnessChallenge
              title="Squat Challenge"
              description="Join the Squat Challenge to sculpt your lower body and boost leg strength. Begin with a 
              comfortable squat count and steadily raise the bar over the challenge period. Watch your legs become stronger and more toned."
              video="https://www.youtube.com/embed/mGvzVjuY8SY"
            />
            <FitnessChallenge
              title="Squat Challenge"
              description="Join the Squat Challenge to sculpt your lower body and boost leg strength. Begin with a 
              comfortable squat count and steadily raise the bar over the challenge period. Watch your legs become stronger and more toned."
              video="https://www.youtube.com/embed/mGvzVjuY8SY"
            />
            <FitnessChallenge
              title="Squat Challenge"
              description="Join the Squat Challenge to sculpt your lower body and boost leg strength. Begin with a 
              comfortable squat count and steadily raise the bar over the challenge period. Watch your legs become stronger and more toned."
              video="https://www.youtube.com/embed/mGvzVjuY8SY"
            />
          </div>
        </div>

        <div className="blog__advices">
          <h1>Guiding Insights for Thoughtful Reflection</h1>
          <Advice
            title="Proper Warm-Up and Cool-Down Techniques:"
            point1={
              <div>
                <strong>Warm-Up:</strong> A warm-up is essential before
                exercising, as it readies your body for more intense activity.
                It involves 5-10 minutes of light cardio (e.g., jogging)
                followed by dynamic stretches that mimic your workout movements.
                This prevents injuries and enhances performance.
              </div>
            }
            point2={
              <div>
                <strong>Cool-Down:</strong> After your workout, cool down with
                5-10 minutes of low-intensity exercise followed by static
                stretches. This helps lower your heart rate gradually, prevent
                muscle soreness, and maintain flexibility. Focus on the muscles
                you targeted during your workout.
              </div>
            }
          />

          <Advice
            title="Injury Prevention and Recovery Tips"
            point1={
              <div>
                <strong>Proper Form:</strong> Always prioritize proper exercise
                form to prevent injuries. Poor form can strain muscles and
                joints. If you're unsure, ask a fitness professional for
                guidance.
              </div>
            }
            point2={
              <div>
                <strong>Progress Gradually:</strong> Avoid sudden increases in
                intensity or volume. Gradually progress in terms of weight,
                reps, or time to give your body time to adapt.
              </div>
            }
            point3={
              <div>
                <strong>Listen to Your Body:</strong> Pay attention to your
                body's signals. If you feel pain, discomfort, or extreme
                fatigue, stop and rest. Pushing through pain can worsen
                injuries.
              </div>
            }
            point4={
              <div>
                <strong>Rest and Recovery:</strong> Rest is essential for muscle
                repair and growth. Aim for 1-2 rest days per week and prioritize
                quality sleep.
              </div>
            }
            point5={
              <div>
                <strong>Cross-Training:</strong> Vary your workouts to prevent
                overuse injuries. Incorporate different activities that engage
                various muscle groups.
              </div>
            }
          />
          <Advice
            title="How to Set Achievable Fitness Goals:"
            point1="Specific Goals: Define clear and specific goals. Instead of saying 'I want to get fit,' specify what 
            you want to achieve, like 'I want to run a 5K in three months.'"
            point2="Measurable Goals: Make your goals measurable. For instance, if your goal is weight loss, set a specific 
            number of pounds you want to lose."
            point3="Attainable Goals: Set goals that are realistic and attainable within your current fitness level. Avoid 
            aiming for too much too soon."
            point4="Relevant Goals: Ensure your goals align with your overall lifestyle and priorities. If you're busy, 
            setting a goal that requires hours of exercise daily might not be feasible."
            point5="Time-Bound Goals: Set a deadline for achieving your goal. This adds a sense of urgency and keeps 
            you motivated."
            point6="Break It Down: Break larger goals into smaller milestones. Celebrate each milestone achieved on 
            your way to the bigger goal."
            point7="Track Your Progress: Keep a workout journal, take photos, or use fitness apps to track your progress. 
            Seeing improvement can boost motivation."
          />
        </div>

        <div className="blog__faqs">
          <h1>Guiding Insights for Thoughtful Reflection</h1>
          <FAQs
            question="How often should I work out?"
            answer="Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity 
            aerobic activity each week, along with muscle-strengthening activities on two or more days."
          />
          <FAQs
            question="Is it better to do cardio or strength training?"
            answer="Both are important. Cardio improves cardiovascular health, while strength training builds muscle 
            and boosts metabolism. A balanced approach is best."
          />
          <FAQs
            question="How can I stay motivated to exercise regularly?"
            answer="Set specific goals, vary your workouts, find a workout buddy, and track your progress to stay motivated."
          />
          <FAQs
            question="What's the best time to work out?"
            answer="The best time is when you can stick to your routine consistently. Some people prefer mornings for a fresh start, while others find evenings more suitable."
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
