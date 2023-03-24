import gsap from "gsap";

export default class Loader 
{
    constructor()
    {
        const Loader = () => 
        {
            const loader = $('.loader');

            const hide = () => 
            {
                loader.css('display', 'none');
            }

            let tl = gsap.timeline({ defaults: {duration: 1, ease: 'power3'} });

            tl.to(loader, {clipPath: 'inset(0 0 100% 0)', onComplete: hide})

            let tlOut = gsap.timeline({ defaults: {duration: 0.6, ease: 'power3'}, paused: true });
            tlOut.set(loader, {clipPath: 'inset(100% 0 0% 0)', display: 'block'})
            .to(loader, {clipPath: 'inset(0% 0 0% 0)'})

            let delay = tlOut.duration() * 1000
            let trigger = $('.nav__item, .nav__logo, .works__item-link')

            $(trigger).click(function(e)
            {
                tlOut.play()
                e.preventDefault();
                var goTo = $(this).attr("href");

                setTimeout(function () {
                    window.location = goTo;
                }, delay);
            })
        }
        window.addEventListener('load', () => Loader())
        // Loader()
    }
}
