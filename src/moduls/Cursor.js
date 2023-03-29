import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'

export default class Cursor 
{
    constructor()
    {
        const Cursor = () => 
        {
            let request = null;
            let cursor = $('.cursor')
            cursor.removeClass('hover')
            let mouse = { x: 0, y: 0 };
            let windowX = window.innerWidth
            let windowY = window.innerHeight

            $(window).on('mousemove', function (event) {
                mouse.x = event.clientX;
                mouse.y = event.clientY;

                cancelAnimationFrame(request);
                request = requestAnimationFrame(update);
            });

            function update() {
                let posX = ((mouse.x / windowX) - 0.5 ) * 100 + 'vw'
                let posY = ((mouse.y / windowY) - 0.5 ) * 100 + 'vh'

                gsap.to(cursor, 0.7, { x: posX, y: posY, ease: "power3" });
            }

            $(window).on('resize', function () {
                windowX = window.innerWidth
                windowY = window.innerHeight
            });

            let cursorText = cursor.find('.p--18.is--cursor')
            let split = new SplitText(cursorText, {type: 'chars, words'})
            let tlProjects = gsap.timeline({paused: true, defaults: {duration: 0.2, ease: 'ease'}})
            let tlDefault = gsap.timeline({paused: true, defaults: {duration: 0.2, ease: 'ease'}})

            tlProjects.from(split.chars, {opacity: 0})
                      .fromTo(cursor, {backgroundColor: 'transparent'}, {backgroundColor: '#7870f1'}, '<')
                      .to(cursor, {width: '4em', height: '4em', borderColor: 'transparent'}, '<')

            tlDefault.to(cursor, {width: '4em', height: '4em', borderColor: 'transparent', backgroundColor: 'rgba(120, 112, 241, 0.3)'})
            
            let trigger = $(`a`)

            if(trigger.attr('class') == 'main-hero__video'){
                console.log(trigger);
            }

            $(trigger).each(function()
            {
                let self = $(this)
                self.on('mouseenter', () => 
                {
                    if(self.hasClass('main-hero__video'))
                    {
                        tlProjects.restart()
                    }
                    else
                    {
                        tlDefault.restart()
                    }
                })

                self.on('mouseleave', () => 
                {
                    if(self.hasClass('main-hero__video'))
                    {
                        tlProjects.reverse()
                    }
                    else
                    {
                        tlDefault.reverse()
                    }
                })
            })
        }
        Cursor()
    }
}