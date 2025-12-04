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