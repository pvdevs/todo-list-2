export default function removeTask(id){
    localStorage.removeItem(`task: ${id}`);
}