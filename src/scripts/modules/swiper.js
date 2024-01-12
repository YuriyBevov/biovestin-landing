import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const companySlider = document.querySelector(
  ".lw-company__top-gallery .swiper"
);

if (companySlider) {
  new Swiper(companySlider, {
    slidesPerView: "auto",
    spaceBetween: 10,

    pagination: {
      el: ".lw-company__top-gallery .swiper-pagination",
      dynamicBullets: true,
    },
  });
}

const reviewsSlider = document.querySelector(".lw-reviews__slider .swiper");

if (reviewsSlider) {
  new Swiper(reviewsSlider, {
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      nextEl: ".lw-reviews-slider-controls .swiper-button-next",
      prevEl: ".lw-reviews-slider-controls .swiper-button-prev",
    },
  });
}

const pressSlider = document.querySelector(".lw-press .swiper");

if (pressSlider) {
  new Swiper(pressSlider, {
    slidesPerView: "auto",
    spaceBetween: 20,
  });
}
