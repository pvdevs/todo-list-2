import {openAddNewTaskForm} from "../AddNewTaskSection";
import {resetAddNewTaskSection} from "../AddNewTaskSection"
import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../../components/form/GetFormValues";
import addTask from "../../../data/StoreNewTask";
import addNewTask from "../AddNewTask";


document.addEventListener('click', documentEventListener);

function documentEventListener(e) {

    if(e.target.closest('.task-left-side-info')){ 
                
    }
    if(e.target.id === 'task-edit-save-button') saveButton(e);
    if(e.target.id === 'task-edit-cancel-button') cancelButton(e)
}

function editTaks() {
    
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
