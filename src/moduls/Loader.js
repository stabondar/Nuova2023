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

            let tl = gsap.timeline({ defaults: {ease: 'power2'} });

            tl.to(loader, {yPercent: -100, duration: 1.4 ,ease: 'power3', onComplete: hide})
        }
        Loader()
    }
}
