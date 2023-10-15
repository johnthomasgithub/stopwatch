import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      console.log("unmountted");
      clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleResume = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    handleStop();
    setTimer(0);
  };

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
