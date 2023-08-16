const axios = require("axios");
const { response } = require("express");
const worldCitiesJSON = require("../data/world-cities.json");
require("dotenv").config();

const openWeatherMapAPIKey = process.env.API_KEY;

// Function to get the geonameid from the worldCitiesJSON based on the city name
const getGeoNameIDfromJSON = (cityname) => {
  const cityObj = worldCitiesJSON.find((el) => el.name === cityname);
  return cityObj.geonameid;
};

// Function to fetch weather data for a given city
const cityWeather = async (cityname) => {
  const cityGeoID = getGeoNameIDfromJSON(cityname);
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityGeoID}&units=metric&APPID=${openWeatherMapAPIKey}`;

  try {
    const weatherApiResponse = await axios.get(openWeatherURL);

    // Extracting relevant data from the API response
    const { lon, lat } = weatherApiResponse.data.coord;
    const { id, main, description, icon } = weatherApiResponse.data.weather[0];
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
      weatherApiResponse.data.main;
    const visibility = weatherApiResponse.data.visibility;
    const { speed, deg } = weatherApiResponse.data.wind;
    const { all: clouds } = weatherApiResponse.data.clouds;
    const { country, sunrise, sunset } = weatherApiResponse.data.sys;
    const { id: cityId, name } = weatherApiResponse.data;

    // Constructing the returned weather data object
    const receivedWeatherData = {
      city: name,
      country,
      lon,
      lat,
      weather: {
        id,
        main,
        description,
        iconURL,
      },
      main: {
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
      },
      visibility,
      wind: {
        speed,
        deg,
      },
      clouds,
      sunrise,
      sunset,
      cityId,
    };

    return receivedWeatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

module.exports = { cityWeather };
