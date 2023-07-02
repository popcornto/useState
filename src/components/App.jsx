import React, { useState } from "react";

function App() {
  const [getTime, setTime] = useState(new Date().toLocaleTimeString("it-IT"));

  function refresh() {
    setTime(new Date().toLocaleTimeString("it-IT"));
  }

  return (
    <div className="container">
      <h1>{getTime}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
