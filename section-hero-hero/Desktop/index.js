const swiper = new Swiper(".swiper", {
  allowTouchMove: true,
  navigation: false,
  mousewheel: true,
  slidesPerView: 2.5,
  spaceBetween: 50,
  centeredSlides: true,
  freeMode: true,
  loop: true,
    breakpoints:{
   0: {
    slidesPerView: 0.75,
    spaceBetween: 0,
   },
   375: {
    slidesPerView: 1.5,
    spaceBetween: 400,
   },
   524: {
    slidesPerView: 1.5,
    spaceBetween: 250,
   },
   624: {
    slidesPerView: 1.5,
    spaceBetween: 150,
   },
   880: {
    slidesPerView: 2.5,
    spaceBetween: 300,
   },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 220,
   }
  }
});

swiper.update();
swiper.slideTo(0);