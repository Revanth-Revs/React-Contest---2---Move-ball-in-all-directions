import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const start = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(flase);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
    setX(0);
    setY(0);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div.classNmae="ball" style={ballPosition}></div>;
    } else
      return (
        <button className = "start" onClick={start}>
          Start
        </button>
      );
  };
  const move = (event) => {
    const currentPosition = { ...ballPosition };
    if (event.keyCode === 39) {
      currentPosition.left = +currentPositioj.left.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 40) {
      currentPosition.top = +currentPositioj.top.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 38) {
      currentPosition.top = +currentPositioj.top.slice(0, -2) - 5 + "px";
    } else if (event.keyCode === 37) {
      currentPosition.left = +currentPositioj.left.slice(0, -2) - 5 + "px";
    }
    setBallPosition(currentPosition);
  };
  React.useEffect(() => {
    document.addEventListener("keydown", move);
    return () => {
      document.removeEventListener("keydown", move);
    };
  });
  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
