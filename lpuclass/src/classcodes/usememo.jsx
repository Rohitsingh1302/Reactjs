import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive calculation
  const squaredValue = useMemo(() => {
    console.log("Calculation running...");
    return count * count;
  }, [count]); // sirf count change hone par chalega

  return (
    <div>
      <h2>useMemo Example</h2>

      <p>Count: {count}</p>
      <p>Square: {squaredValue}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
