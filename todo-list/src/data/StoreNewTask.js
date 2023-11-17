import { tasks } from './Tasks';
import storeTask from './localStorage/storeTask';

export default function storeNewTask(task) {
    tasks.push(task);
    storeTask(task);
}