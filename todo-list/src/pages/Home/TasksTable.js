import { displayNewTask } from "../../components/ui/Task";

const tasksContainer = document.getElementById('tasks');

export function addNewTaskToTable(task) {
    
    const newTask = displayNewTask(task.id, task.title, task.description, task.date, task.priority);

    tasksContainer.appendChild(newTask);
}