import { tasks } from "./Tasks";

export default function findTask(id) {
    return tasks.find( task => task.id === id);
}