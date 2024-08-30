function Weather(props) {
  return (
    <div className="weather">
      <h2>{props.weatherData.name}</h2>
      <img
        src={`http://openweathermap.org/img/w/${props.weatherData.weather[0].icon}.png`}
        alt="weather icon"
      />
      <p>{props.weatherData.weather[0].description}</p>
      <p>Current temp: {props.weatherData.main.temp}</p>
      <p>Min Temp: {props.weatherData.main.temp_min}</p>
      <p>Max Temp: {props.weatherData.main.temp_max}</p>
    </div>
  );
}

export default Weather;
