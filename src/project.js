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

        // why is projectData.name undefined
        pEle.addEventListener('click', () => {
            let contentContainer = document.querySelector('#content-container');
            contentContainer.innerHTML = ''
            let newBtn = document.createElement('button')
            newBtn.type = 'button'
            newBtn.id = 'new-todo'
            newBtn.textContent = 'Create New ToDo'
            contentContainer.appendChild(newBtn)
            let getProjectData = projectData[name].todos
            let projectTodods = getProjectData.forEach(element => {
                let title = element.title
                let desc = element.desc
                let due = element.due
                let priority = element.priority
                addTodo(title, desc, due, priority)
            });
        })

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

// list all to-do's in a project

// to store to-do's 'inside' projects create empty array/objects/function(?)
// and add to-do's to it. somehow display to-do on project click.
// why does that sound both easy and hard \ probably hard.
// deal with this tomorrow