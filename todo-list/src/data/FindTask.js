export default function findTask(id) {
    //return tasks.find( task => task.id === id);
    const task = localStorage.getItem(`task: ${id}`);
    const taskConverted = JSON.parse(task);
    
    console.log('task converted ->', taskConverted);
    console.log(typeof(taskConverted));
    console.log(taskConverted.title);

    return taskConverted;
}
