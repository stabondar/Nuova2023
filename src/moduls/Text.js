import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Text
{
    constructor() 
    {   
         const Loader = () => 
        {
            let hero = $('.h-100')
            let subtitle = $('.main-hero__text')
            let title = hero.find('.heading-title')
            let title2 = hero.find('.heading-sub')
            let heroSubtitle = subtitle.find('.p-24')
            let split = new SplitText(title, {type: 'chars, words'})
            let split2 = new SplitText(title2, {type: 'chars, words'})
            let split3 = new SplitText(heroSubtitle, {type: 'chars, words, lines'})

            let tl = gsap.timeline({ defaults: {ease: 'power2'} })

            tl.from(split.chars, {yPercent: 100, opacity:0, stagger: 0.02, ease: 'power3', duration: 1}, 0.2)
            tl.from(split2.chars, {yPercent: 100, opacity:0, stagger: 0.02, ease: 'power3', duration: 1}, 0.2)
            tl.from(split3.lines, {yPercent: 100, opacity:0, stagger: 0.06, ease: 'power3', duration: 0.7}, '<0.4')

        }
        Loader()

        let enter = 'top 80%'
        let split
        const init = () => 
        {
            const lineAnimation = () => 
            {
                $('[text-line="1"]').each(function()
                {
                    let self = $(this)

                    if(self.hasClass('w-richtext')) {
                        split = new SplitText(self.find('p'), {type: 'lines'})
                    } else {
                        split = new SplitText(self, {type: 'lines'})
                    }

                    let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.04}})
                    tl.from(split.lines, {yPercent: 100, opacity: 0})
    
                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onEnter: () => tl.play()
                    })
                })
            }
            lineAnimation()
    
            const charAnimation = () => 
            {
                $('[text-char="1"]').each(function()
                {
                    let self = $(this)
                    if(self.hasClass('w-richtext')) {
                        split = new SplitText(self.find('h2'), {type: 'chars, lines'});
                    } else {
                        split = new SplitText(self, {type: 'chars, words'});
                    }


                    let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.02}})
                    gsap.set(split.lines, {overflow: 'hidden'})
                    tl.from(split.chars, {yPercent: 100, opacity: 0})
    
                    ScrollTrigger.create({
                        trigger: self,
                        start: enter,
                        onEnter: () => tl.play()
                    })
                })
            }
            charAnimation()

            const imgScroll = () => 
            {
                let img = $('[img-scroll="1"]')
                $(img).each(function()
                {
                    let self = $(this)
                    let parent = self.parent()
                    gsap.set(parent, {overflow: 'hidden'})
                    gsap.set(self, {scale: 1.1})
                    let tl = gsap.timeline(
                    {
                        scrollTrigger: 
                        {
                            trigger: parent,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1
                        }
                    })
                    tl.fromTo(self, {yPercent: -8}, {yPercent: 8})
                })
            }
            imgScroll()
        }
        
        window.addEventListener('load', () => init())

        function killAll() {
            split.revert()
            init()
        }
        
        function debounce(func) {
            var timer;
            return function (event) {
                if (timer) clearTimeout(timer);
                timer = setTimeout(func, 300, event);
            };
        }
        
        window.addEventListener("resize", debounce(function (e) {
                killAll()
        }));
    }
}