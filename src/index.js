import "./style/style.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".catalog", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
    },
    465: {
      slidesPerView: 2,
      spaceBetween: 10,
      grabCursor: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: ".catalog__button-next",
    prevEl: ".catalog__button-prev",
    disabledClass: "catalog__button--disabled",
  },
});

const heartArr = document.querySelectorAll(".card__heart");
heartArr.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("card__heart--active");
  });
});

const cardsNotAvailable = document.querySelectorAll(".card--not-available");
const cardsExpected = document.querySelectorAll(".card--expected");
cardsExpected.forEach((el) => {
  el.querySelector(".card__popularity").style.marginTop = "30px";
});
cardsNotAvailable.forEach((el) => {
  el.querySelector(".card__button").style.marginTop = "35px";
});

const buttons = document.querySelectorAll(".card__button");
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("card__button--disabled");
  });
});
