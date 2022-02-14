import todoController from './todoController';

/**
 * Description: Display Controller object that can display out to the console.
 */
const displayController = (() => {

    const displayTasks = (selectedProject) => {
        console.log(todoController.getTasksFromProject(selectedProject));
    };
    const displayProjects = () => {
        return todoController.getProjects();
    };

    const captureNewTask = (title) => {
        todoController.createNewTask(title);
    };

    const captureNewProject = (name) => {
        todoController.createNewProject(name);
    };



    return {
        displayTasks, displayProjects, captureNewProject, captureNewTask,
    };
})();

export default displayController;