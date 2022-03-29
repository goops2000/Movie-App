import React, { useState } from "react";

const Converter = () => {
  const [minutes, setState] = useState(0);
  const onChange = (event: any) => {
    setState(event.target.value);
  };

  const [flipped, setFlipped] = useState(false);
  const onFlip = () => {
    setFlipped((current) => !current);
    setState(0);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <h3>Minutes</h3>
      <input
        value={flipped ? Math.round(minutes * 60) : minutes}
        onChange={onChange}
        placeholder="Minutes"
        type="number"
        disabled={flipped}
      />
      <h3>Hours</h3>
      <input
        type="number"
        placeholder="Hours"
        disabled={!flipped}
        onChange={onChange}
        value={flipped ? minutes : Math.round(minutes / 60)}
      />
      <p>
        <button onClick={onFlip}>flip</button>
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Converter />
    </div>
  );
}

export default App;
