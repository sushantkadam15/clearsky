const axios = require("axios");
const { response } = require("express");
const worldCitiesJSON = require('../data/world-cities.json') ;


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

const getGeoNameIDfromJSON = (cityname) => {
  const cityObj = worldCitiesJSON.filter((el) => el.name === cityname)
  return cityObj[0].geonameid;
  }
  
getGeoNameIDfromJSON('Toronto')




//URL Using City ID


// Getting weather Data from openWeather API
const cityWeather = async (cityname) => {
  const cityGeoID = getGeoNameIDfromJSON(cityname);
  const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityGeoID}&units=metric&APPID=7235ffc6d18866a3091b53be72948206` ;
  const weatherApiResponse = await axios.get(openWeatherURL);
  const {
    main: iconMain,
    description: iconDescription,
    icon: iconCode,
  } = weatherApiResponse.data.weather[0];
  const {
    temp: currentTemp,
    feels_like: feelsLike,
    temp_min: todaysMin,
    temp_max: todaysMax,
    humidity,
  } = weatherApiResponse.data.main;
  // Getting Sunrise and Sunset Time (UNIX Format)
  const visibility = weatherApiResponse.data.visibility;
  const wind = weatherApiResponse.data.wind;
  const receivedWeatherData = {
    currentTemp,
    feelsLike,
    todaysMin,
    todaysMax,
    humidity,
    iconMain,
    iconDescription,
    returnedIcon: `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
    visibility,
    wind
  };
  return receivedWeatherData;
};

module.exports = { cityWeather };




//OPEN WEATHER SEARCH URLS
  // const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=7235ffc6d18866a3091b53be72948206`;
//  = `http://api.openweathermap.org/data/2.5/weather?q=${name},${country_code}&APPID=7235ffc6d18866a3091b53be72948206`
  // const { latitude, longitude } = currentCityGeoDetails;
// UnixTime Converter
// const unixTimeConverter = (unixTime) => {
//   let date = new Date(unixTime * 1000);
//   // Hours part from the timestamp
//   let hours = date.getHours();
//   // Minutes part from the timestamp
//   let minutes = "0" + date.getMinutes();
//   // Will display time in 10:30:23 format
//   if (hours < 12) {
//     var formattedTime = hours + ":" + minutes.substr(-2) + " AM";
//   } else {
//     var formattedTime = hours + ":" + minutes.substr(-2) + " PM";
//   }
//   return formattedTime;
// };












// const cityGeoDetails = async (cityname) => {
//   const positionStackUrl = `http://api.positionstack.com/v1/forward?access_key=5b846c900d6c3b055dc5997f5a4710a8&query=${cityname}`;
//   try {
//     const response = await axios.get(positionStackUrl);
//     const { name, country, country_code, label, latitude, longitude } =
//       response.data.data[1];
//     const currentGeoValues = {
//       name,
//       country,
//       country_code,
//       label,
//       latitude,
//       longitude,
//     };
//     return currentGeoValues;
//   } catch {
//     (err) => err;
//   }
// };
