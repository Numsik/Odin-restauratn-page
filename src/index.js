import "./styles.css";
import loadHome from "./loadHome.js";


document.getElementById("home-btn").addEventListener("click", () => {
    loadHome();
});

loadHome();