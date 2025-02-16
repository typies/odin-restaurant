import ContactModule from "./ContactModule.js";
import "../styles/contact.css";

class ContactPage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        this.domElements.contentDiv.replaceChildren(
            new ContactModule().create()
        );
    }
}

export default new ContactPage();
