import "../styles.css";

import content1 from "./content1.js";
import content2 from "./content2.js";

class HomePage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        this.domElements.contentDiv.replaceChildren(content1, content2);
    }
}

export default new HomePage();
