export const createScoreKeeper = () => {
    //score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    const scoreDisplay = createScoreDisplay();
    const btnContainer = createBtnContainer();

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(btnContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
};

const createScoreDisplay = () => {
    //score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = localStorage.getItem("score") || "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    return scoreDisplay;
};

const createBtnContainer = () => {
    //create up-down vote btns
    const btnContainer = document.createElement("div");

    const upVoteBtn = document.createElement("button");
    upVoteBtn.id = "upvote";
    upVoteBtn.innerText = "Upvote";

    const downVoteBtn = document.createElement("button");
    downVoteBtn.id = "downvote";
    downVoteBtn.innerText = "Downvote";
    downVoteBtn.style.marginLeft = "5px";

    btnContainer.appendChild(upVoteBtn);
    btnContainer.appendChild(downVoteBtn);

    upVoteBtn.addEventListener("click", vote);
    downVoteBtn.addEventListener("click", vote);

    return btnContainer;
};

const vote = (e) => {
    let newScore = document.querySelector(".score").innerText;
    if (e.target.id === "upvote") {
        newScore = parseInt(newScore) + 1;
    } else {
        newScore = parseInt(newScore) - 1;
    }

    updateScore(newScore);
};

const updateScore = (newScore) => {
    const score = document.querySelector(".score");
    score.innerText = newScore;
    localStorage.setItem("score", newScore);
};

export const resetScore = () => {
    updateScore(0);
}
