export function todo() {
    function addToDo(title, desc, due, priority, projectName) {
        let todo = {
            title,
            desc,
            due,
            priority
        };

        projectData[projectName].todos.push(todo);

        let contentContainer = document.querySelector('#content-container');

        let divEle = document.createElement('div');
        divEle.classList.add('todo');
        contentContainer.appendChild(divEle);

        function createEle(text) {
            let pEle = document.createElement('p');
            pEle.textContent = text;
            divEle.appendChild(pEle);
        };
        
        createEle(title);
        createEle(desc);
        createEle(due);
        createEle(priority);
    };
    
    function createToDo() {
        // open dialog
        let createNewBtn = document.querySelector('#new-todo');
        let dialog = document.querySelector('#todo-dialog');
        createNewBtn.addEventListener('click', () => {dialog.showModal()});
        
        // call addtodo with input values and close dialog
        let title = document.querySelector('#todo-title');
        let desc = document.querySelector('#todo-desc');
        let due = document.querySelector('#todo-due');
        let priority = document.querySelector('#todo-priority');

        let projectSelect = document.querySelector('#todo-project-select')

        let addBtn = document.querySelector('#todo-dialog button');
        addBtn.addEventListener('click', () => {
            
            let projectName = projectSelect.value
            addToDo(title.value, desc.value, due.value, priority.value, projectName);
            title.value = ''
            desc.value = ''
            due.value = ''
            priority.value = ''
            dialog.close();
        });
    };
    createToDo()
    return { addToDo, createToDo }
};