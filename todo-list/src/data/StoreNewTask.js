import Task from './Task';
import { tasks } from './Tasks';
import { getFormTitleValue, getFormDescriptionValue, getFormDateValue, getFormPriorityValue } from "../components/form/GetFormValues";

export default function storeNewTask(title, description, date, priority) {

    const task = new Task(title, description, date, priority);
    tasks.push(task);

}