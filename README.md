# ![Logo](https://shy-ruby-harp-seal-yoke.cyclic.cloud/img/icons/clearsky_logo.png) ClearSky

ClearSky is a weather app that provides current weather information using the OpenWeather API. It's built using Express.js, EJS for templating, Tailwind CSS for styling, and Axios for making API requests.

## Features

- Displays current weather information for a given location.
- Clean and responsive user interface using Tailwind CSS. 
- Utilizes the OpenWeather API to fetch weather data.

## Prerequisites

- `Node.js and npm must be installed on your machine.`

## Getting Started

1. Clone this repository:

    ```
    git clone https://github.com/yourusername/clearsky.git
    cd clearsky
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up your OpenWeather API key:
   
   - Sign up for an account at [OpenWeather](https://openweathermap.org/).
   - Create a new API key.
   - Rename the `.env.example` file to `.env` and replace `YOUR_API_KEY` with your actual API key.
   
4. Start the app:

    ```
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to see ClearSky in action!


## Dependencies

- Express.js
- EJS 
- Tailwind CSS
- Axios

## API Reference

The app uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. 

## Acknowledgements

- Built by Sushant Kadam
