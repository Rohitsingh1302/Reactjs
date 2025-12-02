import React from "react";
import { useReducer } from "react";
export default function Counterreducer(){
    const [state, dispatch] = useReducer(reduce,{count:0});
    return(
        <div>
            <h2>Counter Value: {state.count}</h2> 
            <button onClick={ () => dispatch({type:'INC'}) }>+</button>
            <button onClick={ () => dispatch({type:'DEC'}) }>-</button>
        </div>
    )
}   
//dispatch function is used to call the reducer with an action object.
// reducer function to handle state transitions
function reduce(state, action){ 
    if(action.type === 'INC'){
        return {count: state.count + 1};
    }
    if(action.type === 'DEC'){
        return {count: state.count - 1};
    }   
}
// useReducer is a React hook that manages complex state logic in functional components.
// It takes a reducer function and an initial state, returning the current state and a dispatch function.
// The reducer function defines how state updates based on dispatched actions.
// This is particularly useful for managing state with multiple sub-values or complex transitions.
