import displayController from "./controllers/displayController";
import css from "./style.css";

const content = document.createElement('div');

document.body.appendChild(content);
content.appendChild(displayController.loadHeader());
content.appendChild(displayController.loadProjectPage());