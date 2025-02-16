import CallToActionModule from "./CallToActionModule.js";
import { ReviewModule, Review } from "./ReviewModule.js";
import "../styles/home.css";
import nachosImg from "../images/nachos.jpg";

class HomePage {
    domElements = {
        contentDiv: document.querySelector("#content"),
    };

    render() {
        this.domElements.contentDiv.replaceChildren(
            new CallToActionModule(
                "Best Mexican food in Florida!",
                "Book your reservation",
                nachosImg
            ).create(),
            new ReviewModule([
                new Review(
                    "Mr Bob",
                    "This is my all time favorite restaurant! The staff is so friendly and the owner is my husband!",
                    4.5
                ),
                new Review("Anon", "Good food", 5),
                new Review(
                    "Curious George",
                    "I didn't get food poisoning at this restaurant! And that's a problem that I usually have when I eat at mexican restaurants. You see, ever since I was a little boy I would always love to eat the biggest burritos I could find. I'm talking monsterous, giagantic, elephant-sized, burritos, and as you can imagine (More text that is cut off)",
                    5
                ),
            ]).create()
        );
    }
}

export default new HomePage();
