import { defaultTaskForm } from "../../../components/ui/TaskForm";
import AddTaskButton from "../../../components/ui/AddTaskButton";

const addTaskSection = document.getElementById("add-task-section"); // May have to be inside of the funcionts;

//  Functions

// Add in section
function getAddTaskButton() {
  addTaskSection.appendChild(AddTaskButton());
}

function getAddNewTaskForm() {
  addTaskSection.appendChild(defaultTaskForm());
}

// Remove from section
function removeAddTaskButton() {
  const addTaskButton = document.getElementById("add-task-button");
  addTaskSection.removeChild(addTaskButton);
}

function removeAddNewTaskForm() {
  const addTaskContainer = document.querySelector(".task-edit-container");
  addTaskSection.removeChild(addTaskContainer);
}

// Section Behavior

// This function should be used when user click on add new task button
export function openAddNewTaskForm() {
  removeAddTaskButton();
  getAddNewTaskForm();
}

// This function should be used to reset the section, e.g: On form save or cancel button
export function resetAddNewTaskSection() {
  removeAddNewTaskForm();
  getAddTaskButton();
}
