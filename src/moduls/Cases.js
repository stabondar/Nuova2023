import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Cases
{
    constructor()
    {
        let img = $('[img-scroll="1"]')
        $(img).each(function()
        {
            let self = $(this)
            ScrollTrigger.create(
            {
                trigger: self,
                start: 'top bottom',
                end: 'bottom top',
                onToggle: () => ScrollTrigger.refresh()
            })

        })
    }
}