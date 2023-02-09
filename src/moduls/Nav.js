import gsap from "gsap";
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText);

gsap.registerPlugin(CustomEase);

export default class Nav {

  constructor() {

    const navItem = $('.nav__item');
    
    $(navItem).each (function (){
        const self = $(this);
        const navText = self.find('.p-18');
        const split = new SplitText (navText, {type: 'chars'})

        let tl = gsap.timeline({paused: true, defaults: {ease: CustomEase.create("custom", "M0,0 C0.475,0.425 0,0.995 1,1"), stagger: 0.025, duration: 0.4}});

        tl.to (split.chars, {
            yPercent:-30,
        })
        .to (split.chars, {
            yPercent: 0
        }, '<0.2')

        self.on("mouseenter", function() {
            tl.restart();
        });
    })
  }
}