import gsap from "gsap";

export default class ServiceBlock {

    constructor() {
        const Service = () => {
            $('.services__cards-item').each(function(index) { 
                const self = $(this)
                const img = $(".services__cards-img-main").eq(index);
                const tl = gsap.timeline({paused: true, defaults: {duration: 0.2}});
            
                tl.to(img, {opacity: 1})

                $(self).on("mouseenter", function() {     
                    tl.play();
                }).on("mouseleave", function() {
                    tl.reverse();
                });
            });
        }
        Service()
    }
}