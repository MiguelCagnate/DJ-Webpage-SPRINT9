import React, { useEffect, useState } from "react";
import { ApiCall } from "../ApiCall";
import './Weather.css'
export const Weather = () => {
  const [weather, setWeather] = useState(null);

  const kelvinToCelcius = (k) => Math.round(k - 273.15);

  useEffect(() => {
    ApiCall(setWeather);
  }, []);

  return (
    <>
      {weather !== null ? (
        <div className="weather">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div>
            <span>{weather.name}</span>
            <span>{kelvinToCelcius(weather.main.feels_like)}°C</span>
          </div>
        </div>
      ) : (
        " pailas el weather"
      )}
    </>
  );
};
