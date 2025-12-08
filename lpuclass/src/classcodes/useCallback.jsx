import React, { useState, useCallback } from "react";
const Button = ({ onClick, children }) => {
  console.log(`Button rendered for ${children}`);
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    console.log("increment inside");
    setCount(prev => prev + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    console.log("decrement inside");
    setCount(prev => prev - 1);
  }, []);
  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};
export default UseCallback;