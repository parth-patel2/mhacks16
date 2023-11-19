import React from "react";
import '../static/css/style.css';

export const StartBar = () => {
    // const parseInfo = (data) => {

    // };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
        
        var startCity = document.getElementById('startLocation').value;
        var destinationCity = document.getElementById('destination').value;
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


        var apiEndpoint1 = 'https://api.openai.com/v1/chat/completions';
        var openAIKey = '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';


        var requestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
            {
                role: 'system',
                content: 'You are going to be a trip expert and tell me what cities I can visit between my start and destination. You will only provide a JSON list and no other words besides the cities.',
            },
            {
                role: 'user',
                content: `Provide me with a JSON list of cities I can visit from ${startCity} to ${destinationCity}.`,
            },
            ],
        };

        var headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAIKey}`,
        });

        return fetch(apiEndpoint1, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
            //parseInfo(data);
            console.log(data["choices"][0]["message"]["content"]);
        })
        .catch(error => {
            console.error('OpenAI Error:', error);
            throw error;
        });
    };
    return (
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
            <div className="overlap-group">
            <div className="overlap-2">
                <div className="start-bar-inputs">
                    <input id="startLocation" placeholder="Start location" />
                    <input id="destination"  placeholder="Destination" />
                    <input id="textQuery" style={{width: '300px'}} placeholder="What kind of trip are you looking for?" />
                </div>
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