import closeModal from "./CloseModal";
import openModal from "./OpenModal";

export default function addNewProject(e) {

    //e.preventDefault();

    // Opens modal form
    openModal();

    // Cancels form and closes modal
    const cancelProjectFormBtn = document.getElementById('project-cancel-btn');
    cancelProjectFormBtn.addEventListener('click', (e) => closeModal());
}