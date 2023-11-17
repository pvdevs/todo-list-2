export default function storeTask(task){
    const taskConverted = JSON.stringify(task);
    localStorage.setItem(`task: ${task.id}`, taskConverted);
    
    console.log(localStorage.getItem(`task: ${task.id}`));
}