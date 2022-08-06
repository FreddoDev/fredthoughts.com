const loader = document.querySelector(".screenloading");
const screen = document.querySelector(".screen");

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = "none";

        screen.style.display = "block";
        screen.style.opacity = 1;
    }, /*10000*/10);
}

init();