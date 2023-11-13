import getTaskDisplay from "../../components/ui/Task";

const tasksTable = document.getElementById('tasks-table');

export function addNewTaskToTable(title, description, date, priority) {
    //console.log(title);
    const task = getTaskDisplay(title, description, date, priority);

    tasksTable.appendChild(task);
}