import React, { useState } from "react";

function App() {
  const [currentColor, setcolor] = useState("white");

  function black() {
    setcolor("black");
  }

  function normal() {
    setcolor("white");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: currentColor }}
        onMouseOver={black}
        onMouseOut={normal}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
