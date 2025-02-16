import "./styles/main.css";
import homePage from "./modules/HomePage.js";
import menuPage from "./modules/MenuPage.js";
import contactPage from "./modules/ContactPage.js";

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", () => homePage.render());

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", () => menuPage.render());

const contactButton = document.getElementById("contact");
contactButton.addEventListener("click", () => contactPage.render());

homePage.render();
