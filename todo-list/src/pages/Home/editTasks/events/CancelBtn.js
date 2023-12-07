import findTargetId from "../../FindId";
import { cancelForm } from "../EditTaskSection";

export default function cancelBtnEvent(e) {
  e.preventDefault();

  cancelForm(findTargetId(e));
  console.log("cancel");
}
