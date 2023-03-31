import { gsap } from "gsap"

export default class Utils
{
    constructor()
    {
        window.addEventListener('load', () =>
        {
            gsap.set('main', { autoAlpha: 1 })
        })

        // On Back Button Tap
        window.onpageshow = function(event) {if (event.persisted) {window.location.reload()}};
    }
}