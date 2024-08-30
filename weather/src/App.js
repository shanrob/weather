import "./App.css";
import Weather from "./Weather";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=42.360081&lon=-71.05884&units=imperial&appid=cdee8b4c86b0855e1cbc33ee0452a269";

  const getWeather = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setWeatherData(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Weather App</header>
      <Weather weatherData={weatherData} />
      <footer className="App-footer">Please God pretty please</footer>
    </div>
  );
}

export default App;
