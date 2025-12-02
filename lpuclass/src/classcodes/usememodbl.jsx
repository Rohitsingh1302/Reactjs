import React from 'react';
import { useMemo, useState } from 'react';
export default function Double(){
    const [num , setNum] = useState(1);
    const double= useMemo(()=> num*2 ,[num] );
    return(
        <div>
            <input type="number" 
            value={num} 
            onChange={ (e) => setNum(e.target.value)} />
            <p>Doubled:{double}</p>
        </div>
    )
}
// useMemo is a React hook that optimizes performance by memoizing the result of a function.    
// It only recalculates the value when its dependencies change, preventing unnecessary computations during re-renders.
// In this example, the doubled number is only recalculated when the input number changes.
// This is particularly useful for expensive calculations that don't need to be redone on every render.
// output way in app.jsx file:-
// import Double from "./classcodes/usememodbl.jsx";
// function App(){
//   return (
//       <>
//       <Double />
//       </>  
//   )
// }
// export default App;


