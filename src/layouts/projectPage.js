import todoController from "../controllers/todoController";

const projectPage = () => {
    const currentProject = todoController.getCurrentProject()
    const taskList = todoController.getTasksFromProject(currentProject);

    const createCheckbox = (task) => {
        const taskTitle = task.getTitle();
        const taskID = task.getTaskID();

        const taskCheckBoxDiv = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        const taskCheckboxText = document.createElement('input');

        taskCheckbox.setAttribute('type', `checkbox`);
        taskCheckbox.setAttribute('id', `checkbox${taskID}`);
        taskCheckbox.setAttribute('name', `checkbox${taskID}`);
        taskCheckboxText.setAttribute('type', `text`);
        taskCheckboxText.setAttribute('max', `text`);
        taskCheckboxText.value = taskTitle;
        taskCheckboxText.onchange = (e) => {
            const newTitle = e.target.value;
            if (newTitle && !(/^\s/.test(newTitle))) {
                task.renameTitle(newTitle);
            } else {
                e.target.value = task.getTitle();
            }
            
        };

        taskCheckBoxDiv.appendChild(taskCheckbox);
        taskCheckBoxDiv.appendChild(taskCheckboxText);

        return taskCheckBoxDiv;
    };

    const createProjectTaskItems = () => {
        const projectTaskItems = []

        taskList.forEach(task => {
            const taskListing = createCheckbox(task);
            projectTaskItems.push(taskListing);
        });

        return projectTaskItems;
    };

    const displayProjectTaskList = () => {
        const projectTaskList = document.createElement('div');

        projectTaskList.replaceChildren(...createProjectTaskItems());

        return projectTaskList;
    };

    const displayProjectCompletedTaskList = () => {

    };

    const displayAddTask = () => {
        const addTaskButton = document.createElement('button');
        
        addTaskButton.textContent = '\u002B new task'

        addTaskButton.onclick = (e) => {
            const projectTaskList = e.target.parentElement.querySelector('div');
            const newTaskTitle = prompt('What is the name of your new task?');
            if(newTaskTitle && !(/^\s/.test(newTaskTitle))) {
                todoController.createNewTask(newTaskTitle);
            
                projectTaskList.replaceChildren(...createProjectTaskItems());
            } else {
                alert('Enter valid task title!');
            }
        };

        return addTaskButton;
    }

    return {displayAddTask, displayProjectTaskList ,displayProjectCompletedTaskList};
};

export default projectPage;