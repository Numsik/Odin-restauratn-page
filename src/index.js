import "./styles.css";
import loadHome from "./loadHome.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";


document.getElementById("home-btn").addEventListener("click", () => {
    loadHome();
});
document.getElementById("menu-btn").addEventListener("click", () => {
    loadMenu();
});
document.getElementById("contact-btn").addEventListener("click", () => {
    loadContact();
});

loadHome();