import { openAddNewTaskForm } from "../AddNewTaskSection";
import saveBtnEvent from "./SaveBtn";
import cancelBtnEvent from "./CancelBtn";
import { checkIfFormExists } from "../../CheckExistentForm";

export default function addTaskBtnEvent(e) {
  checkIfFormExists();
  e.preventDefault();

  // Check if there is a form open alredy and close it if its the case

  //Open form
  openAddNewTaskForm();

  // Cancel Listener
  const cancelBtn = document.getElementById("task-edit-cancel-button");

  cancelBtn.addEventListener("click", (e) => cancelBtnEvent(e));

  // Save Listener
  const saveBtn = document.getElementById("task-edit-save-button");
  saveBtn.addEventListener("click", (e) => saveBtnEvent(e));
}
