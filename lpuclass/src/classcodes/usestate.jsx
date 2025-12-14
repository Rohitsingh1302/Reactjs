import React,{useState}  from "react";
const Child = ({ onClick })=> {console.log("CHILD RENDERED");
return <button onClick={onClick}>click Child</button>;
};
export default function App(){
    const [count,setCount]=useState(0);
    const handlechildclick=()=>{
        console.log("CHILD BNUTTON CLICKED");
    };
    return(
        <>
        <h1>Count:{count}</h1>
        <Child onClick={handlechildclick}/>
        <button onClick={()=>setCount(count+1)}>Increase Parent</button>
</>
    )
}
//rfuc
//tell me about this code
//This code defines a React functional component named App that uses the useState hook to manage a count state variable. It also defines a Child component that receives an onClick prop and renders a button. When the button in the Child component is clicked, it triggers the onClick function passed from the App component, logging "CHILD BUTTON CLICKED" to the console. The App component displays the current count and includes a button to increase the count by 1 when clicked. Each time the count is updated, the App component re-renders, but the Child component does not re-render unnecessarily because the handlechildclick function is not recreated on each render.
//how to optimize this code
//To optimize this code and prevent unnecessary re-renders of the Child component, you can use the useCallback hook to memoize the handlechildclick function. This way, the function reference remains the same across renders unless its dependencies  change. Here’s how you can do it:
//1. Import useCallback from React.
//2. Wrap the handlechildclick function with useCallback, providing an empty dependency array since it does not depend on any external variables.
//Here’s the optimized code:
