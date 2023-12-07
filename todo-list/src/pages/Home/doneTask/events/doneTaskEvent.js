import { doneTask } from "../doneTask";

export function doneTaskEvent(e) {
  const taskContainer = e.target.closest("[data-id]");
  const taskId = taskContainer.dataset.id;

  doneTask(taskId);
}
