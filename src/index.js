import './style.css';
import { project } from './project.js';
import { todo } from './todo.js';
let useProject = project();
let useTodo = todo();

window.projectData = useProject.projectData;
window.addToDo = useTodo.addToDo;
// todo section



//  To-do
// when adding new to-do default to home project or add way to add to 
// \ project when creating new 
// expand to-do 
// delete to-do

// want to add a system that detects a project of the same name 
// and adds (num) to end. tricky adding +1 to the number each time
// it's detected

// you're fucked my dude. good luck debugging. or completely renewing your code.
