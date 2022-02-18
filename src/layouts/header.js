import todoController from '../controllers/todoController';

/**
 * 
 * @returns header components
 */
const header = () => {

    const createProjectsSelectOptions = () => {
        const projectElementsList = [];

        todoController.getProjects().forEach(project => {
            const listOption = document.createElement('option');
            listOption.value = project.getName();
            listOption.textContent = project.getName();
            listOption.setAttribute('data-project-id', project.getProjectID());
            projectElementsList.push(listOption);
        });

        return projectElementsList;
    };

    const createProjectSelector = () => {
        const projectsListDropDown = document.createElement('select');

        projectsListDropDown.setAttribute('id', 'projects');
        projectsListDropDown.setAttribute('name', 'projectsList');

        projectsListDropDown.replaceChildren(...createProjectsSelectOptions());

        return projectsListDropDown;
    };

    const createAddProjectButton = () => {
        const addProjectButton = document.createElement('button');
                
        addProjectButton.textContent = '+';

        addProjectButton.onclick = (e) => {
            const projectsListDropDown = e.target.parentElement.querySelector('select');
            const newProjectName = prompt('What is the name of your new project?');
            
            if(newProjectName  && !(/^\s/.test(newProjectName))) {
                todoController.createNewProject(newProjectName);
                projectsListDropDown.replaceChildren(...createProjectsSelectOptions());
            } else {
                alert('Enter valid project name!');
            }
        }

        return addProjectButton;
    };

    const displayCurrentProjectName = () => {
        const currentProjectName = document.createElement('input');
        const currentProject = todoController.getCurrentProject();
        
        currentProjectName.setAttribute('type', 'text');
        currentProjectName.className = 'header-project-name';
        currentProjectName.value = currentProject.getName();
        currentProjectName.setAttribute('data-project-id', currentProject.getProjectID());
        currentProjectName.onchange = (e) => {
            const newName = e.target.value;
            const projectsListDropDown = document.getElementById('projects');
            const projectID = e.target.getAttribute('data-project-id');
            const optionName = projectsListDropDown.querySelector(`[data-project-id="${projectID}"]`);

            if (newName && !(/^\s/.test(newName))) {
                todoController.getCurrentProject().renameName(newName);
                optionName.textContent = newName;
                optionName.value = newName;
            } else {
                e.target.value = todoController.getCurrentProject().getName();
            }
        };

        return currentProjectName;
    };

    const updateCurrentProjectDisplayName = (selectElement) => {
        const projectNameDisplay = document.querySelector('.header-project-name');
        const projectID = selectElement.selectedOptions[0].getAttribute('data-project-id')
        
        todoController.setCurrentProject(
            todoController.getProjectByID(
           projectID));

        projectNameDisplay.setAttribute('data-project-id', projectID);
        projectNameDisplay.value = selectElement.value;
    }

    const createSettingsButton = () => {
        const settingsButton = document.createElement('button');

        settingsButton.textContent = '\u2699';
        
        return settingsButton;
    };

    return {createProjectSelector, createAddProjectButton, createSettingsButton,
    displayCurrentProjectName, updateCurrentProjectDisplayName};
};

export default header;