import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import SplitTextResize from "./SplitTextResize";

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

            window.addEventListener('resize', () => {
                split.revert()
                split2.revert()
                split3.revert()
            })

        }
        Loader()

        let enter = 'top 80%'
        let splitLine, splitChar

        this.lineAnimation = function()
        {
            let item = $('[text-line="1"]')

            if(item.hasClass('w-richtext')) 
            {
                splitLine = new SplitText(item.find('p'), {type: 'lines'})
            } else {
                splitLine = new SplitText(item, {type: 'lines'})
            }

            $(item).each(function()
            {
                let self = $(this)
                let lines = self.find(splitLine.lines)
                let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.04}})

                tl.fromTo(lines, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

                ScrollTrigger.create({
                    trigger: self,
                    start: enter,
                    onEnter: () => tl.play()
                })

                ScrollTrigger.create({
                    trigger: self,
                    start: enter,
                    onUpdate: () => tl.play()
                })
            })
        }

        this.charAnimation = function()
        {
            let item = $('[text-char="1"]')

            if(item.hasClass('w-richtext')) 
            {
                splitChar = new SplitText(item.find('h2'), {type: 'chars, words'});
            } else {
                splitChar = new SplitText(item, {type: 'chars, words'})
            }

            $(item).each(function()
            {
                let self = $(this)
                let words = self.find(splitChar.words)
                let chars = self.find(splitChar.chars)
                let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.02}})

                gsap.set(words, {overflow: 'hidden'})

                tl.fromTo(chars, {opacity: 0, yPercent: 100}, {opacity: 1, yPercent: 0})

                ScrollTrigger.create({
                    trigger: self,
                    start: enter,
                    onEnter: () => tl.play()
                })

                ScrollTrigger.create({
                    trigger: self,
                    start: enter,
                    onUpdate: () => tl.play()
                })
            })
        }

        const init = () => 
        {
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

        window.addEventListener('load', () =>
        {
            init()
            this.lineAnimation()
            this.charAnimation()
            ScrollTrigger.refresh()

            setTimeout(() => {
                gsap.set($('img'), {autoAlpha: 1})
            }, 1500);

            const lineAnimationResize = new SplitTextResize(splitLine, this.lineAnimation)
            const charAnimationResize = new SplitTextResize(splitChar, this.charAnimation)
        })
    }
}