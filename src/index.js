import displayController from "./displayController";

const content = document.createElement('div');

function createHeader() {
    const header = document.createElement('header');
    const projectsListLabel = document.createElement('label');
    const projectsListDropDown = document.createElement('select');

    projectsListLabel.setAttribute('for', 'projects');
    projectsListDropDown.setAttribute('id', 'projects');
    projectsListDropDown.setAttribute('name', 'projectsList');

    displayController.displayProjects().forEach(project => {
        const listOption = document.createElement('option');
        listOption.value = project.getName();
        listOption.textContent = project.getName();
        projectsListDropDown.appendChild(listOption);
    });

    header.appendChild(projectsListDropDown);

    return header;
};

document.body.appendChild(content);
content.appendChild(createHeader());