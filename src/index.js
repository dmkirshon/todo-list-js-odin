import displayController from "./controllers/displayController";
import css from "./style.css";

const content = document.createElement('div');
content.className = 'content';

document.body.appendChild(content);
content.appendChild(displayController.loadHeader());
content.appendChild(displayController.loadProjectPage());