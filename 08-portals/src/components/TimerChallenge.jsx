import React, { useRef, useState } from 'react'
import ResutModal from './ResutModal.jsx';

// let timer;

export default function TimerChallenge({title,targetTime}) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef(); 
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime*1000)

  const timerIsActive = timeRemaining >0 && timeRemaining<targetTime*1000;

  if(timeRemaining<=0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function hanldeReset(){
    setTimeRemaining(targetTime*1000);
  }

  function handleStart(){
     timer.current = setInterval(() => {
     setTimeRemaining(prev=>prev-10);
    },10);
    setTimerStarted(true) 
  }

  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
    <ResutModal ref={dialog} targetTime={targetTime} 
    remainingTime={timeRemaining}
    onReset={hanldeReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? 'Stop': 'Start'} Challenge
        </button>
      </p>
      <p className={timerIsActive ? 'active':undefined}>
        {timerIsActive ? 'Time is running...':'Timer active'}
      </p>
    </section>
    </>
  )
}
