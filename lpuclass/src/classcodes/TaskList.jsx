function TaskList({list, deleteTask}){

    return (
        <>
            <h2>Task List:-</h2>
            <ol>{list.map((ele,idx)=><li key={idx}>{ele}<button onClick={()=>deleteTask(idx)}>Delete</button></li>)}</ol>
        </>
    );
}
export default TaskList;

