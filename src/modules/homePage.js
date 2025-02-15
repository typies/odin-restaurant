import homePageCta from "./cta.js";
import homePageReviews from "./reviewModule.js";
import "../styles/home.css";

class HomePage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        this.domElements.contentDiv.replaceChildren(homePageCta);
        homePageReviews.render();
    }
}

export default new HomePage();
