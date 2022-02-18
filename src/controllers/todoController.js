import task from '../components/task';
import project from '../components/project';

/**
 * 
 */
const todoController = (() => {
    const home = project('Home');
    const projects = [home];
    let currentProject = home;

    const getProjects = () => projects;
    const getCurrentProject = () => currentProject;
    const getTasksFromProject = (selectedProject) => selectedProject.getTasks();
    const getProjectByID = (projectID) => {
        return projects.filter((project) => {
            return projectID == project.getProjectID()
    }
    )[0];};

    const createNewProject = (name) => {
        const newProject = project(name);
        projects.push(newProject);
    };

    const createNewTask = (title) => {
        const newTask = task(title);
        currentProject.addTask(newTask);
    }

    const setCurrentProject = (nextProject) => {
        currentProject = nextProject;
    };

    return {getProjects, getCurrentProject, getTasksFromProject, createNewProject, 
        createNewTask, setCurrentProject, getProjectByID};

})();

export default todoController;