import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const companySlider = document.querySelector(
  ".lw-company__top-gallery .swiper"
);
console.log(companySlider);

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
