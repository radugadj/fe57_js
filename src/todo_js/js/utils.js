import { tasks, tasksList } from "./constants.js";



function checkEmptyList () {
    console.log();
    if (tasks.length === 0) {
        const emptyListHTML = `<li id="emptyList" class="list-group-item empty-list">
                    <div class="empty-list__title">Список дел пуст</div>
                </li>`;
                tasksList.insertAdjacentHTML('afterbegin', emptyListHTML)
    } 
    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#emptyList');
        emptyListEl ? emptyListEl.remove() : null;
    }
}


export { checkEmptyList }