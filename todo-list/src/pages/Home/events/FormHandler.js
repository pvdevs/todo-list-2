
document.addEventListener('click', documentEventListener);

function documentEventListener(e) {

    if(e.target.id === 'add-task-button') addTaskButton(e);
    if(e.target.id === 'task-edit-save-button') saveButton(e);
    if(e.target.id === 'task-edit-cancel-button') cancelButton(e)
}

function addTaskButton(e) {
    e.preventDefault();
    console.log('edit');
}


function saveButton(e) {
    e.preventDefault();
    console.log('save');
}

function cancelButton(e) {
    e.preventDefault();
    console.log('cancel');
}