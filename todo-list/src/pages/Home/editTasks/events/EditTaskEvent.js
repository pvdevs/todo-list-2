import { openForm, updateTaskDisplay } from "../EditTaskSection";
import cancelBtnEvent from "./CancelBtn";
import findTargetId from "../../FindId";
import saveBtnEvent from "./SaveBtn";

export default function editTask(e) {
  const id = findTargetId(e);

  // Check if there is a form open alredy and close it if its the case

  //Open form id
  openForm(id);

  // Cancel Listener
  const cancelBtn = document.getElementById("task-edit-cancel-button");
  cancelBtn.addEventListener("click", (e) => cancelBtnEvent(e));

  // Save Listener
  const saveBtn = document.getElementById("task-edit-save-button");
  saveBtn.addEventListener("click", (e) => saveBtnEvent(e));
}
