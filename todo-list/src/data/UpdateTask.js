import findTask from "./FindTask";
import { tasks } from "./Tasks";

export default function updateTask(id, newTitle, newDescription, newDate, newPriority) {
    const task = findTask(id);
    
    task.title = newTitle;
    task.description = newDescription;
    task.date = newDate;
    task.priority = newPriority;
}