export default function storeTask(task){
    const taskConverted = JSON.stringify(task);
    localStorage.setItem(`task: ${task.taskId}`, taskConverted);
    
    console.log(localStorage.getItem(`task: ${task.taskId}`));
}