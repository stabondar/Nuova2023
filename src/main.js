import './styles/style.css';
import './styles/slider.css';
import './styles/root.css';

import ServiceBlock from './moduls/ServiceBlock'
import Loader from './moduls/Loader';
import Slider from './moduls/Slider'
import Text from './moduls/Text'
import Utils from './moduls/Utils'
import Accordion from './moduls/Accordion'
import Nav from './moduls/Nav';
import ChangeColor from './moduls/ChangeColor';

const checkPages = () => {
    const service = new ServiceBlock()
    const slider = new Slider()
    const text = new Text()
    const loader = new Loader()
    const utils = new Utils()
    const accordion = new Accordion()
    const nav = new Nav()
    const color = new ChangeColor()
}
checkPages()
