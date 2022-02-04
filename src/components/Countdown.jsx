import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const lastseen = new Date("December 21, 2021 00:00:00");
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
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>February 3, 2022 Update</Accordion.Header>
          <Accordion.Body>
            ThePoMoTroll via Discord said: My bad guys, sorry for going MIA. Im
            in Tennessee, staying with my fiancé. The weather hasnt really
            cooperated so I couldnt come back up to Ohio. Im doing really good
            though and havent been sold into sex slavery.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why do we miss Justin?</Accordion.Header>
          <Accordion.Body>
            Justin was last seen on December 21st 2021. Don't worry though, he's
            not missing. We just miss him. Justin drove down to Tennessee. If
            you happen to see Justin let him know that we miss him.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Countdown;
