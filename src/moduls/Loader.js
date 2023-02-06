import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)


export default class Loader 
{
    constructor()
    {
        const Loader = () => 
        {
            let loader = $('.loader')
            let curve = $('.loader__curve')
            let loaderContent = loader.find('.loader__text--parent')
            let left = $('.loader__text--left')
            let leftChars = left.find('.h2--230')
            let leftCharsLenght = leftChars.length
            let CharsHeight = leftChars.height()
            let leftHeight = CharsHeight * (leftCharsLenght - 1)
            let right = $('.loader__text--right')
            let rightChars = right.find('.h2--230')
            let rightCharsLenght = rightChars.length
            let rightHeight = CharsHeight * (rightCharsLenght - 1)
            let final = $('.loader__text--final')
            let hero = $('.hero')
            let title = hero.find('.h1--104')
            let split = new SplitText(title, {type: 'chars, lines'})

            const hide = () => 
            {
                loader.css('display', 'none')
            }

            gsap.set(split.lines, {overflow: 'hidden'})
            let tl = gsap.timeline({ defaults: {ease: 'power2'} })

            tl.to(loaderContent, {opacity: 1 })
            //   .to(right, {y: -rightHeight, duration: 5.8}, '<')
            //   .to(left, {y: -leftHeight, duration: 6}, '<')
            //   .to(final, {y: 0, duration: 3, ease: 'power2'}, '<75%')
            //   .to(right, {y: - (rightHeight + CharsHeight), duration: 3, ease: 'power2'  }, '<')
            //   .to(left, {y: - (leftHeight + CharsHeight), duration: 3, ease: 'power2'  }, '<')
              .to(loader, {yPercent: -130, duration: 1.4 ,ease: 'power3', onComplete: hide}, '<75%')
              .from(curve, {rotateX: 85, duration: 1.4 ,ease: 'power3'}, '<')
            //   .from(split.chars, {yPercent: 100, stagger: 0.02, ease: 'power3', duration: 1}, '<50%')

        }
        Loader()
    }
}
