const ratingInputRadios = document.querySelectorAll(".rating-radio-input");
const ratingStars = document.querySelectorAll(".rating-star");

function updateRating(e) {
  const currentRatingValue = Number(e.target.value);
  ratingStars.forEach((star, index) => {
    if (index >= currentRatingValue) {
      star.classList.remove("glowing");
    } else {
      star.classList.add("glowing");
    }
  });
}

ratingInputRadios.forEach((radio) =>
  radio.addEventListener("change", updateRating)
);
