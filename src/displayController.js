import todoController from './todoController';

/**
 * Description: Display Controller object that can display out to the console.
 */
const displayController = (() => {

    const displayTasks = (selectedProject) => {
        console.log(todoController.getTasksFromProject(selectedProject));
    };
    const displayProjectsSelectOptions = () => {
        const projectElementsList = [];

        todoController.getProjects().forEach(project => {
            const listOption = document.createElement('option');
            listOption.value = project.getName();
            listOption.textContent = project.getName();
            projectElementsList.push(listOption);
        });

        return projectElementsList;
    };

    const captureNewTask = (title) => {
        todoController.createNewTask(title);
    };

    const captureNewProject = (name) => {
        todoController.createNewProject(name);
    };



    return {
        displayTasks, displayProjectsSelectOptions, captureNewProject, captureNewTask,
    };
})();

export default displayController;