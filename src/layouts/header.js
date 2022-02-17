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
            projectElementsList.push(listOption);
        });

        return projectElementsList;
    };

    const createProjectSelector = () => {
        const projectsDiv = document.createElement('div');
        const projectsListLabel = document.createElement('label');
        const projectsListDropDown = document.createElement('select');

        projectsListLabel.setAttribute('for', 'projects');
        projectsListDropDown.setAttribute('id', 'projects');
        projectsListDropDown.setAttribute('name', 'projectsList');

        projectsListDropDown.replaceChildren(...createProjectsSelectOptions());

        projectsDiv.appendChild(projectsListLabel);
        projectsDiv.appendChild(projectsListDropDown);

        return projectsDiv;
    };

    const createAddProjectButton = () => {
        const addProjectButton = document.createElement('button');
                
        addProjectButton.textContent = '+';

        addProjectButton.onclick = (e) => {
            const projectsListDropDown = e.target.parentElement.querySelector('select');
            const newProjectName = prompt('What is the name of your new project?');
            
            if(newProjectName) {
                todoController.createNewProject(newTaskTitle);
                projectsListDropDown.replaceChildren(...createProjectsSelectOptions());
            } else {
                alert('Enter valid project name!');
            }
        }

        return addProjectButton;
    };

    const createSettingsButton = () => {
        const settingsButton = document.createElement('button');

        settingsButton.textContent = '\u2699';
        
        return settingsButton;
    };

    return {createProjectSelector, createAddProjectButton, createSettingsButton};
};

export default header;