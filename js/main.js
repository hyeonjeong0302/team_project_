//쇼핑히스토뢰
document.getElementById("historyBtn").addEventListener("click", function () {
  document.getElementById("shoppingHistory").classList.toggle("hidden_history")
})
document.getElementById("historyCloseBtn").addEventListener("click", function () {
  document.getElementById("shoppingHistory").classList.add("hidden_history")
})
document.getElementById("deleteAll").addEventListener("click", function () {
  document.getElementById("historyMiddleEx").style.display = "none"
})
document.getElementById("recentCloseBtn").addEventListener("click", function () {
  document.getElementById("historyMiddle").style.display = "none"
})

//탑버튼 스르륵
const scrollTop = function () {
  const topBtn = document.getElementById("topBtn")
  const scrollBtn = document.createElement("button");
  scrollBtn.setAttribute("id", "scrollBtn");
  scrollBtn.setAttribute("class", "scroll-btn");
  topBtn.appendChild(scrollBtn)

  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight ?
      scrollBtn.classList.add("show") :
      scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();

//지엔비 호버
let gnbShopLi = document.getElementById('gnb_shop');
let shopLnb = document.getElementById('shop_lnb');
gnbShopLi.addEventListener("mouseover", function () {
  shopLnb.classList.remove("hidden")
})
shopLnb.addEventListener("mouseover", function () {
  shopLnb.classList.remove("hidden")
})

gnbShopLi.addEventListener("mouseout", function () {
  shopLnb.classList.add("hidden")
})
shopLnb.addEventListener("mouseout", function () {
  shopLnb.classList.add("hidden")
})

// 바깥 탭
const issueTabList = document.querySelectorAll(
  ".issue_contents .issue_list li"
);

for (let i = 0; i < issueTabList.length; i++) {
  issueTabList[i]
    .querySelector(".issue_btn")
    .addEventListener("mouseover", function (e) {
      e.preventDefault();
      for (let j = 0; j < issueTabList.length; j++) {
        issueTabList[j].classList.remove("is_on_issue");
      }
      this.parentNode.classList.add("is_on_issue");
    });
}


// 롤링 배너 복제본 생성
let roller = document.querySelector(".rolling-list");
roller.id = "roller1";

let clone = roller.cloneNode(true);
clone.id = "roller2";
document.querySelector(".instagram_wrap").appendChild(clone);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left =
  document.querySelector(".rolling-list ul").offsetWidth + "px";

roller.classList.add("original");
clone.classList.add("clone");

//////////////////////////////////
// Params
let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  loopAdditionalSlides: 10,
  grabCursor: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      this.autoplay.stop();
    },
    imagesReady: function () {
      this.el.classList.remove("loading");
      this.autoplay.start();
    },
    slideChangeTransitionEnd: function () {
      let swiper = this,
        captions = swiper.el.querySelectorAll(".caption");
      for (let i = 0; i < captions.length; ++i) {
        captions[i].classList.remove("show");
      }
      swiper.slides[swiper.activeIndex]
        .querySelector(".caption")
        .classList.add("show");
    },
    progress: function () {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress,
          innerOffset = swiper.width * interleaveOffset,
          innerTranslate = slideProgress * innerOffset;

        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
          "translateX(" + innerTranslate + "px)";
      }
    },
    touchStart: function () {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function (speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
          speed + "ms";
      }
    },
  },
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  speed: 1000,
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: "vertical",
  on: {
    imagesReady: function () {
      this.el.classList.remove("loading");
    },
    click: function () {
      mainSlider.autoplay.stop();
    },
  },
};

let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// // Matching sliders
// mainSlider.controller.control = navSlider;
// navSlider.controller.control = mainSlider;