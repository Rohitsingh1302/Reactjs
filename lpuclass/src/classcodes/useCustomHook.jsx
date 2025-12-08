//CODE FOR COUNTER USING CUSTOM HOOK
import React from "react";
import {useState} from "react";
export default function useCustomHook(){
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    return(
        {count,increment,decrement}
    )
}
// A custom hook in React is a reusable function that encapsulates stateful logic using built-in hooks like useState or useEffect.
// Custom hooks allow you to share logic across multiple components without duplicating code.
// In this example, the custom hook useCustomHook manages a counter state with increment and decrement functions.
// This hook can be imported and used in any component to provide counter functionality, promoting code reuse and cleaner component code.

// this code is for app.jsx file
//import useCustomHook from "./classcodes/useCustomHook.jsx";
//function App() {
 //const { count, increment, decrement } = useCustomHook();
 //return (
//    <div>
//      <button onClick={increment}> + </button>
//      <h3>{count}</h3>
//      <button onClick={decrement}> - </button>
//    </div>
//  );
// }
// export default App;
// The App component uses the useCustomHook to get the count state and the increment and decrement functions.

















