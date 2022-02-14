/**
 * Description: Task object that will be core of todo list tracking.
 */

const task = (title) => {
    let description = '';
    let dueDate;
    let status = 'open';
    let priority;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getStatus = () => status;
    const getPriority = () => priority;

    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDueDate) => dueDate = newDueDate;
    const setStatus = (newStatus) => status = newStatus;
    const setPriority = (newPriority) => priority = newPriority;

    return {getTitle, getDescription, getDueDate, getStatus, getPriority,
    setTitle, setDescription, setDueDate, setStatus, setPriority};
}

export default task;