import { checkIfFormExists } from "./CheckExistentForm";
import addTaskBtnEvent from "./addTasks/events/AddTaskBtn";
import editTask from "./editTasks/events/EditTaskEvent";

document.addEventListener('click', documentEventListener);

function documentEventListener(e) {
 
    //checkIfFormExists();
    if(e.target.id === 'add-task-button') addTaskBtnEvent(e);
    if(e.target.closest('.task-left-side-info')) editTask(e);

}