export default function findTargetId(e) {
    const id = e.target.closest('[data-id]').dataset.id;
    console.log(id);

    return id;
}