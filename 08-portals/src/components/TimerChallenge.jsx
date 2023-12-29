import React, { useRef, useState } from 'react'
import ResutModal from './ResutModal.jsx';

// let timer;

export default function TimerChallenge({title,targetTime}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef(); 
  const dialog = useRef();

  function handleStart(){
     timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    },targetTime*1000);
    setTimerStarted(true) 
  }

  function handleStop(){
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResutModal ref={dialog} targetTime={targetTime} result={"Lost"}/>
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop': 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active':undefined}>
        {timerStarted ? 'Time is running...':'Timer active'}
      </p>
    </section>
    </>
  )
}