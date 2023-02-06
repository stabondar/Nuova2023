import './styles/style.css';
import './styles/slider.css';

import ServiceBlock from './moduls/ServiceBlock'
import Loader from './moduls/Loader';
import Slider from './moduls/Slider'
import Text from './moduls/Text'
import Utils from './moduls/Utils'


const checkPages = () => {
    const service = new ServiceBlock()
    const slider = new Slider()
    const text = new Text()
    const loader = new Loader()
    const utils = new Utils()
}
checkPages()
