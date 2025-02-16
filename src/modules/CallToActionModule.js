class CallToAction {
    constructor(text, btnText, img) {
        this.text = text;
        this.btnText = btnText;
        this.img = img;
    }

    create() {
        const ctaWrapper = document.createElement("div");
        ctaWrapper.classList.add("cta-wrapper");

        const ctaDiv = document.createElement("div");
        ctaDiv.classList.add("cta");

        const ctaText = document.createElement("div");
        ctaText.classList.add("cta-text");
        ctaText.textContent = this.text;

        const ctaBtn = document.createElement("button");
        ctaBtn.classList.add("cta-btn");
        ctaBtn.textContent = this.btnText;

        ctaDiv.replaceChildren(ctaText, ctaBtn);

        const imgEle = document.createElement("img");
        imgEle.classList.add("food-img");
        imgEle.src = this.img;

        ctaWrapper.replaceChildren(ctaDiv, imgEle);
        return ctaWrapper;
    }
}

export default CallToAction;
