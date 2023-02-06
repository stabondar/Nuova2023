import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default class LocoGsap 
{
    constructor()
    {
        
        const init = () => 
        {
            gsap.set('main', { autoAlpha: 1 })
        
        }
        
        window.addEventListener('load', () => 
        {
            init()
            ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
            locoScroll.update()
        })
        
        
        $(window).on('resize', function (e) {
            ScrollTrigger.refresh()
            locoScroll.update();
        });
    }
}