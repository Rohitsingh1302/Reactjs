import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from 'react'
function App() {
const dispatch = useDispatch()
  const [task, setTask] = useState("")
  const todos = useSelector((state) => state.todos)
  const addTask = () => {
    dispatch({
      type : 'ADD_TASK',
      payload : task
    })
    setTask("")
  }

  const deleteTask = (id) => {
    dispatch({
      type : 'DELETE_TASK',
      payload : id
    })
  }
  return(
    <div>
      <h2>Task Manager</h2>
      <input type="text" onChange={(e) =>setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <h3>All Tasks: </h3>
      <ul>{todos.map((item, idx) => 
        <li key={idx}> 
        {idx}{item} <button onClick={() => deleteTask(idx)}>Delete Task</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App