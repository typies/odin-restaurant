import reviewStar from "../images/full-star.svg";
import reviewHalfStar from "../images/half-star.svg";

class ReviewCard {
    constructor(reviewText, rating) {
        this.reviewText = reviewText;
        this.rating = rating;
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        this.domElement = reviewCard;
    }
    domElement;

    createReviewCardElement() {
        const reviewCardText = document.createElement("div");
        reviewCardText.classList.add("review-text");
        reviewCardText.textContent = this.reviewText;
        this.domElement.appendChild(reviewCardText);

        const reviewCardStars = document.createElement("div");
        reviewCardStars.classList.add("review-stars");
        this.addStars(reviewCardStars, this.rating);
        this.domElement.appendChild(reviewCardStars);

        return this.domElement;
    }

    addStars(ele, numOfStars) {
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
    }
}

const fakeReviewList = [
    {
        review: "This is my all time favorite restaurant! The staff is so friendly and the owner is my husband!",
        rating: 4.5,
    },
    {
        review: "Good food",
        rating: 5,
    },
    {
        review: "I didn't get diarrhea at this restaurant! :D",
        rating: 5,
    },
];

const content2 = document.createElement("div");
content2.classList.add("content-2");

const reviewBox = document.createElement("div");
reviewBox.classList.add("review-box");

fakeReviewList.forEach((review) => {
    const newReviewCard = new ReviewCard(review.review, review.rating);
    reviewBox.appendChild(newReviewCard.createReviewCardElement());
});

content2.appendChild(reviewBox);

export default content2;
