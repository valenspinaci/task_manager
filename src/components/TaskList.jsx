import { useEffect, useState } from "react"
import { getTasks, createTask, deleteTask, updateTask, completionTask } from "../services/taskService"
import TaskItem from "./TaskItem"

const TaskList = () =>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(()=>{
        setTasks(getTasks);
    }, [])

    const handleAddTask = () => {
        if(!newTask.trim()) return;
        const newTarea = createTask(newTask);
        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    const handleDelete = (id) =>{
        deleteTask(id);
        setTasks(getTasks());
    }

    const handleToggle = (id) =>{
        completionTask(id);
        setTasks(getTasks());
    }

    const handleEdit = (task) =>{
        const newTarea = prompt("Editar tarea: ", task.tarea)
        if (newTarea !== null && newTarea.trim() !== ""){
            updateTask(task.id, {tarea:newTarea});
            setTasks(getTasks());
        }
    }

    return(
        <div>
            <h2>
                Mis tareas
            </h2>

            <input
                type="text"
                placeholder="Nueva tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button onClick={handleAddTask}>Agregar</button>

            <div>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task = {task}
                        onDelete = {handleDelete}
                        onToggle= {handleToggle}
                        onEdit= {handleEdit}
                    />
                ))}
            </div>
        </div>
    )
}

export default TaskList;