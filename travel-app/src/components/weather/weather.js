import React, { useState, useEffect } from 'react';
import ATTRACTIONS from '../../data/ATTRACTIONS.json';

const Weather = ({ id }) => {
  const { capital } = ATTRACTIONS[id];
  const weatherData = {
    main: null,
    weather: null,
  };

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&lang=en&appid=c14cbfad910079565b03d284addb03ab&units=metric`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const {main, weather} = data;
        weatherData.main = main;
        weatherData.weather = weather;
        console.log(weatherData);
      });
    return <h1> test </h1>
};

export default Weather;
