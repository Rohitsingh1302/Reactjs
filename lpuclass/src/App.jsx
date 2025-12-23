import { useReducer, useState } from 'react'
import todoReducer from './redux/ToDoReducer'
function App() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] })
  const [task, setTask] = useState("")
  
  const addTask = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    })
    setTask("")
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    })
  }
  
  return(
    <div>
      <h2>Task Manager</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <h3>All Tasks: </h3>
      <ul>{state.todos.map((item, idx) => 
        <li key={idx}> 
        {idx}{item} <button onClick={() => deleteTask(idx)}>Delete Task</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App;