//main_page

// const { func } = require("assert-plus");

/* //스와이퍼 마우스오버 정지
let slides = document.querySelectorAll(".swiper-slide");
for (let i of slides) {
  i.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
} */
/* $(document).on('mouseenter', '.swiper-container', function(e){
console.log('stop autoplay');
swiper.stopAutoplay();
});
$(document).on('mouseleave', '.swiper-container', function(e){
console.log('start autoplay');
swiper.startAutoplay();
}); */
//visual_main
let visual_swiper = new Swiper(".visual_main", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// new
let new_swiper = new Swiper(".new", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  // spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// best

let bestSwiper = new Swiper(".best.swiper-container.two", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  //pauseOnMouseEnter: "true",
  disableOnInteraction: false,
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
  //autoplay: {
  //delay: 2000,
  //},
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* //마우스오버시 스와이퍼 정지 - 다른 곳에 마우스를 올려도 베스트가 멈춤
let $slides = document.querySelectorAll(".swiper-slide");

for (let i of $slides) {
  i.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
}
 */
//detail_page

// review_image

let review_image_swiper = new Swiper(".review_image", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 5,
});
