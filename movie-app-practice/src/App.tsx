import React, { useState } from "react";

function MinutesToHours() {
  const [minutes, setState] = useState(0);
  const onChange = (event: any) => {
    setState(event.target.value);
  };

  const [flipped, setFlipped] = useState(false);
  const onFlip = () => {
    setFlipped((current) => !current);
    setState(0);
  };

  const onReset = () => {
    setState(0);
  };
  return (
    <>
      <div>
        <h3>Minutes</h3>
        <input
          value={flipped ? Math.round(minutes * 60) : minutes}
          onChange={onChange}
          placeholder="Minutes"
          type="number"
          disabled={flipped}
        />
      </div>
      <div>
        <h3>Hours</h3>
        <input
          type="number"
          placeholder="Hours"
          disabled={!flipped}
          onChange={onChange}
          value={flipped ? minutes : Math.round(minutes / 60)}
        />
      </div>
      <span>
        <button onClick={onFlip}>{flipped ? "Turn back" : "Invert"}</button>
      </span>
      <span>
        <button onClick={onReset}>reset</button>
      </span>
    </>
  );
}

function KmToM() {
  const [distance, setDistance] = useState(0);
  const onDistance = (event: any) => {
    setDistance(event.target.value);
  };
  const [flipped, onflipped] = useState(false);
  const onFlip = () => {
    onflipped((current) => !current);
    setDistance(0);
  };
  const onReset = () => {
    setDistance(0);
  };

  return (
    <>
      <div>
        <h3>KM</h3>
        <input
          value={flipped ? distance / 1000 : distance}
          placeholder={"KM"}
          type="number"
          onChange={onDistance}
          disabled={flipped}
        />
      </div>
      <div>
        <h3>M</h3>
        <input
          value={flipped ? distance : distance * 1000}
          placeholder={"M"}
          type="number"
          onChange={onDistance}
          disabled={!flipped}
        />
      </div>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Revert"}</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

function App() {
  const [index, setIndex] = useState("0");
  const onIndex = (event: any) => {
    setIndex(event.target.value);
  };
  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onIndex}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & M</option>
      </select>
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToM /> : null}
    </div>
  );
}

export default App;
