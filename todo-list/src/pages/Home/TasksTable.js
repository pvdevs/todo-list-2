import { displayNewTask } from "../../components/ui/Task";

const tasksContainer = document.getElementById('tasks');

export function addNewTaskToTable(task) {
    
    const newTask = displayNewTask(task.taskId, task.title, task.description, task.date, task.priority);

    tasksContainer.appendChild(newTask);
}

export function getAllTasks() {

    const allKeys = Object.keys(localStorage);
    const teste = allKeys.map(key => JSON.parse(localStorage.getItem(key)));

    // This is used to separate the Tasks from other objects in localStorages
    teste.forEach(item => {
        if(item.hasOwnProperty('taskId')) console.log(item);
    });

    //console.log(teste);
}