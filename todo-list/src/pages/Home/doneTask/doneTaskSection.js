export default function removeTaskSection(id){
    const taskContainer = document.querySelector(`[data-id = '${id}']`);
    taskContainer.remove();
}