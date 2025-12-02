import React, { useEffect } from 'react';
export default function Countdown() {
    const [time, setTime] = React.useState(10);
    useEffect(() => {
        if (time > 0) {
            setInterval(() => {
                setTime(time - 1);
            },1000);
        }
    }, [time]);
  return (
    <div>
      <h2>Reverse Countdown:-</h2>
      <h1>{time}</h1>
    </div>
  )
}
//hello