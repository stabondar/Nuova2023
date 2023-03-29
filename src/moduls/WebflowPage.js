import Swiper, { Navigation, EffectFade, EffectCards } from 'swiper'  

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export default class WebflowPage {

    constructor() {
      let navList = $('.transformative__item')

        const swiperBrands = new Swiper('._wf-slider', {
          modules: [Navigation, EffectFade],
          keyboard: true,
          fadeEffect: { crossFade: true },
          virtualTranslate: true,
          autoHeight: true,
          effect: "fade",
          grabCursor: true,
          speed: 400,
          // loop: true,
          slidersPerView: 1,
          centeredSlides: false,
    
          navigation: {
            nextEl: ".slider-arrow.is--next",
            prevEl: ".slider-arrow.is--prev"
          }
        });

        let activeIndex

        swiperBrands.on('activeIndexChange', () => 
        {
          activeIndex = swiperBrands.activeIndex
          navList.removeClass('active')
          navList.eq(activeIndex).addClass('active')
        })

        $(navList).on('click', function()
        {
          let self = $(this)
          let index = self.index()
          swiperBrands.slideTo(index)
        })


        // Desktop slider cards
        let swiper = new Swiper(".swiper.dev-process", {
          modules: [Navigation, EffectCards],
          effect: "cards",
          loop: true,   
          rotate: false,
          cardsEffect: {
            perSlideRotate: 0,
            slideShadows: true,
            perSlideOffset: 12,
          },

          grabCursor: true,
          direction: "vertical",

          navigation: {
            nextEl: ".slider-arrow.is--dev-process.is--next",
            prevEl: ".slider-arrow.is--dev-process.is--prev",
          }
        });
        // Desktop slider cards -- end

        // Mobile slider cards
        let swiperCardMob = new Swiper(".dev-process-mob", {
          modules: [Navigation],
          autoHeight: true,
          grabCursor: true,
          speed: 800,
          spaceBetween: 20,
          slidersPerView: 1,
          keyboard: true,

          navigation: {
            nextEl: ".slider-arrow.is--dev-process-mob.is--next",
            prevEl: ".slider-arrow.is--dev-process-mob.is--prev",
          },
        });
        // Mobile slider cards -- end
    }
}