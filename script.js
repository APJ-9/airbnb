 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 18,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        744:{
            slidesPerView: 13,
        },
    },
  });