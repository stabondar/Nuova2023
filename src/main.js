import './styles/style.css';
import './styles/slider.css';
import { gsap } from "gsap"

import ServiceBlock from './moduls/ServiceBlock'
import Loader from './moduls/Loader';
import Slider from './moduls/Slider'
import Text from './moduls/Text'


const checkPages = () => {

    const service = new ServiceBlock()
    const slider = new Slider()
    const text = new Text()
    const loader = new Loader()
}

checkPages()

const init = () => {
    gsap.set('main', { autoAlpha: 1 })
}
init()