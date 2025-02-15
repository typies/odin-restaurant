import homePageCta from "./cta.js";
import homePageReviews from "./reviewBox.js";

class HomePage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        this.domElements.contentDiv.replaceChildren(
            homePageCta,
            homePageReviews
        );
    }
}

export default new HomePage();
