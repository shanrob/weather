// File that holds all "business logic responsible for fetching data from 3rd party API"

import * as dotenv from "dotenv";

dotenv.config();

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;

export async function getCurrentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    city: data.name,
    icon: data.weather[0].icon,
    description: data.weather[0].description,
    currentTemp: data.main.temp,
    minTemp: data.main.temp_min,
    maxTemp: data.main.temp_max,
  };
}
