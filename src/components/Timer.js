import React, { useState, useEffect } from "react";
import { useInterval } from "react-use";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [show, setShow] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    const counterInterval = setInterval(() => {
      if (isRunning) {
        setCount(count + 1);
      }
    }, 1000);
    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  //1. Montar un estado es dentro del cuerpo de useEffect

  //2. Desmontar == return dentro del useEffect
  // useEffect(() => {
  //   return () => {
  //   };
  // }, []);

  //3. if u wanna do smt every time when the state is updated
  //   useEffect(() => {
  //     console.log('mostrar cambio')
  //   }, [mostrar]);

  return (
    <>
      {/* If it is true show the component if not show nothing <></> */}
      {show && <DateComponent />}
      <button
        style={{
          backgroundColor: "white",
          borderColor: "Orange",
          borderRadius: "30px",
        }}
        onClick={() => setShow(true)}
      >
        Show Clock
      </button>
      <button
        style={{
          backgroundColor: "white",
          borderColor: "Orange",
          borderRadius: "30px",
        }}
        onClick={() => setShow(false)}
      >
        Hide Clock
      </button>
      <br />
      <h1>{count}</h1>
      <button
        style={{
          backgroundColor: "white",
          borderColor: "Green",
          borderRadius: "30px",
        }}
        onClick={handleStart}
      >
        Start
      </button>
      <button
        style={{
          backgroundColor: "white",
          borderColor: "Red",
          borderRadius: "30px",
        }}
        onClick={handleStop}
      >
        Stop
      </button>
      <button
        style={{
          backgroundColor: "white",
          borderColor: "Blue",
          borderRadius: "30px",
        }}
        onClick={handleReset}
      >
        Restart
      </button>
    </>
  );
};

export default Timer;

const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(dateInterval);
    };
  }, []);

  return <h1>{date.toISOString()}</h1>;
};
