import data from "../data/tasks";

let tasks = [...data];

export const getTasks = () => tasks;

export const createTask = (title) => {
    const newTask = {id: data.length+1, title, completed:false};
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
        task.id === id ? {...task, completed:!task.completed} : task
    );
}