import './style.css';

let toDo = function(title, desc, due, priority) {
    return { title, desc, due, priority };
};

// project section
let projects = []

function addProject(name) {
    let projectContainer = document.querySelector('#project-container');

    projects.push(name)

    let pEle = document.createElement('p');
    pEle.classList.add('project');
    pEle.textContent = name;
    projectContainer.appendChild(pEle);

};

function createProject() {
    // open dialog
    let createNewBtn = document.querySelector('#project-container button');
    let dialog = document.querySelector('dialog');
    createNewBtn.addEventListener('click', () => {dialog.showModal()});
    
    // call addProject with input value and close dialog
    let projectName = document.querySelector('#input-project-name');
    let addBtn = document.querySelector('dialog button');
    addBtn.addEventListener('click', () => {
        addProject(projectName.value);
        dialog.close();
    });
};
createProject();
addProject('groceries');


//  Projects
// tab/sidebar for projects
// create new projects
// list all to-do's in a project


//  To-do
// when adding new to-do default to home project or add way to add to 
// \ project when creating new 
// expand to-do 
// delete to-do

// want to add a system that detects a project of the same name 
// and adds (num) to end. tricky adding +1 to the number each time
// it's detected

// to store to-do's 'inside' projects create empty array/objects/function(?)
// and add to-do's to it. somehow display to-do on project click.
// why does that sound both easy and hard.
// deal with this tomorrow