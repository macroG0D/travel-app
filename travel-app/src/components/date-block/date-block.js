import React, { useState, useEffect } from 'react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DateBlock = () => {

  const getTime = () => {
    const date = new Date();

    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      monthNum: date.getMonth(),
      day: date.getDate(),
      dayOfWeek: date.getDay()
    };
  }

  const [ date, setDate ] = useState(getTime());

  useEffect(() => {
    setTimeout(() => setDate(getTime()), 1000);
  }, [date]);

  const { hours, minutes, seconds, monthNum, day, dayOfWeek } = date;

  return (
    <div className="date-block">
      <div className="date-block__time">
        <span className="date-block__hours">{`${hours}:`}</span>
        <span className="date-block__minutes">{`${minutes < 10 ? `0${minutes}` : minutes}:`}</span>
        <span className="date-block__seconds">{`${seconds < 10 ? `0${seconds}` : seconds}`}</span>
      </div>
      <div className="date-block__date">
        <span className="date-block__month">{MONTHS[monthNum]} </span>
        <span className="date-block__day">{`${day}, `}</span>
        <span className="date-block__year">{WEEKDAYS[dayOfWeek]}</span>
      </div>
    </div>
  );
}

export default DateBlock;