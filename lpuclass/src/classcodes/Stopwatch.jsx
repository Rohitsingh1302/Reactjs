import React, { useEffect } from 'react';
export default function Stopwatch() {
    const [time, setTime] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(false);
    useEffect(() => {
        if (!isRunning) return;
        setInterval(() => {
            setTime((time)=> time + 1);
        },1000);
    }, [isRunning]); 

    const handleStart=()=>{
        setIsRunning(true);
    }
    const handleStop=()=>{
        setIsRunning(false);
    }
    return (
        <div>
            <h2>Stopwatch:-</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={()=>setTime(0)}>Reset</button>
            <h1>{time}</h1>
        </div>
    )
}
//output way:-
// import Stopwatch from "./ClassCodes/Stopwatch";
//   <>
//     <Stopwatch />
//   </>
//concept: Stopwatch component using react js
//description: build a stopwatch component using react js with start, stop and reset button.