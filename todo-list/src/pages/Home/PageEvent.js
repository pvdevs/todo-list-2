import addTaskBtnEvent from "./addTasks/events/AddTaskBtn";

document.addEventListener('click', documentEventListener);

function documentEventListener(e) {
 
    if(e.target.id === 'add-task-button') addTaskBtnEvent(e);

}