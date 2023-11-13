import {openAddNewTaskForm} from "../AddNewTaskSection";
import {resetAddNewTaskSection} from "../AddNewTaskSection"
import { addNewTaskToTable } from "../TasksTable";
import { getFormTitleValue } from "../../../components/form/GetFormTitle";
import { getFormDescriptionValue } from "../../../components/form/GetFormDescription";
import { getFormDateValue } from "../../../components/form/GetFormDate";
import { getFormPriorityValue } from "../../../components/form/GetFormPriority";


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

    addNewTaskToTable(getFormTitleValue(), getFormDescriptionValue(), getFormDateValue(), getFormPriorityValue());
    resetAddNewTaskSection()
    console.log('save');
}

function cancelButton(e) {
    e.preventDefault();

    resetAddNewTaskSection()
    console.log('cancel');
}
