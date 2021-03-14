import React, { useState, useEffect } from 'react';
import ATTRACTIONS from '../../data/ATTRACTIONSEN.json';
import humidityIcon from './humidity-icon.svg';

const ShowWeather = ({ weatherData }) => {
  if (!weatherData) {
    return <h1>No data yet</h1>;
  }
  const { main, description, icon } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;

  return (
    <div className="weather-widget__content">
      <span className="weather-widget__temp"> {temp}° </span>
      <div className="weather-widget__description-wrapper">
        <img
          className="weather-widget__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        ></img>
        <h2 className="weather-widget__main">{main}</h2>
        <span className="weather-widget__weather-desctiption body-text-md">
          {description}
        </span>
      </div>
      <div className="weather-widget__humidity-wrapper">
        <span className="weather-widget__humidity"> {humidity} </span>
        <img
          className="weather-widget__humidityIcon"
          src={humidityIcon}
          alt="humidity"
        ></img>
      </div>
    </div>
  );
};

const Weather = ({ id }) => {
  const { capital } = ATTRACTIONS[id];
  const [weather, setWeatherData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=c14cbfad910079565b03d284addb03ab&units=metric`
    )
      .then((resp) => resp.json())
      .then((data) => setWeatherData(data));
    return () => cancelled;
  }, [capital]);

  return (
    <div className="weather-widget">
      <ShowWeather weatherData={weather} />
    </div>
  );
};

export default Weather;
