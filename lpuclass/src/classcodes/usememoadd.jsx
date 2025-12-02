import Ract, { use } from 'react';
import { useMemo, useState } from 'react';
export default function Double(){
    const [num1,setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const add = useMemo(() => num1 + num2, [num1, num2]);
    return(
        <div>
            <input type="number" value={num1}
             onChange={ (e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} 
            onChange={ (e) => setNum2(Number(e.target.value))} />
            <p>Addition:{add}</p>
        </div>
    )
}
// useMemo is a React hook that optimizes performance by memoizing the result of a function.    
// It only recalculates the value when its dependencies change, preventing unnecessary computations during re-renders.
// In this example, the addition is only recalculated when either of the input numbers changes.
// This is particularly useful for expensive calculations that don't need to be redone on every render.
//output way in app.jsx file:-
// import Double from "./classcodes/usememodbl.jsx";
// function App(){
//   return (   
//       <>
//       <Double />
//       </>  
//   )
// }
// export default App;