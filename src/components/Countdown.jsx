import { useState, useEffect } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const lastseen = new Date("April 14, 2022 00:00:00");
    const getMissingJustin = () => {
      const diff = Date.now() - lastseen;
      setDays(Math.floor(diff / 1000 / 60 / 60 / 24));
      setHours(Math.floor((diff / 1000 / 60 / 60) % 24));
      setMinutes(Math.floor((diff / 1000 / 60) % 60));
      setSeconds(Math.floor((diff / 1000) % 60));
    };
    setInterval(getMissingJustin, 1000);
  }, []);
  if (!days) {
    return (
      <div>
        <h2 style={{ textAlign: "center", color: "#ddd" }}>
          Missing Justin...{" "}
        </h2>
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#ddd" }}>Last seen:</h2>
      <div className="countdown">
        <div className="days">{days} days</div>
        <div className="hours">{hours < 10 ? `0${hours}` : hours} hours</div>
        <div className="minutes">
          {minutes < 10 ? `0${minutes}` : minutes} minutes
        </div>
        <div className="seconds">
          {seconds < 10 ? `0${seconds}` : seconds} seconds
        </div>
      </div>
    </div>
  );
};

export default Countdown;
