import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class BlogTemplate 
{
    constructor()
    {   
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)',
            isMobile = '(max-width: 991px)'

        const init = () =>
        {
            const rightSide = () =>
            {
                let title = $('.blog-post-text').find('h2');
                let textParent = $('.blog-post__nav-list');

                $(title).each(function() {
                    let self = $(this)
                    let selfText = self.text()
                    textParent.append(`<p class='blog-post__nav-item'>${selfText}</p>`)
                })
            }
            rightSide()

            mm.add(isDesktop, () => 
            {
                const pinScroll = () =>
                {
                    let text = $('.blog-post__nav-list').find('p')
                    let title = $('.blog-post-text').find('h2')
    
                    $(text).each(function(i)
                    {
                        let self = $(this)
                        let currentTitle = title.eq(i)
    
                        ScrollTrigger.create(
                        {
                            trigger: currentTitle, start: 'top 40%', end: 'bottom 30%',
                            onEnter: () => 
                            {
                                text.removeClass('is--active')
                                self.addClass('is--active')
                            },
                            onEnterBack: () => 
                            {
                                self.removeClass('is--active')
                                if(i != 0)
                                {
                                    text.eq(i - 1).addClass('is--active')
                                }
                            }
                        })
                    })

                    $('.blog-post__nav-item').on('click', function() {
                        const index = $(this).index();
                        const h2 = $('.blog-post-text').find('h2').eq(index);
                        const offset = h2.offset().top - 150;
                        $('html, body').animate({
                          scrollTop: offset
                        }, 500);
                      });
                }
                pinScroll()
            })
        }
        window.addEventListener('load', () => init())

        //blog imgs animation
        const elements = document.querySelectorAll('.w-richtext img, .w-richtext .w-embed');

        elements.forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none none"
                },
                duration: 0.5,
                yPercent: 20,
                opacity: 0,
                ease: "power1.out"
            });
        });
    } 
}