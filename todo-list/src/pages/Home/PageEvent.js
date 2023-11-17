import { checkIfFormExists } from "./CheckExistentForm";
import addTaskBtnEvent from "./addTasks/events/AddTaskBtnEvent";
import { doneTaskEvent } from "./doneTask/events/doneTaskEvent";
import editTask from "./editTasks/events/EditTaskEvent";

document.addEventListener('click', documentEventListener);

function documentEventListener(e) {
 
    
    if(e.target.id === 'add-task-button') {
        checkIfFormExists();
        addTaskBtnEvent(e);
        }

    if(e.target.classList.contains('task-title') ||
       e.target.classList.contains('task-description') ||
       e.target.classList.contains('task-date') ||
       e.target.closest('.task-priority')) {
        checkIfFormExists();
        editTask(e);
       }

    if(e.target.classList.contains('task-done-button')) doneTaskEvent(e);

}