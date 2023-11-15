export function displayTask(title, description, date, priority) {
    const task = document.createElement('div');
    const taskLeftSide = document.createElement('div');
    const taskLeftSideInfo = document.createElement('div');
    const taskDoneButton = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskDescription = document.createElement('p');
    const taskDate = document.createElement('input');
    const taskRightSide = document.createElement('div');
    const taskPriority = getTaskPriority(priority);

    // Classes
    task.classList.add('task');
    taskLeftSide.classList.add('task-left-side');
    taskLeftSideInfo.classList.add('task-left-side-info');
    taskDoneButton.classList.add('task-done-button');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');
    taskDate.classList.add('task-date');
    taskRightSide.classList.add('task-right-side');

    // Inputs
    taskDate.type = 'date';
    
    // textContent;  
    taskTitle.textContent = title;
    taskDescription.textContent = description;
    taskDate.value = date;

    // Appends
    
    taskLeftSideInfo.append(taskTitle, taskDescription, taskDate);

    taskLeftSide.append(taskDoneButton, taskLeftSideInfo);
    
    taskRightSide.appendChild(taskPriority);

    task.append(taskLeftSide, taskRightSide);

    return task;
}

export function displayNewTask(id, title, description, date, priority) {
    
    const taskContainer = document.createElement('div');

    taskContainer.classList.add('task-container');
    taskContainer.dataset.id = id;

    const task = displayTask(title, description, date, priority);

    taskContainer.appendChild(task);

    return taskContainer;
}

export function displayEditedTask(id, title, description, date, priority){
    const taskContainer = document.querySelector(`[data-id = ${id}]`);

    const task = displayTask(title, description, date, priority);

    taskContainer.appendChild(task);
}

function getTaskPriority(priority) {
    switch (priority) {
        case 'high':
            return taskPriorityHigh();
            break;
        case 'mid':
            return taskPriorityMid();
            break
        case 'low':
            return taskPriorityLow();
            break
        default:
            break;
    }
}

function taskPriorityHigh(){
    const taskPriority = document.createElement('div');
    const taskPriorityText = document.createElement('p');
    const taskPriorityIcon = document.createElement('div');
    taskPriority.classList.add('task-priority');
    taskPriorityText.classList.add('task-priority-text');
    taskPriorityIcon.classList.add('task-priority-icon');

    taskPriorityText.textContent = 'High Priority';
    taskPriorityIcon.classList.add('high-priority-icon');

    taskPriority.append(taskPriorityText, taskPriorityIcon);

    return taskPriority;
}

function taskPriorityMid(){
    const taskPriority = document.createElement('div');
    const taskPriorityText = document.createElement('p');
    const taskPriorityIcon = document.createElement('div');
    taskPriority.classList.add('task-priority');
    taskPriorityText.classList.add('task-priority-text');
    taskPriorityIcon.classList.add('task-priority-icon');

    taskPriorityText.textContent = 'Mid Priority';
    taskPriorityIcon.classList.add('mid-priority-icon');

    taskPriority.append(taskPriorityText, taskPriorityIcon);

    return taskPriority;
}

function taskPriorityLow(){
    const taskPriority = document.createElement('div');
    const taskPriorityText = document.createElement('p');
    const taskPriorityIcon = document.createElement('div');
    taskPriority.classList.add('task-priority');
    taskPriorityText.classList.add('task-priority-text');
    taskPriorityIcon.classList.add('task-priority-icon');

    taskPriorityText.textContent = 'Low Priority';
    taskPriorityIcon.classList.add('low-priority-icon');

    taskPriority.append(taskPriorityText, taskPriorityIcon);
    
    return taskPriority;
}

