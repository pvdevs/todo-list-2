import { addNewTaskToTable } from "../TasksTable";
import Task from "../../../data/Task";
import storeTask from "../../../data/localStorage/storeTask";

export default function addNewTask(title, description, date, priority) {
  const task = new Task(title, description, date, priority);

  storeTask(task);
  addNewTaskToTable(task);
}
