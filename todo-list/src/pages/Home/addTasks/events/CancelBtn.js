import { resetAddNewTaskSection } from "../AddNewTaskSection";

export default function cancelBtnEvent(e) {
  e.preventDefault();

  resetAddNewTaskSection();
  console.log("cancel");
}
