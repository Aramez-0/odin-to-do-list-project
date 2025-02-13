// index.js file
import './style.css';
import { project } from './project.js';
import { todo } from './todo.js';
let useProject = project()
todo()
window.projectData = useProject.projectData


// all todos are getting added to Home

// the todos are not getting displayed. not a problem of accessing
// data i believe. not being displayed period