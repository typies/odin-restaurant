import reviewStar from "../images/full-star.svg";
import reviewHalfStar from "../images/half-star.svg";

class ReviewModule {
    constructor(reviews) {
        this.reviewList = reviews || [];
    }
    REVIEW_SECTION_TEXT =
        "Don't trust our word, Look at what these happy customers had to say!";

    addReview(review) {
        this.reviewList.push(review);
    }

    addReviews(reviews) {
        reviews.forEach((review) => this.reviewList.push(review));
    }

    createReviewSection(sectionHeaderText, sectionReviewBox) {
        const sectionWrapper = document.createElement("div");
        sectionWrapper.classList.add("review-section-wrapper");

        const sectionHeader = document.createElement("div");
        sectionHeader.classList.add("review-section-header");
        sectionHeader.textContent = sectionHeaderText;

        sectionWrapper.replaceChildren(sectionHeader, sectionReviewBox);

        return sectionWrapper;
    }

    create() {
        const reviewBox = document.createElement("div");
        reviewBox.classList.add("review-box");
        this.reviewList.forEach((review) => {
            reviewBox.appendChild(
                new ReviewCard(review).createReviewCardElement()
            );
        });
        return this.createReviewSection(this.REVIEW_SECTION_TEXT, reviewBox);
    }
}

class Review {
    constructor(reviewer, review, rating) {
        this.reviewer = reviewer;
        this.review = review;
        this.rating = rating;
    }
}

class ReviewCard {
    constructor(review) {
        this.review = review;
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        this.domElement = reviewCard;
    }

    createReviewCardElement() {
        const reviewCardText = document.createElement("div");
        reviewCardText.classList.add("review-text");

        reviewCardText.textContent =
            this.review.review.length > 131
                ? `${this.review.review.slice(0, 131)}...`
                : this.review.review;
        this.domElement.appendChild(reviewCardText);

        const reviewCardStars = document.createElement("div");
        reviewCardStars.classList.add("review-stars");
        this.addStars(reviewCardStars, this.review.rating);
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

export { ReviewModule, Review };
