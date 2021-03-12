import React, { useState, useEffect, useContext } from 'react';
import ATTRACTIONS from "../../data/ATTRACTIONS.json";
// import Context from "../context";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getLocalDate = (date, id, lang) => {
  const { timeZone } = ATTRACTIONS[id];

  const month = date.toLocaleString(lang, { timeZone, month: "long" });
  const day = date.toLocaleString(lang, { timeZone, day: "numeric" });
  const weekday = date.toLocaleString(lang, { timeZone, weekday: "long" });
  const russianDate = date.toLocaleString(lang, { timeZone, day: "numeric", month: "long" });

  switch (lang) {
    case 'en':
      return `${capitalizeFirstLetter(month)} ${day}, ${capitalizeFirstLetter(weekday)}`;
    case 'de':
      return `${capitalizeFirstLetter(weekday)}, ${day}. ${capitalizeFirstLetter(month)}`;
    case 'ru':
      return `${russianDate}, ${capitalizeFirstLetter(weekday)}`;
    default:
      return null;
  }
}

const getLocalTime = (date, id) => {
  const { timeZone } = ATTRACTIONS[id];

  const hour = date.toLocaleString("en-GB", { timeZone, hour: "numeric" });
  const minute = date.toLocaleString("en-GB", { timeZone, minute: "numeric" });
  const second = date.toLocaleString("en-GB", { timeZone, second: "numeric" });


  return `${hour < 10 ? hour.slice(0, 1) : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

const DateBlock = ({ id }) => {

  // раскомментировать, когда будет добавлен Context
	// const [lang] = useContext(Context);

	const lang = 'en'; // удалить, когда будет добавлен Context
  
  const [date, setDate] = useState(getLocalDate(new Date(), id, lang));
  const [time, setTime] = useState(getLocalTime(new Date(), id));

  useEffect(() => {
    setTimeout(() => {
      setDate(getLocalDate(new Date(), id, lang));
      setTime(getLocalTime(new Date(), id));
    }, 1000);
  }, [date, time]);

  return (
    <div className="date-block">
      <div className="date-block__time">{time}</div>
      <div className="date-block__date">{date}</div>
    </div>
  );
}

export default DateBlock;