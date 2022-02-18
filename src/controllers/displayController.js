import header from '../layouts/header';
import projectPage from '../layouts/projectPage';
import todoController from './todoController';

/**
 * Description: Display Controller object that can display out to the console.
 */
const displayController = (() => {
    const newHeaderView = header();
    const newProjectPage = projectPage();

    const displayTasks = (selectedProject) => {
        console.log(todoController.getTasksFromProject(selectedProject));
    };

    const captureNewTask = (title) => {
        todoController.createNewTask(title);
    };

    const loadHeader = () => {
        const headerDiv = document.createElement('div');
        const projectViewDiv = document.createElement('div');
        const projectNameDiv = document.createElement('div');
        const settingsDiv = document.createElement('div');

        const currentProjectNameDisplayed = newHeaderView.displayCurrentProjectName();
        const projectSelector = newHeaderView.createProjectSelector();
        projectSelector.onchange = updateProjectView;

        projectViewDiv.appendChild(projectSelector);
        projectViewDiv.appendChild(newHeaderView.createAddProjectButton());
        projectNameDiv.appendChild(currentProjectNameDisplayed);
        settingsDiv.appendChild(newHeaderView.createSettingsButton());

        headerDiv.appendChild(projectViewDiv);
        headerDiv.appendChild(projectNameDiv);
        headerDiv.appendChild(settingsDiv);

        return headerDiv;
    }


    const updateProjectView = (e) => {
        newHeaderView.updateCurrentProjectDisplayName(e.target);
        changeProjectPage();
    }

    const loadProjectPage = () => {
        const projectPageDiv = document.createElement('div');
        projectPageDiv.className = 'project-page';
        const taskViewDiv = document.createElement('div');

        taskViewDiv.appendChild(newProjectPage.displayProjectTaskList());
        taskViewDiv.appendChild(newProjectPage.displayAddTask());

        projectPageDiv.appendChild(taskViewDiv);

        return projectPageDiv;
    };

    const changeProjectPage = () => {
        const projectPage = document.querySelector('.project-page');
        const taskViewDiv = document.createElement('div');
        
        taskViewDiv.appendChild(newProjectPage.displayProjectTaskList());
        taskViewDiv.appendChild(newProjectPage.displayAddTask());

        projectPage.replaceChildren(taskViewDiv);
    };

    return {
        displayTasks, captureNewTask, loadHeader, loadProjectPage,
    };
})();

export default displayController;