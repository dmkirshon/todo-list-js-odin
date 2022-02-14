/**
 * Description: Project object that contains instantiated tasks.
 */
const project = (title) => {
    const containedTasks = [];

    const getTitle = () => title;
    const getContainedTasks = () => containedTasks;

    const renameTitle = (newTitle) => title = newTitle;

    return {getTitle, getContainedTasks, renameTitle}
};
