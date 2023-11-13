import getTaskDisplay from "../../components/ui/Task";

const tasksContainer = document.getElementById('tasks');

export function addNewTaskToTable(task) {
    
    const newTask = getTaskDisplay(task.id, task.title, task.description, task.date, task.priority);

    tasksContainer.appendChild(newTask);
}