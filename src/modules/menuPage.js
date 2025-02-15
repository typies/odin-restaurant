import "../styles.css";

class MenuPage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        const content = document.createElement("div");
        content.textContent = "menuPage";
        this.domElements.contentDiv.replaceChildren(content);
    }
}

export default new MenuPage();
