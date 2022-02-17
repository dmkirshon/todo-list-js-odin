import header from '../layouts/header';
import projectPage from '../layouts/projectPage';

/**
 * Description: Display Controller object that can display out to the console.
 */
const displayController = (() => {

    const displayTasks = (selectedProject) => {
        console.log(todoController.getTasksFromProject(selectedProject));
    };

    const captureNewTask = (title) => {
        todoController.createNewTask(title);
    };

    const loadHeader = () => {
        const headerDiv = document.createElement('div');
        const projectViewDiv = document.createElement('div');
        const settingsDiv = document.createElement('div');

        const newHeaderView = header();

        projectViewDiv.appendChild(newHeaderView.createProjectSelector());
        projectViewDiv.appendChild(newHeaderView.createAddProjectButton());
        settingsDiv.appendChild(newHeaderView.createSettingsButton());

        headerDiv.appendChild(projectViewDiv);
        headerDiv.appendChild(settingsDiv);

        return headerDiv;
    }

    const loadProjectPage = () => {
        const projectPageDiv = document.createElement('div');
        const taskViewDiv = document.createElement('div');

        const newProjectPage = projectPage();

        taskViewDiv.appendChild(newProjectPage.displayProjectTaskList());
        taskViewDiv.appendChild(newProjectPage.displayAddTask());

        projectPageDiv.appendChild(taskViewDiv);

        return projectPageDiv;
    };

    return {
        displayTasks, captureNewTask, loadHeader, loadProjectPage,
    };
})();

export default displayController;