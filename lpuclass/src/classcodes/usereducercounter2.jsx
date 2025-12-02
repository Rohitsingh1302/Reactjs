import React from "react";
import { useReducer } from "react";
export default function Counterreducer2(){
    const [state, dispatch] = useReducer(reduce,{count:0,step:6});
    return(
        <div>
            <h2>Counter Value: {state.count}</h2> 
            <h2>Counter State: {state.step}</h2>
            <button onClick={ () => dispatch({type:'INC'}) }>+</button>
            <button onClick={ () => dispatch({type:'DEC'}) }>-</button>
        </div>
    )
}   
function reduce(state, action){ 
    if(action.type === 'INC'){
        return {...state,count: state.count + parseInt(state.step)};
    }
    if(action.type === 'DEC'){
        return {...state,count: state.count - parseInt(state.step)};
    }   
}
// This example extends the useReducer hook to manage a counter with an additional step value.
// The state now includes both count and step, allowing for more complex state management.
// The reducer function updates the count based on the step value when incrementing or decrementing.
// This demonstrates how useReducer can handle multiple related state values in a single state object.
// useReducer is a React hook that manages complex state logic in functional components.
// It takes a reducer function and an initial state, returning the current state and a dispatch function.
// The reducer function defines how state updates based on dispatched actions.
// This is particularly useful for managing state with multiple sub-values or complex transitions.
