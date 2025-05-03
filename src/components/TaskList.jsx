import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../services/taskService";
import TaskItem from "./TaskItem";

const TaskList = () =>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const fetchTasks = async () =>{
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            console.log(`No se pudieron cargar las tareas. ${error}`);
        }
    };

    useEffect(() =>{
        fetchTasks();
    }, [])

    const handleAddTask = async () => {
        try {
            await createTask({title:newTask});
            await fetchTasks();
            setNewTask("");
        } catch (error) {
            console.log(`No se puede agregar la tarea. ${error}`);
        }
        
    }

    const handleDelete = async (id) =>{
        try {
            await deleteTask(id);
            await fetchTasks();
        } catch (error) {
            console.log(`No se pudo eliminar la tarea. ${error}`)
        }
    }

    const handleToggle = async (task) =>{
        try {
            await updateTask(task.id, {completed : !task.completed})
            fetchTasks();
        } catch (error) {
            console.log(`No se pudo tachar la tarea. ${error}`)
        }

    }

    const handleEdit = async (task) =>{
        const newTarea = prompt("Editar tarea: ", task.title)
        try {
            if (newTarea !== null && newTarea.trim() !== ""){
                await updateTask(task.id, {title:newTarea});
                await fetchTasks();
            }
        } catch (error) {
            console.log(`No se pudo actualizar la tarea. ${error}`)
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
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                            onToggle={() => handleToggle(task)}
                        />
                    ))
                ) : (
                    <p>No hay tareas aún.</p>
                )}
            </div>
        </div>
    )
}

export default TaskList;