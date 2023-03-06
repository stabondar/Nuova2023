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
          effect: "fade",
          grabCursor: true,
          speed: 1000,
          // loop: true,
          slidersPerView: 1,
          centeredSlides: false,
          breakpoints: {
            320: {
              centeredSlides: false,
              slidersPerView: 1
            },
    
            480: {
              centeredSlides: false,
              slidersPerView: 1
            },
    
            991: {
              centeredSlides: false,
              slidersPerView: 1
            }
          },
    
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


        const swiper = new Swiper(".swiper.dev-process", {
          modules: [Navigation, EffectCards],
          effect: "cards",
          perSlideRotate: 0,
          perSlideOffset: 8,
          slideShadows: true,
          rotate: false,
          cardsEffect: {
            perSlideRotate: 0,
          },

          grabCursor: true,
          direction: "vertical",

          navigation: {
            nextEl: ".slider-arrow.is--dev-process.is--next",
            prevEl: ".slider-arrow.is--dev-process.is--prev",
          }
        });
    }
}