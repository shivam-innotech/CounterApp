import React, { useState, useEffect, useRef } from "react";

function TimerCount(props) {
  const [timer, settimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const intervalId = useRef();

  const increaseCount = () => settimer((prevCount) => prevCount + 1);
  useEffect(() => {
    if (timerStatus) {
      intervalId.current = setInterval(increaseCount, 1000);
    } else if (!timerStatus && timer !== 0) {
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current);
  }, [timer, timerStatus]);

  const handleActive = () => {
    setTimerStatus(!timerStatus);
  };

  return (
    <div>
      <button
        className="btn btn-l  bg-light"
        type="button"
        onClick={handleActive}
      >
        {timerStatus ? "Stop " : "Start"}
      </button>
      <div className="timer bg-light text-dark mt-2 ">{timer}</div>
    </div>
  );
}

export default TimerCount;
