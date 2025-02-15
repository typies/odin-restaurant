import "./styles.css";

import content1 from "./modules/content1.js";
import content2 from "./modules/content2.js";

class RestaurantPage {
    static domElements = {
        contentDiv: document.querySelector("#content"),
    };

    static init() {
        this.domElements.contentDiv.appendChild(content1);
        this.domElements.contentDiv.appendChild(content2);
    }
}

RestaurantPage.init();
