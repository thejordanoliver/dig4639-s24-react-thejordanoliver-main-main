import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
  const [duration, setDuration] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setDuration(prevDuration => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const resetTimer = () => {
    setDuration(0);
    setTimerRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Duration: {formatTime(duration)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default DurationExercise;
