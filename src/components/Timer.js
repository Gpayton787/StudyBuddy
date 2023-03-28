
import React from "react";
import { Alert, Button } from 'react-bootstrap';
import "../App.css";
import "./Timer.css"
import light from "../assets/S.jpg"

function Timer(props) {
  const {theme} = props;
  const [isRunning, setIsRunning] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(25*60); // Initial time left is 25 minutes
  const [minutes, setMinutes] = React.useState(25);

  // Calculate the number of minutes
const displayminutes = Math.floor(timeLeft / 60);

// Calculate the number of seconds
const seconds = timeLeft % 60;

//Format string
const secondsString = seconds.toString().padStart(2, "0");
//Keep track of alert

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25*60); // Reset time left to 25 minutes
  };

  React.useEffect(() => {
    // Don't update the timer if it's not running
    if (!isRunning) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 0) {
          return timeLeft - 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [isRunning, timeLeft]);

  const submitForm = (e) => {
    e.preventDefault();
    // Update the time left using the value entered by the user
    setTimeLeft(minutes*60);
  };

  return (
    <div className="timer-container">
      {timeLeft === 0 && (
      <Alert variant="primary">Break time, you deserve it! :D</Alert>)}
      <h1>Pomodoro Timer</h1>
      <p className="timer-text">{displayminutes} : {secondsString}</p>
        <div>
        {/* <form onSubmit={submitForm}>
          <input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} />
          <button type="submit">Update Timer</button>
        </form> */}
        <button className="btn btn-outline-secondary" onClick={startTimer}>Start</button>
        <button className="btn btn-outline-secondary" onClick={stopTimer}>Stop</button>
        <button className="btn btn-outline-secondary" onClick={resetTimer}>Reset</button>
        
        
        </div>
        <form onSubmit={submitForm}>
          <div className="form-group">
          <input className="timer-input" placeholder="mins"  type="number" value={minutes} onChange={e => setMinutes(e.target.value)} />
          <button className="btn btn-outline-secondary" type="submit">Update Timer</button>
          </div>
          </form>
      <div>
        <img width="500px" src={light} alt= "study"/>
      </div>
    </div>
  );
}
export default Timer;