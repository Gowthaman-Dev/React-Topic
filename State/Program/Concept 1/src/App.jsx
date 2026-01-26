import { useState } from "react";

const App = () => {
  // STATE (Component Memory)
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Normal Variable (for comparison)
  let normalCount = 0;

  return (
    <>
      <h1>React State Demo (Arrow Function)</h1>

      {/* STATE COUNT */}
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      {/* STATE INPUT */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your Name: {name}</p>

      <hr />

      {/* NORMAL VARIABLE */}
      <h2>Normal Variable Count: {normalCount}</h2>

      <button
        onClick={() => {
          normalCount = normalCount + 1;
          console.log("Normal Count:", normalCount);
        }}
      >
        Increase Normal Variable
      </button>
    </>
  );
};

export default App;
