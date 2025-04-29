const TaskItem = ({task, onToggle, onDelete, onEdit}) => {
    return(
        <div>
            <span onClick={() => onToggle(task.id)} style={{textDecoration:task.completed ? "line-through" : "none", cursor:"pointer"}}>
                {task.tarea}
            </span>
            <div>
                <button onClick={()=> onEdit(task)}>✏️</button>
                <button onClick={()=> onDelete(task.id)}>🗑️</button>
            </div>
        </div>
    );
}

export default TaskItem;