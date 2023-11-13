import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../components/form/GetFormValues";
import { addNewTaskToTable } from "./TasksTable";
import Task from "../../data/Task";
import storeNewTask from "../../data/StoreNewTask";
import { tasks } from "../../data/Tasks";

export default function addNewTask(title, description, date, priority) {

    const task = new Task(title, description, date, priority);

    storeNewTask(task);
    addNewTaskToTable(task);

    console.log(tasks);
}