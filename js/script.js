console.log("Cześć!");

let button__hidePhoto = document.querySelector(".button__hidePhoto");
let photo = document.querySelector(".photo");
let displayImageText = "Wyświetl zdjęcie";
let hiddenImageText = "Schowaj zdjęcie";

button__hidePhoto.addEventListener("click", () => {
    photo.classList.toggle("hiddenPhoto");
    button__hidePhoto.innerText = photo.classList.contains("hiddenPhoto")
    ? displayImageText
    : hiddenImageText;
});

let button__changeBackground = document.querySelector(".button__changeBackground");
let body = document.querySelector(".body");

button__changeBackground.addEventListener("click", () => {
    body.classList.toggle("lightBackground");
    button__changeBackground.innerText = body.classList.contains("lightBackground")
    ? "Beżowe tło" 
    : "Jasne tło";
});
