const swiper = new Swiper(".swiper", {
  allowTouchMove: true,
  navigation: false,
  mousewheel: true,
  slidesPerView: 2.5,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  speed: 250, // Increase this value for faster slide transition (default is 300)
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 430,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 150,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    }
  }
});

swiper.update();
swiper.slideTo(0);