export default function AddTaskButton() {
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-button';
    addTaskButton.textContent = 'Add new task';

    return addTaskButton;
}
