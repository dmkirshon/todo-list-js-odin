import task from './task';
import project from './project';

/**
 * 
 */
const todoController = (() => {
    const home = project('Home');
    const projects = [home];
    let currentProject = home;

    const getProjects = () => projects;
    const getTasksFromProject = (selectedProject) => selectedProject.getTasks();

    const createNewProject = (name) => {
        const newProject = project(name);
        projects.push(newProject);
    };

    const createNewTask = (title) => {
        const newTask = task(title);
        currentProject.addTask(newTask);
    }

    return {getProjects, getTasksFromProject, createNewProject, createNewTask};

})();

export default todoController;