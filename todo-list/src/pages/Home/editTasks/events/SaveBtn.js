import findTargetId from "../../FindId";
import getUpdateTask from "../EditTask";

export default function saveBtnEvent(e) {
  // Should also create the task in the backend
  e.preventDefault();

  getUpdateTask(findTargetId(e));
}
