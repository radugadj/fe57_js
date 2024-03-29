import { tasks } from "./constants.js";


function saveToLocalStorage () {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}



export { saveToLocalStorage }