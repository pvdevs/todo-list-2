import {
  getFormTitleValue,
  getFormDescriptionValue,
  getFormDateValue,
  getFormPriorityValue,
} from "../../../../components/form/GetFormValues";
import addNewTask from "../AddNewTask";
import { resetAddNewTaskSection } from "../AddNewTaskSection";

export default function saveBtnEvent(e) {
  // Should also create the task in the backend
  e.preventDefault();

  addNewTask(
    getFormTitleValue(),
    getFormDescriptionValue(),
    getFormDateValue(),
    getFormPriorityValue(),
  );

  resetAddNewTaskSection();
  console.log("save");
}
