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
        const init = () => {
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

              // $(".testimonials__arrow.is--next").on('click', () => testimonialSwiper.slideNext(1000, true));
              // $(".testimonials__arrow.is--prev").on('click', () => testimonialSwiper.slidePrev(1000, true));
              
              let arrows = $('.testimonials__arrow.is--next, .testimonials__arrow.is--prev')
              let slide = $(".testimonials__testimonial.swiper-slide")
              let split = new SplitText($(slide).find('.p-24'), {type: 'chars, lines', charsClass: 'char'})
              let splitDescr = new SplitText($(slide).find('.p-22, p-16'), {type: 'lines', linesClass: 'lines'})
              // gsap.set([split.chars, splitDescr.lines], {yPercent: 100, opacity: 0})
              // gsap.set($(slide).eq(0).find('.char'), {yPercent: 0, opacity: 1})
              // gsap.set($(slide).eq(0).find('.lines'), {yPercent: 0, opacity: 1})
              // gsap.set(split.lines, {overflow: 'hidden'})
              // testimonialSwiper.on("activeIndexChange", function () 
              // {
              //     let index = testimonialSwiper.activeIndex
              //     let activeIndex = index
              //     let activeSlide = slide.eq(activeIndex)
              //     let title = slide.find(".char")
              //     let textActive = activeSlide.find(".char")
              //     let descr = slide.find('.lines')
              //     let descrActive = activeSlide.find('.lines')
              //     // let divider = slide.find('.divider.is--testimonials')
              //     // let dividerActive = activeSlide.find('.divider.is--testimonials')
              //     gsap.to(title, {yPercent: 100, opacity: 0, duration: 0.1})
              //     gsap.to(textActive, {yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.02, delay: 0.2})
              //     gsap.to(descr, {yPercent: 100, opacity: 0, duration: 0.1})
              //     gsap.to(descrActive, {yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.04, delay: 0.2})
              //     // gsap.to(divider, {transformOrigin: 'bottom', scaleY: 0, duration: 0.1})
              //     // gsap.to(dividerActive, {transformOrigin: 'top', scaleY: 1, duration: 0.6, delay: 0.2})
              //     arrows.css('pointer-events', 'none')
              //     setTimeout(() => {
              //       arrows.css('pointer-events', 'auto')
              //     }, 500);
              //     testimonialSwiper.updateSlidesClasses()
              // })

            }
            testimonialSlider()
        }
        
        window.addEventListener('load', () => init())
    }
}
