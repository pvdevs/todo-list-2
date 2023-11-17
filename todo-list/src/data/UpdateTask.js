import findTask from "./FindTask";

export default function updateTask(id, newTitle, newDescription, newDate, newPriority) {
    const task = findTask(id);

    task.title = newTitle;
    task.description = newDescription;
    task.date = newDate;
    task.priority = newPriority;

    const taskConverted = JSON.stringify(task);
    localStorage.setItem(`task: ${id}`, taskConverted);
}