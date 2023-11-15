import { defaultTaskForm, filledTaskForm } from "../../../components/ui/TaskForm";
import { displayEditedTask, displayTask } from "../../../components/ui/Task";
import findTask from "../../../data/FindTask";

// Get task
export function getTaskContainer(id) {
    const task = document.querySelector(`[data-id='${id}']`);
    console.log(task);
    return task
}

// Remove and clear task section from all elements
export function clearTaskSection(id){
    getTaskContainer(id).replaceChildren();
}

// Append task form on task section
export function getTaskForm(id) {
    const task = findTask(id);

    getTaskContainer(id).appendChild(filledTaskForm(task));
}

// Append task on container
export function appendTask(id) { 
    //displayTask()
}

export function updateTaskDisplay(id) {
    const task = findTask(id);
    
    displayEditedTask(task.id, task.title, task.description, task.id, task.priority);
}

// Section Behavior

export function openForm(id) {
    clearTaskSection(id);
    getTaskForm(id);
}