import {openAddNewTaskForm} from "../AddNewTaskSection";
import {resetAddNewTaskSection} from "../AddNewTaskSection"
import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../../components/form/GetFormValues";
import addTask from "../../../data/StoreNewTask";
import addNewTask from "../AddNewTask";
import { openForm } from "../EditTaskSection";


document.addEventListener('click', documentEventListener);

function documentEventListener(e) {


    if(e.target.closest('.task-left-side-info')){ 
        editTaks(e);
                 
    }
    //if(e.target.id === 'task-edit-save-button') saveButton(e);
    //if(e.target.id === 'task-edit-cancel-button') cancelButton(e)
}

function findTargetId(e) {
    const id = e.target.closest('[data-id]').dataset.id;
    console.log(id);

    return id;
}

function editTaks(e) {
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
    
    resetAddNewTaskSection()
    console.log('save');
}

function cancelButtonEvent(e) {
    e.preventDefault();

    //resetAddNewTaskSection()
    console.log('cancel');
}
