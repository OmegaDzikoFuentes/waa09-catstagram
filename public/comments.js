export const createCommentSection = () => {
    const container = document.querySelector(".container");

    const commentForm = createCommentForm();
    const commentList = createCommentsList();
    const commentSubmitBtn = createCommentSubmitBtn();

    container.appendChild(commentForm);
    container.appendChild(commentSubmitBtn);
    container.appendChild(commentList);

    loadComments();
}
const createCommentsList = () => {
    //create comment section
    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.border = "solid gold 2px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";

    return comments;
};

const createCommentForm = () => {
    //create submit form
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.margin = "20px";
    commentForm.style.display = "flex";
    commentForm.style.width = "90%";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center";

    commentForm.appendChild(createCommentInput());
    commentForm.appendChild(createCommentSubmitBtn());

    return commentForm;
};

const createCommentInput = () => {
    //create comment input
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";

    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a commen... ";
    commentInput.required = true;

    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    return userCommentContainer;
};

const createCommentSubmitBtn = () => {
    //create submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment";
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    submitBtn.addEventListener("click", submitComment);

    return submitBtn;
};

const storeComment = (commentText) => {
    const savedComments = JSON.parse(localStorage.getItem("comments"));
    savedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(savedComments));
}

const loadComments = () => {
    if (localStorage.getItem("comments")) {
        JSON.parse(localStorage.getItem("comments").forEach(comment => createComment(comment)));
    } else {
        localStorage.setItem("comments", JSON.stringify([]))
    }
}

const submitComment = e => {
    e.preventDefault();
    const commentInput = document.querySelector("#user-comment");
    createComment(commentInput.value);
    commentInput.value = "";
};

const createComment = (commentText) => {
    const newCommentContainer = document.createElement("div");
    newCommentContainer.style.display = "flex";
    newCommentContainer.style.margin = "10px";

    const newComment = document.createElement("p");
    newComment.innerText = commentText;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-button";
    deleteBtn.style.marginLeft = "15px";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", e => {
        newCommentContainer.remove();
    });

    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteBtn);
    const comments = document.querySelector(".comments");
    comments.appendChild(newCommentContainer);
};

export const resetComments = () => {
    const comments = document.querySelector(".comments");
    Array.from(comments.children).forEach(child => child.remove());
};
