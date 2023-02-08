import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default class Nav {

  constructor() {

    const navItem = $('.nav__item');
    
    $(navItem).each (function (){
        const self = $(this);
        const navText = self.find('.p-18');
        const split = new SplitText (navText, {type: 'chars'})

        let tl = gsap.timeline({paused: true, defaults: {ease: 'power2', stagger: 0.02, duration: 0.4}});

        tl.to (split.chars, {
            yPercent:-60,
            ease: 'power2.In'
        })
        .to (split.chars, {
            yPercent: 0
        }, '<0.3')

        self.on("mouseenter", function() {
            tl.restart();
        });
    })
  }
}