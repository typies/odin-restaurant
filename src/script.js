import "./styles.css";
import nachosImg from "./images/nachos.jpg";
import reviewStar from "./images/full-star.svg";
import reviewHalfStar from "./images/half-star.svg";
console.log("test");

const nachosImgEle = document.createElement("img");
nachosImgEle.classList.add("food-img");
nachosImgEle.src = nachosImg;

document.querySelector(".content-1").appendChild(nachosImgEle);

addStars(document.querySelector(".review-stars"), 4.5);

function addStars(ele, numOfStars) {
    for (let i = 0; i < Math.floor(numOfStars); i++) {
        const fullStarEle = document.createElement("img");
        fullStarEle.src = reviewStar;
        ele.appendChild(fullStarEle);
    }

    if (numOfStars % 1 == 0.5) {
        const halfStarEle = document.createElement("img");
        halfStarEle.src = reviewHalfStar;
        ele.appendChild(halfStarEle);
    }
    return ele;
}
