import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram Baby";

    const container = document.querySelector(".container");

    const catImage = document.createElement("img");

    catImage.style.margin = "20px";

    catImage.style.maxWidth = "750px";

    const newKittenBtn = createNewKittenBtn();

    container.appendChild(h1);
    container.appendChild(newKittenBtn);
    container.appendChild(catImage);
    fetchImage();
}

const fetchImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    try {
        const response = await fetch(url);

        if(!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`);

        }

    const data = await response.json();

    const catImage = document.querySelector("img");

    const imageUrl = data[0].url;

    catImage.src = imageUrl;

    catImage.addEventListener("load", () => {
        resetScore();
        resetComments();
    })

    } catch (error) {
        console.error("Failed to fetch cat image:", error);
        return null; // Return null or handle the error appropriately
    }
}

const createNewKittenBtn = () => {
    //create new kitten button
    const newKittenBtn = document.createElement("button");
    newKittenBtn.id = "new-kitten";
    newKittenBtn.innerText = "Push 4 New Cat"
    document.querySelector(".container").appendChild(newKittenBtn);

    newKittenBtn.addEventListener("click", fetchImage);
    return newKittenBtn;
};
