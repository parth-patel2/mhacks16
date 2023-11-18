import React from "react";
import "./style.css";

export const MacbookPro = () => {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
          <p className="life-is-a-journey">
            Life is a journey
            <br />
            Not a destination.
          </p>
          <div className="mountains">
            <p className="personalize-your">PERSONALIZE YOUR TRIP WITH TECHNOLOGY</p>
          </div>
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <img className="car-front" alt="Car front" src="car-front.svg" />
              <div className="label">Destination</div>
              <div className="text-wrapper">Activity Cart</div>
              <div className="label-2">Start location:</div>
              <div className="rectangle-3" />
              <div className="frame">
                <p className="p">What kind of trip are you looking for?</p>
              </div>
              <div className="label-3">Road trip assistant:</div>
              <img className="map-pin" alt="Map pin" src="map-pin.svg" />
              <img className="shopping-cart" alt="Shopping cart" src="shopping-cart.svg" />
              <img className="user-circle" alt="User circle" src="user-circle-2.svg" />
            </div>
            <button className="button">
              <div className="input-wrapper">
                <div className="input">start</div>
              </div>
            </button>
          </div>
        </div>
        <div className="screen-shot-wrapper">
          <img className="screen-shot" alt="Screen shot" src="screen-shot-2023-11-18-at-3-03-1.png" />
        </div>
      </div>
    </div>
  );
};
