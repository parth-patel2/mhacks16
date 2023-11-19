import React from "react";
import '../static/css/style.css';

export const StartBar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
        var textQuery = document.getElementById('textQuery').value;

        var apiEndpoint = 'https://places.googleapis.com/v1/places:searchText';

        var headers = new Headers({
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': 'AIzaSyDS8SbZikS28Qo9KP2ttPFAa-MetrAaJlA',
            'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.priceLevel,places.websiteUri,places.currentOpeningHours,places.photos,places.rating'
        });


        var body = JSON.stringify({
            textQuery: textQuery,
            maxResultCount: 10,
            locationBias: {
                circle: {
                    center: { latitude: 37.7937, longitude: -122.3965 },
                    radius: 500.0
                }
            },
            rankPreference: 'DISTANCE'   
        });

        fetch(apiEndpoint, {
            method: 'POST',
            headers: headers,
            body: body
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    return (
        <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
            <div className="overlap-group">
            <div className="overlap-2">
                <div className="rectangle" />
                <img className="car-front" alt="Car front" src="/roadtrip_ai/static/images/car-front.svg" />
                <div className="label">Destination</div>
                <div className="text-wrapper">Start location:</div>
                <div className="frame">
                {/* <p className="p">What kind of trip are you looking for?</p> */}
                <input id="textQuery" className="p" placeholder="What kind of trip are you looking for?" />
                </div>
                <div className="label-2">Road trip assistant:</div>
                <img className="map-pin" alt="Map pin" src="/roadtrip_ai/static/images/map-pin.svg" />
                <img className="user-circle" alt="User circle" src="/roadtrip_ai/static/images/user-circle-2.svg" />
            </div>
            <button type="submit" className="button">
                <div className="input-wrapper">
                <div className="input">start</div>
                </div>
            </button>
            </div>
        </form>
    );
  };