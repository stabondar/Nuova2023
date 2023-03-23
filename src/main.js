import './styles/style.scss';
import './styles/slider.scss';
import './styles/root.css';

import ServiceBlock from './moduls/ServiceBlock'
import Loader from './moduls/Loader';
import Slider from './moduls/Slider'
import Text from './moduls/Text'
import Utils from './moduls/Utils'
import Accordion from './moduls/Accordion'
import Nav from './moduls/Nav';
import WebflowPage from './moduls/WebflowPage';
import BlogTemplate from './moduls/Blog';
import Validation from './moduls/Validation';

const checkPages = () => {
    const service = new ServiceBlock()
    const slider = new Slider()
    const text = new Text()
    const loader = new Loader()
    const utils = new Utils()
    const accordion = new Accordion()
    const nav = new Nav()
    const webflow = new WebflowPage()
    const blog = new BlogTemplate()
    const validation = new Validation()
}
checkPages()
