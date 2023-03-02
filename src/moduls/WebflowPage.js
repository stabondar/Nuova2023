import Swiper, { Pagination, Navigation, EffectFade } from 'swiper'  

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class WebflowPage {

    constructor() {

        $(".swiper-wrapper").append(`<div class="swiper-pagination"></div>`);
        const swiperBrands = new Swiper('.wf-slider', {
          modules: [Pagination, Navigation, EffectFade],
          keyboard: true,
          fadeEffect: { crossFade: true },
          virtualTranslate: true,
          effect: "fade",
          grabCursor: true,
          speed: 800,
        //   loop: true,
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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
    
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
    }
}