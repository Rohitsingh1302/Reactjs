const initialState={
    todos:[]
}

export function todoReducer(state = initialState, action){ //action will pass thru dispatch func and if u r not passing asny state just intiliase a state
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }
             case 'DELETE_TASK':
            return{
                ...state,
                todos:state.todos.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}