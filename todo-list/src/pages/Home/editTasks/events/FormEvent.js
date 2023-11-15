import {openAddNewTaskForm} from "../../addTasks/AddNewTaskSection";
import {resetAddNewTaskSection} from "../../addTasks/AddNewTaskSection"
import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../../../components/form/GetFormValues";
import addTask from "../../../../data/StoreNewTask";
import addNewTask from "../../addTasks/AddNewTask";
import { openForm, updateTaskDisplay } from "../EditTaskSection";
import getUpdateTask from "../EditTask";


document.addEventListener('click', documentEventListener);

function documentEventListener(e) {


    if(e.target.closest('.task-left-side-info')) editTaks(e);

}

function findTargetId(e) {
    const id = e.target.closest('[data-id]').dataset.id;
    console.log(id);

    return id;
}

export function editTaks(e) {
    const id = findTargetId(e);

    // Check if there is a form open alredy and close it if its the case

    //Open form id
    openForm(id);

    // Cancel Listener
    const cancelBtn = document.getElementById('task-edit-cancel-button');
    cancelBtn.addEventListener('click', cancelButtonEvent);

    // Save Listener
    const saveBtn = document.getElementById('task-edit-save-button')
    saveBtn.addEventListener('click', saveButtonEvent);
}

function saveButtonEvent(e) { // Should also create the task in the backend
    e.preventDefault();
    
    getUpdateTask(findTargetId(e));
    console.log('save');
}

function cancelButtonEvent(e) {
    e.preventDefault();

    //resetAddNewTaskSection()
    console.log('cancel');
}
