import nachosImg from "../images/nachos.jpg";

class CallToAction {
    constructor(text, btnText) {
        this.text = text;
        this.btnText = btnText;

        const ctaDiv = document.createElement("div");
        ctaDiv.classList.add("cta");
        this.domElement = ctaDiv;
    }
    domElement;

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

const content1 = document.createElement("div");
content1.classList.add("content-1");

content1.appendChild(
    new CallToAction(
        "Best Nachos on the web!",
        "Book your reservation here"
    ).createCallToActionElement("div")
);

const nachosImgEle = document.createElement("img");
nachosImgEle.classList.add("food-img");
nachosImgEle.src = nachosImg;

content1.appendChild(nachosImgEle);

export default content1;
