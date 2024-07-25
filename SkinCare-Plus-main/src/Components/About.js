import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Skin UpLift Plus, your trusted partner for skin concern. we provide the upto 99% accurate analysis of your skin using Artificial Intelligence.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Advanced Image Analysis"
          description="Upload images of your skin concerns and get the 99% accuracte result."
        />
      </div>
    </div>
  );
}

export default About;
