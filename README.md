# Project Name

roadtrip_ai

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Description

People go on different websites to plan road trips, and see all the purchases they are going to make on their way. It is hard to research what activities and places to go. We want to give users a way to know what to do after planning a route.

## Installation

Follow the following steps to run the flask application on your computer

1. Ensure that Python is installed (version 3.10 or higher). You can check your Python version by running the following command:

    ```bash
    python3 --version
    ```

2. Next, set up a virtual environment to isolate the dependencies of your project. Run the following commands:

    ```bash
    # Activate the virtual environment
    brew install python3   # On macOS if you don't have python
    # OR ON WINDOWS
    sudo apt-get update
    sudo apt-get install python3 python3-pip python3-venv python3-wheel python3-setuptools

    # Create a virtual environment
    python3 -m venv venv

    # Activate environment
    source env/bin/activate
    ```

3. Upgrade some tools:

    ```bash
    pip install --upgrade pip setuptools wheel

    pip install -r requirements.txt

    # Installs the application
    pip install -e . 
    ```

4. Once the dependencies are installed, you can run the Flask application:

    ```bash
    flask --app roadtrip_ai --debug run --host 0.0.0.0 --port 8000
    ```

   This will start the development server, and you can access the application in your web browser at `http://localhost:8000`.




