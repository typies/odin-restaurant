import nachosImg from "../images/nachos.jpg";

class CallToAction {
    constructor(text, btnText) {
        this.text = text;
        this.btnText = btnText;

        const ctaDiv = document.createElement("div");
        ctaDiv.classList.add("cta");
        this.domElement = ctaDiv;
    }

    createCallToActionElement() {
        const ctaText = document.createElement("div");
        ctaText.classList.add("cta-text");
        ctaText.textContent = this.text;

        const ctaBtn = document.createElement("button");
        ctaBtn.classList.add("cta-btn");
        ctaBtn.textContent = this.btnText;

        this.domElement.appendChild(ctaText);
        this.domElement.appendChild(ctaBtn);
        return this.domElement;
    }
}

const ctaWrapper = document.createElement("div");
ctaWrapper.classList.add("cta-wrapper");

ctaWrapper.appendChild(
    new CallToAction(
        "Best Mexican food on the web!",
        "Book your reservation here"
    ).createCallToActionElement("div")
);

const nachosImgEle = document.createElement("img");
nachosImgEle.classList.add("food-img");
nachosImgEle.src = nachosImg;

ctaWrapper.appendChild(nachosImgEle);

export default ctaWrapper;
