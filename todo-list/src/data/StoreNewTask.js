import { tasks } from './Tasks';

export default function storeNewTask(task) {
    tasks.push(task);
}