var heroSwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  loop: true,

  scrollbar: {
    hide: true,
  },

  // breakpoints: {
  //   1023: {
  //     data: {
  //       height: 768
  //     }
  //   },
})

var gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 3,
  spaceBetween: 50,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  loop: false,

  scrollbar: {
    hide: true,
  },

  breakpoints: {
    1023: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      slidesPerGroup: 2,
    },

    // 767: {
    //   slidesPerView: 2,
    //   slidesPerColumn: 2,
    // },
    
    319: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    }
  }
})