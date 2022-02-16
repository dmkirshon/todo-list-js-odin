import displayController from "./displayController";

const content = document.createElement('div');

function createHeader() {
    const header = document.createElement('header');
    
    function createProjectsListDiv() {
        const projectsDiv = document.createElement('div');
        const projectsListLabel = document.createElement('label');
        const projectsListDropDown = document.createElement('select');
        const addProjectButton = document.createElement('button');
        const projectOptions = displayController.displayProjectsSelectOptions();
        
        projectsListLabel.setAttribute('for', 'projects');
        projectsListDropDown.setAttribute('id', 'projects');
        projectsListDropDown.setAttribute('name', 'projectsList');

        projectsListDropDown.replaceChildren(...projectOptions);
        
        addProjectButton.textContent = '+';

        addProjectButton.onclick = () => {
            const newProjectName = prompt('What is the name of your new project?');
            displayController.captureNewProject(newProjectName);
            
            projectsListDropDown.replaceChildren(...projectOptions);
        }
        
        projectsDiv.appendChild(projectsListDropDown);
        projectsDiv.appendChild(addProjectButton);

        return projectsDiv;
    }

    function createSettingsButtonDiv() {
        const settingsDiv = document.createElement('div');
        const settingsButton = document.createElement('button');

        settingsButton.textContent = '\u2699';

        settingsDiv.appendChild(settingsButton);
        
        return settingsDiv;
    }

    header.appendChild(createProjectsListDiv());
    header.appendChild(createSettingsButtonDiv());

    return header;
};

document.body.appendChild(content);
content.appendChild(createHeader());