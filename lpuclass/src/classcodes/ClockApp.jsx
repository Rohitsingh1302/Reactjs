import React, { useEffect, useState } from 'react'
export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
    }, []);
    return (
        <>
        <h1>Current Time is:</h1>
        <h2>{time}</h2>
        </>
    )   
}
//concept: functional component with state in react js.LIVE CLOCK mini project
//description: build a clock component that displays the current time using useState hook.
//output way:-
// import Clock from './ClassCodes/ClockApp.jsx';
//   <>
//   <Clock/>
// </>
