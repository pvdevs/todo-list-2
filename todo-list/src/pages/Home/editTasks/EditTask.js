import {
  getFormTitleValue,
  getFormDescriptionValue,
  getFormDateValue,
  getFormPriorityValue,
} from "../../../components/form/GetFormValues";
import updateTask from "../../../data/UpdateTask";
import { updateTaskDisplay } from "./EditTaskSection";

export default function getUpdateTask(id) {
  updateTask(
    id,
    getFormTitleValue(),
    getFormDescriptionValue(),
    getFormDateValue(),
    getFormPriorityValue(),
  );

  updateTaskDisplay(id);
}
