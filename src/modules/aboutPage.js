class AboutPage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        const content = document.createElement("div");
        content.textContent = "aboutPage";
        this.domElements.contentDiv.replaceChildren(content);
    }
}

export default new AboutPage();
