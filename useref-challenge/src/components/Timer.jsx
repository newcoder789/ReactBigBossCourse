import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // New state to track if the timer is running
  useEffect(()=>{
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount)=>prevCount+1);
      }, 1000);
  }
    return ()=>{  
      clearInterval(intervalRef.current);
    }
  },[isRunning])


  return (
    <div>
      <div id="time">Time: {count}</div>
      <button onClick={() => {setCount(0);setIsRunning(!isRunning);}}>Reset</button>
      {isRunning?<button onClick={() => {clearInterval(intervalRef.current); setIsRunning(!isRunning)}}>Stop</button>:
      count?
      <button onClick={() => setIsRunning(!isRunning)}>Continue</button>:
      <button onClick={() =>setIsRunning(!isRunning)}>Start</button>}
    </div>
  );
};

export default Timer;
