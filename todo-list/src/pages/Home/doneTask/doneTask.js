import removeTask from "../../../data/localStorage/removeTask";
import removeTaskSection from "./doneTaskSection";

export function doneTask(id) {
  removeTask(id);
  removeTaskSection(id);
}
