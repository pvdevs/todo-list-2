import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.taskId = uuidv4();
    // project must be here too;
  }
}
