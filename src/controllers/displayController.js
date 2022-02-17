import todoController from './todoController';
import header from '../components/header';

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

    return {
        displayTasks, captureNewTask, loadHeader,
    };
})();

export default displayController;