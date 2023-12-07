import {
  defaultTaskForm,
  filledTaskForm,
} from "../../../components/ui/TaskForm";
import { displayEditedTask, displayTask } from "../../../components/ui/Task";
import findTask from "../../../data/FindTask";

// Functions

// Get task
export function getTaskContainer(id) {
  const task = document.querySelector(`[data-id='${id}']`);
  console.log(task);
  return task;
}

// Append task form on task section
export function getTaskForm(id) {
  const task = findTask(id);

  getTaskContainer(id).appendChild(filledTaskForm(task));
}

// Clear Section
export function clearTaskSection(id) {
  getTaskContainer(id).replaceChildren();
}

// Append task on container

export function updateTaskDisplay(id) {
  const task = findTask(id);

  clearTaskSection(id);
  displayEditedTask(
    task.taskId,
    task.title,
    task.description,
    task.date,
    task.priority,
  );
}

// Section Behavior

export function openForm(id) {
  clearTaskSection(id);
  getTaskForm(id);
}

export function cancelForm(id) {
  const task = findTask(id);

  clearTaskSection(id);
  displayEditedTask(
    task.taskId,
    task.title,
    task.description,
    task.date,
    task.priority,
  );
}

// getTaskInfo

export function getTask(id) {
  const task = findTask(id);
}
