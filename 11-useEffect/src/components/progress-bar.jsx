import { useEffect, useState } from "react";

const TIMER = 300;

export default function ProgressBar() {
  const [remaningTime, setRemaningTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval)
    }
  }, []);
  return (
    <progress value={remaningTime} max={TIMER} />
  )
}
