const swiperEl = document.querySelector("swiper-container");

// swiper 設定
const swiperParams = {

  breakpoints: {
    10: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
};

//設定寫入元件內
Object.assign(swiperEl, swiperParams);

//初始化
swiperEl.initialize();