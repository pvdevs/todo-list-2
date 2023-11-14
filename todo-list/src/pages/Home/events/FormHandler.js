import {openAddNewTaskForm} from "../AddNewTaskSection";
import {resetAddNewTaskSection} from "../AddNewTaskSection"
import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../../components/form/GetFormValues";
import addTask from "../../../data/StoreNewTask";
import addNewTask from "../AddNewTask";
import { openForm } from "../EditTaskSection";


document.addEventListener('click', documentEventListener);

function documentEventListener(e) {
    
    //console.log(e.target.classList);
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

    addNewTask(
        getFormTitleValue(),
        getFormDescriptionValue(),
        getFormDateValue(),
        getFormPriorityValue()
        );

    resetAddNewTaskSection()
    console.log('save');
}

function cancelButton(e) {
    e.preventDefault();

    resetAddNewTaskSection()
    console.log('cancel');
}
