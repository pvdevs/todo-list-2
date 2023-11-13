import getTaskDisplay from "../../components/ui/Task";

const tasksContainer = document.getElementById('tasks');

export function addNewTaskToTable(title, description, date, priority) {
    //console.log(title);
    const task = getTaskDisplay(title, description, date, priority);

    tasksContainer.appendChild(task);
}