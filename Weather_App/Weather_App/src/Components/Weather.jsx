import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => setCity(e.target.value);

  // API call
  const fetchWeather = async () => {
    if (!city) {
      setError("⚠️ Please enter a city name!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9302acd6edc27938fc3c7c8e9d882a51`
      );

      const data = await response.json();
      console.log(weather)

      if (data.cod === "404") {
        setError("❌ City not found. Try again!");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("🚨 API error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="title">🌤 Weather App</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <button className="btn" onClick={fetchWeather}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* Weather Info */}
      {weather && !error && (
        <div className="result">
          <h3 className="city">{weather.name}</h3>
          <p className="temp">
            🌡 { (weather.main.temp - 273.15).toFixed(1) } °C
          </p>
          <p className="desc">☁️ {weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
