let swiper = new Swiper(".container__main__projects__swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazy: true,
  mousewheel: true,
  keyboard: true,
  freeMode: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1.4,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1.4,
    slideShadows: true,
  },
  breakpoints: {
    1025: {
      slidesPerView: 2,
    },
    1441: {
      slidesPerView: 2.5,
    },
  },
});
