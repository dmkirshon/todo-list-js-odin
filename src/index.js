import displayController from "./controllers/displayController";

const content = document.createElement('div');

document.body.appendChild(content);
content.appendChild(displayController.loadHeader());
content.appendChild(displayController.loadProjectPage());