/**
 * Description: Project object that contains instantiated tasks.
 */
const project = (name) => {
    const containedTasks = [];

    const getName = () => name;
    const getTasks = () => containedTasks;

    const renameName = (newName) => {name = newName};
    const addTask = (newTask) => {
        containedTasks.push(newTask);
    };

    return {getName, getTasks, renameName, addTask}
};

export default project;