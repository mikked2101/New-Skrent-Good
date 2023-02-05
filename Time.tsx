import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

function Clock() {
  const [dateTime, setDateTime] = useState(DateTime.local().setLocale("en-NO"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(DateTime.local().setLocale("en-NO"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h1 className="time">
        {dateTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </h1>
      <h5 className="date">
        {dateTime.toLocaleString({
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </h5>
      <h5 className="week">Week {dateTime.weekNumber}</h5>
    </div>
  );
}

export default Clock;