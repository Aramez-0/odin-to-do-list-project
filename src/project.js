// project.js file
import { todo } from './todo.js';
let todoModule = todo();
export let project = function() {

    let projectData = {};

    function addProject(name) {
        projectData[name] = {
            todos: []
        };

        let projectContainer = document.querySelector('#project-container');


        let pEle = document.createElement('p');
        pEle.classList.add('project');
        pEle.id = `${name}`
        pEle.textContent = name;
        projectContainer.appendChild(pEle);

        pEle.addEventListener('click', () => {
            let contentContainer = document.querySelector('#content-container');
            contentContainer.innerHTML = ''
            let newBtn = document.createElement('button')
            newBtn.type = 'button'
            newBtn.id = 'new-todo'
            newBtn.textContent = 'Create New ToDo'
            contentContainer.appendChild(newBtn)
            for (let i = 0; i < projectData.length; i++) {
                let { title, desc, due, priority } = projectData[i];
                todoModule.addToDo(title, desc, due, priority, '');
            };
        });

        let projectSelect = document.querySelector('#todo-project-select');
        let option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        projectSelect.appendChild(option);
    };

    function createProject() {
        // open dialog
        let createNewBtn = document.querySelector('#project-container button');
        let dialog = document.querySelector('#project-dialog');
        createNewBtn.addEventListener('click', () => {dialog.showModal()});
        
        // call addProject with input value and close dialog
        let projectName = document.querySelector('#input-project-name');
        let addBtn = document.querySelector('#project-dialog button');
        addBtn.addEventListener('click', () => {
            addProject(projectName.value);
            projectName.value = ''
            dialog.close();
        });
    };

    createProject()
    addProject('Home')
    return { addProject, createProject, projectData };
};