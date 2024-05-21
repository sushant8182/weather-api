import React, { useState, useEffect } from 'react';
import './App.css'; // Import the custom CSS file

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=toronto';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '77beb54537mshc872ebceedd42f4p188cbcjsna64929af9c8c',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="App container">
      <div className="overlay">
        <h1 className="mt-5 mb-4">Weather Conditions</h1>
        {weather && (
          <div className="weather-info">
            <p>Highest temperature: {weather.current.temp_c}°C / {weather.current.temp_f}°F</p>
            <p>Lowest temperature: {weather.current.temp_c}°C / {weather.current.temp_f}°F</p>
            <p>Feels like: {weather.current.feelslike_c}°C / {weather.current.feelslike_f}°F</p>
            <p>Current Status: {weather.current.condition.text}</p>
            <p>Humidity: {weather.current.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

