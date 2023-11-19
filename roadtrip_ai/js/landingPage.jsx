import React from "react";
import '../static/css/style.css';
import { StartBar } from "./startBar";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <StartBar/>
          <p className="life-is-a-journey">
            Life is a journey
            <br />
            Not a destination.
          </p>
          <div className="mountains">
            <p className="personalize-your">PERSONALIZE YOUR TRIP WITH TECHNOLOGY</p>
          </div>
        </div>
        <div className="overlap-3">
          <div className="personalize-your-wrapper">
            <p className="personalize-your-2">PERSONALIZE YOUR TRIP WITH TECHNOLOGY</p>
          </div>
          <img className="screen-shot" alt="Screen shot" src="/roadtrip_ai/static/images/screen-shot-2023-11-18-at-3-03-1.png" />
        </div>
      </div>
    </div>
  );
};
