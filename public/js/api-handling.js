const axios = require("axios");
const { response } = require("express");

const weatherIcons = {
  clear_sky: "🌞",
  few_clouds: "⛅",
  scattered_clouds: "☁️",
  broken_clouds: "☁️",
  shower_rain: "🌧️",
  rain: "🌧️",
  thunderstorm: "⛈️",
  snow: "🌨️",
  mist: "☁️",
};

// Get Citi Geogrophical Details from positionstack.com
const cityGeoDetails = async (cityname) => {
  const positionStackUrl = `http://api.positionstack.com/v1/forward?access_key=5b846c900d6c3b055dc5997f5a4710a8&query=${cityname}`;
  try {
    const response = await axios.get(positionStackUrl);
    const { name, country, country_code, label, latitude, longitude } =
      response.data.data[1];
    const currentGeoValues = {
      name,
      country,
      country_code,
      label,
      latitude,
      longitude,
    };
    return currentGeoValues;
  } catch {
    (err) => err;
  }
};

// Getting weather Data from openWeather API
const cityWeather = async (cityname) => {
  const currentCityGeoDetails = await cityGeoDetails(cityname);
  const { latitude, longitude } = currentCityGeoDetails;
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7235ffc6d18866a3091b53be72948206`;
  console.log(openWeatherURL);
  axios
    .get(openWeatherURL)
    .then((response) => {
      const {
        id: iconId,
        main: iconMain,
        description: iconDescription,
        icon: iconCode,
      } = response.data.weather[0];
      const {
        temp: currentTemp,
        feels_like: feelsLike,
        temp_min: todaysMin,
        temp_max: todaysMax,
        humidity,
      } = response.data.main;
      const receivedWeatherData = {
        currentTemp,
        feelsLike,
        todaysMin,
        todaysMax,
        humidity,
        iconMain,
        returnedIcon: () => {
          // Generating link for icon: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
        
        },
      };
    })
    .catch((err) => console.log(err));
};

cityWeather("Mumbai, India");
