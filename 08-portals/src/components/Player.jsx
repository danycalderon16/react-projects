import { useState, useRef } from "react";

export default function Player() {
  const palyerName = useRef();
  const [enteredPlayerName, setenteredPlayerName] = useState(null);

  function handleSubmit(){
    setenteredPlayerName(palyerName.current.value);
    palyerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input 
        ref={palyerName} 
        type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
