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

