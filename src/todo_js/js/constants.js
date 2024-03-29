"use strict";

import { saveToLocalStorage } from "./localstorege.js";
import { renderTask } from './task.js'


const form = document.body.querySelector('#form');
const taskInput = document.body.querySelector('#taskInput');
const tasksList = document.body.querySelector('#tasksList');
const emptyList = document.body.querySelector('#emptyList');

let tasks = []

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task))
}


saveToLocalStorage()

export { form, taskInput, tasksList, emptyList, tasks };