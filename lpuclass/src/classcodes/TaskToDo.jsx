//make a task to do component using class component which has an input field and a button to add tasks to a list and display the list of tasks in order wise.
import TaskList from "./TaskList";
import { useState } from "react";
function TaskToDo(){
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");

    const handleInput = (e) => setTask(e.target.value);
    const handleAdd = () =>setList([...list, task]);
    const handleDelete = (index) => setList(list.filter((_, i) => i !== index));
    return (
       <>
       <input type="text" placeholder="Enter task here" onChange={handleInput}/>
       <button onClick={handleAdd}>Add Task</button>
       <TaskList list = {list} deleteTask={handleDelete} />
       </>
    )
}
export default TaskToDo;
//output way:-
// import TaskToDo from "./ClassCodes/TaskToDo";
//   <>
//   <TaskToDo></TaskToDo>
//   </>    