const TaskItem = ({task, onToggle, onDelete, onEdit}) => {
    return(
        <div>
            <span onClick={() => onToggle(task.id)} style={{textDecoration:task.completed ? "line-through" : "none", cursor:"pointer"}}>
                {task.title}
            </span>
            <div>
                <button className="bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-yellow-600 rounded" onClick={()=> onEdit(task)}>Editar  ✏️</button>
                <button className="bg-transparent hover:bg-neutral-900 text-white font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-600 rounded" onClick={()=> onDelete(task.id)}>Eliminar  🗑️</button>
            </div>
        </div>
    );
}

export default TaskItem;