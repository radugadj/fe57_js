import { taskInput, tasksList, tasks } from './constants.js';
import { checkEmptyList } from './utils.js';
import { saveToLocalStorage } from './localstorege.js';




function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    }

    tasks.push(newTask)
    saveToLocalStorage()

    renderTask(newTask)

    taskInput.value = ""

    taskInput.focus()

    checkEmptyList()
    
}

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return

    const parenNode = event.target.closest('.list-group-item');

    const id = Number(parenNode.id);

    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)

    saveToLocalStorage()

    parenNode.remove()

    checkEmptyList()
}


function doneTask(event) {
    if (event.target.dataset.action !== "done") return

    const parenNode = event.target.closest('.list-group-item');

    const id = Number(parenNode.id);

    const task = tasks.find((task) => task.id === id)

    task.done = !task.done;
    saveToLocalStorage()
    
    const taskTitle = parenNode.querySelector('.task-title');

    taskTitle.classList.toggle('task-title--done');
    
}

function renderTask (task) {
    const cssClass = task.done ? "task-title--done" : "task-title"

    const taskHTML = `
      <li id="${task.id}"class="list-group-item d-flex justify-content-between task-item">
    					<span class="${cssClass}">${task.text}</span>
    					<div class="task-item__buttons">
    						<button type="button" data-action="done" class="btn-action btn-done">
    							<img src="./image/check.svg" alt="Done" width="18" height="18">
    						</button>
    						<button type="button" data-action="delete" class="btn-action">
    							<img src="./image/trash.svg" alt="Done" width="18" height="18">
    						</button>
    					</div>
    				</li>
    `

    tasksList.insertAdjacentHTML('beforeend', taskHTML)
}


export { addTask, deleteTask, doneTask, renderTask }