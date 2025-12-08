import React from "react"
import {useState} from "react";

export default function useCustomHook(){
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    return(
        {count,increment,decrement}
    )
}

// this will be in App.jsx file

//import React from "react";
//import useCustomHook from "./useCustomHook";
//export default function App() {
//  const { count, increment, decrement } = useCustomHook();

 // return (
//    <div>
 //     <button onClick={increment}> + </button>
  //    <h3>{count}</h3>
  //    <button onClick={decrement}> - </button>
  //  </div>
 // );
//}