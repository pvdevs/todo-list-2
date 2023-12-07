import { resetAddNewTaskSection } from "./addTasks/AddNewTaskSection";
import { cancelForm } from "./editTasks/EditTaskSection";

// Should this task return a bool value?
export function checkIfFormExists() {
  const taskForm = document.querySelector(".task-edit-container");

  if (taskForm) {
    console.log("existe!");
    checkFormType();
  } else {
    console.log("nd ainda");
  }
}

// This function checks if it is a "Add new task" Form, or a "Edit task" Form;
function checkFormType() {
  const taskForm = document.querySelector(".task-edit-container");

  if (taskForm.closest("[data-id]")) {
    console.log("edit task section");
    cancelEditTaskForm();
  }

  if (taskForm.closest("#add-task-section")) {
    console.log("add task section");
    cancelAddNewTaskForm();
  }
}

// This function handle dependin on Form Type;

// This function will cancel the "Add new task" Form;
function cancelAddNewTaskForm() {
  resetAddNewTaskSection();
}

// This function will cancel the "Edit Task" Form;
function cancelEditTaskForm() {
  const taskForm = document.querySelector(".task-edit-container");
  const taskId = taskForm.closest("[data-id]").dataset.id;
  cancelForm(taskId);
}
