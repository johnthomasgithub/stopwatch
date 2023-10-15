import React, { useState } from "react";

const StopWatchMess = () => {
  const [time, setTime] = useState(0);
  let timer;

  const timerFunction = () => {
    timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <button>Start</button>
      <button>Resume</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
};

export default StopWatchMess;
