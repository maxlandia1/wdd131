const counterElement = document.getElementById("submission-count");

let numReviews = localStorage.getItem("rabbitReviewCount");

numReviews = Number(numReviews) || 0;

numReviews++;
if (counterElement) {
    counterElement.textContent = numReviews;
}

localStorage.setItem('rabbitReviewCount', numReviews)