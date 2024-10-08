import { createMainContent } from "./main.js";
import { createScoreKeeper } from "./score.js";
import { createCommentSection } from "./comments.js";

const initializePage = () => {
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

}

window.onload = () => {
    initializePage();
    createMainContent();
    createScoreKeeper();
    createCommentSection();
};
