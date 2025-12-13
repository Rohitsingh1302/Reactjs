import React, { useReducer } from 'react'

export default function Register() {
    const initialState = { name: '', email: '', password: '' }

    function reduce(state, action) {
        if (action.type === 'reset') {
            return initialState;
        }
        return { ...state, [action.field]: action.value }
    }
    const [state, dispatch] = useReducer(reduce, initialState);
    return (
        <div>
            Username: <input type="text" value={state.username} onChange={(e) => dispatch({ field: 'username', value: e.target.value })} /><br />
            Password: <input type="password" value={state.password} onChange={(e) => dispatch({ field: 'password', value: e.target.value })} /><br />
            Email: <input type="email" value={state.email} onChange={(e) => dispatch({ field: 'email', value: e.target.value })} /><br />

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <h3>Username: {state.username}</h3>
            <h3>Email: {state.email}</h3>
            <h3>Password: {state.password}</h3>
        </div>
    )
}
//rfuc
//This code defines a React functional component named Register that uses the useReducer hook to manage the state of a user registration form. The form includes fields for username, password, and email. The initial state is an object with empty strings for each field. The reduce function handles state updates based on dispatched actions. When the user types in any of the input fields, an action is dispatched to update the corresponding field in the state. There is also a reset button that, when clicked, dispatches a 'reset' action to revert the state back to its initial values. The current values of the username, email, and password are displayed below the form.
//how to optimize this code
//To optimize this code, you can consider the following improvements:
//1. Use useCallback for dispatching functions to prevent unnecessary re-renders of child components if any are added in the future.
//2. Validate input fields to ensure data integrity before updating the state.
//3. Implement form submission handling to process the collected data.
//4. Use a library like Formik or React Hook Form for more complex forms to simplify state management and validation.