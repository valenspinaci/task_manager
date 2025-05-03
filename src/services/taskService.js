const url = "https://6815585132debfe95dbb694d.mockapi.io/tasks/tasks"

export const getTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const createTask = async (title) => {
    const res = await fetch(url, {
        method : "POST",
        headers : { "Content-Type":"application/json"},
        body: JSON.stringify(title, false)
    })
    return await res.json();
};

export const deleteTask = async (id) => {
    await fetch (`${url}/${id}`, {method : "DELETE"})
};

export const updateTask = async (id, updated) => {
    const res = await fetch(`${url}/${id}`, {
        method:"PUT",
        headers : { "Content-Type":"application/json"},
        body: JSON.stringify(updated)
    })
    return await res.json();
};