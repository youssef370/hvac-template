import "vanilla-hamburger/spiral-burger.js";

function initMenu() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-wrapper");

    burger.addEventListener("pressed-changed", (e) => {
        const pressed = e.detail.value;
        nav.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", initMenu);
