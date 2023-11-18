import { useState, useRef } from 'react';

export default function Player() {
    const playerName = useRef();
    const [submittedName, setSubmittedName] = useState(null);

    // function handleChange (event) {
    //     setSubmitted(false);
    //     setSubmittedName(event.target.value);
    // }
    function submit(){
        setSubmittedName(playerName.current.value);
    }
  return (
    <section id="player">
      <h2>Welcome {submittedName ?? 'unknown'} entity</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={submit}>Set Name</button>
      </p>
    </section>
  );
}
