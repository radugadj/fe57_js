"use strict";
import { form, tasksList } from './constants.js';
import { addTask, deleteTask, doneTask } from './task.js'
import { checkEmptyList } from './utils.js'




form.addEventListener('submit', addTask)
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);



checkEmptyList()


