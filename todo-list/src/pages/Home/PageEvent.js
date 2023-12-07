import { checkIfFormExists } from "./CheckExistentForm";
import addProjectModalEvent from "./Projects/addProject/events/AddNewProjectEvent";
import closeModal from "./Projects/addProject/events/CloseModal";
import openModal from "./Projects/addProject/events/OpenModal";
import addTaskBtnEvent from "./addTasks/events/AddTaskBtnEvent";
import { doneTaskEvent } from "./doneTask/events/doneTaskEvent";
import editTask from "./editTasks/events/EditTaskEvent";

document.addEventListener("click", documentEventListener);

function documentEventListener(e) {

  // Add new Task
  if (e.target.id === "add-task-button") {
    checkIfFormExists();
    addTaskBtnEvent(e);
  }

  // Task Edit Interactions
  if (
    e.target.classList.contains("task-title") ||
    e.target.classList.contains("task-description") ||
    e.target.classList.contains("task-date") ||
    e.target.closest(".task-priority")
  ) {
    checkIfFormExists();
    editTask(e);
  }
  
  // Erase/Finish Task
  if (e.target.classList.contains("task-done-button")) doneTaskEvent(e);

  // Add New Project

  if (e.target.id === 'add-new-project'){
      console.log('ok');
      addProjectModalEvent(e);
  }

}
