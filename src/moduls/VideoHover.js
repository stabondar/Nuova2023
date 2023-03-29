import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'


gsap.registerPlugin(SplitText, ScrollTrigger)


export default class Videohover 
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isDesktop = "(min-width: 991px)"
        let isTM = "(max-width: 991px)"
        let isMobile = "(max-width: 480px)"

        const init = () => 
        {
            const videoFunc = () => 
            {
                let richText = $('.w-richtext')
                let backgroundVid = richText.find('.w-embed')
                let heroVid = $('.w-background-video')
                let cursor = $('.cursor')
                let cusrorPlay = cursor.find('.cursor__play')
                let cusrorPlayText = cusrorPlay.find('.p--18')

                backgroundVid.on("click", function () 
                {
                    let myVideo = $(this).find("video");
                    $(this).toggleClass("playing");
                    if ($(this).hasClass("playing")) 
                    {
                      myVideo.prop("muted", false);
                      cusrorPlayText.text('Sound Off')
                    } else 
                    {
                      myVideo.prop("muted", true);
                      cusrorPlayText.text('Sound On')
                    }
                });

                heroVid.on("click", function () 
                {
                    let myVideo = $(this).find("video");
                    $(this).toggleClass("playing");
                    if ($(this).hasClass("playing")) 
                    {
                      myVideo.prop("muted", false);
                      cusrorPlayText.text('Sound Off')
                    } else 
                    {
                      myVideo.prop("muted", true);
                      cusrorPlayText.text('Sound On')
                    }
                });

                let tl = gsap.timeline({paused: true, defaults: {duration: 0.4, ease: 'power3'}})
                tl.to(cusrorPlay, {opacity: 1})
                .to(cursor, {width: '6.25rem', height: '6.25rem', backgroundColor: 'rgba(120, 112, 241, 1)'}, '<')

                console.log(cursor, backgroundVid);

                backgroundVid.add(heroVid).on('mouseenter', () => tl.restart())
                backgroundVid.add(heroVid).on('mouseleave', () => tl.reverse())
            }
            videoFunc()
        }
        window.addEventListener('load', () => init())
    }
}