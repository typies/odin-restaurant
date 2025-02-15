import "../styles.css";

import content1 from "./content1.js";
import content2 from "./content2.js";

class RestaurantPage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    init() {
        this.domElements.contentDiv.appendChild(content1);
        this.domElements.contentDiv.appendChild(content2);
    }
}

export default new RestaurantPage();
