import displayController from "./displayController";

const content = document.createElement('div');

function createHeader() {
    const header = document.createElement('header');
    const projectsListLabel = document.createElement('label');
    const projectsListDropDown = document.createElement('select');
    const addProjectButton = document.createElement('button');

    projectsListLabel.setAttribute('for', 'projects');
    projectsListDropDown.setAttribute('id', 'projects');
    projectsListDropDown.setAttribute('name', 'projectsList');

    projectsListDropDown.replaceChildren(...displayController.displayProjectsSelectOptions());
    
    addProjectButton.textContent = '+';
    addProjectButton.onclick = addProject;

    function addProject() {
       const newProjectName = prompt('What is the name of your new project?');
       displayController.captureNewProject(newProjectName);
       
       projectsListDropDown.replaceChildren(...displayController.displayProjectsSelectOptions());
    }

    header.appendChild(projectsListDropDown);
    header.appendChild(addProjectButton);

    return header;
};

document.body.appendChild(content);
content.appendChild(createHeader());