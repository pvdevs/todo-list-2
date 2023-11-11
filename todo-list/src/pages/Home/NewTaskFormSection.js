export default function newTaskFormSection() {
    const tasksTable = document.getElementById('tasks-table');
    const taskEditContainer = document.createElement('div');
    const taskEditForm = document.createElement('form');
    const taskEditTop = document.createElement('div');
    const taskEditTitle = document.createElement('input');
    const taskEditDescription = document.createElement('textarea');
    const taskEditBottom = document.createElement('div');
    const taskEditBottomLeft = document.createElement('div');
    const taskEditDate = document.createElement('input');
    const taskEditPriority = document.createElement('select');
    const taskEditPriorityOptionHigh = document.createElement('option');
    const taskEditPriorityOptionMid = document.createElement('option');
    const taskEditPriorityOptionLow = document.createElement('option');
    const taskEditBottomRight = document.createElement('div');
    const taskEditCancelButton = document.createElement('button');
    const taskEditSaveButton = document.createElement('button');
    

    // Classes

    taskEditContainer.classList.add('task-edit-container');
    taskEditForm.classList.add('task-edit-form');
    taskEditTop.classList.add('task-edit-top');
    taskEditTitle.classList.add('task-edit-title');
    taskEditDescription.classList.add('task-edit-description');
    taskEditBottom.classList.add('task-edit-bottom');
    taskEditBottomLeft.classList.add('task-edit-bottom-left');
    taskEditDate.classList.add('task-edit-date');
    taskEditPriority.classList.add('task-edit-priority');
    taskEditBottomRight.classList.add('task-edit-bottom-right');
    
    // How can we make those contents dynamic?
    // Maybe make this form section a component and making 2 different forms?
    
    // Input types
    
    taskEditTitle.type = 'text';
    taskEditDate.type = 'date';
    
    // Values
    
    taskEditPriorityOptionHigh.value = 'high';
    taskEditPriorityOptionMid.value = 'mid';
    taskEditPriorityOptionLow.value = 'low';
    
    // Id's
    
    taskEditCancelButton.id = 'task-edit-cancel-button';
    taskEditSaveButton.id = 'task-edit-save-button';
    
    // Placeholders
    
    taskEditTitle.placeholder = 'Placeholder';
    taskEditDescription.placeholder = 'Placeholder here too';
    
    // Text contents
    
    taskEditPriorityOptionHigh.textContent = 'High';
    taskEditPriorityOptionMid.textContent = 'Mid';
    taskEditPriorityOptionLow.textContent = 'Low';
    
    taskEditCancelButton.textContent = 'Cancel';
    taskEditSaveButton.textContent = 'Save';
    
    // Appends
    
    taskEditTop.append(taskEditTitle, taskEditDescription);
    
    taskEditBottomLeft.append(taskEditDate, taskEditPriority);
    
    taskEditPriority.append(taskEditPriorityOptionHigh, taskEditPriorityOptionMid, taskEditPriorityOptionLow);
    
    taskEditBottomRight.append(taskEditCancelButton, taskEditSaveButton);
    
    taskEditBottom.append(taskEditBottomLeft, taskEditBottomRight);
    
    taskEditForm.append(taskEditTop, taskEditBottom);
    
    taskEditContainer.appendChild(taskEditForm);

    tasksTable.appendChild(taskEditContainer);
}