import data from "../data/tasks";

let tasks = [...data];

export const getTasks = () => tasks;

export const createTask = (tarea) => {
    const newTask = {id: Date.now(), tarea, completada:false};
    tasks.push(newTask);
    return newTask;
};

export const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
};

export const updateTask = (id, updated) => {
    tasks = tasks.map(task =>
        task.id === id ? {...task, ...updated} : task
    );
};

export const completionTask = (id) => {
    tasks = tasks.map(task =>
        task.id === id ? {...task, completada:!task.completada} : task
    );
}