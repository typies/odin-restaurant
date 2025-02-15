import homePage from "./modules/homePage.js";
import menuPage from "./modules/menuPage.js";
import aboutPage from "./modules/aboutPage.js";

const homeButton = document.getElementById("home");
homeButton.addEventListener("click", homePage.render());
const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", menuPage.render());
const aboutButton = document.getElementById("about");
aboutButton.addEventListener("click", aboutPage.render());
homePage.render();
