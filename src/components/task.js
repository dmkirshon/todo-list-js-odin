/**
 * Description: Task object that will be core of todo list tracking.
 */
const uniqueIdentifier = (() => {
    let uniqueIdentifier = 0;

    const nextValue = () => {
        return ++uniqueIdentifier;
    };

    return {nextValue};
})();

const task = (title) => {
    let description = '';
    let dueDate;
    let status = 'open';
    let priority;
    const taskID = uniqueIdentifier.nextValue();

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getStatus = () => status;
    const getPriority = () => priority;
    const getTaskID = () => taskID;

    const renameTitle = (newTitle) => {title = newTitle};
    const editDescription = (newDescription) => {description = newDescription};
    const changeDueDate = (newDueDate) => {dueDate = newDueDate};
    const changeStatus = (newStatus) => {status = newStatus};
    const changePriority = (newPriority) => {priority = newPriority};

    return {getTitle, getDescription, getDueDate, getStatus, getPriority, getTaskID,
    renameTitle, editDescription, changeDueDate, changeStatus, changePriority,};
}

export default task;