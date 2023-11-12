export default function createAddTaskButton() {
    const addTaskSection = document.getElementById('add-task-section');
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-button';
    addTaskButton.textContent = 'Add new task';

    addTaskSection.appendChild(addTaskButton);
}

/*
function handleFormInputs() {
    const formTitle = document.querySelector('.task-edit-title').textContent;
    const formDescription = document.querySelector('.task-edit-description').textContent;
    const formDate = document.querySelector('.task-edit-date').value;
    const formPriority = document.querySelector('.task-edit-priority').value;

    // Idk if this will be used
    const formCancelBtn = document.getElementById('task-edit-cancel-button');
    const formSaveBtn = document.getElementById('task-edit-save-button');
    //

    console.log(formTitle, formDescription, formDate, formPriority);

}


export default handleFormInputs
*/