import closeModal from "./CloseModal";
import openModal from "./OpenModal";

export default function addNewProject(e) {

    //e.preventDefault();

    // Opens modal form
    const addNewProjectBtn = document.getElementById('add-new-project');
    addNewProjectBtn.addEventListener('click', (e) => openModal());

    // Cancels form and closes modal
    const cancelProjectFormBtn = document.getElementById('project-cancel-btn');
    cancelProjectFormBtn.addEventListener('click', (e) => closeModal());
}