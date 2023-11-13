
export default function getTaskDisplay(id, title, description, date, priority) {
    const taskContainer = document.createElement('div');
    const taskLeftSide = document.createElement('div');
    const taskLeftSideInfo = document.createElement('div');
    const taskDoneButton = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskDescription = document.createElement('p');
    const taskDate = document.createElement('input');
    const taskRightSide = document.createElement('div');
    const taskPriority = getTaskPriority(priority);

    // Classes
    taskContainer.classList.add('task-container');
    taskLeftSide.classList.add('task-left-side');
    taskLeftSideInfo.classList.add('task-left-side-info');
    taskDoneButton.classList.add('task-done-button');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');
    taskDate.classList.add('task-date');
    taskRightSide.classList.add('task-right-side');
    
    // Assing Id
    taskContainer.dataset.id = id;

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

    taskContainer.append(taskLeftSide, taskRightSide);

    return taskContainer;
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

