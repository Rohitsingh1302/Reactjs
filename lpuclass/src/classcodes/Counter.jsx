import { useState } from "react";   
function Counter() {
    const[count, setCount] = useState(0);
    const handleINC = () =>setCount(count + 1);
    const handleDEC = () =>setCount(count - 1);
    const reset = () =>setCount(0);
  return (
    <>
    <button onClick={()=>handleDEC()}>-</button>
    <button onClick={()=>reset()}>RESET 0</button>
    <button onClick={()=>handleINC()}>+</button>
    <p> counter value:{count}</p>
    </>
  );
}
export default Counter;
//concept: functional component with state in react js
//description: build a counter component with increment, decrement and reset functionality using useState hook.
//output way:-
// import Counter from "./ClassCodes/Counter";
//   <>
//   <Counter />
//   </>
