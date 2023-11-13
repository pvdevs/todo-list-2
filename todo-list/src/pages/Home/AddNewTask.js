import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../components/form/GetFormValues";
import { addNewTaskToTable } from "./TasksTable";
import Task from "../../data/Task";
import storeNewTask from "../../data/StoreNewTask";
import { tasks } from "../../data/Tasks";

export default function addNewTask(title, description, date, priority) {

    storeNewTask(title, description, date, priority);
    addNewTaskToTable(title, description, date, priority);

    console.log(tasks);
}