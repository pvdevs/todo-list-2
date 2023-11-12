import {openAddNewTaskForm} from "../AddNewTaskSection";
import {resetAddNewTaskSection} from "../AddNewTaskSection"

document.addEventListener('click', documentEventListener);

function documentEventListener(e) {

    if(e.target.id === 'add-task-button') addTaskButton(e);
    if(e.target.id === 'task-edit-save-button') saveButton(e);
    if(e.target.id === 'task-edit-cancel-button') cancelButton(e)
}

function addTaskButton(e) {
    e.preventDefault();

    openAddNewTaskForm();
    console.log('edit');
}


function saveButton(e) { // Should also create the task in the backend
    e.preventDefault();

    resetAddNewTaskSection()
    console.log('save');
}

function cancelButton(e) {
    e.preventDefault();

    resetAddNewTaskSection()
    console.log('cancel');
}