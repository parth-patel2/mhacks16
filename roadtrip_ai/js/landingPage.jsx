import React from "react";
import '../static/css/style.css';



const JourneyQuote = () => (
  <p className="life-is-a-journey">
    Life is a journey
    <br />
    Not a destination.
  </p>
);

const PersonalizeBanner = () => (
  <div className="mountains">
    <p className="personalize-your">PERSONALIZE YOUR TRIP WITH TECHNOLOGY</p>
  </div>
);

const ActivityCart = () => (
  <div className="text-wrapper">Activity Cart</div>
);

const DestinationLabel = () => (
  <div className="label">Destination</div>
);

const StartLocationLabel = () => (
  <div className="label-2">Start location:</div>
);

const TripTypeQuestion = () => (
  <div className="frame">
    <input className="p" type="text" placeholder="What kind of trip are you looking for?" />
  </div>
);

const RoadTripAssistantLabel = () => (
  <div className="label-3">Road trip assistant:</div>
);

const StartButton = () => (
  <button className="button">
    <div className="input-wrapper">
      <div className="input">start</div>
    </div>
  </button>
);

const ImageIcons = () => (
  <>
    <img className="car-front" alt="Car front" src="car-front.svg" />
    <img className="map-pin" alt="Map pin" src="map-pin.svg" />
    <img className="shopping-cart" alt="Shopping cart" src="shopping-cart.svg" />
    <img className="user-circle" alt="User circle" src="user-circle-2.svg" />
  </>
);

const ScreenShot = () => (
  <div className="screen-shot-wrapper">
    <img className="screen-shot" alt="Screen shot" src="screen-shot-2023-11-18-at-3-03-1.png" />
  </div>
);

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="overlap">
          <JourneyQuote />
          <PersonalizeBanner />
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <ImageIcons />
              <DestinationLabel />
              <ActivityCart />
              <StartLocationLabel />
              <div className="rectangle-3" />
              <TripTypeQuestion />
              <RoadTripAssistantLabel />
            </div>
            <StartButton />
          </div>
        </div>
        <ScreenShot />
      </div>
    </div>
  );
};
