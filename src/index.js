import "./styles/main.css";
import homePage from "./modules/homePage.js";
import menuPage from "./modules/menuModule.js";
import contactPage from "./modules/contactModule.js";

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => homePage.render());

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => menuPage.render());

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", () => contactPage.render());
homePage.render();
