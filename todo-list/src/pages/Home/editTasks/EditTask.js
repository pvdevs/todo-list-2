import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../../../components/form/GetFormValues";
import { addNewTaskToTable } from "../TasksTable";
import Task from "../../../data/Task";
import storeNewTask from "../../../data/StoreNewTask";
import { tasks } from "../../../data/Tasks";
import findTask from "../../../data/FindTask";
import updateTask from "../../../data/UpdateTask";
import { updateTaskDisplay } from "./EditTaskSection"

export default function getUpdateTask(id) {

    updateTask(
        id,
        getFormTitleValue(),
        getFormDescriptionValue(),
        getFormDateValue(),
        getFormPriorityValue()
        );

    updateTaskDisplay(id);

    console.log(tasks);
}