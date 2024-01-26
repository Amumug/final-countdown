import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimeExpired] = useState(false);
  
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal()
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challene-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer incative"}
        </p>
      </section>
    </>
  );
}
