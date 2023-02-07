import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Swiper, {  Navigation } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Slider {

  constructor() {

    const testimonialSlider = () => {
    const swiperBrands = new Swiper('.testimonials__parent', {
      modules: [Navigation],
      autoHeight: true,
      speed: 800,
      loop: true,
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
        nextEl: ".testimonials__arrow.is--next",
        prevEl: ".testimonials__arrow.is--prev"
      }
      });

    }
    testimonialSlider()
  }
}
