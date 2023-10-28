/*********************/
/* Mobile navigation */
/*********************/

const mobileMenuBtn = document.querySelector(".nav__mobile-btn");
mobileMenuBtn.addEventListener("click", () => {
  navElem = document.querySelector(".nav");
  navElem.classList.toggle("active");
});

/**/

const footerBtns = document.querySelectorAll(".footer__column-description");

footerBtns.forEach((footerBtn) =>
  footerBtn.addEventListener("click", (e) => {
    console.log("event");
    e.target.parentElement.classList.toggle("active");
  })
);

/**************************************************/
/* Smooth scroll to top of the page on logo click */
/**************************************************/

document.querySelector("body > div").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("logo")) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});

/********************/
/* Slider component */
/********************/

const getSlides = () => document.querySelectorAll(".event-slider__item");
const sliderArrowsContainer = document.querySelector(".event-slider__arrows");

const initSlidesData = function () {
  const slides = getSlides();
  slides[0].setAttribute("data-current", "");
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute("data-position", i);
  }
};

const positionSlides = function () {
  const slides = getSlides();
  const currentIndex = document.querySelector(
    `.event-slider__item[data-current]`
  ).dataset.position;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${
      Number.parseFloat(getComputedStyle(slide).width) *
      (+slide.dataset.position - currentIndex)
    }px)`;
  });
};

const goToNextSlide = function () {
  const slides = getSlides();
  const currentIndex = +document.querySelector(
    `.event-slider__item[data-current]`
  ).dataset.position;
  const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
  slides[currentIndex].removeAttribute("data-current");
  slides[newIndex].setAttribute("data-current", "");
};

const goToPreviousSlide = function () {
  const slides = getSlides();
  const currentIndex = +document.querySelector(
    `.event-slider__item[data-current]`
  ).dataset.position;
  const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  slides[currentIndex].removeAttribute("data-current");
  slides[newIndex].setAttribute("data-current", "");
};

initSlidesData();
positionSlides();

sliderArrowsContainer.addEventListener("click", function (event) {
  if (event.target.closest(".event-slider__arrow")) {
    if (event.target.closest(".arr-left")) {
      goToPreviousSlide();
      positionSlides();
    }

    if (event.target.closest(".arr-right")) {
      goToNextSlide();
      positionSlides();
    }
  }
});
