const TaskItem = ({task, onToggle, onDelete, onEdit}) => {
    return(
        <div>
            <span onClick={() => onToggle(task.id)} style={{textDecoration:task.completed ? "line-through" : "none", cursor:"pointer"}}>
                {task.title}
            </span>
            <div>
                <button onClick={()=> onEdit(task)}>Editar  ✏️</button>
                <button onClick={()=> onDelete(task.id)}>Eliminar  🗑️</button>
            </div>
        </div>
    );
}

export default TaskItem;