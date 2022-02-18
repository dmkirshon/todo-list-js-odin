/**
 * Description: Project object that contains instantiated tasks.
 */
 const uniqueIdentifier = (() => {
    let uniqueIdentifier = 0;

    const nextValue = () => {
        return ++uniqueIdentifier;
    };

    return {nextValue};
})();

const project = (name) => {
    const containedTasks = [];
    const projectID = uniqueIdentifier.nextValue();

    const getName = () => name;
    const getTasks = () => containedTasks;
    const getProjectID = () => projectID;

    const renameName = (newName) => {name = newName};
    const addTask = (newTask) => {
        containedTasks.push(newTask);
    };

    return {getName, getTasks, renameName, addTask, getProjectID};
};

export default project;