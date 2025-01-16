import React, { useState, useEffect, useRef } from "react";
import './Stopwatch.css'

const Stopwatch = () => {
  const [timeRunning, setTimeRunning] = useState(false);
  // boolean for state of time running or not
  const [elapsedTime, setElapsedTime] = useState(0);
  // time registering from epic or some sort of date recorder
  const startTimeRef = useRef();
  const intervalId = useRef();

  useEffect(() => {
    if (timeRunning) {
      intervalId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
      // interval will run function every 10 milliseconds
    }
    // fixed as the interval had been running regardless of timeRunning state

    return () => {
      clearInterval(intervalId.current);
    };
  }, [timeRunning]);

  function start() {
    setTimeRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setTimeRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setTimeRunning(false);
  }

  function timeFormat() {
    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    // probably hrs isn't needed in the stopwatch.
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let milsec = Math.floor((elapsedTime % 1000) / 10);

    let m = String(min).padStart(2, "0");
    let s = String(sec).padStart(2, "0");
    let sm = String(milsec).padStart(2, "0");

    return `${m}:${s}:${sm}`;
    // Changed the return value of timeFormat() from JSX fragments with a template literal
    // (<>{...}</>) to simply returning the formatted string directly (return `${m}:${s}:${sm}`;).
    // This ensures the time displays correctly in the DOM.
  }

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">StopWatch</h1>
      <div className="stopwatch-time">{timeFormat()}</div>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button start-button" onClick={start}>
          Start
        </button>
        <button className="stopwatch-button stop-button" onClick={stop}>
          Stop
        </button>
        <button className="stopwatch-button reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
