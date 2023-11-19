import pathlib
import uuid
import flask
from flask import Flask, abort, requests, redirect, session, url_for
import roadtrip_ai

app = Flask(__name__)

def get_places():
    # start_location = request.form.get('start_location')
    # text_query = request.form.get('textQuery')
    # end_location = request.form.get('end_location')

    # pass through Open AI for potential big cities to visit --> get back a list of cities

    # example pass city
    city = "Pittsburgh"
    # example query
    text_query = "Spicy Indian Food"

    api_url = 'https://places.googleapis.com/v1/places:searchText'
    
    # Set up headers
    headers = {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': 'YOUR_API_KEY',  # Replace with your actual API key
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress'
    }

    # Set up the data for the POST request
    post_data = {
        'textQuery': text_query
    }

    # Make the POST request
    response = requests.post(api_url, json=post_data, headers=headers)



@app.route('/api/v1/directions', methods=['POST'])
def get_directions():
    '''Handles getting route and showing possible places'''

    get_places()
    

    
