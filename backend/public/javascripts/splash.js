let slidePosition = 0;
let refreshIntervalId;
let count = 0

const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next').addEventListener("click", function() {
  if (count === 0) {
    clearInterval(refreshIntervalId);
  } 
  count++;
  moveToNextSlide()
});
document.getElementById('carousel__button--prev').addEventListener("click", function() {
  if (count === 0) {
    clearInterval(refreshIntervalId);
  } 
  count++;
  moveToPrevSlide()
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
}

  slides[slidePosition].classList.add('carousel__item--visible');
}


function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

refreshIntervalId = setInterval(moveToNextSlide, 6000);
